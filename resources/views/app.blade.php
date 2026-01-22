<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

    @routes
    @viteReactRefresh
    @vite('resources/js/App.tsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
