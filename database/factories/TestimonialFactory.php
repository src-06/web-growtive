<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'profile' => '/images/testimonial/profile_1.png',
      'name' => fake()->name(),
      'company' => fake()->company(),
      'testimonial' => fake()->paragraph(7),
    ];
  }
}
