<div
  id="{{ $id }}"
  class="w-full h-fit px-6 py-20 grid grid-cols-4 gap-1 bg-white rounded-[3rem]"
>
  <div
    class="col-span-1 flex items-center gap-1 text-3xl font-semibold"
  >
    <div
      class="flex flex-col justify-center items-center gap-8"
    >
      <div
        class="w-full flex items-center gap-2"
      >
        <img
          src="assets/images/services-tt.svg"
          alt="services-tt"
          class="w-15"
        >
        <h1>Tiktok</h1>
      </div>
      <h1 class="-my-9 font-bold">&</h1>
      <div
        class="w-full flex items-center gap-2"
      >
        <img
          src="assets/images/services-ig.svg"
          alt="services-ig"
          class="w-15"
        >
        <h1>Instagram</h1>
      </div>
      <p>Harga Kelola Sosial Media ( Instagram & Tiktok )</p>
    </div>
    <hr class="mx-2 w-0 h-70 border-3" />
  </div>
  <div
    class="ml-4 col-span-3"
  >
    <div
      class="grid grid-cols-6 gap-75 text-fg {{ $class }}"
    >{{ $slot }}</div>
  </div>
</div>