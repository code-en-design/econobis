<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 04-01-2018
 * Time: 11:32
 */

namespace App\Http\Controllers\Api\Email;


use App\Eco\Contact\Contact;
use App\Eco\Email\Email;
use App\Eco\Email\EmailAttachment;
use App\Eco\Email\Jobs\SendEmail;
use App\Eco\Email\Jobs\StoreConceptEmail;
use App\Eco\Mailbox\Mailbox;
use App\Eco\User\User;
use App\Helpers\RequestInput\RequestInput;
use App\Http\Resources\Email\FullEmail;
use App\Http\Resources\Email\GridEmail;
use Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EmailController
{

    public function grid($folder)
    {
        $user = Auth::user();

        $mailboxIds = $user->mailboxes()->pluck('mailbox_id');


        if($folder == 'concept'){
            $emails = Email::whereFolder($folder)->whereIn('mailbox_id', $mailboxIds)
                ->orderBy('created_at', 'desc')->get();
        }
        else {
            $emails = Email::whereFolder($folder)->whereIn('mailbox_id', $mailboxIds)
                ->orderBy('date_sent', 'desc')->get();
        }

        $emails->load('mailbox');

        return GridEmail::collection($emails);
    }

    public function show(Email $email){
        $email->load('contact', 'attachments');

        return FullEmail::make($email);
    }

    public function getReply(Email $email){
        $email->load('contact', 'attachments');

        //Reply logic:
        //To -> from
        //From -> mailbox email
        //Cc -> empty
        //Bcc -> empty
        $email->to = [$email->from];
        $email->from = $email->mailbox->email;
        $email->cc = [];
        $email->bcc = [];

        return FullEmail::make($email);
    }

    public function getReplyAll(Email $email){
        $email->load('contact', 'attachments');

        //Reply all logic:
        //To -> (To without own email) + (From)
        //From -> mailbox email
        //Cc -> (Cc without own email)
        //Bcc -> empty


        $to = $email->to;
        unset($to[array_search($email->mailbox->email, $email->to)]);
        array_unshift($to, $email->from);
        $cc = $email->cc;

        unset($cc[array_search($email->mailbox->email, $email->cc)]);

        $email->to = $to;
        $email->from = $email->mailbox->email;
        $email->cc = $cc;
        $email->bcc = [];

        return FullEmail::make($email);
    }

    public function getForward(Email $email){
        $email->load('contact', 'attachments');

        //Forward logic:
        //To -> empty
        //From -> mailbox email
        //Cc -> empty
        //Bcc -> empty

        $email->to = [];
        $email->from = $email->mailbox->email;
        $email->cc = [];
        $email->bcc = [];

        return FullEmail::make($email);
    }

    public function update(Email $email, RequestInput $input)
    {
        $data = $input->string('contactId')->validate('exists:contacts,id')->alias('contact_id')->next()
            ->get();

        $email->fill($data);

        $email->save();

        return FullEmail::make($email);
    }

    public function associateContact(Email $email, Contact $contact)
    {
        $email->contact()->associate($contact);
        $email->save();
    }

    public function send(Mailbox $mailbox, Request $request)
    {
        $sanitizedData = $this->getEmailData($request);

        //add basic html tags for new emails
        $sanitizedData['html_body'] = '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=UTF-8"/><title>' . $sanitizedData['subject'] . '</title></head>' . $sanitizedData['html_body'] . '</html>';

        //Save as concept, if sending fails we still have the concept
        $email = (new StoreConceptEmail($mailbox, $sanitizedData))->handle();

        //Email attachments
        $this->checkStorageDir($mailbox->id);

        //get attachments
        $attachments = $request->file('attachments') ? $request->file('attachments') : [];

        $this->storeEmailAttachments($attachments, $mailbox->id, $email->id);

        (new SendEmail($email))->handle();
    }

    public function storeConcept(Mailbox $mailbox, Request $request)
    {
        $sanitizedData = $this->getEmailData($request);

        $email = (new StoreConceptEmail($mailbox, $sanitizedData))->handle();

        $this->checkStorageDir($mailbox->id);

        //get attachments
        $attachments = $request->file('attachments') ? $request->file('attachments') : [];

        $this->storeEmailAttachments($attachments, $mailbox->id, $email->id);
    }

    public function peek(){
        $contacts = Contact::select('id', 'full_name')->with('primaryEmailAddress')->get();
        $users = User::select('id', 'email', 'first_name', 'last_name')->with('lastNamePrefix')->get();

        foreach($contacts as $contact){
            if($contact->primaryEmailAddress) {
                $people[] = [
                    'id' => $contact->id,
                    'name' => $contact->full_name . ' (' . $contact->primaryEmailAddress->email . ')' ,
                    'email' => $contact->primaryEmailAddress->email
                ];
            }
        }

        //Id met @ omdat een email daar niet mee mag beginnen
        foreach($users as $user){
            $people[] = [
                'id' => '@user_' . $user->id,
                'name' => $user->present()->fullName() . ' (' . $user->email . ')',
                'email' => $user->email
            ];
        }

        return $people;
    }

    public function download(EmailAttachment $emailAttachment)
    {
        $filePath = Storage::disk('mail_attachments')->getDriver()->getAdapter()->applyPathPrefix($emailAttachment->filename);

        return response()->download($filePath, $emailAttachment->name);
    }

    public function updateConcept(Email $email, Request $request){

        $sanitizedData = $this->getEmailData($request);

        $email->to = $sanitizedData['to'];
        $email->cc = $sanitizedData['cc'];
        $email->bcc = $sanitizedData['bcc'];
        $email->subject = $sanitizedData['subject'];
        $email->html_body = $sanitizedData['html_body'];
        $email->save();

        $this->checkStorageDir($email->mailbox_id);

        //get attachments
        $attachments = $request->file('attachments') ? $request->file('attachments') : [];

        $this->storeEmailAttachments($attachments, $email->mailbox_id, $email->id);


        return $email;
    }

    public function sendConcept(Email $email, Request $request){
        $email = $this->updateConcept($email, $request);
        (new SendEmail($email))->handle();
        return FullEmail::make($email);
    }

    public function getEmailData(Request $request){
        //Get all basic mail info
        $data = $request->validate([
            'to' => 'required',
            'cc' => '',
            'bcc' => '',
            'subject' => '',
            'htmlBody' => '',
        ]);

        $data['to'] = json_decode($data['to']);
        $data['cc'] = json_decode($data['cc']);
        $data['bcc'] = json_decode($data['bcc']);

        $emails = [];

        $sendVariations = ['to'];
        if ($data['cc'] != '') {
            array_push($sendVariations, 'cc');
        }
        else{
            $emails['cc'] = [];
        }
        if ($data['bcc'] != '') {
            array_push($sendVariations, 'bcc');
        }
        else{
            $emails['bcc'] = [];
        }

        foreach ($sendVariations as $sendVariation){
            foreach ($data[$sendVariation] as $emailData) {
                if (is_numeric($emailData)){
                    $emails[$sendVariation][] =  Contact::find($emailData)->primaryEmailAddress()->value('email');
                }
                else if(substr($emailData, 0, 6 ) === "@user_"){
                    $user_id = str_replace("@user_", "", $emailData);
                    $emails[$sendVariation][] =  User::find($user_id)->email;
                }
            else{
                    $emails[$sendVariation][] = $emailData;
            }}
        }

        $sanitizedData = [
            'to' => $emails['to'],
            'cc' => $emails['cc'],
            'bcc' => $emails['bcc'],
            'subject' => $data['subject'] ?: 'Econobis',
            'html_body' => $data['htmlBody'],
        ];

        return $sanitizedData;
    }

    public function storeEmailAttachments($attachments, $mailbox_id, $email_id){
        //store attachments
        foreach ($attachments as $attachment) {
            if(!$attachment->isValid()) abort('422', 'Error uploading file');
            $filename = $attachment->store('mailbox_' . $mailbox_id . DIRECTORY_SEPARATOR . 'outbox', 'mail_attachments');

            $emailAttachment = new EmailAttachment([
                'filename' => $filename,
                'name' => $attachment->getClientOriginalName(),
                'email_id' => $email_id,
            ]);
            $emailAttachment->save();
        }
    }

    public function checkStorageDir($mailbox_id){
        //Check if storage map exists
        $storageDir = Storage::disk('mail_attachments')->getDriver()->getAdapter()->getPathPrefix() . DIRECTORY_SEPARATOR . 'mailbox_' . $mailbox_id . DIRECTORY_SEPARATOR . 'outbox';

        if (!is_dir($storageDir)) {
            mkdir($storageDir, 0777, true);
        }
    }

}