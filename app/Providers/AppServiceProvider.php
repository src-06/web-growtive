<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    Inertia::share([
      'auth' => fn() => [
        'user' => request()->user() ? [
          'id' => request()->user()->id,
          'name' => request()->user()->name,
          'email' => request()->user()->email,
          'role' => request()->user()->role,
        ] : null,
      ],
    ]);
  }
}
