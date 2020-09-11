<?php

namespace App\Http\Resources\Mailbox;

use App\Eco\Mailbox\IncomingServerType;
use App\Eco\Mailbox\OutgoingServerType;
use Illuminate\Http\Resources\Json\Resource;

class GridMailbox extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return
            [
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
                'smtpHost' => $this->smtp_host,
                'imapHost' => $this->imap_host,
                'username' => $this->username,
                'valid' => $this->valid,
                'incomingServerTypeName' => IncomingServerType::get($this->incoming_server_type)->getName(),
                'outgoingServerTypeName' => OutgoingServerType::get($this->outgoing_server_type)->getName(),
                'incomingServerType' => $this->incoming_server_type,
                'outgoingServerType' => $this->outgoing_server_type,
                'mailgunDomainId' => $this->mailgun_domain_id,
                'mailgunDomain' => $this->mailgunDomain ? $this->mailgunDomain->domain : '',
                'primary' => $this->primary,
                'isActive' => $this->is_active,
            ];
    }
}
