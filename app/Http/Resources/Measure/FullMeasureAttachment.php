<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 13-12-2017
 * Time: 15:07
 */

namespace App\Http\Resources\Measure;


use App\Http\Resources\Measure\FullMeasure;
use Illuminate\Http\Resources\Json\Resource;

class FullMeasureAttachment extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return
            [
                'id' => $this->id,
                'name' => $this->name,
                'taskId' => $this->task_id,
                'createdAt' => $this->created_at,
                'measure' => FullMeasure::make($this->whenLoaded('measure')),
            ];
    }
}