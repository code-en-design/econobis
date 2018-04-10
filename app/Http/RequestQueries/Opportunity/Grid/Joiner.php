<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 27-10-2017
 * Time: 11:15
 */

namespace App\Http\RequestQueries\Opportunity\Grid;


use App\Helpers\RequestQuery\RequestJoiner;

class Joiner extends RequestJoiner
{

    protected function applyMeasureCategoriesJoin($query)
    {
        $query->join('measure_categories', 'opportunities.measure_category_id', '=', 'measure_categories.id');
    }

    protected function applyCampaignsJoin($query)
    {
        $query->join('intakes', 'opportunities.intake_id', '=', 'intakes.id');
        $query->join('campaigns', 'intakes.campaign_id', '=', 'campaigns.id');
    }

    protected function applyContactsJoin($query)
    {
        $query->join('intakes', 'opportunities.intake_id', '=', 'intakes.id');
        $query->join('contacts', 'intakes.contact_id', '=', 'contacts.id');
    }

}