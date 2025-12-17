<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  <title>Growdience Creative | Website Periklanan</title>
</head>
<body
  class="w-full h-full overflow-x-hidden"
>
  <div
    class="-z-1 relative bg-white"
  >
    <div class="absolute top-30 -left-12 size-55 bg-linear-to-t from-blue-900/80 to-indigo-400/80 rounded-full"></div>
    <div class="absolute top-65 -left-12 size-45 bg-linear-to-t from-blue-900/80 to-indigo-400/80 rounded-full"></div>
    <div class="absolute top-90 -right-12 size-55 bg-linear-to-t from-blue-900/80 to-indigo-400/80 rounded-full"></div>
    <div class="absolute top-125 -right-12 size-60 bg-linear-to-t from-blue-900/80 to-indigo-400/80 rounded-full"></div>
    <img
      src="{{ Vite::asset('resources/img/bg-header.jpg') }}"
      alt="bg-header"
      class="-z-50 absolute top-0 opacity-15"
    >
  </div>

  @include('partials.navbar')

  <main>
    @yield('content')
  </main>

  @include('partials.footer')
</body>
</html>