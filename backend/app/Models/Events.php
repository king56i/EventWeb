<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    //
    protected $table = "events";
    protected $fillable=[
        'title',
        'description',
        'start_date',
        'end_date',
        'location',
        'status'
    ];
    public function organizer(){
        return $this->belongsTo(Organizers::class);
    }
}
