<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 04-01-2018
 * Time: 11:32
 */

namespace App\Http\Controllers\Api\Document;

use App\Eco\Document\Document;
use App\Helpers\RequestInput\RequestInput;
use App\Http\RequestQueries\Document\Grid\RequestQuery;
use App\Http\Resources\Document\FullDocument;
use App\Http\Resources\Document\GridDocument;
use Illuminate\Support\Facades\App;

class DocumentController
{

    public function grid(RequestQuery $requestQuery)
    {
        $documents = $requestQuery->get();

        $documents->load(['contact']);

        return GridDocument::collection($documents)
            ->additional(['meta' => [
                'total' => $requestQuery->total(),
            ]
            ]);
    }

    public function show(Document $document)
    {
        $document->load('contact', 'registration', 'contactGroup', 'opportunity', 'sentBy', 'createdBy');

        return FullDocument::make($document);
    }

    public function store(RequestInput $requestInput)
    {
        $data = $requestInput
            ->string('description')->next()
            ->string('documentType')->validate('required')->alias('document_type')->next()
            ->string('documentGroup')->validate('required')->alias('document_group')->next()
            ->string('filename')->next()
            ->string('freeText1')->alias('free_text_1')->next()
            ->string('freeText2')->alias('free_text_2')->next()
            ->integer('contactId')->validate('exists:contacts,id')->onEmpty(null)->alias('contact_id')->next()
            ->integer('registrationId')->validate('exists:registrations,id')->onEmpty(null)->alias('registration_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->integer('sentById')->validate('exists:users,id')->onEmpty(null)->alias('sent_by_id')->next()
            ->integer('templateId')->validate('exists:document_templates,id')->onEmpty(null)->alias('template_id')->next()
            ->get();

        if($data['document_type'] == 'document'){
            //validate if filename exist in Alfresco
            //create document
            //save in alfresco

        }
        else{
            //get file from request
            // get name of file
            //validate name
            //save in alfresco
        }


        $document = new Document();
        $document->fill($data);
        $document->save();

        return FullDocument::make($document->fresh());
    }

    public function update(RequestInput $requestInput, Document $document) {

        $data = $requestInput
            ->string('description')->next()
            ->string('documentType')->validate('required')->alias('document_type')->next()
            ->string('documentGroup')->validate('required')->alias('document_group')->next()
            ->string('freeText1')->alias('free_text_1')->next()
            ->string('freeText2')->alias('free_text_2')->next()
            ->integer('contactId')->validate('exists:contacts,id')->onEmpty(null)->alias('contact_id')->next()
            ->integer('registrationId')->validate('exists:registrations,id')->onEmpty(null)->alias('registration_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->integer('sentById')->validate('exists:users,id')->onEmpty(null)->alias('sent_by_id')->next()
            ->integer('templateId')->validate('exists:document_templates,id')->onEmpty(null)->alias('template_id')->next()
            ->get();

        $document->fill($data);
        $document->save();

        return FullDocument::make($document->fresh());
    }

    public function destroy(Document $document)
    {
        $document->forceDelete();
    }

    public function create(Document $document){

        dd($document->base);
        View::make();
        $pdf = App::make('dompdf.wrapper');
        $pdf->loadHTML('<h1>Test</h1>');
        return $pdf->stream();
    }

}