<?php 

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void 
    {
        Schema::create('raffle_tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('raffle_entry_id')->constrained('raffle_entries')->onDelete('cascade');
            $table->string('full_name');
            $table->string('raffle_code')->unique();
            $table->timestamps(0);
        });
    }
};