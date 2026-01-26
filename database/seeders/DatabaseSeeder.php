<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\About;
use App\Models\AboutGoal;
use App\Models\Chart;
use App\Models\Contact;
use App\Models\Menu;
use App\Models\SubMenu;
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
    ->create([
      'name' => 'Test Admin',
      'email' => 'test@admin.com',
      'password' => bcrypt('password#1234'),
      'role' => Role::ADMIN,
    ]);

    User::factory()
    ->create([
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

    // Chart::factory(300)
    // ->create();

    Menu::factory()
    ->create([
      'name' => 'Beranda',
      'url' => '/',
    ]);

    Menu::factory()
    ->create([
      'name' => 'Tentang Kami',
      'url' => '/TentangKami',
    ]);

    $menu_layanan = Menu::factory()
    ->create([
      'name' => 'Layanan',
      'url' => null,
    ]);
    SubMenu::factory()
    ->recycle($menu_layanan)
    ->create([
      'name' => 'Endorsement',
      'url' => '/Endorsement',
    ]);
    SubMenu::factory()
    ->recycle($menu_layanan)
    ->create([
      'name' => 'Pengelolaan Akun Medsos',
      'url' => '/PengelolaanAkunMedsos',
    ]);

    Menu::factory()
    ->create([
      'name' => 'Artikel',
      'url' => '/Artikel',
    ]);

    $menu_contact = Menu::factory()
    ->create([
      'name' => 'Kontak Kami',
      'url' => '',
    ]);
    Contact::factory()
    ->recycle($menu_contact)
    ->create();

    $about = About::factory()->create();
    AboutGoal::factory()
    ->recycle($about)
    ->create([
      'title' => '1. Fokus Eksklusif pada Pertumbuhan UMKM',
      'text' => 'Kami memiliki dedikasi khusus dan pemahaman mendalam terhadap tantangan dan potensi bisnis skala UMKM di Indonesia.' . "\n" .
                'Solusi Skalabilitas: Kami merancang strategi yang tidak hanya menarik perhatian, tetapi juga menghasilkan omset nyata. Fokus kami adalah menciptakan konten yang mendorong konversi dan memperkuat brand equity Anda di pasar yang kompetitif.' . "\n" .
                'Efisiensi Anggaran: Strategi kami dirancang untuk memberikan Return on Investment (ROI) maksimal dengan mengoptimalkan anggaran digital Anda, memastikan setiap rupiah yang diinvestasikan menghasilkan dampak signifikan.',
    ]);
    AboutGoal::factory()
    ->recycle($about)
    ->create([
      'title' => '2. Strategi Konten Berbasis Data (Data-Driven Strategy)',
      'text' => 'Kami melangkah melampaui konten yang "cantik" dan berfokus pada konten yang "bekerja" sesuai tujuan bisnis Anda.' . "\n" .
                'Penelitian Mendalam: Kami melakukan analisis pasar, tren, dan kompetitor secara ekstensif untuk memastikan pesan Anda relevan dan menonjol.' . "\n" .
                'Optimalisasi Berkelanjutan: Strategi kami bersifat dinamis. Kami secara rutin memantau metrik performa (seperti engagement rate, reach, dan konversi) untuk melakukan penyesuaian cepat, memastikan akun Anda selalu berada di jalur pertumbuhan yang optimal.',
    ]);
    AboutGoal::factory()
    ->recycle($about)
    ->create([
      'title' => '3. Tim Kolaboratif yang Berorientasi Visi',
      'text' => 'Growdience didirikan oleh tim yang memiliki visi tunggal: melihat bisnis Anda berhasil di ranah digital.' . "\n" .
                'Keahlian Terintegrasi: Tim kami terdiri dari spesialis konten, perancang visual, dan ahli strategi digital yang bekerja selaras untuk menghasilkan eksekusi yang konsisten dan profesional.' . "\n" .
                'Pendekatan Personal: Kami memperlakukan setiap klien sebagai rekan. Kami menyediakan komunikasi yang transparan dan laporan kinerja yang komprehensif, memastikan Anda selalu terinformasi mengenai perkembangan dan hasil yang dicapai.',
    ]);
  }
}
