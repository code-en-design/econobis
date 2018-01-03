<?php

use App\Eco\User\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')
    ->middleware('auth:api')
    ->group(function () {

        Route::get('/me', 'User\UserController@me');

        Route::get('/system-data', 'SystemData\SystemDataController@get');

        Route::get('/contact/grid', 'Contact\GridController@index');
        Route::get('/contact/peek', 'Contact\ContactController@peek');
        Route::post('contact/{contact}/owner/{user}/associate', 'Contact\ContactController@associateOwner');
        Route::get('/contact/{contact}', 'Contact\ContactController@show');
        Route::get('/contact/{contact}/registrations', 'Contact\ContactController@registrations');
        Route::get('/contact/{contact}/groups', 'Contact\ContactController@groups');
        Route::post('/contact/{contact}/delete', 'Contact\ContactController@destroy');
        Route::get('/contact/{contact}/tasks', 'Contact\ContactController@tasks');

        Route::get('/registration/grid', 'Registration\RegistrationController@grid');
        Route::get('/registration/peek', 'Registration\RegistrationController@peek');
        Route::get('/registration/amount-active', 'Registration\RegistrationController@getAmountOfActiveRegistrations');
        Route::get('/contact/{contact}/registration', 'Registration\RegistrationController@getStore');
        Route::post('/contact/registration', 'Registration\RegistrationController@store');
        Route::get('/registration/{registration}', 'Registration\RegistrationController@show');
        Route::post('/registration/{registration}/update', 'Registration\RegistrationController@update');
        Route::post('/registration/{registration}/delete', 'Registration\RegistrationController@destroy');

        Route::post('/registration/{registration}/measure-taken', 'Registration\RegistrationController@storeMeasureTaken');
        Route::post('/registration/{measureTaken}/measure-taken/update', 'Registration\RegistrationController@updateMeasureTaken');
        Route::post('/registration/{measureTaken}/measure-taken/delete', 'Registration\RegistrationController@deleteMeasureTaken');

        Route::post('/registration/{registration}/measure-requested', 'Registration\RegistrationController@storeMeasureRequested');
        Route::post('/registration/{measureRequested}/measure-requested/update', 'Registration\RegistrationController@updateMeasureRequested');
        Route::post('/registration/{measureRequested}/measure-requested/delete', 'Registration\RegistrationController@deleteMeasureRequested');

        Route::post('/registration/{registration}/note', 'Registration\RegistrationController@storeNote');
        Route::post('/registration/note/{note}/update', 'Registration\RegistrationController@updateNote');
        Route::post('/registration/note/{note}/delete', 'Registration\RegistrationController@deleteNote');
        Route::get('/registration/{registration}/tasks', 'Registration\RegistrationController@tasks');

        Route::get('/user/grid', 'User\GridController@index');
        Route::post('/user', 'User\UserController@store');
        Route::get('/user/{user}', 'User\UserController@show');
        Route::post('/user/{user}', 'User\UserController@update');
        Route::get('/user/with-permission/{permission}', 'User\UserController@withPermission');
        Route::post('/user/{user}/roles/add/{role}', 'User\UserController@addRole');
        Route::post('/user/{user}/roles/remove/{role}', 'User\UserController@removeRole');

        Route::post('/address', 'Address\AddressController@store');
        Route::post('/address/{address}', 'Address\AddressController@update');
        Route::post('/address/{address}/delete', 'Address\AddressController@destroy');

        Route::post('/email-address', 'EmailAddress\EmailAddressController@store');
        Route::post('/email-address/{emailAddress}', 'EmailAddress\EmailAddressController@update');
        Route::post('/email-address/{emailAddress}/delete', 'EmailAddress\EmailAddressController@destroy');

        Route::post('/phone-number', 'PhoneNumber\PhoneNumberController@store');
        Route::post('/phone-number/{phoneNumber}', 'PhoneNumber\PhoneNumberController@update');
        Route::post('/phone-number/{phoneNumber}/delete', 'PhoneNumber\PhoneNumberController@destroy');

        Route::post('/person', 'Person\PersonController@store');
        Route::post('/person/{person}', 'Person\PersonController@update');
        Route::get('/person/peek/no-organisation', 'Person\PersonController@peekNoOrganisation');

        Route::post('/organisation', 'Organisation\OrganisationController@store');
        Route::post('/organisation/{organisation}', 'Organisation\OrganisationController@update');

        Route::post('/contact-note', 'ContactNote\ContactNoteController@store');
        Route::post('/contact-note/{contactNote}', 'ContactNote\ContactNoteController@update');
        Route::post('/contact-note/{contactNote}/delete', 'ContactNote\ContactNoteController@destroy');

        Route::get('/organisation/peek', 'Organisation\OrganisationController@peek');

        Route::get('contact-group/grid', 'ContactGroup\ContactGroupController@grid');
        Route::get('contact-group/peek', 'ContactGroup\ContactGroupController@peek');
        Route::get('contact-group/{contactGroup}', 'ContactGroup\ContactGroupController@show');
        Route::get('contact-group/{contactGroup}/name', 'ContactGroup\ContactGroupController@getName');
        Route::post('contact-group/', 'ContactGroup\ContactGroupController@store');
        Route::post('contact-group/{contactGroup}', 'ContactGroup\ContactGroupController@update');
        Route::post('contact-group/{contactGroup}/delete', 'ContactGroup\ContactGroupController@destroy');
        Route::get('contact-group/{contactGroup}/contacts', 'ContactGroup\ContactGroupController@contacts');
        Route::post('contact-group/{contactGroup}/contacts/add/{contact}', 'ContactGroup\ContactGroupController@addContact');
        Route::post('contact-group/{contactGroup}/contacts/remove/{contact}', 'ContactGroup\ContactGroupController@removeContact');
        Route::get('contact-group/{contactGroup}/contacts/grid', 'ContactGroup\ContactGroupController@gridContacts');
        Route::post('contact-group/{contactGroup}/contacts/add-many', 'ContactGroup\ContactGroupController@addContacts');


        Route::get('opportunity/grid', 'Opportunity\OpportunityController@grid');
        Route::get('opportunity/peek', 'Opportunity\OpportunityController@peek');
        Route::get('opportunity/amount-active', 'Opportunity\OpportunityController@getAmountOfActiveOpportunities');
        Route::get('opportunity/{opportunity}', 'Opportunity\OpportunityController@show');
        Route::post('opportunity/', 'Opportunity\OpportunityController@store');
        Route::post('opportunity/{opportunity}', 'Opportunity\OpportunityController@update');
        Route::post('opportunity/{opportunity}/delete', 'Opportunity\OpportunityController@destroy');

        Route::post('opportunity/{opportunity}/quotation', 'Opportunity\OpportunityQuotationController@store');
        Route::post('opportunity/quotation/{opportunityQuotation}', 'Opportunity\OpportunityQuotationController@update');
        Route::post('opportunity/quotation/{opportunityQuotation}/delete', 'Opportunity\OpportunityQuotationController@destroy');

        Route::get('contact-group/{contactGroup}/tasks', 'ContactGroup\ContactGroupController@tasks');

        Route::get('task/grid', 'Task\TaskController@grid');
        Route::get('task/amount-active', 'Task\TaskController@getAmountOfActiveTasks');
        Route::get('task/{task}', 'Task\TaskController@show');
        Route::post('task', 'Task\TaskController@store');
        Route::post('task/{task}', 'Task\TaskController@update');
        Route::post('task/{task}/delete', 'Task\TaskController@destroy');
        Route::post('task/{task}/finish', 'Task\TaskController@finish');
        Route::get('task/{task}/attachments', 'Task\TaskController@attachments');
        Route::post('task/{task}/attachments', 'Task\TaskAttachmentController@store');
        Route::post('task/{task}/properties', 'Task\TaskPropertyValueController@store');

        Route::get('task-attachment/{taskAttachment}/download', 'Task\TaskAttachmentController@download');
        Route::post('task-attachment/{taskAttachment}/delete', 'Task\TaskAttachmentController@destroy');

        Route::post('task-property-value/{taskPropertyValue}', 'Task\TaskPropertyValueController@update');
        Route::post('task-property-value/{taskPropertyValue}/delete', 'Task\TaskPropertyValueController@destroy');

        Route::get('campaign/grid', 'Campaign\CampaignController@grid');
        Route::get('campaign/peek', 'Campaign\CampaignController@peek');
        Route::get('campaign/{campaign}', 'Campaign\CampaignController@show');
        Route::post('campaign/', 'Campaign\CampaignController@store');
        Route::post('campaign/{campaign}/opportunity/{opportunity}/associate', 'Campaign\CampaignController@associateOpportunity');
        Route::post('campaign/opportunity/{opportunity}/dissociate', 'Campaign\CampaignController@dissociateOpportunity');
        Route::post('campaign/{campaign}', 'Campaign\CampaignController@update');
        Route::post('campaign/{campaign}/delete', 'Campaign\CampaignController@destroy');
        Route::post('campaign/{campaign}/owner/{user}/associate', 'Campaign\CampaignController@associateOwner');
        Route::post('campaign/{campaign}/response/{contact}/attach', 'Campaign\CampaignController@attachResponse');
        Route::post('campaign/{campaign}/response/{contact}/detach', 'Campaign\CampaignController@detachResponse');
        Route::post('campaign/{campaign}/organisation/{organisation}/attach', 'Campaign\CampaignController@attachOrganisation');
        Route::post('campaign/{campaign}/organisation/{organisation}/detach', 'Campaign\CampaignController@detachOrganisation');

        Route::get('measure/grid', 'Measure\MeasureController@grid');
        Route::get('measure/{measure}', 'Measure\MeasureController@show');
        Route::post('measure/', 'Measure\MeasureController@store');
        Route::post('measure/faq/{measureFaq}/delete', 'Measure\MeasureController@destroyFaq');
        Route::post('measure/faq/{measureFaq}/update', 'Measure\MeasureController@updateFaq');
        Route::post('measure/{measure}/opportunity/{opportunity}/associate', 'Measure\MeasureController@associateOpportunity');
        Route::post('measure/{measure}/supplier/{organisation}/attach', 'Measure\MeasureController@attachSupplier');
        Route::post('measure/{measure}/supplier/{organisation}/detach', 'Measure\MeasureController@detachSupplier');
        Route::post('measure/{measure}/faq', 'Measure\MeasureController@storeFaq');
        Route::post('measure/{measure}', 'Measure\MeasureController@update');
        Route::post('measure/{measure}/delete', 'Measure\MeasureController@destroy');

        Route::get('mailbox/grid', 'Mailbox\MailboxController@grid');
        Route::post('mailbox', 'Mailbox\MailboxController@store');
        Route::post('mailbox/{mailbox}', 'Mailbox\MailboxController@update');
        Route::post('mailbox/{mailbox}/users/add/{user}', 'Mailbox\MailboxController@addUser');
        Route::post('mailbox/{mailbox}/users/remove/{user}', 'Mailbox\MailboxController@removeUser');
    }
);