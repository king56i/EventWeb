<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organizers extends Model
{
    //
    protected $table = "organizers";
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'contact_info',
        'description'
    ];
    public function events(){
        return $this->hasMany(Events::class,"organizers_id");
    }

}
