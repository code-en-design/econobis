<?php

namespace App\Http\Controllers\Api\Mailbox;

use App\Gmail\GmailConnection;

class EconobisLaravelGmailClass extends GmailConnection
{
	public function __construct($config, $userId = null)
	{
		parent::__construct($config, $userId);
	}
}
