<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'id_article' => Str::uuid(),
      'id_user' => User::factory(),
      'title' => fake()->sentence(4),
      'body' => fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)) . "\\n" .
                fake()->paragraph(rand(6, 20)),
      'created_at' => fake()->dateTimeBetween('-3 year', '-1 year'),
      'updated_at' => fake()->dateTimeBetween('-2 year', 'now'),
    ];
  }
}
