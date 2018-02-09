<?php

namespace App\Eco\Opportunity;

use App\Eco\Campaign\Campaign;
use App\Eco\Contact\Contact;
use App\Eco\Document\Document;
use App\Eco\Measure\Measure;
use App\Eco\Intake\Intake;
use App\Eco\Task\Task;
use App\Eco\User\User;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Opportunity extends Model
{
    use RevisionableTrait;

    protected $table = 'opportunities';

    protected $guarded = ['id'];
    //Relations
    public function measure()
    {
        return $this->belongsTo(Measure::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function intake()
    {
        return $this->belongsToMany(Intake::class);
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function reaction()
    {
        return $this->belongsTo(OpportunityReaction::class);
    }

    public function status()
    {
        return $this->belongsTo(OpportunityStatus::class);
    }

    public function quotations(){
        return $this->hasMany(OpportunityQuotation::class);
    }

    public function createdBy(){
        return $this->belongsTo(User::class);
    }

    public function ownedBy(){
        return $this->belongsTo(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    //custom methods
    public function relatedOpportunities(){
        $opportunities = $this->contact->opportunities()->with(['measure', 'status'])->where('id', '!=', $this->id)->get();

        return $opportunities;
    }
}
