<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\HasFactory;

class RaffleEntry extends Model
{


    protected $casts = [
    'created_at' => 'datetime:m-d-Y H:i', // H:i is for testing purposes only. Should Be removed before deployment 
    'updated_at' => 'datetime:m-d-Y H:i',
];

    protected $fillable=[
        'first_name',
        'middle_initial',
        'last_name',
        'email',
        'contact_num',
        'address',
        'branch',
        'purchase_date',
        'invoice',
        'receipt_amount',
        'receipt_img',
    ];

    public function raffleTicket()
    {
        return $this->hasOne(RaffleTicket::class);
    }
}