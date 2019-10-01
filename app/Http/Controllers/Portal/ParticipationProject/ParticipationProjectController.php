<?php


namespace App\Http\Controllers\Portal\ParticipationProject;


use App\Eco\Contact\Contact;
use App\Eco\Document\Document;
use App\Eco\EmailTemplate\EmailTemplate;
use App\Eco\Mailbox\Mailbox;
use App\Eco\Occupation\OccupationContact;
use App\Eco\ParticipantMutation\ParticipantMutation;
use App\Eco\ParticipantMutation\ParticipantMutationStatus;
use App\Eco\ParticipantMutation\ParticipantMutationType;
use App\Eco\ParticipantProject\ParticipantProject;
use App\Eco\ParticipantProject\ParticipantProjectPayoutType;
use App\Eco\Project\Project;
use App\Eco\User\User;
use App\Helpers\Alfresco\AlfrescoHelper;
use App\Helpers\Document\DocumentHelper;
use App\Helpers\Email\EmailHelper;
use App\Helpers\Settings\PortalSettings;
use App\Helpers\Template\TemplateTableHelper;
use App\Helpers\Template\TemplateVariableHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\ParticipantProject\Templates\ParticipantReportMail;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Config;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ParticipationProjectController extends Controller
{
    public function create(Request $request)
    {
        if (!isset($request) || !isset($request->contactId)) {
            abort(501, 'Er is helaas een fout opgetreden (1).');
        }
        // ophalen contactgegevens portal user (vertegenwoordiger)
        $portalUser = Auth::user();
        if (!Auth::isPortalUser() || !$portalUser->contact) {
            abort(501, 'Er is helaas een fout opgetreden (2).');
        }
        // ophalen contactgegevens
        $contact = Contact::find($request->contactId);
        if (!$contact) {
            abort(501, 'Er is helaas een fout opgetreden (3).');
        }
        // ophalen projectgegevens
        $project = Project::find($request->projectId);
        if (!$contact) {
            abort(501, 'Er is helaas een fout opgetreden (4).');
        }

        // Voor aanmaak van Participant Mutations wordt created by and updated by via ParticipantMutationObserver altijd bepaald obv Auth::id
        // todo wellicht moeten we hier nog wat op anders verzinnen, voornu gebruiken we responisibleUserId from settings.json, verderop zetten we dat weer terug naar portal user
        $responsibleUserId = PortalSettings::get('responsibleUserId');
        if (!$responsibleUserId) {
            abort(501, 'Er is helaas een fout opgetreden (5).');
        }

        DB::transaction(function () use ($contact, $project, $request, $portalUser, $responsibleUserId) {
            $this->createParticipantProject($contact, $project, $request, $portalUser, $responsibleUserId);
            $this->createAndSendRegistrationDocument($contact, $project);
        });

    }

    protected function createAndSendRegistrationDocument($contact, $project)
    {
        $documentBody = DocumentHelper::getDocumentBody($contact, $project);

        $emailTemplateAgreementId = PortalSettings::get('emailTemplateAgreementId');

        $emailTemplate = EmailTemplate::find($emailTemplateAgreementId);
        $pdf = PDF::loadView('documents.generic', [
            'html' => $documentBody,
        ])->output();

        $time = Carbon::now();

        $document = new Document();
        $document->document_type = 'internal';
        $document->document_group = 'registration';
        $document->contact_id = $contact->id;

        $filename = str_replace(' ', '', $this->translateToValidCharacterSet($project->code)) . '_'
            . str_replace(' ', '', $this->translateToValidCharacterSet($contact->full_name));

        //max length name 25
        $filename = substr($filename, 0, 25);

        $document->filename = $filename
            . substr($document->getDocumentGroup()->name, 0, 1)
            . (Document::where('document_group', 'registration')->count()
                + 1) . '_' . $time->format('Ymd') . '.pdf';
        $document->save();

        $filePath = (storage_path('app' . DIRECTORY_SEPARATOR
            . 'documents/' . $document->filename));
        file_put_contents($filePath, $pdf);

        $alfrescoHelper = new AlfrescoHelper(Config::get('app.ALFRESCO_COOP_USERNAME'),
            Config::get('app.ALFRESCO_COOP_PASSWORD'));

        $alfrescoResponse = $alfrescoHelper->createFile($filePath,
            $document->filename, $document->getDocumentGroup()->name);

        $document->alfresco_node_id = $alfrescoResponse['entry']['id'];
        $document->save();

        $primaryEmailAddress = $contact->primaryEmailAddress;

        //send email
        if ($primaryEmailAddress) {
            $this->setMailConfigByDistribution($project);

            $portalUser = Auth::user();
            $portalUserContact = $portalUser ? $portalUser->contact : null;

            $email = Mail::to($primaryEmailAddress->email);
            if($emailTemplate && !empty($emailTemplate->subject) )
            {
                $subject = $emailTemplate->subject;
            }else{
                $subject = 'Bevestiging inschrijving';
            }
            $email->subject = $subject;
            $emailTemplateBody = $emailTemplate ? $emailTemplate->html_body : '';

            $email->html_body
                = '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=UTF-8"/><title>'
                . $subject . '</title></head>'
                . $emailTemplateBody . '</html>';

            $htmlBodyWithContactVariables = TemplateTableHelper::replaceTemplateTables($email->html_body, $contact);
            $htmlBodyWithContactVariables = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables, 'contact', $contact);

            //wettelijk vertegenwoordiger
            if (OccupationContact::where('contact_id', $contact->id)->where('occupation_id', 7)->exists()) {
                $wettelijkVertegenwoordiger = OccupationContact::where('contact_id', $contact->id)
                    ->where('occupation_id', 7)->first()->primaryContact;
                $htmlBodyWithContactVariables
                    = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables, 'wettelijk_vertegenwoordiger', $wettelijkVertegenwoordiger);
            }

            $htmlBodyWithContactVariables = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables, 'vertegenwoordigde', $portalUserContact);
            $htmlBodyWithContactVariables = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables, 'administratie', $project->administration);
            $htmlBodyWithContactVariables = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables, 'project', $project);
            $htmlBodyWithContactVariables = TemplateVariableHelper::stripRemainingVariableTags($htmlBodyWithContactVariables);

