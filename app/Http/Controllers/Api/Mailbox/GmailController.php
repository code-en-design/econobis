<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 14:09
 */

namespace App\Http\Controllers\Api\Mailbox;


use App\Http\Controllers\Controller;

class GmailController extends Controller
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
        $gmail = new EconobisLaravelGmailClass($this->config, $this->mailbox->id);
        return $gmail->redirect();
    }

    public function checkOauthGmail()
    {
        $gmail = new EconobisLaravelGmailClass($this->config, $this->mailbox->id);
        return $gmail->check();
    }


}