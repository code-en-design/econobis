<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGmailFieldsToTableMailboxes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mailboxes', function (Blueprint $table) {
            $table->string('gmail_redirect_url')->nullable()->after('outgoing_server_type');
            $table->text('gmail_client_secret')->nullable()->after('outgoing_server_type');
            $table->string('gmail_client_id')->nullable()->after('outgoing_server_type');
            $table->string('gmail_project_id')->nullable()->after('outgoing_server_type');
            $table->string('incoming_server_type')->nullable()->after('outgoing_server_type');
        });

        foreach (\App\Eco\Mailbox\Mailbox::all() as $mailbox){
            $mailbox->incoming_server_type = 'imap';
            $mailbox->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('table_mailboxes', function (Blueprint $table) {
            $table->dropColumn('incoming_server_type');
            $table->dropColumn('gmail_project_id');
            $table->dropColumn('gmail_client_id');
            $table->dropColumn('gmail_client_secret');
            $table->dropColumn('gmail_redirect_url');
        });
    }
}
