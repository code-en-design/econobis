<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 14:09
 */

namespace App\Gmail;


use App\Gmail\Facade\LaravelGmail;

class GmailHelper
{
    private $mailbox;
    private $config;

    public function __construct($mailbox)
    {
        $this->mailbox = $mailbox;
        $this->config['gmail.project_id'] = $mailbox->gmail_project_id;
        $this->config['gmail.client_id'] = $mailbox->gmail_client_id;
        $this->config['gmail.client_secret'] = $mailbox->gmail_client_secret;
        $this->config['gmail.redirect_url'] = $mailbox->gmail_redirect_url;
        $this->config['gmail.credentials_file_name'] = "gmail-json";
        $this->config['gmail.allow_multiple_credentials'] = true;
        $this->config['gmail.allow_json_encrypt'] = false;
        $this->config['gmail.access_type'] = "offline";
        $this->config['gmail.approval_prompt'] = "force";
        $this->config['gmail.scopes'] = ['readonly', 'modify'];
    }

    public function oauthGmail()
    {
        LaravelGmail::setUserId($this->mailbox->id);
        $gmail = new LaravelGmailClass($this->config, $this->mailbox->id);
        return $gmail->redirect();
    }

    public function checkOauthGmail()
    {
        echo "Check oauth gmail<br/>";
        LaravelGmail::setUserId($this->mailbox->id);
        $gmail = new LaravelGmailClass($this->config, $this->mailbox->id);
        echo 'Mailbox: ' . $this->mailbox->id . '<br/>';
        echo 'Mailbox email: ' . $this->mailbox->email . '<br/>';
        echo 'LaravelGmail: ' . LaravelGmail::user() . '<br/>';
        echo 'Profile: ' . $gmail->getProfile()->emailAddress . '<br/>';

        // Indien emailadres van mailbox niet overeenkomt met emailadres bij gekoppeld gmail account, dan niet ok.
        if($this->mailbox->email != LaravelGmail::user()){
            echo "Mismatch mailbox email: " . $this->mailbox->email . " met laravelgmail email: " . LaravelGmail::user() . "<br/>";
            return false;
        }
        echo "Match mailbox email: " . $this->mailbox->email . " met laravelgmail email: " . LaravelGmail::user() . "<br/>";

        return $gmail->check();
    }


}