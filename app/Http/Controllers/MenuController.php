<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
  public function index()
  {
    return inertia('Admin/Pengaturan/Menu', [
    ]);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "name" => ["required", "string"],
      "url" => ["required", "string"],
    ]);

    Menu::create([
      "name" => $validated["name"],
      "url" => $validated["url"],
    ]);

    return back();
  }

  public function create()
  {
    //
  }

  public function list()
  {
    //
  }

  public function show(Menu $menu)
  {
    //
  }

  public function update(Menu $menu)
  {
    //
  }

  public function destroy(Menu $menu)
  {
    $menu->delete();
    return back();
  }

  public function edit(Menu $menu)
  {
    //
  }
}
