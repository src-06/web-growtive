<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Chart;
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
    User::factory()->create([
      'name' => 'Test Admin',
      'email' => 'test@admin.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::ADMIN,
    ]);

    User::factory()->create([
      'name' => 'Test Editor',
      'email' => 'test@editor.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::EDITOR,
    ]);

    User::factory()->create([
      'name' => 'Test User',
      'email' => 'test@user.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::USER,
    ]);

    Chart::factory(300)->create();
  }
}
