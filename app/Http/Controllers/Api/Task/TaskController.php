<?php

namespace App\Http\Controllers\Api\Task;

use App\Eco\Email\Email;
use App\Eco\Task\Task;
use App\Helpers\Delete\Models\DeleteTask;
use App\Helpers\RequestInput\RequestInput;
use App\Http\Controllers\Api\Task\Grid\TaskRequestQuery;
use App\Http\Controllers\Api\Task\Grid\NoteRequestQuery;
use App\Http\Resources\Task\GridTask;
use App\Http\Resources\Task\CalendarTask;
use App\Http\Resources\Task\FullTask;
use App\Http\Resources\Task\TaskPeek;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{

    public function gridTask(TaskRequestQuery $requestQuery)
    {
        $tasks = $requestQuery->get();
        return GridTask::collection($tasks)
            ->additional(['meta' => [
                'total' => $requestQuery->total(),
            ]
        ]);
    }

    public function gridNote(NoteRequestQuery $requestQuery)
    {
        $tasks = $requestQuery->get();

        return GridTask::collection($tasks)
            ->additional(['meta' => [
                'total' => $requestQuery->total(),
            ]
            ]);
    }

    public function calendar(Request $request)
    {
        // Show only tasks which are not finished
        $tasks = Task::whereBetween('date_planned_start', [$request->startDate, $request->endDate])->where('finished', false)->get();

        return CalendarTask::collection($tasks);
    }

    public function show(Task $task)
    {
        $task->load([
            'type',
            'contact',
            'intake',
            'contactGroup',
            'campaign',
            'housingFile',
            'productionProject',
            'participant',
            'responsibleUser',
            'responsibleTeam',
            'createdBy',
            'updatedBy',
            'finishedBy',
            'opportunity.status',
            'opportunity.measures',
            'properties.property',
            'tasks',
            'notes',
            'documents',
            'order',
            'invoice',
        ]);

        $task->relatedEmailsInbox = $this->getRelatedEmails($task->id, 'inbox');
        $task->relatedEmailsSent = $this->getRelatedEmails($task->id, 'sent');

        return FullTask::make($task);
    }

    public function store(RequestInput $input)
    {
        $this->authorize('manage', Task::class);

        $data = $input->string('note')->whenMissing('')->onEmpty('')->next()
            ->integer('typeId')->validate('exists:task_types,id')->onEmpty(null)->alias('type_id')->next()
            ->integer('contactId')->validate('exists:contacts,id')->whenMissing(null)->onEmpty(null)->alias('contact_id')->next()
            ->integer('intakeId')->validate('exists:intakes,id')->whenMissing(null)->onEmpty(null)->alias('intake_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->whenMissing(null)->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('campaignId')->validate('exists:campaigns,id')->whenMissing(null)->onEmpty(null)->alias('campaign_id')->next()
            ->boolean('finished')->next()
            ->date('datePlannedStart')->validate('date')->whenMissing(null)->onEmpty(null)->alias('date_planned_start')->next()
            ->date('datePlannedFinish')->validate('date')->whenMissing(null)->onEmpty(null)->alias('date_planned_finish')->next()
            ->string('startTimePlanned')->whenMissing(null)->onEmpty(null)->alias('start_time_planned')->next()
            ->string('endTimePlanned')->whenMissing(null)->onEmpty(null)->alias('end_time_planned')->next()
            ->date('dateFinished')->validate('date')->whenMissing(null)->onEmpty(null)->alias('date_finished')->next()
            ->integer('responsibleUserId')->validate('exists:users,id', 'required_unless, responsible_team_id')->whenMissing(null)->onEmpty(null)->alias('responsible_user_id')->next()
            ->integer('responsibleTeamId')->validate('exists:teams,id', 'required_unless, responsible_user_id')->whenMissing(null)->onEmpty(null)->alias('responsible_team_id')->next()
            ->integer('finishedById')->validate('exists:users,id')->whenMissing(null)->onEmpty(null)->alias('finished_by_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->integer('housingFileId')->validate('exists:housing_files,id')->onEmpty(null)->alias('housing_file_id')->next()
            ->integer('productionProjectId')->validate('exists:production_projects,id')->onEmpty(null)->alias('production_project_id')->next()
            ->integer('participantId')->validate('exists:participation_production_project,id')->onEmpty(null)->alias('participation_production_project_id')->next()
            ->integer('orderId')->validate('exists:orders,id')->onEmpty(null)->alias('order_id')->next()
            ->integer('invoiceId')->validate('exists:invoices,id')->onEmpty(null)->alias('invoice_id')->next()
            ->get();

        $task = new Task($data);

        if($task->finished){
            $task->date_finished = Carbon::today();
            $task->finished_by_id = Auth::id();
        }
        $task->save();

        return $this->show($task);
    }

    public function update(Task $task, RequestInput $input)
    {
        $this->authorize('manage', Task::class);

        $data = $input->string('note')->next()
            ->integer('typeId')->validate('exists:task_types,id')->onEmpty(null)->alias('type_id')->next()
            ->integer('contactId')->validate('exists:contacts,id')->onEmpty(null)->alias('contact_id')->next()
            ->integer('intakeId')->validate('exists:intakes,id')->onEmpty(null)->alias('intake_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('campaignId')->validate('exists:campaigns,id')->onEmpty(null)->alias('campaign_id')->next()
            ->boolean('finished')->next()
            ->date('datePlannedStart')->onEmpty(null)->validate('date')->alias('date_planned_start')->next()
            ->date('datePlannedFinish')->onEmpty(null)->validate('date')->alias('date_planned_finish')->next()
            ->string('startTimePlanned')->onEmpty(null)->alias('start_time_planned')->next()
            ->string('endTimePlanned')->onEmpty(null)->alias('end_time_planned')->next()
            ->date('dateFinished')->validate('date')->onEmpty(null)->alias('date_finished')->next()
            ->integer('responsibleUserId')->validate('exists:users,id', 'required_unless, responsible_team_id')->onEmpty(null)->alias('responsible_user_id')->next()
            ->integer('responsibleTeamId')->validate('exists:teams,id', 'required_unless, responsible_user_id')->onEmpty(null)->alias('responsible_team_id')->next()
            ->integer('finishedById')->validate('exists:users,id')->onEmpty(null)->alias('finished_by_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->integer('housingFileId')->validate('exists:housing_files,id')->onEmpty(null)->alias('housing_file_id')->next()
            ->integer('productionProjectId')->validate('exists:production_projects,id')->onEmpty(null)->alias('production_project_id')->next()
            ->integer('participantId')->validate('exists:participation_production_project,id')->onEmpty(null)->alias('participation_production_project_id')->next()
            ->integer('orderId')->validate('exists:orders,id')->onEmpty(null)->alias('order_id')->next()
            ->integer('invoiceId')->validate('exists:invoices,id')->onEmpty(null)->alias('invoice_id')->next()
            ->get();

        $task->fill($data);

        if($task->isDirty('finished') && $task->finished){
            $task->date_finished = Carbon::today();
            $task->finished_by_id = Auth::id();
        }
        $task->save();

        return $this->show($task);
    }

    public function duplicate(Task $task)
    {
        $task->load('properties');

        $newTask = $task->replicate();
        $newTask->task_id = $task->id;
        $newTask->responsible_user_id = Auth::id();
        $newTask->responsible_team_id = null;
        $newTask->date_planned_start = null;
        $newTask->date_planned_finish = null;
        $newTask->start_time_planned = null;
        $newTask->end_time_planned = null;

        if($newTask->finished){
            $newTask->date_finished = Carbon::today();
            $newTask->finished_by_id = Auth::id();
        }

        $newTask->push();

        foreach($task->getRelations() as $relation => $items){
            foreach($items as $item){
                unset($item->id);
                $newTask->{$relation}()->create($item->toArray());
            }
        }

        return $this->show($newTask);
    }

    public function destroy(Task $task)
    {
        $this->authorize('manage', Task::class);

        try {
            DB::beginTransaction();

            $deleteTask = new DeleteTask($task);
            $result = $deleteTask->delete();
            if(count($result) > 0){
                DB::rollBack();
                abort(412, implode(";", array_unique($result)));
            }

            DB::commit();
        } catch (\PDOException $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            abort(501, 'Er is helaas een fout opgetreden.');
        }
    }

    public function finish(Task $task)
    {
        $this->authorize('manage', Task::class);

        $task->date_finished = Carbon::today();
        $task->finished = true;
        $task->finished_by_id = Auth::id();
        $task->save();

        return $this->show($task->fresh());
    }

    public function getAmountOfActiveTasks(){
        $user = Auth::user();

        $userTeamIds = $user->teams()->pluck('id')->toArray();

        $userTasks = Task::where('finished', false)->where('responsible_user_id', $user->id)->get();
        $teamTasks = Task::where('finished', false)->whereIn('responsible_team_id', $userTeamIds)->get();

        $allTasks = $userTasks->merge($teamTasks);

        return $allTasks->count();
    }

    public function peek()
    {
        return TaskPeek::collection(Task::orderBy('id')->get());
    }

    public function getRelatedEmails($id, $folder)
    {
        return Email::where('task_id', $id)->where('folder', $folder)->get();
    }
}
