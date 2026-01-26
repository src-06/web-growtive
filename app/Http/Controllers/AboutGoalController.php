<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\AboutGoal;
use Illuminate\Http\Request;

class AboutGoalController extends Controller
{
  public function index()
  {
    //
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "title" => ["required", "string"],
      "text" => ["required", "string"],
    ]);

    AboutGoal::create([
      "id_about" => About::first()->id,
      "title" => $validated["title"],
      "text" => $validated["text"],
    ]);

    return redirect("/Admin/Pengaturan/TentangKami");
  }

  public function create()
  {
    return inertia('Admin/Pengaturan/TentangKami/Tambah');
  }

  public function show(AboutGoal $about_goal)
  {
    //
  }

  public function update(AboutGoal $about_goal)
  {
    //
  }

  public function destroy(AboutGoal $about_goal)
  {
    $about_goal->delete();
    return redirect()->back();
  }

  public function edit(AboutGoal $about_goal)
  {
    //
  }
}
