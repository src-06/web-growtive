<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Chart;
use App\Models\Article;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::factory()
    ->has(Article::factory()->count(4))->create([
      'name' => 'Test Admin',
      'email' => 'test@admin.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::ADMIN,
    ]);

    User::factory()
    ->has(Article::factory()->count(4))->create([
      'name' => 'Test Editor',
      'email' => 'test@editor.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::EDITOR,
    ]);

    User::factory()
    ->create([
      'name' => 'Test User',
      'email' => 'test@user.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::USER,
    ]);

    Chart::factory(300)
    ->create();

    // Article::factory(20)
    // ->recycle(User::factory(3)->create())
    // ->create();
  }
}
