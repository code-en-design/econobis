<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Users
        $this->call(UsersSeeder::class);

        // Accounts (includes Contacts)
        $this->call(AccountsSeeder::class);
        // People (includes Contacts)
        $this->call(PeopleSeeder::class);
        // Addresses on Contacts
        $this->call(AddressesSeeder::class);
        // PhoneNumbers on Contacts
        $this->call(PhoneNumbersSeeder::class);
        // EmailAdresses on Contacts
        $this->call(EmailAddressesSeeder::class);
        // ContactNotes on Contacts
        $this->call(ContactNotesSeeder::class);
        // ContactGroups
        $this->call(ContactGroupsSeeder::class);
    }
}
