<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\About>
 */
class AboutFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'profile_owner' => '/images/about/hero.png',
      'profile_company' => '/images/about/profile.jpg',
      'description' => 'Growdience Creative adalah Industri kreatif yang didirikan pada tahun 2025 dengan komitmen kuat untuk mendorong pertumbuhan bisnis melalui strategi digital yang inovatif. Pendirian Growdience terinspirasi dari dinamika industri kreatif dan kebutuhan mendesak UMKM Indonesia untuk beradaptasi serta unggul di ranah digital, sejalan dengan visi agensi terkemuka di sektor ini.',
      'visi' => 'Menjadi mitra strategis terdepan dalam transformasi digital dan branding bagi pelaku usaha di Indonesia.',
      'misi' => 'Menyediakan layanan manajemen media sosial yang efektif untuk meningkatkan visibilitas dan omset UMKM.' . "\n" .
                'Membangun citra dan ekuitas merek yang kuat melalui strategi branding yang terpersonalisasi.' . "\n" .
                'Mengembangkan ekosistem kolaborasi yang saling menguntungkan antara merek, perusahaan ternama, dan talent di industri kreatif.',
    ];
  }
}
