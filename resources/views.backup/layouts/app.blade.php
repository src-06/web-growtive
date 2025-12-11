<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  @vite(['resources/js/app.js', 'resources/css/app.css'])
  <title>@yield('title') - Growdience Creative</title>
</head>
<body
  class="relative w-full h-full overflow-x-hidden"
>
  <x-navigation />

  <div
    id="nav-sticky"
    class="z-50 fixed top-0 w-full h-fit transition-transform duration-300"
  >
    <x-navigation-sticky />
  </div>

  <main>
    @yield('content')
  </main>

  <div
    id="to-top"
    class="fixed bottom-10 right-6 size-14 flex justify-center items-center text-white bg-blue-600 hover:bg-blue-800 rounded-full transition-all duration-400 cursor-pointer hover:[&>div]:-translate-y-2"
  >
    <div
      class="transition-transform duration-500"
    ><x-lucide-arrow-up-from-dot class="size-7" /></div>
  </div>

  <x-footer />
</body
</html>