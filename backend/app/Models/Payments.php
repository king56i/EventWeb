<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    //
    protected $table = "payments";
    public function order(){
        return $this->belongsTo(Orders::class);
    }
}
