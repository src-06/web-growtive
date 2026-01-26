<?php

namespace Database\Factories;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'id_menu' => Menu::factory(),
      'url_wa' => 'https://wa.wizard.id/ac9290',
      'url_ig' => 'https://www.instagram.com/growdience.creative?igsh=MXhwMDdqeTNsd2tkeA%3D%3D&utm_source=qr',
      'url_tt' => 'https://www.tiktok.com/@growdience.creati?_r=1&_t=ZS-93GHT8LJgnN',
      'url_lk' => null,
    ];
  }
}
