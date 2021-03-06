<?php

namespace App\Http\JoryResources;


use App\Eco\Task\TaskType;
use App\Http\JoryResources\Base\JoryResource;

class TaskTypeJoryResource extends JoryResource
{
    protected $modelClass = TaskType::class;

    protected function configureForApp(): void
    {
        $this->field('id')->filterable()->sortable();
        $this->field('name')->filterable()->sortable();
        $this->field('uses_wf_completed_task')->filterable()->sortable();
        $this->field('email_template_id_wf_completed_task')->filterable()->sortable();
        $this->field('number_of_days_to_send_email_completed_task')->filterable()->sortable();
        $this->field('uses_wf_expired_task')->filterable()->sortable();
        $this->field('email_template_id_wf_expired_task')->filterable()->sortable();
        $this->field('created_at')->filterable()->sortable();
        $this->field('updated_at')->filterable()->sortable();

        // Relations
        $this->relation('emailTemplateWorkflowCompletedTask');
        $this->relation('emailTemplateWorkflowExpiredTask');
    }

    protected function configureForPortal(): void
    {
        // TODO: Implement configureForPortal() method.
    }
}