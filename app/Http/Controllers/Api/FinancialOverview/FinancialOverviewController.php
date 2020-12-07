<?php

namespace App\Http\Controllers\Api\FinancialOverview;

use App\Eco\FinancialOverview\FinancialOverview;
use App\Eco\FinancialOverview\FinancialOverviewProject;
use App\Helpers\Delete\Models\DeleteFinancialOverview;
use App\Helpers\FinancialOverview\FinancialOverviewHelper;
use App\Helpers\RequestInput\RequestInput;
use App\Http\Controllers\Controller;
use App\Http\Resources\GenericResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JosKolenberg\LaravelJory\Facades\Jory;

class FinancialOverviewController extends Controller
{

    public function jory()
    {
        return Jory::on(FinancialOverview::class);
    }

    public function store(RequestInput $input, Request $request)
    {
        $this->authorize('manage', FinancialOverview::class);

        $data = $input->integer('administrationId')->validate('exists:administrations,id')->alias('administration_id')->next()
            ->integer('year')->next()
            ->boolean('definitive')->onEmpty(false)->whenMissing(false)->next()
            ->get();

        $financialOverview = new FinancialOverview($data);
        $financialOverview->save();

        $this->createProjectsForFinancialOverview($financialOverview);

        return Jory::on($financialOverview);
    }

    public function update(RequestInput $input, FinancialOverview $financialOverview)
    {
        $this->authorize('manage', FinancialOverview::class);
        $data = $input->integer('administrationId')->validate('exists:administrations,id')->alias('administration_id')->next()
            ->integer('year')->next()
            ->boolean('definitive')->onEmpty(false)->whenMissing(false)->next()
            ->get();

        $financialOverview->fill($data);
        $financialOverview->save();

        return GenericResource::make($financialOverview);
    }

    public function destroy(FinancialOverview $financialOverview)
    {
        $this->authorize('manage', FinancialOverview::class);

        try {
            DB::beginTransaction();

            $deleteFinancialOverview = new DeleteFinancialOverview($financialOverview);
            $result = $deleteFinancialOverview->delete();

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

    public function createProjectsForFinancialOverview(FinancialOverview $financialOverview)
    {
        $projects = $this->getNewProjectsForFinancialOverview($financialOverview);

        foreach ($projects as $project) {
            $financialOverviewProject = FinancialOverviewProject::create([
                'financial_overview_id' => $financialOverview->id,
                'project_id' => $project->id,
                'definitive' => false,
            ]);

            $financialOverviewProjectController = new FinancialOverviewProjectController();
            $financialOverviewProjectController->createParticipantProjectsForFinancialOverview($project, $financialOverviewProject);
        }
    }

    public function getNewProjectsForFinancialOverview(FinancialOverview $financialOverview)
    {
        return FinancialOverviewHelper::getNewProjectsForFinancialOverview($financialOverview);
    }

}