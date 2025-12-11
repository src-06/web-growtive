<footer
  class="w-full bg-stone-900 text-white"
>
  <div
    class="w-[80%] mx-auto pt-20"
  >
    <div
      class="flex justify-between"
    >
      <div
        class="w-90 flex flex-col gap-4"
      >
        <img
          src="{{ Vite::asset('resources/img/logo-white.webp') }}"
          alt="Growdience Creative Logo"
          class="w-50"
        >
        <p
          class="text-current/70"
        >Website penyedia jasa periklanan via media sosial.</p>
      </div>
      <div
        class="flex justify-between gap-20"
      >
        <div
          class="flex flex-col gap-8"
        >
          <h2
            class="text-2xl font-bold"
          >Jelajah</h2>
          <x-list.nav
            class="flex flex-col gap-4 text-stone-300"
          />
        </div>
        <div
          class="flex flex-col gap-8"
        >
          <h1
            class="text-2xl font-bold"
          >Kontak</h1>
          <p>Cileungsi, Jawa Barat</p>
          <div
            class="flex flex-col gap-4"
          >
            <div
              class="flex gap-4"
            ><div class="w-6">@svg('lucide-mail')</div> butuhbantuan@growtive.help</div>
            <div
              class="flex gap-4"
            ><div class="w-6">@svg('lucide-phone-call')</div> +62 812 8234 09274</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-20 text-current/20">
    <div
      class="py-10 text-center"
    >
      © Hak Cipta 2025 oleh kelompok 1
    </div>
  </div>
</footer>