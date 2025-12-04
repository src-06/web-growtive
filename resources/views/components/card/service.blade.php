<div
  class="flex flex-col items-center outline-1 outline-black/15 shadow-2xl shadow-black/10 rounded-md"
>
  <img
    src="{{ $img }}"
    alt="Image Preview Service"
    class="w-full rounded-t-md"
  >
  <div
    class="-mt-12"
  >
    <div
      class="w-24 h-24 flex justify-center items-center bg-white shadow-2xl shadow-black/15 rounded-full"
    >
      <div
        class="size-10 text-blue-600"
      >{{ $slot }}</div>
    </div>
  </div>
  <h1
    class="pt-10 pb-8 text-3xl text-center font-bold"
  >{{ $name }}</h1>
</div>