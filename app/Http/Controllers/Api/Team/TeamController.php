<?php
/**
 * Created by PhpStorm.
 * User: Fren
 * Date: 20-10-2017
 * Time: 9:35
 */

namespace App\Http\Controllers\Api\Team;

use App\Eco\Team\Team;
use App\Eco\User\User;
use App\Http\Controllers\Api\ApiController;
use App\Http\RequestQueries\Team\Grid\RequestQuery;

use App\Http\Resources\Team\FullTeam;
use App\Http\Resources\Team\PeekTeam;
use App\Http\Resources\User\UserPeek;
use Illuminate\Http\Request;

class TeamController extends ApiController
{

    public function grid(RequestQuery $requestQuery)
    {
        $this->authorize('view', Team::class);

        $teams = $requestQuery->get();

        $teams->load([
            'users'
        ]);

        return FullTeam::collection($teams)
            ->additional(['meta' => [
            'total' => $requestQuery->total(),
            ]
        ]);
    }

    public function show(Team $team)
    {
        $this->authorize('view', Team::class);

        $team->load([
            'users'
        ]);

        return FullTeam::make($team);
    }

    public function store(Request $request)
    {
        $this->authorize('create', Team::class);

        $data = $request->validate([
            'name' => 'required',
        ]);

        //basic team
        $team = new Team();

        $team->name = $data['name'];

        $team->save();

        return $this->show($team);
    }


    public function update(Request $request, Team $team)
    {
        $this->authorize('create', Team::class);

        $data = $request->validate([
            'name' => 'required',
        ]);

        $team->name = $data['name'];

        $team->save();

        return $this->show($team);
    }


    public function attachUser(Team $team, User $user)
    {
        $this->authorize('create', Team::class);

        $team->users()->attach($user->id);

        return UserPeek::make($user);
    }

    public function detachUser(Team $team, User $user)
    {
        $this->authorize('create', Team::class);

        $team->users()->detach($user->id);
    }

    public function destroy(Team $team)
    {
        $this->authorize('create', Team::class);

        //delete many to many relations
        $team->users()->detach();

        foreach ($team->tasks as $task){
            $task->responsibleTeam()->dissociate();
            $task->save();
        }

        foreach ($team->emails as $email){
            $email->responsibleTeam()->dissociate();
            $email->save();
        }

        //delete model itself
        $team->delete();
    }

    public function peek(){
        $people = Team::all();

        return PeekTeam::collection($people);
    }
}