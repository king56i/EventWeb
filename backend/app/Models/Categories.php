<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    //
    protected $table = "categories";
    protected $fillable = [
        "name",
        "description"
    ];
    public function events(){
        return $this->hasMany(Events::class);
    }
}
