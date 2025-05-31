<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    //
    protected $table = "notifications";
    protected $fillable = [

    ];
    public function event(){
        return $this->belongsTo(Events::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
