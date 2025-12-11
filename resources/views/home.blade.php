<?php
/**
 * https://www.figma.com/design/5FjjO7eUN7vXMMWB4NJX6m/AlipProject?node-id=13-3117&t=8pbnyLA98rwsUcXr-1
 */
?>

@extends('layouts.app')

@section('content')
  <section
    id="HeroSections"
  >
    <div
      class="w-[65%] mx-auto flex items-center"
    >
      <div
        class="w-102 py-45 flex flex-col gap-9 text-4xl text-blue-400"
      >
        <h1
          class="font-black uppercase"
        >periklanan melalui <span class="text-blue-600">digital</span></h1>
        <h1
          class="italic uppercase"
        >Pengelolaaan Akun Media <span class="text-blue-600">Social</span></h1>
        <div
          class="flex items-center"
        >
          <button
            class="px-4 h-11 text-lg text-white bg-blue-950 rounded-full cursor-pointer"
          >About Us</button>
          <x-lucide-chevron-right class="size-15 text-blue-950" />
        </div>
      </div>
      <div
        class="mt-10"
      >
        <img
          src="{{ Vite::asset('resources/img/frame-ig.svg') }}"
          alt="ig"
          class="w-50 drop-shadow-md drop-shadow-black rotate-12"
        >
        <img
          src="{{ Vite::asset('resources/img/frame-tt.svg') }}"
          alt="tt"
          class="w-50 translate-x-15 -translate-y-25"
        >
        <img
          src="{{ Vite::asset('resources/img/frame-fb.svg') }}"
          alt="fb"
          class="w-50 drop-shadow-md drop-shadow-black -translate-x-6 -translate-y-49 -rotate-25"
        >
      </div>
    </div>
  </section>

  <section
    id="ServiceSections"
    class="py-13 flex flex-col items-center bg-white border-t-2 border-blue-600"
  >
    <h1
      class="text-6xl text-blue-950 font-bold"
    >Apa Yang Saya Tawarkan</h1>
    <div
      class="py-15 flex gap-4"
    >
      <img
        src="{{ Vite::asset('resources/img/card-ig.svg') }}"
        alt="tt"
        class="w-80 rotate-15"
      >
      <img
        src="{{ Vite::asset('resources/img/card-tt.svg') }}"
        alt="tt"
        class="w-80 translate-y-13"
      >
      <img
        src="{{ Vite::asset('resources/img/card-fb.svg') }}"
        alt="tt"
        class="w-80 -rotate-15"
      >
    </div>
  </section>

  <section
    id="AboutSections"
    class="py-20 flex flex-col items-center bg-white"
  >
    <div
      class="text-blue-950 text-center"
    >
      <h1
        class="text-6xl font-bold"
      >Tentang Kami</h1>
      <p
        class="text-2xl"
      >Mengenal lebih jauh tentang produk dan edukasi kami</p>
    </div>
    <div
      class="relative w-[60%] mt-10 pt-1 bg-blue-800 rounded-[3rem]"
    >
      <div
        class="absolute top-5 -left-24 w-50 h-70 py-4 -rotate-25 flex items-center bg-blue-600/60 rounded-[100px/140px]"
      >
        <img src="{{ Vite::asset('resources/img/char-a.svg') }}" alt="char-a" class="absolute top-20 left-15 w-34 rotate-25">
      </div>
      <div
        class="px-12 py-8 bg-white rounded-[2.9rem] shadow-lg"
      >
        <p
          class="ml-20 text-xl text-blue-900"
        >Kami adalah tim yang berfokus pada layanan <span class="font-black">periklanan digital dan pengelolaan media sosial</span> untuk membantu bisnis meningkatkan visibilitas dan menjangkau audiens yang lebih luas. Dengan memanfaatkan strategi digital yang tepat, kami membantu brand membangun kehadiran online yang kuat, efektif, dan relevan dengan kebutuhan pasar.</p>
      </div>
    </div>
    <div
      class="w-full mt-20"
    >
      <h1
        class="pl-18 text-4xl text-blue-950 font-bold"
      >Benefit <span class="font-light italic">kerjasama</span></h1>
      <div
        class="w-[95%] mx-auto flex gap-18"
      >
        <x-cards.about>
          <h1>Pengelolaan</h1>
          <p>
            Setiap sosial media akan di kelola dengan baik untuk meningkatkan Engagement
            pada media sosial
          </p>
        </x-cards.about>
        <x-cards.about>
          <h1>Jangkauan</h1>
          <p>
            Jangkauan pasar pada Periklanan untuk meningkatkan jumlah pengunjung pada
            Marketplace
          </p>
        </x-cards.about>
        <x-cards.about>
          <h1>Digitalisasi</h1>
          <p>
            Semua produk penjualan atau periklanan akan dilakukan secara
            digital untuk
          </p>
        </x-cards.about>
      </div>
    </div>
    <hr class="w-[80%] h-1 my-10 border-0 bg-blue-900 rounded-full">
    <div
      class="relative w-full py-10 flex"
    >
      <div
        class="relative w-full h-full flex items-center pl-30"
      >
        <x-bi-circle-fill class="size-5 mb-6 text-blue-800" />
        <div
          class="ml-4"
        >
          <h1
            class="text-2xl text-blue-950 font-bold"
          >2025</h1>
          <p
            class="text-blue-800"
          >Startup</p>
        </div>
      </div>
      <div>
        <div class="absolute -right-30 w-80 h-50 bg-blue-600/70 rounded-[160px/100px]">
          <img src="{{ Vite::asset('resources/img/char-b.svg') }}" alt="char-b" class="absolute -top-5 left-15 w-30">
        </div>
      </div>
    </div>
  </section>

  <section
    id="ContactSections"
    class="mt-30 py-10 flex flex-col items-center bg-blue-700"
  >
    <h1
      class="text-3xl text-white font-bold"
    >Contact</h1>
    <div
      class="mt-5 flex items-center gap-5 text-white"
    >
      <x-ri-instagram-fill class="size-17" />
      <x-bi-facebook class="size-18" />
      <x-bi-linkedin class="size-14 ml-2" />
    </div>
  </section>
@endsection
