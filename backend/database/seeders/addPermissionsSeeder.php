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
                ['id'=>1,'name' => 'create event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>2,'name' => 'delete event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>3,'name' => 'update event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>4,'name' => 'restore event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>5,'name' => 'forceDelete event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>6,'name' => 'view event','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>7,'name' => 'create organizer','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>8,'name' => 'delete organizer','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>9,'name' => 'update organizer','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>10,'name' => 'view organizer','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>11,'name' => 'create permission','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>12,'name' => 'delete permission','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>13,'name' => 'update permission','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>14,'name' => 'view permission','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>15,'name' => 'create role','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>16,'name' => 'update role','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>17,'name' => 'delete role','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>18,'name' => 'view role','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>19,'name' => 'give perms','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>20,'name' => 'create user','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>21,'name' => 'update user','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>22,'name' => 'delete user','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],
                ['id'=>23,'name' => 'view user','guard_name' => 'api','created_at'=>now(),'updated_at'=>now()],

            ];

            foreach ($permissions as $permission) {
                Permission::create($permission);
            }
        }
    }
}
