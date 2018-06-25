<?php
/**
 * Created by PhpStorm.
 * User: Fren
 * Date: 20-10-2017
 * Time: 9:35
 */

namespace App\Http\Controllers\Api\ProductionProject;

use App\Eco\Contact\Contact;
use App\Eco\Document\Document;
use App\Eco\DocumentTemplate\DocumentTemplate;
use App\Eco\EmailTemplate\EmailTemplate;
use App\Eco\EnergySupplier\EnergySupplier;
use App\Eco\PaymentInvoice\PaymentInvoice;
use App\Eco\ProductionProject\ProductionProjectRevenue;
use App\Eco\ProductionProject\ProductionProjectRevenueDistribution;
use App\Helpers\Alfresco\AlfrescoHelper;
use App\Helpers\CSV\EnergySupplierCSVHelper;
use App\Helpers\RequestInput\RequestInput;
use App\Helpers\RequestQuery\RequestExtraFilter;
use App\Helpers\Template\TemplateTableHelper;
use App\Helpers\Template\TemplateVariableHelper;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\PaymentInvoice\PaymentInvoiceController;
use App\Http\Resources\ParticipantProductionProject\Templates\ParticipantReportMail;
use App\Http\Resources\ProductionProject\FullProductionProjectRevenue;
use App\Http\Resources\ProductionProject\FullProductionProjectRevenueDistribution;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ProductionProjectRevenueController extends ApiController
{
    public function show(ProductionProjectRevenue $productionProjectRevenue)
    {
        $productionProjectRevenue->load([
            'type',
            'category',
            'createdBy',
            'distribution.contact.primaryEmailAddress',
            'productionProject.participantsProductionProject.contact.primaryAddress',
            'productionProject.participantsProductionProject.contact.primaryContactEnergySupplier.energySupplier',
            'productionProject.participantsProductionProject.participantProductionProjectPayoutType',
        ]);

        return FullProductionProjectRevenue::make($productionProjectRevenue);
    }

    public function store(RequestInput $requestInput)
    {
        $this->authorize('manage', ProductionProjectRevenue::class);

        $data = $requestInput
            ->integer('categoryId')
            ->validate('required|exists:production_project_revenue_category,id')
            ->alias('category_id')->next()
            ->integer('productionProjectId')
            ->validate('required|exists:production_projects,id')
            ->alias('production_project_id')->next()
            ->boolean('confirmed')->next()
            ->date('dateBegin')->validate('required|date')->alias('date_begin')
            ->next()
            ->date('dateEnd')->validate('required|date')->alias('date_end')
            ->next()
            ->date('dateEntry')->validate('required|date')->alias('date_entry')
            ->next()
            ->string('dateConfirmed')->validate('nullable|date')->onEmpty(null)
            ->alias('date_confirmed')->next()
            ->integer('kwhStart')->alias('kwh_start')->onEmpty(null)->next()
            ->integer('kwhEnd')->alias('kwh_end')->onEmpty(null)->next()
            ->integer('kwhStartHigh')->alias('kwh_start_high')->onEmpty(null)
            ->next()
            ->integer('kwhEndHigh')->alias('kwh_end_high')->onEmpty(null)
            ->next()
            ->integer('kwhStartLow')->alias('kwh_start_low')->onEmpty(null)
            ->next()
            ->integer('kwhEndLow')->alias('kwh_end_low')->onEmpty(null)->next()
            ->integer('revenue')->onEmpty(null)->next()
            ->string('datePayed')->validate('nullable|date')
            ->alias('date_payed')->whenMissing(null)->onEmpty(null)->next()
            ->integer('payPercentage')->onEmpty(null)->alias('pay_percentage')
            ->next()
            ->integer('typeId')
            ->validate('nullable|exists:production_project_revenue_type,id')
            ->onEmpty(null)->alias('type_id')->next()
            ->get();

        $productionProjectRevenue = new ProductionProjectRevenue();

        $productionProjectRevenue->fill($data);

        $productionProjectRevenue->save();

        if ($productionProjectRevenue->confirmed) {
            $this->saveDistribution($productionProjectRevenue);
            $productionProjectRevenue->load('distribution');
        }

        $productionProjectRevenue->load('createdBy', 'productionProject');

        return FullProductionProjectRevenue::make($productionProjectRevenue);
    }


    public function update(
        RequestInput $requestInput,
        ProductionProjectRevenue $productionProjectRevenue
    ) {
        $this->authorize('manage', ProductionProjectRevenue::class);

        $data = $requestInput
            ->integer('categoryId')
            ->validate('required|exists:production_project_revenue_category,id')
            ->alias('category_id')->next()
            ->boolean('confirmed')->next()
            ->date('dateBegin')->validate('required|date')->alias('date_begin')
            ->next()
            ->date('dateEnd')->validate('required|date')->alias('date_end')
            ->next()
            ->date('dateEntry')->validate('required|date')->alias('date_entry')
            ->next()
            ->string('dateConfirmed')->validate('nullable|date')->onEmpty(null)
            ->alias('date_confirmed')->next()
            ->integer('kwhStart')->alias('kwh_start')->onEmpty(null)->next()
            ->integer('kwhEnd')->alias('kwh_end')->onEmpty(null)->next()
            ->integer('kwhStartHigh')->alias('kwh_start_high')->onEmpty(null)
            ->next()
            ->integer('kwhEndHigh')->alias('kwh_end_high')->onEmpty(null)
            ->next()
            ->integer('kwhStartLow')->alias('kwh_start_low')->onEmpty(null)
            ->next()
            ->integer('kwhEndLow')->alias('kwh_end_low')->onEmpty(null)->next()
            ->integer('revenue')->onEmpty(null)->next()
            ->string('datePayed')->validate('nullable|date')->onEmpty(null)
            ->whenMissing(null)->alias('date_payed')->next()
            ->integer('payPercentage')->onEmpty(null)->alias('pay_percentage')
            ->next()
            ->integer('typeId')
            ->validate('nullable|exists:production_project_revenue_type,id')
            ->onEmpty(null)->alias('type_id')->next()
            ->get();

        $productionProjectRevenue->fill($data);

        $productionProjectRevenue->save();

        $productionProjectRevenue->confirmed
        && $this->saveDistribution($productionProjectRevenue);

        return FullProductionProjectRevenue::collection(ProductionProjectRevenue::where('production_project_id',
            $productionProjectRevenue->production_project_id)
            ->with('createdBy', 'productionProject', 'type', 'distribution')
            ->orderBy('date_begin')->get());
    }

    public function saveDistribution(
        ProductionProjectRevenue $productionProjectRevenue
    ) {

        $productionProjectRevenue->save();

        $productionProject = $productionProjectRevenue->productionProject;
        $participants = $productionProject->participantsProductionProject;

        $totalParticipations = 0;

        foreach ($participants as $participant) {
            $totalParticipations += $participant->participations_current;
        }

        $totalParticipations ?: $totalParticipations = 1;

        foreach ($participants as $participant) {
            $contact = Contact::find($participant->contact_id);
            $primaryAddress = $contact->primaryAddress;
            $primaryContactEnergySupplier
                = $contact->primaryContactEnergySupplier;

            $distribution = new ProductionProjectRevenueDistribution();

            $distribution->revenue_id
                = $productionProjectRevenue->id;
            $distribution->contact_id = $contact->id;

            if ($primaryAddress) {
                $distribution->address = $primaryAddress->present()
                    ->streetAndNumber();
                $distribution->postal_code = $primaryAddress->postal_code;
                $distribution->city = $primaryAddress->city;
            }

            $distribution->status = $contact->getStatus()
                ? $contact->getStatus()->name : '';
            $distribution->participations_amount
                = $participant->participations_current;

            $distribution->payout = round((($productionProjectRevenue->revenue
                        * ($productionProjectRevenue->pay_percentage / 100))
                    / $totalParticipations)
                * $participant->participations_current, 2);

            $distribution->payout_type
                = $participant->participantProductionProjectPayoutType->name;

            $distribution->delivered_total
                = round((($productionProjectRevenue->kwh_end
                        - $productionProjectRevenue->kwh_start)
                    / $totalParticipations)
                * $participant->participations_current, 2);

            if ($primaryContactEnergySupplier) {
                $distribution->energy_supplier_name
                    = $primaryContactEnergySupplier->energySupplier->name;

                $distribution->es_id
                    = $primaryContactEnergySupplier->energySupplier->id;
            }
            $distribution->participation_id = $participant->id;
            $distribution->save();
        }
    }

    public function createEnergySupplierReport(
        Request $request,
        ProductionProjectRevenue $productionProjectRevenue,
        DocumentTemplate $documentTemplate,
        EnergySupplier $energySupplier
    ) {
        $documentName = $request->input('documentName');

        //get current logged in user
        $user = Auth::user();

        //load template parts
        $documentTemplate->load('footer', 'baseTemplate', 'header');

        $html = $documentTemplate->header ? $documentTemplate->header->html_body
            : '';

        if ($documentTemplate->baseTemplate) {
            $html .= TemplateVariableHelper::replaceTemplateTagVariable($documentTemplate->baseTemplate->html_body,
                $documentTemplate->html_body, '', '');
        } else {
            $html .= TemplateVariableHelper::replaceTemplateFreeTextVariables($documentTemplate->html_body,
                '', '');
        }

        $html .= $documentTemplate->footer
            ? $documentTemplate->footer->html_body : '';

        $productionProject = $productionProjectRevenue->productionProject;

        $energySupplierHtml
            = TemplateVariableHelper::replaceTemplateVariables($html,
            'opbrengst', $productionProjectRevenue);
        $energySupplierHtml
            = TemplateVariableHelper::replaceTemplateVariables($energySupplierHtml,
            'productie_project', $productionProject);
        $energySupplierHtml
            = TemplateVariableHelper::replaceTemplateVariables($energySupplierHtml,
            'ik', $user);

        $energySupplierHtml
            = TemplateVariableHelper::stripRemainingVariableTags($energySupplierHtml);

        $pdf = PDF::loadView('documents.generic', [
            'html' => $energySupplierHtml,
        ])->output();

        $document = new Document();
        $document->document_type = 'internal';
        $document->document_group = 'revenue';

        $document->filename = $documentName . '.pdf';

        $document->save();

        $filePath = (storage_path('app' . DIRECTORY_SEPARATOR . 'documents/'
            . $document->filename));
        file_put_contents($filePath, $pdf);

        $alfrescoHelper = new AlfrescoHelper($user->email,
            $user->alfresco_password);

        $alfrescoResponse = $alfrescoHelper->createFile($filePath,
            $document->filename, $document->getDocumentGroup()->name);

        $document->alfresco_node_id = $alfrescoResponse['entry']['id'];
        $document->save();

        //delete file on server, still saved on alfresco.
        Storage::disk('documents')->delete($document->filename);
    }

    public function createEnergySupplierCSV(
        Request $request,
        ProductionProjectRevenue $productionProjectRevenue,
        EnergySupplier $energySupplier
    ) {
        $documentName = $request->input('documentName');
        $templateId = $request->input('templateId');

        //get current logged in user
        $user = Auth::user();

        if ($templateId) {
            $csvHelper = new EnergySupplierCSVHelper($energySupplier,
                $productionProjectRevenue, $templateId);
            $csv = $csvHelper->getCSV();
        }

        $document = new Document();
        $document->document_type = 'internal';
        $document->document_group = 'revenue';

        $document->filename = $documentName . '.csv';

        $document->save();

        $filePath = (storage_path('app' . DIRECTORY_SEPARATOR . 'documents/'
            . $document->filename));
        file_put_contents($filePath, $csv);

        $alfrescoHelper = new AlfrescoHelper($user->email,
            $user->alfresco_password);

        $alfrescoResponse = $alfrescoHelper->createFile($filePath,
            $document->filename, $document->getDocumentGroup()->name);

        $document->alfresco_node_id = $alfrescoResponse['entry']['id'];
        $document->save();

        //delete file on server, still saved on alfresco.
        Storage::disk('documents')->delete($document->filename);
    }


    public function destroy(ProductionProjectRevenue $productionProjectRevenue)
    {
        $this->authorize('manage', ProductionProjectRevenue::class);

        $productionProjectRevenue->forceDelete();
    }

    public function createInvoices(
        $distributions
    ) {

        $createdInvoices = [];

        foreach ($distributions as $distribution) {
            if (!$distribution->revenue->productionProject->administration_id) {
                abort(400,
                    'Geen administratie gekoppeld aan dit productie project');
            }
            if ($distribution->payout_type === 'Rekening'
                && $distribution->payout > 0
                && !(empty($distribution->address)
                    || empty($distribution->postal_code)
                    || empty($distribution->city)
                    || empty($distribution->participation->iban_payout))
            ) {
                $paymentInvoice = new PaymentInvoice();
                $paymentInvoice->revenue_distribution_id = $distribution->id;
                $paymentInvoice->administration_id
                    = $distribution->revenue->productionProject->administration_id;
                $paymentInvoice->save();

                array_push($createdInvoices, $paymentInvoice);
            }
        }

        return $createdInvoices;
    }

    public function peekDistributionByIds(Request $request)
    {
        $this->authorize('manage', ProductionProjectRevenue::class);

        $distribution = ProductionProjectRevenueDistribution::whereIn('id',
            $request->input('ids'))->with('contact')->get();

        return FullProductionProjectRevenueDistribution::collection($distribution);
    }

    public function downloadPreview(
        Request $request,
        ProductionProjectRevenueDistribution $distribution
    ) {
        return $this->createParticipantRevenueReport($request->input('subject'),
            [$distribution->id],
            DocumentTemplate::find($request->input('documentTemplateId')),
            EmailTemplate::find($request->input('emailTemplateId')), true);
    }

    public function previewEmail(
        Request $request,
        ProductionProjectRevenueDistribution $distribution
    ) {
        return $this->createParticipantRevenueReport($request->input('subject'),
            [$distribution->id],
            DocumentTemplate::find($request->input('documentTemplateId')),
            EmailTemplate::find($request->input('emailTemplateId')), false,
            true);
    }

    public function createParticipantRevenueReport(
        $subject,
        $distributionIds,
        DocumentTemplate $documentTemplate,
        EmailTemplate $emailTemplate,
        $previewPDF = false,
        $previewEmail = false
    ) {
        //get current logged in user
        $user = Auth::user();

        //load template parts
        $documentTemplate->load('footer', 'baseTemplate', 'header');

        $html = $documentTemplate->header ? $documentTemplate->header->html_body
            : '';

        if ($documentTemplate->baseTemplate) {
            $html .= TemplateVariableHelper::replaceTemplateTagVariable($documentTemplate->baseTemplate->html_body,
                $documentTemplate->html_body, '', '');
        } else {
            $html .= TemplateVariableHelper::replaceTemplateFreeTextVariables($documentTemplate->html_body,
                '', '');
        }

        $html .= $documentTemplate->footer
            ? $documentTemplate->footer->html_body : '';

        foreach ($distributionIds as $distributionId) {
            $distribution
                = ProductionProjectRevenueDistribution::find($distributionId);

            $contact = $distribution->contact;
            $primaryEmailAddress = $contact->primaryEmailAddress;
            if (!$previewEmail) {
                $revenue = $distribution->revenue;
                $productionProject = $revenue->productionProject;

                $revenueHtml
                    = TemplateVariableHelper::replaceTemplateVariables($html,
                    'contact', $contact);
                $revenueHtml
                    = TemplateVariableHelper::replaceTemplateVariables($revenueHtml,
                    'verdeling', $distribution);
                $revenueHtml
                    = TemplateVariableHelper::replaceTemplateVariables($revenueHtml,
                    'opbrengst', $revenue);
                $revenueHtml
                    = TemplateVariableHelper::replaceTemplateVariables($revenueHtml,
                    'productie_project', $productionProject);
                $revenueHtml
                    = TemplateVariableHelper::replaceTemplateVariables($revenueHtml,
                    'ik', $user);

                $revenueHtml
                    = TemplateVariableHelper::stripRemainingVariableTags($revenueHtml);

                $pdf = PDF::loadView('documents.generic', [
                    'html' => $revenueHtml,
                ])->output();

                if ($previewPDF) {
                    return $pdf;
                }

                $time = Carbon::now();

                $document = new Document();
                $document->document_type = 'internal';
                $document->document_group = 'revenue';
                $document->contact_id = $contact->id;

                $filename = str_replace(' ', '', $productionProject->code) . '_'
                    . str_replace(' ', '', $contact->full_name);

                //max length name 25
                $filename = substr($filename, 0, 25);

                $document->filename = $filename
                    . substr($document->getDocumentGroup()->name, 0, 1)
                    . (Document::where('document_group', 'revenue')->count()
                        + 1) . '_' . $time->format('Ymd') . '.pdf';

                $document->save();

                $filePath = (storage_path('app' . DIRECTORY_SEPARATOR
                    . 'documents/' . $document->filename));
                file_put_contents($filePath, $pdf);

                $alfrescoHelper = new AlfrescoHelper($user->email,
                    $user->alfresco_password);

                $alfrescoResponse = $alfrescoHelper->createFile($filePath,
                    $document->filename, $document->getDocumentGroup()->name);

                $document->alfresco_node_id = $alfrescoResponse['entry']['id'];
                $document->save();
            }

            //send email
            if ($primaryEmailAddress) {

                $email = Mail::to($primaryEmailAddress->email);
                if (!$subject) {
                    $subject = 'Participant rapportage Econobis';
                }

                $email->subject = $subject;

                $email->html_body
                    = '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=UTF-8"/><title>'
                    . $subject . '</title></head>'
                    . $emailTemplate->html_body . '</html>';

                $htmlBodyWithContactVariables
                    = TemplateTableHelper::replaceTemplateTables($email->html_body,
                    $contact);
                $htmlBodyWithContactVariables
                    = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables,
                    'contact', $contact);
                $htmlBodyWithContactVariables
                    = TemplateVariableHelper::replaceTemplateVariables($htmlBodyWithContactVariables,
                    'ik', $user);
                $htmlBodyWithContactVariables
                    = TemplateVariableHelper::stripRemainingVariableTags($htmlBodyWithContactVariables);

                if ($previewEmail) {
                    return [
                        'to' => $primaryEmailAddress->email,
                        'subject' => $subject,
                        'htmlBody' => $htmlBodyWithContactVariables
                    ];
                } else {
                    $email->send(new ParticipantReportMail($email,
                        $htmlBodyWithContactVariables, $document));
                }
            } else {
                return [
                    'to' => 'Geen e-mail bekend.',
                    'subject' => 'Geen e-mail bekend.',
                    'htmlBody' => 'Geen e-mail bekend.'
                ];
            }

            if (!$previewPDF && !$previewEmail) {
                //delete file on server, still saved on alfresco.
                Storage::disk('documents')->delete($document->filename);
            }
        }
    }

    public function createPaymentInvoices(Request $request){

        //create invoices
        $createdInvoices = $this->createInvoices(ProductionProjectRevenueDistribution::whereIn('id', $request->input('distributionIds'))->get());

        if($createdInvoices) {
            $reportDistributionIds = [];
            //only send reports to the created ones
            foreach ($createdInvoices as $createdInvoice){
                array_push($reportDistributionIds, $createdInvoice->revenue_distribution_id);
            }

            $this->createParticipantRevenueReport($request->input('subject'),
                $reportDistributionIds,
                DocumentTemplate::find($request->input('documentTemplateId')),
                EmailTemplate::find($request->input('emailTemplateId')));

            $paymentInvoiceController = new PaymentInvoiceController();

            return $paymentInvoiceController->generateSepaFile(collect($createdInvoices));
        }
        else{
            abort(400, 'Geen uitkering facturen aangemaakt.');
        }
    }

}