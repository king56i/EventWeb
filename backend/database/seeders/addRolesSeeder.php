<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class addRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        {
            $roles = [
                [   
                    'id'=>1,
                    'name' => 'admin',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'id'=>2,
                    'name' => 'employee',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'id'=>3,
                    'name' => 'user',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ]
            ];

            foreach ($roles as $role) {
                Role::create($role);
            }
        }
    }
}
