<?php

namespace Database\Seeders;

use App\Enums\Role;
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
      'name' => 'System Account Management',
      'email' => 'system@example.com',
      'role' => Role::SYSTEM,
      'password' => bcrypt('super-secret'),
    ]);

    User::factory()->create([
      'name' => 'Admin Account Management',
      'email' => 'admin@example.com',
      'role' => Role::ADMIN,
      'password' => bcrypt('super-secret'),
    ]);

    User::factory()->create([
      'name' => 'User Account Management',
      'email' => 'user@example.com',
      'role' => Role::USER,
      'password' => bcrypt('super-secret'),
    ]);

    User::factory(100)->create();
  }
}
