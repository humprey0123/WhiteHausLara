<?php

namespace App\Http\Controllers;
use App\Models\RaffleEntry;
use App\Models\RaffleTicket;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RaffleEntryController extends Controller
{
    public function store(Request $request)
    {

        $request->merge([
            'receipt_amount' => str_replace(',', '', $request->receipt_amount),
        ]);

        $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_initial' => 'nullable|string|max:1',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'contact_num' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'branch' => 'required|string|max:255',
            'purchase_date' => 'required|date',
            'invoice' => 'required|string|max:255',
            'receipt_amount'  => 'required|string|max:255',
            'receipt_img' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        DB::transaction(function () use ($request) {

            $path = null;
            if ($request->hasFile('receipt_img')){
                $path = $request->file('receipt_img')->store('receipts', 'public');
            }

            $raffleEntry = RaffleEntry::create([
                'first_name' => $request->first_name,
                'middle_initial' =>$request->middle_initial,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'contact_num' => $request->contact_num,
                'address' => $request->address,
                'branch' => $request->branch,
                'purchase_date' => $request->purchase_date,
                'invoice' => $request->invoice,
                'receipt_amount' => $request->receipt_amount,
                'receipt_img' => $path,
            ]);

            $fullName = 
                $request->first_name . ' ' . 
                ($request->middle_initial ? $request->middle_initial . ' ' : ' ')
                . $request->last_name;

            $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $numbers = '1234567890';
            $randomLetters = '';
            for ($i=0 ; $i < 8 ; $i++) {
                $randomLetters .= $letters[rand(0, strlen($letters) - 1)];
            }

            $randomNumbers = '';
            for ($i=0 ; $i < 10 ; $i++) {
                $randomNumbers .= $numbers[rand(0, strlen($numbers) - 1)];
            }
                
            do {
                $raffleCode = 'WH-' . str_shuffle($randomLetters . $randomNumbers);
            } while (RaffleTicket::where('raffle_code', $raffleCode)->exists());

            RaffleTicket::create([
                'raffle_entry_id' => $raffleEntry->id,
                'full_name' => $fullName,
                'raffle_code' => $raffleCode,
            ]);
        });

        return response()->json([
            'success' => true,
        ]);    
    }
}
