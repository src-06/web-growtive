<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @routes
    @viteReactRefresh
    @vite('resources/js/App.tsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
