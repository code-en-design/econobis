<?php

namespace App\Gmail;


class EconobisLaravelGmailClass extends GmailConnection
{
	public function __construct($config, $userId = null)
	{
		parent::__construct($config, $userId);
	}
}
