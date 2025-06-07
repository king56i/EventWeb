<?php

namespace Database\Seeders;

use App\Models\Organizers;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call([
            OrganizersSeeder::class,
            EventsSeeder::class,
            addRolesSeeder::class,
            addPermissionsSeeder::class,
            addPermsToRole::class
        ]);
    }
}
