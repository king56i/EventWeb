<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    //
    protected $table = "tickets";
    protected $fillable = [

    ];
    public function orders(){
        return $this->hasMany(Tickets::class);
    }
}
