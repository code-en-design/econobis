<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 17:01
 */

namespace App\Eco\Mailbox;


use App\Eco\Email\Email;
use App\Eco\Email\EmailAttachment;
use App\Eco\EmailAddress\EmailAddress;
use App\Http\Controllers\Api\Mailbox\GmailController;
use Carbon\Carbon;
use App\Gmail\Facade\LaravelGmail;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Storage;

class MailFetcherGmail
{

    /**
     * @var Mailbox
     */
    private $mailbox;
    private $fetchedEmails = [];

    public function __construct(Mailbox $mailbox)
    {
        $this->mailbox = $mailbox;

        $this->initStorageDir();
        $this->initGmailConfig();
    }

    public function fetchNew()
    {
        if(!$this->mailbox->valid)
        {
            return;
        }
        try {
            $emails = LaravelGmail::message()->unread()->preload()->all();

        } catch(\Exception $ex) {
            Log::error("FetchNew melding mailbox " . $this->mailbox->id);
            Log::error("Melding: " . $ex);
            echo"FetchNew melding mailbox " . $this->mailbox->id;
            echo "Melding: " . $ex;
            return;
        }

        $dateTime = Carbon::now();

        foreach ( $emails as $email ) {
            $this->fetchEmail($email->getId());
        }

        $this->mailbox->date_last_fetched = $dateTime;
//        $this->mailbox->imap_id_last_fetched = $imapIdLastFetched;
        $this->mailbox->save();

    }

    private function initGmailConfig()
    {
        $mb = $this->mailbox;

        try {
            LaravelGmail::setUserId($mb->id);
            $gmailController = new GmailController($mb);

            $mb->valid = $gmailController->checkOauthGmail();
            if($mb->valid){
                $mb->login_tries = 0;
            }else{
                $mb->login_tries = $mb->login_tries + 1;
            }
            $mb->save();
        }
        catch(\Exception $e){
            Log::error($e->getMessage());
            $mb->valid = false;
            $mb->login_tries = $mb->login_tries + 1;
            $mb->save();
        }
        $this->mailbox = $mb;
    }

    private function initStorageDir()
    {
        $storageDir = $this->getStorageDir();

        if (!is_dir($storageDir)) {
            mkdir($storageDir, 0777, true);
        }
    }

    /**
     * @return string
     */
    private function getStorageDir()
    {
        return $this->getStorageRootDir() . DIRECTORY_SEPARATOR . 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' ;
    }

    /**
     * @return string
     */
    private function getAttachmentDBName()
    {
        return 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' . DIRECTORY_SEPARATOR;
    }

    /**
     * @return string
     */
    private function getStorageRootDir()
    {
        return Storage::disk('mail_attachments')->getDriver()->getAdapter()->getPathPrefix();
    }

