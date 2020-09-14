<?php

namespace App\Gmail;


class EconobisLaravelGmailClass extends GmailConnection
{
	public function __construct($config, $userId = null)
	{
	    $this->userId = $userId;
        echo "Construct in EconobisLaravelGmailClass 1: " . $userId . "<br/>";
        echo "Construct in EconobisLaravelGmailClass 2: " . $this->userId . "<br/>";

        parent::__construct($config, $userId);
	}
}
