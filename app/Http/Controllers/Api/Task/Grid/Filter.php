<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 24-10-2017
 * Time: 11:48
 */

namespace App\Http\Controllers\Api\Task\Grid;

use App\Helpers\RequestQuery\RequestFilter;

class Filter extends RequestFilter
{
    protected $fields = [
        'createdAt',
        'typeId',
        'note',
        'contactFullName',
        'datePlannedStarted',
        'responsibleName',
    ];

    protected $mapping = [
        'createdAt' => 'tasks.created_at',
        'typeId' => 'tasks.type_id',
        'note' => 'tasks.note',
        'contactFullName' => 'contacts.full_name',
        'datePlannedStarted' => 'tasks.date_planned_start',
        'responsibleName' => 'users.last_name',
    ];

    protected $joins = [
        'contactFullName' => 'contact',
        'responsibleName' => 'users',
    ];

    protected $defaultTypes = [
        '*' => 'ct',
        'statusId' => 'eq',
    ];
}
