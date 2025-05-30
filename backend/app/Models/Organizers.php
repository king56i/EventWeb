<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organizers extends Model
{
    //
    protected $table = "organizers";
    protected $fillable = [
        'name',
        'contact_info',
        'description'
    ];
    public function events(){
        return $this->hasMany(Events::class);
    }

}
