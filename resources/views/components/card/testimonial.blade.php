<div
  class="relative w-fit h-64 flex flex-col justify-end text-black bg-blue-500 rounded-2xl"
>
  <div class="absolute -top-12 left-14 size-32 bg-blue-500 rounded-full"></div>
  <div
    class="relative w-120 h-60 flex flex-col justify-center items-center bg-white rounded-b-2xl"
  >
    <img
      src="{{ $icon }}"
      alt="Testimonial Profile"
      class="absolute -top-12 left-18 size-24 outline-4 rounded-full"
    >
    <div
      class="absolute top-6 left-50 w-full"
    >
    <h1
        class="text-xl font-bold"
    >{{ $name }}</h1>
    <h1
      class="text-xl text-current/60"
    >{{ $role }}</h1>
    </div>
    <div
      class="w-[75%] mx-auto mt-15 text-current/70"
    >
    <p>{{ $testimonial }}</p>
    </div>
  </div>
</div>