<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    @if(App::environment('production'))
      <link rel="icon" href="../../public/favicon.svg" type="image/svg+xml" />
    @else
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    @endif

    @routes
    @viteReactRefresh
    @vite('resources/js/App.tsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
