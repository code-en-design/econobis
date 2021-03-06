<?php

namespace App\Http\Controllers\Api\Task;

use App\Eco\Task\Task;
use App\Eco\Task\TaskPropertyValue;
use App\Helpers\Jobs\GenericDeleteModelJob;
use App\Helpers\RequestInput\RequestInput;
use App\Http\Resources\GenericResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskPropertyValueController extends Controller
{

    public function store(RequestInput $input, Task $task)
    {
        $this->authorize('manage', Task::class);

        $data = $input
            ->integer('propertyId')->validate(['required', 'exists:task_properties,id'])->alias('property_id')->next()
            ->string('value')->whenMissing('')->onEmpty('')->next()
            ->get();

        $taskPropertyValue = new TaskPropertyValue($data);
        $taskPropertyValue->task_id = $task->id;
        $taskPropertyValue->save();

        return GenericResource::make($taskPropertyValue);
    }

    public function update(RequestInput $input, TaskPropertyValue $taskPropertyValue)
    {
        $this->authorize('manage', Task::class);

        $data = $input
            ->integer('propertyId')->validate('exists:task_properties,id')->alias('property_id')->next()
            ->string('value')->next()
            ->get();

        $taskPropertyValue->fill($data);
        $taskPropertyValue->save();

        return GenericResource::make($taskPropertyValue);
    }

    public function destroy(TaskPropertyValue $taskPropertyValue)
    {
        $this->authorize('manage', Task::class);

        GenericDeleteModelJob::single($taskPropertyValue, true);
    }

}
