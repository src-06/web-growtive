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
    class="z-50 fixed top-0 w-full h-fit bg-white transition-transform"
  ><x-navigation/></div>

  <main>
    @yield('content')
  </main>

  <x-footer />
</body
</html>