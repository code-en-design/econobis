<?php

namespace App\Http\Controllers\Api\Account;

use App\Eco\Account\Account;
use App\Eco\Contact\Contact;
use App\Eco\Contact\ContactStatus;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\Contact\ContactController;
use App\Http\Resources\Account\AccountPeek;
use App\Rules\EnumExists;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AccountController extends ApiController
{

    public function store(Request $request)
    {
        $this->authorize('create', Account::class);

        $contactData = $request->validate([
            'statusId' => new EnumExists(ContactStatus::class),
            'memberSince' => 'date',
            'memberUntil' => 'date',
            'newsletter' => 'boolean',
            'iban' => '',
            'liable' => 'boolean',
            'liabilityAmount' => 'numeric',
            'ownerId' => 'exists:users,id',
        ]);

        $accountData = $request->validate([
            'typeId' => 'exists:account_types,id',
            'name' => '',
            'website' => '',
            'chamberOfCommerceNumber' => '',
            'vatNumber' => '',
            'industryId' => 'exists:industries,id',
            'squareMeters' => 'integer',
        ]);

        $contactData = $this->sanitizeData($contactData, [
            'statusId' => 'nullable',
            'ownerId' => 'nullable',
            'memberSince' => 'nullable',
            'memberUntil' => 'nullable',
            'newsletter' => 'boolean',
            'liable' => 'boolean',
        ]);
        $contact = new Contact($this->arrayKeysToSnakeCase($contactData));

        $accountData = $this->sanitizeData($accountData, [
            'typeId' => 'nullable',
            'industryId' => 'nullable',
            'squareMeters' => 'integer',
        ]);
        $account = new Account($this->arrayKeysToSnakeCase($accountData));

        DB::transaction(function () use ($account, $contact) {
            $contact->save();
            $account->contact_id = $contact->id;
            $account->save();
        });

        // Contact exact zo teruggeven als bij het openen van een bestaand contact
        // Dus kan hier gebruik maken van bestaande controller
        return (new ContactController())->show($contact->fresh(), $request);
    }

    public function update(Request $request, Account $account)
    {
        $this->authorize('update', $account);

        $contactData = $request->validate([
            'statusId' => new EnumExists(ContactStatus::class),
            'memberSince' => 'date',
            'memberUntil' => 'date',
            'newsletter' => 'boolean',
            'iban' => '',
            'liable' => 'boolean',
            'liabilityAmount' => 'numeric',
            'ownerId' => 'exists:users,id',
        ]);

        $accountData = $request->validate([
            'typeId' => 'exists:account_types,id',
            'name' => '',
            'website' => '',
            'chamberOfCommerceNumber' => '',
            'vatNumber' => '',
            'industryId' => 'exists:industries,id',
            'squareMeters' => 'integer',
        ]);

        $contactData = $this->sanitizeData($contactData, [
            'statusId' => 'nullable',
            'ownerId' => 'nullable',
            'memberSince' => 'nullable',
            'memberUntil' => 'nullable',
            'newsletter' => 'boolean',
            'liable' => 'boolean',
        ]);

        $contact = $account->contact;
        $contact->fill($this->arrayKeysToSnakeCase($contactData));

        if($contact->isDirty('iban')) $this->authorize('update_iban', $contact);
        if($contact->isDirty('owner_id')) $this->authorize('update_owner', $contact);

        $contact->save();

        $accountData = $this->sanitizeData($accountData, [
            'typeId' => 'nullable',
            'industryId' => 'nullable',
            'squareMeters' => 'integer',
        ]);
        $account->fill($this->arrayKeysToSnakeCase($accountData));
        $account->save();

        // Contact exact zo teruggeven als bij het openen van een bestaand contact
        // Dus kan hier gebruik maken van bestaande controller
        return (new ContactController())->show($contact->fresh(), $request);
    }

    public function peek(Request $request)
    {
        $accounts = Account::orderBy('name', 'asc')->get();

        return AccountPeek::collection($accounts);
    }
}