//            $subject = str_replace('{contactpersoon}', $contactInfo['contactPerson'], $subject);
//            $htmlBodyWithContactVariables = str_replace('{contactpersoon}', $contactInfo['contactPerson'],
//                $htmlBodyWithContactVariables);

            $primaryMailbox = Mailbox::getDefault();
            if ($primaryMailbox) {
                $fromEmail = $primaryMailbox->email;
                $fromName = $primaryMailbox->name;
            } else {
                $fromEmail = Config::get('mail.from.address');
                $fromName = Config::get('mail.from.name');
            }

            $email->send(new ParticipantReportMail($email, $fromEmail, $fromName,
                $htmlBodyWithContactVariables, $document));
        }

        //delete file on server, still saved on alfresco.
        Storage::disk('documents')->delete($document->filename);

    }

    protected function setMailConfigByDistribution(Project $project)
    {
        // Standaard vanuit primaire mailbox mailen
        $mailboxToSendFrom = Mailbox::where('primary', 1)->first();

        // Als er een mailbox aan de administratie is gekoppeld, dan deze gebrfsubjuiken
        if ($project->administration && $project->administration->mailbox) {
            $mailboxToSendFrom = $project->administration->mailbox;
        }

        // Configuratie instellen als er een mailbox is gevonden
        if ($mailboxToSendFrom) {
            (new EmailHelper())->setConfigToMailbox($mailboxToSendFrom);
        }
    }
    protected function translateToValidCharacterSet($field){

        $field = iconv('UTF-8', 'ASCII//TRANSLIT', $field);
        $field = preg_replace('/[^A-Za-z0-9 -]/', '', $field);

        return $field;
    }

    protected function createParticipantProject($contact, $project, $request, $portalUser, $responsibleUserId)
    {
        Auth::setUser(User::find($responsibleUserId));

        $today = Carbon::now();

        $projectTypeCodeRef = $project->projectType->code_ref;
        $payoutTypeId = null;
        switch($projectTypeCodeRef){
            // default Betaalwijze Op rekening indien lening of obligatie
            case 'loan' :
            case 'obligation' :
                $payoutTypeId = ParticipantProjectPayoutType::where('code_ref', 'account')->value('id');
                break;
        }
        $powerKwhConcumption = ($request->powerKwhConsumption && $request->powerKwhConsumption!= '') ?: 0;

        $participation = ParticipantProject::create([
            'contact_id' => $contact->id,
            'project_id' => $project->id,
            'type_id' => $payoutTypeId,
            'did_accept_agreement' => (bool)$request->didAgreeTerms,
            'date_did_accept_agreement' => $today,
            'did_understand_info' => (bool)$request->didUnderstandInfo,
            'date_did_understand_info'  => $today,
            'power_kwh_consumption' => $powerKwhConcumption,
        ]);

        // vanuit portal standaard altijd status 'interest'
        $status = ParticipantMutationStatus::where('code_ref', 'interest')->first();

        $dateInterest = null;
        $amountInterest = 0;
        $quantityInterest = 0;
        $dateOption = null;
        $amountOption = 0;
        $quantityOption = 0;
        $dateGranted = null;
        $amountGranted = 0;
        $quantityGranted = 0;
        $dateFinal = null;
        $amountFinal = 0;
        $quantityFinal = 0;
        $participationMutationDate = $today ?: null;
        $participationMutationAmount = $request->amountInteressed ?: null;
        $participationMutationQuantity = $request->participationsInteressed ?: null;


        switch($status->code_ref){
            case 'interest' :
                $dateInterest = $participationMutationDate;
                $amountInterest = $participationMutationAmount;
                $quantityInterest = $participationMutationQuantity;
                break;
        }

        $participantMutation = ParticipantMutation::create([
            'participation_id' => $participation->id,
            'type_id' => ParticipantMutationType::where('project_type_id', $project->project_type_id)->where('code_ref', 'first_deposit')->value('id'),
            'status_id' => $status->id,
            'amount' => $participationMutationAmount,
            'quantity' => $participationMutationQuantity,
            'date_interest' => $dateInterest,
            'amount_interest' => $amountInterest,
            'quantity_interest' => $quantityInterest,
            'date_option' => $dateOption,
            'amount_option' => $amountOption,
            'quantity_option' => $quantityOption,
            'date_granted' => $dateGranted,
            'amount_granted' => $amountGranted,
            'quantity_granted' => $quantityGranted,
            'date_entry' => $dateFinal,
            'amount_final' => $amountFinal,
            'quantity_final' => $quantityFinal,
        ]);

        // Recalculate dependent data in participantProject
        $participantMutation->participation->calculator()->run()->save();

        // Recalculate dependent data in project
        $participantMutation->participation->project->calculator()->run()->save();

        // todo wellicht moeten we hier nog wat op anders verzinnen, voor nu hebben we responisibleUserId from settings.json tijdelijk in Auth user gezet hierboven
        // Voor zekerheid hierna weer even Auth user herstellen met portal user
        Auth::setUser($portalUser);

    }
}