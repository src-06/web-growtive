<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that's loaded on the first page visit.
   *
   * @see https://inertiajs.com/server-side-setup#root-template
   *
   * @var string
   */
  protected $rootView = 'app';

  /**
   * Determines the current asset version.
   *
   * @see https://inertiajs.com/asset-versioning
   */
  public function version(Request $request): ?string
  {
    return parent::version($request);
  }

  /**
   * Define the props that are shared by default.
   *
   * @see https://inertiajs.com/shared-data
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {
    return array_merge(
      parent::share($request),
      [
        'auth' => fn() => [
          'user' => $request->user() ? [
            'id' => $request->user()->id,
            'name' => $request->user()->name,
            'email' => $request->user()->email,
            'role' => $request->user()->role,
          ] : null,
        ],
        'menus' => fn() => Menu::with('submenus')->with('contact')->get()->map(fn($menu) => [
          'id' => $menu->id,
          'name' => $menu->name,
          'url' => $menu->url,
          'submenu' => $menu->submenus->map(fn($sub) => [
            'name' => $sub->name,
            'url' => $sub->url,
          ]),
          'contact' => $menu->contact ? [
            'url_wa' => $menu->contact->url_wa,
            'url_ig' => $menu->contact->url_ig,
            'url_tt' => $menu->contact->url_tt,
            'url_lk' => $menu->contact->url_lk,
          ] : null,
        ]),
        'contact' => fn() => Contact::query()->first([
          'id',
          'url_wa',
          'url_ig',
          'url_tt',
          'url_lk',
        ]) ?? [
          'id',
          'url_wa' => null,
          'url_ig' => null,
          'url_tt' => null,
          'url_lk' => null,
        ],
      ]
    );
  }
}
