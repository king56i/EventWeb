<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class addPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        {
            $permissions = [
                [   
                    'id'=>1,
                    'name' => 'create event',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'id'=>2,
                    'name' => 'delete event',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'id'=>3,
                    'name' => 'update event',
                    'guard_name' => 'api',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ]
            ];

            foreach ($permissions as $permission) {
                Permission::create($permission);
            }
        }
    }
}
