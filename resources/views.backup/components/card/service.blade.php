<div
  class="flex flex-col items-center outline-1 outline-black/15 shadow-md hover:shadow-2xl shadow-black/10 cursor-pointer rounded-md transition-shadow duration-600 hover:[&>img]:brightness-60 hover:[&>hr]:bg-blue-600 hover:[&>div>div]:bg-blue-600 hover:[&>div>div]:shadow-2xl hover:[&>div>div]:shadow-black/20 hover:[&>div>div>div]:text-stone-200"
>
  <img
    src="{{ $img }}"
    alt="Image Preview Service"
    class="w-full aspect-video rounded-t-md transition-all duration-600"
  >
  <hr class="w-full h-1.5 bg-transparent border-transparent transition-colors duration-600" />
  <div
    class="z-10 -mt-12"
  >
    <div
      class="w-24 h-24 flex justify-center items-center bg-white shadow-2xl shadow-black/15 rounded-full transition-colors duration-600"
    >
      <div
        class="size-10 text-blue-600 transition-colors duration-600"
      >{{ $slot }}</div>
    </div>
  </div>
  <h1
    class="mx-4 pt-10 pb-8 text-3xl text-center font-bold"
  >{{ $name }}</h1>
</div>