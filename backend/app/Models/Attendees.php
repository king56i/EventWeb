<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendees extends Model
{
    //
    protected $table = "attendees";
    protected $fillable = [
        "fullname",
        "email"
    ];
    public function order(){
        return $this->belongsTo(Orders::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function ticket(){
        return $this->belongsTo(Tickets::class);
    }
}
