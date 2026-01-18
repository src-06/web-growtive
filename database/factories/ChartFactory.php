<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chart>
 */
class ChartFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'instagram' => random_int(0, 15),
      'tiktok' => random_int(0, 15),
      'instagram_tiktok' => random_int(0, 15),
      'endorsement' => random_int(0, 15),
      'created_at' => fake()->dateTimeBetween('-2 year', '+1 year'),
    ];
  }
}
