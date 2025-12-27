<?php

namespace App\Http\Controllers;
use App\Models\RaffleEntry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RaffleEntryController extends Controller
{
    public function store(Request $request)
    {

        $request->merge([
            'receiptAmount' => str_replace(',', '', $request->receiptAmount),
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

        $path = null;
        if ($request->hasFile('receipt_img')){
            $fileName = time() . '_' . $request->file('receipt_img')->getClientOriginalName();
            $path = $request->file('receipt_img')->store('receipts', 'public');
        }

        RaffleEntry::create([
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


        // redirect this to confirmation
        return;
    }
}
