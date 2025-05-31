<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //
    protected $table = "orders";
    protected $fillable = [

    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function event(){
        return $this->belongsTo(Events::class);
    }
    public function ticket(){
        return $this->belongsTo(Tickets::class);
    }
    public function payments(){
        return $this->hasMany(Payments::class);
    }
}
