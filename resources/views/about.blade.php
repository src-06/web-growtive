@extends('layouts.app')
@section('page', 'Tentang Kami')

@section('content')
  <section
    id="HeroSection"
    class="w-[90%] h-dvh mx-auto flex justify-evenly items-center gap-36"
  >
    <img
      src="/assets/images/bg/about.svg"
      alt="bg-header"
      class="-z-50 absolute -top-0.5 left-0 w-full"
    >
    <h1
      class="text-7xl font-bold uppercase"
    >Tentang kami</h1>
    <img
      src="/assets/images/about-hero.png"
      alt="about-hero"
      class="w-85"
    >
  </section>

  <section
    id="AboutSection"
    class="relative w-full h-screen"
  >
    <img
      src="/assets/images/bg/about1.svg"
      alt="bg-header"
      class="-z-50 absolute -top-0.5 left-0 w-full"
    >
    <div
      class="w-[90%] mx-auto h-full flex justify-evenly items-center gap-10"
    >
      <div
        class="w-140"
      >
        <p
          class="p-10 flex justify-center items-center text-bg text-shadow-sm text-shadow-bg/40 text-justify font-semibold bg-[#D9D9D9]/60 uppercase border-2 border-bg rounded-2xl"
        >Growdience Creative adalah Industri kreatif yang didirikan pada tahun 2025 dengan komitmen kuat untuk mendorong pertumbuhan bisnis melalui strategi digital yang inovatif. Pendirian Growdience terinspirasi dari dinamika industri kreatif dan kebutuhan mendesak UMKM Indonesia untuk beradaptasi serta unggul di ranah digital, sejalan dengan visi agensi terkemuka di sektor ini.</p>
      </div>
      <img
        src="/assets/images/profile.jpg"
        alt="about-hero"
        class="w-70 rounded-2xl"
      >
    </div>
  </section>

  <section
    id="VMSection"
    class="relative w-full h-screen"
  >
    <img
      src="/assets/images/bg/about2.svg"
      alt="bg-header"
      class="-z-50 absolute -top-0.5 left-0 w-full"
    >
    <div
      class="relative w-[90%] mx-auto h-full -mt-1 flex flex-col justify-center items-center gap-10"
    >
      <h1
        class="text-4xl text-bg font-bold"
      >VISI & MISI</h1>
      <div
        class="mb-22 flex gap-4 text-bg"
      >
        <div
          class="h-fit p-8 bg-white shadow shadow-bg/30 rounded-3xl"
        >
          <h1>VISI</h1>
          <p>Menjadi mitra strategis terdepan dalam transformasi digital dan branding bagi pelaku usaha di Indonesia.</p>
        </div>
        <div
          class="p-8 bg-white shadow shadow-bg/30 rounded-3xl"
        >
          <h1>MISI</h1>
          <ul
            class="ml-4 list-disc"
          >
            <li>Menyediakan layanan manajemen media sosial yang efektif untuk meningkatkan visibilitas dan omset UMKM.</li>
            <li>Membangun citra dan ekuitas merek yang kuat melalui strategi branding yang terpersonalisasi.</li>
            <li>Mengembangkan ekosistem kolaborasi yang saling menguntungkan antara merek, perusahaan ternama, dan talent di industri kreatif.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section
    id="WorkSection"
    class="w-full h-full py-16 bg-fg text-bg"
  >
    <div
      class="w-[90%] h-full mx-auto pt-8 pb-20 flex flex-wrap justify-center items-center gap-10"
    >
      <div
        class="w-[45%] p-5 bg-white rounded-3xl shadow"
      >
        <h1
          class="text-lg font-semibold"
        >1. Fokus Eksklusif pada Pertumbuhan UMKM</h1>
        <ul
          class="ml-4 pt-2 list-disc flex flex-col gap-4"
        >
          <li>Kami memiliki dedikasi khusus dan pemahaman mendalam terhadap tantangan dan potensi bisnis skala UMKM di Indonesia.</li>
          <li>Solusi Skalabilitas: Kami merancang strategi yang tidak hanya menarik perhatian, tetapi juga menghasilkan omset nyata. Fokus kami adalah menciptakan konten yang mendorong konversi dan memperkuat brand equity Anda di pasar yang kompetitif.</li>
          <li>Efisiensi Anggaran: Strategi kami dirancang untuk memberikan Return on Investment (ROI) maksimal dengan mengoptimalkan anggaran digital Anda, memastikan setiap rupiah yang diinvestasikan menghasilkan dampak signifikan.</li>
        </ul>
      </div>
      <div
        class="w-[45%] p-5 bg-white rounded-3xl shadow"
      >
        <h1
          class="text-lg font-semibold"
        >2. Strategi Konten Berbasis Data (Data-Driven Strategy)</h1>
        <ul
          class="ml-4 pt-2 list-disc flex flex-col gap-4"
        >
          <li>Kami melangkah melampaui konten yang "cantik" dan berfokus pada konten yang "bekerja" sesuai tujuan bisnis Anda.</li>
          <li>Penelitian Mendalam: Kami melakukan analisis pasar, tren, dan kompetitor secara ekstensif untuk memastikan pesan Anda relevan dan menonjol.</li>
          <li>Optimalisasi Berkelanjutan: Strategi kami bersifat dinamis. Kami secara rutin memantau metrik performa (seperti engagement rate, reach, dan konversi) untuk melakukan penyesuaian cepat, memastikan akun Anda selalu berada di jalur pertumbuhan yang optimal.</li>
        </ul>
      </div>
      <div
        class="w-[45%] p-5 bg-white rounded-3xl shadow"
      >
        <h1
          class="text-lg font-semibold"
        >3. Tim Kolaboratif yang Berorientasi Visi</h1>
        <ul
          class="ml-4 pt-2 list-disc flex flex-col gap-4"
        >
          <li>Growdience didirikan oleh tim yang memiliki visi tunggal: melihat bisnis Anda berhasil di ranah digital.</li>
          <li>Keahlian Terintegrasi: Tim kami terdiri dari spesialis konten, perancang visual, dan ahli strategi digital yang bekerja selaras untuk menghasilkan eksekusi yang konsisten dan profesional.</li>
          <li>Pendekatan Personal: Kami memperlakukan setiap klien sebagai rekan. Kami menyediakan komunikasi yang transparan dan laporan kinerja yang komprehensif, memastikan Anda selalu terinformasi mengenai perkembangan dan hasil yang dicapai.</li>
        </ul>
      </div>
    </div>
  </section>
@endsection