<?php

namespace App\Eco\Occupation;

use Illuminate\Database\Eloquent\Model;

class Occupation extends Model
{
    public function persons()
    {
        return $this->hasMany(OccupationPerson::class);
    }
}
