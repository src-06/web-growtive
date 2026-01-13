<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Charts;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::factory()->create([
      'name' => 'Owner Account Management',
      'email' => 'owner@gd.id',
      'role' => Role::OWNER,
      'password' => bcrypt('12345678'),
    ]);

    User::factory()->create([
      'name' => 'Admin Account Management',
      'email' => 'admin@gd.id',
      'role' => Role::ADMIN,
      'password' => bcrypt('12345678'),
    ]);

    User::factory()->create([
      'name' => 'User Account Management',
      'email' => 'user@gd.id',
      'role' => Role::USER,
      'password' => bcrypt('12345678'),
    ]);

    // User::factory(100)->create();

    Charts::factory(500)->create();
  }
}
