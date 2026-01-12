<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\RaffleEntryController;
use App\Http\Controllers\CompanySerialsController;
use App\Models\RaffleEntry;
use App\Models\RaffleTicket;
use App\Models\CompanySerials;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        // Fetch all raffle entries
        $entries = RaffleEntry::orderBy('created_at', 'desc')->get();

        return Inertia::render('dashboard',[
            'raffleEntries' => $entries
        ]);
    })->name('dashboard');
    
    Route::get('entries', function () {
        // Fetch all raffle entries
        $entries = RaffleEntry::orderBy('created_at', 'desc')->get();

        return Inertia::render('entries',[
            'raffleEntries' => $entries
        ]);
    })->name('entries');

    Route::get('tickets', function () {
        // Fetch all raffle tickets
        $tickets = RaffleTicket::orderBy('created_at', 'desc')->get();

        return Inertia::render('tickets',[
            'raffleTickets' => $tickets
        ]);
    })->name('tickets');

    Route::get('verification', function() {
        $entries = RaffleEntry::orderBy('created_at', 'desc')->get();

        return Inertia::render('verification', [
            'raffleEntries' => $entries
        ]);
    })->name('verification');
    
    Route::get('serials', function() {
        $entries = CompanySerials::orderBy('created_at', 'desc')->get();

        return Inertia::render('serials', [
            'companySerials' => $entries
        ]);
    })->name('serials');

    Route::post('/add-serial', [CompanySerialsController::class, 'store'])->name('serial.store');

});

Route::post('/raffle-entry', [RaffleEntryController::class, 'store'])->name('raffle.store');

require __DIR__.'/settings.php';
