<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\HasFactory;

class RaffleTicket extends Model
{
    protected $fillable = [
        'raffle_entry_id',
        'full_name',
        'raffle_code'
    ];

    public function raffleEntry()
    {
        return $this->belongsTo(RaffleEntry::class);
    }
}