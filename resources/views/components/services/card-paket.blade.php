<div
  class="relative w-60 h-110 flex flex-col items-center bg-linear-to-r from-[#797979] to-bg rounded-3xl"
>
  <h1
    class="py-3 font-black"
  >{{ $paket }}</h1>
  <hr class="w-full border">
  <ul
    class="ml-8 pt-3 w-[90%] list-disc font-semibold"
  >{{ $slot }}</ul>
  <button
    class="absolute bottom-3 px-2 py-1 text-lg font-bold border-2"
  >
    <div
      class="flex flex-col items-center"
    >
      <span>{{ $price1 }}</span>
      <p class="text-base">{{ $price2 }}</p>
    </div>
  </button>
</div>