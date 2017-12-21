<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 30-11-2017
 * Time: 16:27
 */

namespace App\Eco\Measure;


use Illuminate\Database\Eloquent\Model;

class MeasureFaq extends Model
{
    protected $table = 'faq_measure';

    protected $guarded = ['id'];

        public function measure()
    {
        return $this->belongsTo(Measure::class);
    }
}