<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('company_serials', function (Blueprint $table) {
            $table->id();
            $table->string('company_serial');
            $table->date('date_bought');
            $table->timestamps(0);
        });
    }
    public function down() {
        Schema:dropIfExists('company_serials');
    }
};