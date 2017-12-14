<?php

namespace App\Http\Resources\Organisation;

use App\Http\Resources\OrganisationType\FullOrganisationType;
use App\Http\Resources\Industry\FullIndustry;
use App\Http\Resources\Person\FullPerson;
use Illuminate\Http\Resources\Json\Resource;

class FullOrganisation extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'contactId' => $this->contact_id,
            'name' => $this->name,
            'typeId' => $this->type_id,
            'type' => FullOrganisationType::make($this->whenLoaded('type')),
            'industryId' => $this->industry_id,
            'industry' => FullIndustry::make($this->whenLoaded('industry')),
            'website' => $this->website,
            'chamberOfCommerceNumber' => $this->chamber_of_commerce_number,
            'vatNumber' => $this->vat_number,
            'squareMeters' => $this->square_meters,
            'people' => FullPerson::collection($this->whenLoaded('people')),
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}