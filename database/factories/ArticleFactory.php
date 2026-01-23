<?php

namespace Database\Factories;

use App\Models\Tag;
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
      'body' => fake()->paragraph(6),
    ];
  }

  public function configure()
  {
    return $this->afterCreating(function ($article) {
      $tags = Tag::inRandomOrder()->take(rand(1, 4))->pluck('id');
      $article->tags()->attach($tags);
    });
  }
}
