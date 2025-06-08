<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class ModelHasRoles extends Model
{
    //
    protected $table = 'model_has_roles';
    protected $fillable = ['model_id','role_id'];
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
