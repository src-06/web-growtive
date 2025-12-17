<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Growdience Creative | @yield('page')</title>
  </head>
  <body>
    <header
      class="z-50 absolute w-full h-20 px-20 flex justify-between items-center"
    >
      <h1
        class="text-2xl font-bold"
      >Digital Market</h1>
      <nav
        class="flex gap-2"
      >
        <a
          href="/"
          class="px-2 py-1 hover:bg-bg/40 rounded-lg"
        >Beranda</a>
        <div
          class="relative"
        >
          <button
            id="srv-btn"
            class="px-2 py-1 flex items-center gap-1 hover:bg-bg/40 rounded-lg transition-all"
          >Layanan <x-lucide-chevron-right id="srv-chevron" class="size-6 transition-transform" /></button>
          <div
            id="srv-drp-dwn"
            class="absolute top-10 hidden flex-col justify-center items-center bg-bg/20 rounded-lg"
          >
            <a
              href="/endors"
              class="w-full px-2 py-1 hover:bg-bg/40 rounded-t-lg"
            >Endorsement</a>
            <a
              href="/services"
              class="w-full px-2 py-1 text-nowrap hover:bg-bg/40 rounded-b-lg"
            >Pengelolaan Akun Media Sosial</a>
          </div>
        </div>
        <a
          href="/about"
          class="px-2 py-1 hover:bg-bg/40 rounded-lg"
        >Tentang Kami</a>
        <a
          href="https://wa.me/6281224510817"
          target="_blank"
          class="px-2 py-1 hover:bg-bg/40 rounded-lg"
        >Kontak Kami</a>
      </nav>
      <div
        class="flex gap-2"
      >
        <x-uni-instagram-alt-o class="size-8" />
        <x-iconoir-tiktok-solid class="size-8" />
        <x-uni-linkedin-o class="size-8" />
      </div>
    </header>
    @yield('content')
    <div
      id="to-top"
      class="opacity-0 fixed bottom-10 right-6 size-14 flex justify-center items-center text-white bg-bg hover:bg-[#525252] rounded-full transition-all duration-400 cursor-pointer hover:[&>div]:-translate-y-2"
    >
      <div
        class="transition-transform duration-500"
      ><x-lucide-arrow-up-from-dot class="size-7" /></div>
    </div>
    <a
      id="contact-wa"
      href="https://wa.me/6281224510817"
      class="opacity-0 fixed bottom-28 right-6 size-14"
    >
      <img
        src="/assets/images/wa.svg"
        alt="wa"
        class="w-full"
      >
    </a>
    <footer
      class="w-full h-full -mt-10 bg-linear-to-r from-[#DEDEDE] to-[#313131] border border-[#313131] rounded-t-[3rem]"
    >
      <div
        class="z-50 w-[80%] h-60 mx-auto px-10 flex justify-between items-center"
      >
        <h1
          class="text-3xl text-bg font-bold"
        >DigitalMarket</h1>
        <nav
          class="flex flex-col gap-2"
        >
          <a
            href="/"
            class="w-fit px-2 py-1 hover:bg-bg/40 rounded-lg"
          >Beranda</a>
          <div
            class="relative"
          >
            <button
              id="srv-btn-f"
              class="px-2 py-1 flex items-center gap-1 hover:bg-bg/40 rounded-lg transition-all"
            >Layanan <x-lucide-chevron-right id="srv-chevron-f" class="size-6 transition-transform" /></button>
            <div
              id="srv-drp-dwn-f"
              class="absolute top-0 left-35 hidden flex-col justify-center items-center bg-bg/20 rounded-lg"
            >
              <a
                href="/endors"
                class="w-full px-2 py-1 hover:bg-bg/40 rounded-t-lg"
              >Endorsement</a>
              <a
                href="/services"
                class="w-full px-2 py-1 text-nowrap hover:bg-bg/40 rounded-b-lg"
              >Pengelolaan Akun Media Sosial</a>
            </div>
          </div>
          <a
            href="/about"
            class="px-2 py-1 hover:bg-bg/40 rounded-lg"
          >Tentang Kami</a>
          <a
            href="https://wa.me/6281224510817"
            target="_blank"
            class="px-2 py-1 hover:bg-bg/40 rounded-lg"
          >Kontak Kami</a>
        </nav>
        <div
          class="h-[70%] flex flex-col items-start"
        >
          <p
            class="h-fit px-2 py-1 bg-bg rounded-md"
          >growtive@ads.id</p>
        </div>
      </div>
    </footer>
  </body>
</html>