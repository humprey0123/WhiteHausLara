<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up() {
        Schema::create('raffle_entries', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_initial')->nullable();
            $table->string('last_name');
            $table->string('email');
            $table->string('contact_num');
            $table->text('address');
            $table->string('branch');
            $table->date('purchase_date');
            $table->string('invoice');
            $table->string('receipt_amount');
            $table->string('receipt_img');
            $table->timestamps(0);
        });
    }

    public function down() {
        Schema::dropIfExists('raffle_entries');
    }
};