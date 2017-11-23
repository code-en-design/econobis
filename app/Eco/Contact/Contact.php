<?php

namespace App\Eco\Contact;

use App\Eco\Account\Account;
use App\Eco\Address\Address;
use App\Eco\ContactNote\ContactNote;
use App\Eco\Address\AddressType;
use App\Eco\EmailAddress\EmailAddress;
use App\Eco\Registration\Registration;
use App\Eco\Person\Person;
use App\Eco\PhoneNumber\PhoneNumber;
use App\Eco\User\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laracasts\Presenter\PresentableTrait;
use Venturecraft\Revisionable\RevisionableTrait;

class Contact extends Model
{
    use PresentableTrait, RevisionableTrait, SoftDeletes;
    protected $presenter = ContactPresenter::class;

    protected $guarded = ['id'];

    protected $casts = [
        'newsletter' => 'boolean',
        'liable' => 'boolean',
    ];

    protected $dates = [
        'member_since',
        'member_until',
    ];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function primaryAddress()
    {
        return $this->hasOne(Address::class)->where('primary', true);
    }

    public function emailAddresses()
    {
        return $this->hasMany(EmailAddress::class);
    }

    public function primaryEmailAddress()
    {
        return $this->hasOne(EmailAddress::class)->where('primary', true);
    }

    public function phoneNumbers()
    {
        return $this->hasMany(PhoneNumber::class);
    }

    public function primaryphoneNumber()
    {
        return $this->hasOne(PhoneNumber::class)->where('primary', true);
    }

    public function notes()
    {
        return $this->hasMany(ContactNote::class);
    }

    public function account()
    {
        return $this->hasOne(Account::class);
    }

    public function person()
    {
        return $this->hasOne(Person::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    function registrations() {
        return $this->hasMany(Registration::class, 'contact_id');
    }

    public function getStatus()
    {
        if(!$this->status_id) return null;

        return ContactStatus::get($this->status_id);
    }

    public function createdBy(){
        return $this->belongsTo(User::class);
    }

    public function updatedBy(){
        return $this->belongsTo(User::class);
    }

    public function isPerson()
    {
        return ($this->type_id == ContactType::PERSON);
    }

    public function isAccount()
    {
        return ($this->type_id == ContactType::ACCOUNT);
    }

    public function getType()
    {
        if(!$this->type_id) return null;

        return ContactType::get($this->type_id);
    }

    //Returns addresses array as Type - Streetname - Number
    //Primary address always comes first
    public function getPrettyAddresses(){
        $this->load('addresses');
        $addresses = [];
        foreach ($this->addresses as $address){
            if($address->primary == 1){
                array_unshift($addresses, $address->getType()->name . ' - ' . $address->street . ' - ' . $address->number);
            }
            else{
                $addresses[] = $address->getType()->name . ' - ' . $address->street . ' - ' . $address->number;
            }
        }

        return $addresses;
    }
}
