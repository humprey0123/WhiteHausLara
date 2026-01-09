<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompanySerials;
use Illuminate\Support\Facades\Log;

class CompanySerialsController extends Controller
{
    public function store(Request $request)
    {   
        $request->validate([
            'company_serial' => 'required|string|max:50',
            'date_bought' => 'required|date',
        ]);

        $addSerial = CompanySerials::create([
            'company_serial' => $request->company_serial,
            'date_bought' => $request->date_bought,
        ]);

        Log::info('JOB END', ['time' => now()]);

    return response()->json([
        'message' => 'Serial added successfully',
        'data' => $addSerial
    ], 201);
    }
}
