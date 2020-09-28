<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/twinfield', 'Api\Twinfield\TwinfieldController@twinfield');

// Welcome
use App\Eco\Mailbox\MailFetcherGmail;
use App\Gmail\GmailHelper;
use Carbon\Carbon;
use App\Gmail\Facade\LaravelGmail;

Route::get('/', 'HomeController@welcome');

Route::get('/oauth/gmail', function (){
    return LaravelGmail::redirect();
});
Route::get('/oauth/gmail/logout', function (){
    LaravelGmail::logout(); //It returns exception if fails
    return redirect()->to('/oauth/gmail/checkuser');
});
Route::get('/oauth/gmail/checkuser', function (){
    echo LaravelGmail::check() ? 'Ingelogd: ' . LaravelGmail::user() : 'Niet ingelogd';
});
Route::get('/oauth/gmail/fetch-mails-unread', function (){
    try{
        $messages = LaravelGmail::message()->unread()->preload()->all();
        echo "Aantal messages: " . count( $messages ) . "<br/>";
        foreach ( $messages as $message ) {
            echo "User: " . LaravelGmail::user() . "<br />";
            echo "Id: " . $message->getId() . "<br />";
            echo "Internal date : " . $message->getInternalDate() . "<br />";
            echo "Date: " . $message->getDate() . "<br />";
            echo "Subject: " . $message->getSubject() . "<br />";
            echo "Bijlage(n): " . ($message->hasAttachments() ? 'Ja' : 'Nee' ) . "<br />";
            echo "Tekst:" . "<br />";
            echo $message->getHtmlBody();
            echo "<br />";
        }
    } catch (\Exception $exception) {
        echo "fetch unread failed: " . $exception;
    }

});

Route::get('/oauth/gmail/callback', function (){
//    LaravelGmail::makeToken();
    if(!empty(session(['gmailMailboxId']))){
        $mailboxId = session(['gmailMailboxId']);
        echo "Callback voor mailboxId: " . $mailboxId;
        $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
        $gmailHelper = new GmailHelper($mailbox);
        $gmailHelper->makeToken();
    }

    //todo hier wellicht opslaan token in mailbox?
    return redirect()->to('/oauth/gmail/checkuser');
});

// Hieronder de testen per mailbox

Route::get('/oauth/gmail/mailbox/{mailboxId}', function ($mailboxId){
    if(empty(session('gmailMailboxId'))){
        session(['gmailMailboxId' => $mailboxId]);
    }

    $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
    $gmailHelper = new GmailHelper($mailbox);
    return $gmailHelper->oauthGmail();
});

Route::get('/oauth/gmail/logout/{mailboxId}', function ($mailboxId){
    $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
    $gmailHelper = new GmailHelper($mailbox);
    $gmailHelper->logout();
    return redirect()->to('/oauth/gmail/checkuser/'.$mailboxId);
});

Route::get('/oauth/gmail/checkuser/{mailboxId}', function ($mailboxId){
    $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
    $gmailHelper = new GmailHelper($mailbox);
    echo $gmailHelper->checkOauthGmail() ? 'Ingelogd: ' . LaravelGmail::user() : 'Niet ingelogd';
});

//Route::get('/oauth/gmail/callback', function (){
//    if(empty(session('gmailMailboxId'))){
//        echo "Geen geldige gmail mailbox gevonden na callback";
//        return;
//    }
//
//    $mailboxId = session('gmailMailboxId');
//    session()->forget(['gmailMailboxId']);
//
//    LaravelGmail::setUserId($mailboxId);
//    LaravelGmail::makeToken();
//
//    //todo hier wellicht opslaan token in mailbox?
//    return redirect()->to('/oauth/gmail/checkuser/'.$mailboxId);
//});

// Hieronder overige losje testjes

//Route::get('/oauth/gmail/mailbox-single/{mailboxId}', function ($mailboxId){
//    if(empty(session('gmailMailboxId'))){
//        session(['gmailMailboxId' => $mailboxId]);
//    }
//
//    LaravelGmail::setUserId($mailboxId);
//    return LaravelGmail::redirect();
//});

//Route::get('/oauth/gmail/fetch-mails/{mailboxId}', function ($mailboxId){
//
//    $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
//    $mailFetcherGmail = new MailFetcherGmail($mailbox);
//    $mailFetcherGmail->fetchNew();
//    return redirect()->to('/#/emails/inbox');
//});

//Route::get('/oauth/gmail/fetch-mails-test', function (){
//    echo "Test mailbox 22-E<br />";
//    LaravelGmail::setUserId(22);
//    $mailbox = \App\Eco\Mailbox\Mailbox::find(22);
//    $mailFetcherGmail = new MailFetcherGmail($mailbox);
//    $mailFetcherGmail->fetchNew();
//    echo "Test mailbox 24-E<br />";
//    LaravelGmail::setUserId(24);
//    $mailbox = \App\Eco\Mailbox\Mailbox::find(24);
//    $mailFetcherGmail = new MailFetcherGmail($mailbox);
//    $mailFetcherGmail->fetchNew();
//});

//Route::get('/oauth/gmail/fetch-mails-after', function (){
//    echo "Vanaf date: " . Carbon::yesterday()->format("Y-m-d") . "<br />";
//    try{
//        $messages = LaravelGmail::message()->after(Carbon::yesterday()->format("Y-m-d"))->preload()->all();
//        foreach ( $messages as $message ) {
//            echo "User: " . LaravelGmail::user() . "<br />";
//            echo "Id: " . $message->getId() . "<br />";
//            echo "Internal date : " . $message->getInternalDate() . "<br />";
//            echo "Date: " . $message->getDate() . "<br />";
//            echo "Subject: " . $message->getSubject() . "<br />";
//            echo "Bijlage(n): " . ($message->hasAttachments() ? 'Ja' : 'Nee' ) . "<br />";
//            echo "Tekst:" . "<br />";
//            echo $message->getHtmlBody();
//            echo "<br />";
//        }
//    } catch (\Exception $exception) {
//        echo "fetch after failed: " . $exception;
//    }
//});

//Route::get('/oauth/gmail/fetch-mail/{id}', function ($id){
//    $mail = LaravelGmail::message()->get( $id );
//    $mail->markAsRead();
//
//    echo "User: " . LaravelGmail::user() . "<br />";
//    echo "Id: " . $mail->getId() . "<br />";
//    echo "Internal date : " . $mail->getInternalDate() . "<br />";
//    echo "Date: " . $mail->getDate() . "<br />";
//    echo "Subject: " . $mail->getSubject() . "<br />";
//    echo "Bijlage(n): " . ($mail->hasAttachments() ? 'Ja' : 'Nee' ) . "<br />";
//    echo "Tekst:" . "<br />";
//    echo $mail->getHtmlBody();
//    echo "<br />";
//    if($mail->hasAttachments()){
//        echo "Bijlagen:" . "<br />";
//        echo $mail->getAttachments();
//        echo "<br />";
//    }
//});
