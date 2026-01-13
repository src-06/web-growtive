<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Charts>
 */
class ChartsFactory extends Factory
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
      'ig_and_tt' => random_int(0, 15),
      'created_at' => fake()->dateTimeBetween('-2 year', '+1 year'),
    ];
  }
}
