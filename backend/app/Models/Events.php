<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Events extends Model
{
    //
    use SoftDeletes;
    protected $table = "events";
    protected $dates = ['deleted_at'];
    protected $primaryKey = "id";
    protected $fillable=[
        'title',
        'description',
        'start_date',
        'end_date',
        'organizers_id',
        'location',
        'banner',
        'thumbnail',
        'images',
        'is_featured',
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