    private function fetchEmail($mailId)
    {
        $emailData = LaravelGmail::message()->get( $mailId );

        echo "Id: " . $emailData->getId() . "<br />";
//        echo "Labels :" . implode( "<br / >", $emailData->getLabels() );
//
//        echo "PlainTextBody:" . "<br />";
//        echo $emailData->getPlainTextBody();
//        echo "<br />";
//
//        echo "RawPlainTextBody:" . "<br />";
//        echo $emailData->getRawPlainTextBody();
//        echo "<br />";
//
//        echo "HtmlBody:" . "<br />";
//        echo $emailData->getHtmlBody();
//        echo "<br />";
//
        try {
            $dateSent = Carbon::parse( $emailData->getDate() ) ;
        } catch(\Exception $ex) {
            Log::error("GMAIL - Failed to retrieve date sent (" . $emailData->getDate() . ") from email (" . $mailId . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex->getMessage());
            echo "GMAIL - Failed to retrieve date sent from email: " . $ex->getMessage();
            return;
        }

        $textHtml = '';
        try {
            if ($emailData->getHtmlBody() && !empty($emailData->getHtmlBody())) {
                $textHtml = $emailData->getHtmlBody();
            } else {
                if ($emailData->getPlainTextBody() && !empty($emailData->getPlainTextBody())) {
                    $textHtml = nl2br($emailData->getPlainTextBody);
                }
            }
        } catch(\Exception $ex) {
            Log::error("Failed to retrieve HtmlBody or PlainTextBody from email (" . $mailId . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex->getMessage());
            return;
        }

        $textHtml = $textHtml?: '';

        // when encoding isn't UTF-8 encode texthtml to utf8.
        $currentEncodingTextHtml= mb_detect_encoding( $textHtml, 'UTF-8', true);
        if(false === $currentEncodingTextHtml){
            $textHtml = utf8_encode($textHtml);
        }

        if(strlen($textHtml) > 250000){
            $textHtml = substr($emailData->textHtml, 0, 250000);
            $textHtml .= '<p>Deze mail is langer dan 250.000 karakters en hierdoor ingekort.</p>';
        }

        $subject = $emailData->getSubject() ? $emailData->getSubject() : '';

        if(strlen($subject) > 250){
            $subject = substr($emailData->textHtml, 0, 249);
        }

        $to = Arr::pluck($emailData->getTo(), 'email');
        $cc = Arr::pluck($emailData->getCc(), 'email');
        $bcc = Arr::pluck($emailData->getBcc(), 'email');

        $email = new Email([
            'mailbox_id' => $this->mailbox->id,
            'from' => $emailData->getFromEmail(),
            'to' => ($to != [''] ? $to : []),
            'cc' => ($cc != [''] ? $cc : []),
            'bcc' => ($bcc != [''] ? $bcc : []),
            'subject' => $subject,
            'html_body' => $textHtml,
            'date_sent' => $dateSent,
            'folder' => 'inbox',
            'imap_id' => 0,
            'message_id' => $mailId,
            'status' => 'unread'
        ]);
//        print_r($email); die();
        $email->save();
        $emailData->markAsRead();

        //if from email exists in any of the email addresses make a pivot record.

        $this->addRelationToContacts($email);

//        echo "Internal date : " . $emailData->getInternalDate() . "<br />";
//        echo "Date: " . $emailData->getDate() . "<br />";
//        echo "Subject: " . $emailData->getSubject() . "<br />";
//        echo "Bijlage(n): " . ($emailData->hasAttachments() ? 'Ja' : 'Nee' ) . "<br />";
//        echo "Tekst:" . "<br />";
//        echo $emailData->getHtmlBody();
//        echo "<br />";
//        if($emailData->hasAttachments()){
//            echo "Bijlagen:" . "<br />";
//            echo $emailData->getAttachments();
//            echo "<br />";
//        }

        if($emailData->hasAttachments()){
            foreach ($emailData->getAttachments() as $attachment){
                $name = $attachment->getFileName();
//                echo "Name: " . $name . "<br />";
                $fileSysName = \bin2hex(\random_bytes(16)).'.bin';
//                echo "fileSysName: " . $fileSysName . "<br />";
//                echo "attachmentDBName: " . $this->getAttachmentDBName() . "<br />";
                try {
                    $attachment->saveAttachmentTo($this->getAttachmentDBName(), $fileSysName, $disk = 'mail_attachments');
                } catch(\Exception $exAtt) {
                    Log::error("Failed to retrieve Attachment from email (" . $mailId . ") in mailbox (" . $this->mailbox->id . "). Error: " . $exAtt->getMessage());
                    echo "Failed to retrieve Attachment from email (" . $mailId . ") in mailbox (" . $this->mailbox->id . "). Error: " . $exAtt->getMessage();
                    return;
                }

                $filename = $this->getAttachmentDBName() . $fileSysName;

                $emailAttachment = new EmailAttachment([
                    'filename' => $filename,
                    'name' => $attachment->getFileName(),
                    'email_id' => $email->id,
                ]);
                $emailAttachment->save();

            }
        }

//
//        foreach ($emailData->getAttachments() as $attachment){
//            $name = substr($attachment->filePath, strrpos($attachment->filePath, DIRECTORY_SEPARATOR) + 1);
//
//            $filename = $this->getAttachmentDBName() . $name;
//
//            $emailAttachment = new EmailAttachment([
//                'filename' => $filename,
//                'name' => $attachment->name,
//                'email_id' => $email->id,
//            ]);
//            $emailAttachment->save();
//        }
//
//        $this->fetchedEmails[] = $email;
    }

    public function addRelationToContacts(Email $email){

        //soms niet koppelen
        $mailboxIgnores = $email->mailbox->mailboxIgnores;

        foreach ($mailboxIgnores as $ignore){
            switch ($ignore->type_id) {
                case 'e-mail':
                    if($ignore->value === $email->from){
                        return false;
                    }
                    break;
                case 'domain':
                    $domain = preg_replace( '!^.+?([^@]+)$!', '$1', $email->from);
                    if ($ignore->value === $domain) {
                        return false;
                    }
                    break;
            }
        }

        // Link contact from email to address
        if($email->mailbox->link_contact_from_email_to_address) {
            $emailAddressesIds = EmailAddress::where('email', $email->to)->pluck('contact_id')->toArray();
            // Link contact from email from address
        } else {
            $emailAddressesIds = EmailAddress::where('email', $email->from)->pluck('contact_id')->toArray();
        }

        //If contact has twice same emailaddress
        $uniqueEmailAddressesIds = array_unique($emailAddressesIds);

        $email->contacts()->attach($uniqueEmailAddressesIds);
    }

    public function getFetchedEmails()
    {
        return $this->fetchedEmails;
    }


}