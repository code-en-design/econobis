<?php

namespace App\Providers;

use App\Eco\Campaign\Campaign;
use App\Eco\Campaign\CampaignObserver;
use App\Eco\Document\Document;
use App\Eco\Document\DocumentObserver;
use App\Eco\EmailTemplate\EmailTemplate;
use App\Eco\EmailTemplate\EmailTemplateObserver;
use App\Eco\Measure\Measure;
use App\Eco\Measure\MeasureObserver;
use App\Eco\Opportunity\Opportunity;
use App\Eco\Opportunity\OpportunityObserver;
use App\Eco\Opportunity\OpportunityQuotation;
use App\Eco\Opportunity\OpportunityQuotationObserver;
use App\Eco\Organisation\Organisation;
use App\Eco\Organisation\OrganisationObserver;
use App\Eco\Address\Address;
use App\Eco\Address\AddressObserver;
use App\Eco\Contact\Contact;
use App\Eco\Contact\ContactObserver;
use App\Eco\ContactGroup\ContactGroup;
use App\Eco\ContactGroup\ContactGroupObserver;
use App\Eco\ContactNote\ContactNote;
use App\Eco\ContactNote\ContactNoteObserver;
use App\Eco\EmailAddress\EmailAddress;
use App\Eco\EmailAddress\EmailAddressObserver;
use App\Eco\Person\Person;
use App\Eco\Person\PersonObserver;
use App\Eco\PhoneNumber\PhoneNumber;
use App\Eco\PhoneNumber\PhoneNumberObserver;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Person::observe(PersonObserver::class);
        Organisation::observe(OrganisationObserver::class);
        Address::observe(AddressObserver::class);
        EmailAddress::observe(EmailAddressObserver::class);
        PhoneNumber::observe(PhoneNumberObserver::class);
        Contact::observe(ContactObserver::class);
        ContactNote::observe(ContactNoteObserver::class);
        ContactGroup::observe(ContactGroupObserver::class);
        Opportunity::observe(OpportunityObserver::class);
        OpportunityQuotation::observe(OpportunityQuotationObserver::class);
        Campaign::observe(CampaignObserver::class);
        Measure::observe(MeasureObserver::class);
        EmailTemplate::observe(EmailTemplateObserver::class);
        Document::observe(DocumentObserver::class);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
