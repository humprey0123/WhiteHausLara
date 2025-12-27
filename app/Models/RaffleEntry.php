<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\HasFactory;

class RaffleEntry extends Model
{

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
}