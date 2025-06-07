<?php

namespace Database\Seeders;

use App\Models\RoleHasPermissions;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class addPermsToRole extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('role_has_permissions')->insert([
            ['permission_id'=>1,'role_id' => 1],
            ['permission_id'=>2,'role_id' => 1],
            ['permission_id'=>3,'role_id' => 1],
            
            ['permission_id'=>1,'role_id' => 2],
            ['permission_id'=>2,'role_id' => 2],
            ['permission_id'=>3,'role_id' => 2],
        ]);
    }
}
