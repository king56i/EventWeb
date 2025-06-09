<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class modelAdmin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            'name'=>'King','email' => 'admin@gmail.com','password'=>Hash::make('123456'),'email_verified_at'=>now(),
        ]);
        $userId = DB::getPdo()->lastInsertId();
        DB::table('model_has_roles')->insert([
            ['role_id'=>1,'model_type'=>'App\Models\User','model_id'=>$userId],
        ]);
    }
}
