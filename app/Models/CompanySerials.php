<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanySerials extends Model
{
    protected $fillable = [
        'company_serial',
        'date_bought'
    ];
}