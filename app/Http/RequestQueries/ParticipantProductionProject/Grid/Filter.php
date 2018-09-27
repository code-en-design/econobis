<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 24-10-2017
 * Time: 11:48
 */

namespace App\Http\RequestQueries\ParticipantProductionProject\Grid;


use App\Helpers\RequestQuery\RequestFilter;
use Illuminate\Support\Facades\DB;

class Filter extends RequestFilter
{
    protected $fields = [
        'id',
        'contactType',
        'name',
        'address',
        'postalCode',
        'city',
        'currentParticipations',
        'participationStatusId',
        'dateRegister',
        'energySupplierId',
        'productionProjectId',
    ];

    protected $mapping = [
        'id' => 'participation_production_project.id',
        'contactType' => 'contacts.type_id',
        'name' => 'contacts.full_name',
        'postalCode' => 'addresses.postal_code',
        'city' => 'addresses.city',
        'currentParticipations' => 'participation_production_project.current_participations',
        'participationStatusId' => 'participation_production_project.status_id',
        'dateRegister' => 'participation_production_project.date_register',
        'energySupplierId' => 'energy_suppliers.id',
        'productionProjectId' => 'participation_production_project.production_project_id',
    ];

    protected $joins = [
        'contactType' => 'contacts',
        'energySupplierId' => 'energy_suppliers',
    ];

    protected $defaultTypes = [
        '*' => 'ct',
        'id' => 'eq',
        'contactType' => 'eq',
        'statusId' => 'eq',
        'participationStatusId' => 'eq',
        'energySupplierId' => 'eq',
    ];

    protected function applyCurrentParticipationsFilter($query, $type, $data)
    {
        $query->whereRaw('(participation_production_project.participations_granted - participation_production_project.participations_sold) =' . DB::connection()->getPdo()->quote($data))->where('participation_production_project.status_id', 2);
    }

    protected function applyNameFilter($query, $type, $data)
    {
        $query->whereHas('contact', function ($query) use ($type, $data) {
            RequestFilter::applyFilter($query, 'full_name', $type, $data);
        });
    }

    protected function applyPostalCodeFilter($query, $type, $data)
    {
        $query->whereHas('contact.primaryAddress', function ($query) use ($type, $data) {
            $data = str_replace(' ', '', $data);
            RequestFilter::applyFilter($query, 'postal_code', $type, $data);
        });
    }

    protected function applyCityFilter($query, $type, $data)
    {
        $query->whereHas('contact.primaryAddress', function ($query) use ($type, $data) {
            RequestFilter::applyFilter($query, 'city', $type, $data);
        });
    }

    protected function applyAddressFilter($query, $type, $data)
    {
        $query->whereHas('contact.primaryAddress', function ($query) use ($type, $data) {
            $data = str_replace(' ', '', $data);
            $query->whereRaw('concat(IFNULL(addresses.street,\'\'), IFNULL(addresses.number,\'\'),  IFNULL(addresses.addition,\'\')) LIKE ' . DB::connection()->getPdo()->quote('%' . $data . '%'));
        });
    }
}