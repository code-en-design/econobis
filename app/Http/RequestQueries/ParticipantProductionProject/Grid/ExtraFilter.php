<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 24-10-2017
 * Time: 11:48
 */

namespace App\Http\RequestQueries\ParticipantProductionProject\Grid;


use App\Helpers\RequestQuery\RequestExtraFilter;

class ExtraFilter extends RequestExtraFilter
{
    protected $fields = [
        'name',
        'postalCode',
        'postalCodeNumber',
        'currentParticipations',
    ];

    protected $mapping = [
        'name' => 'contacts.full_name',
        'postalCode' => 'addresses.postal_code',
    ];

    protected $joins = [
        'name' => 'contact',
        'postalCode' => 'addresses',
        'postalCodeNumber' => 'addresses',
    ];

    protected function applyCurrentParticipationsFilter($query, $type, $data)
    {
        $raw = 'participation_production_project.participations_granted - participation_production_project.participations_sold';
        RequestExtraFilter::applyWhereRaw($query, $raw, $type, $data);
        return false;
    }

    protected function applyPostalCodeNumberFilter($query, $type, $data)
    {
        $raw = 'SUBSTRING(addresses.postal_code, 1, 4)';
        RequestExtraFilter::applyWhereRaw($query, $raw, $type, $data);
        return false;
    }
}