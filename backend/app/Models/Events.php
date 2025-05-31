<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    //
    protected $table = "events";
    protected $primaryKey = "id";
    protected $fillable=[
        'title',
        'description',
        'start_date',
        'end_date',
        'location',
        'status'
    ];
    public function organizer(){
        return $this->belongsTo(Organizers::class,"organizers_id");
    }
    public function category(){
        return $this->belongsTo(Categories::class);
    }
    public function notifications(){
        return $this->hasMany(Notifications::class);
    }
    public function orders(){
        return $this->hasMany(Orders::class);
    }
}
