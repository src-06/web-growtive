<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class AboutController extends Controller
{
  public function index()
  {
    return inertia('TentangKami', [
      'about' => About::with('goals')->first(),
    ]);
  }

  public function store(Request $request)
  {
    //
  }

  public function create()
  {
    return inertia('Admin/Pengaturan/TentangKami', [
      'about' => About::with('goals')->first(),
    ]);
  }

  public function show(About $about)
  {
    //
  }

  public function update(Request $request, About $about)
  {
    $validated = $request->validate([
      'profile_owner' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
      'profile_company' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
      'description' => ['string'],
      'visi' => ['string'],
      'misi' => ['string'],
      'goals' => ['array'],
      'goals.*.id' => ['required', 'exists:about_goals,id'],
      'goals.*.title' => ['required', 'string'],
      'goals.*.text' => ['required', 'string'],
    ]);

    $data = collect($validated)->except([
      'profile_owner',
      'profile_company',
      'goals',
    ])->toArray();

    if ($request->hasFile('profile_owner')) {
      if ($about->profile_owner && File::exists(public_path($about->profile_owner))) {
        File::delete(public_path($about->profile_owner));
      }

      $file = $request->file('profile_owner');
      $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
      $file->move(public_path('storage/abouts'), $filename);

      $data['profile_owner'] = 'storage/abouts/' . $filename;
    }

    if ($request->hasFile('profile_company')) {
      if ($about->profile_company && File::exists(public_path($about->profile_company))) {
        File::delete(public_path($about->profile_company));
      }

      $file = $request->file('profile_company');
      $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
      $file->move(public_path('storage/abouts'), $filename);

      $data['profile_company'] = 'storage/abouts/' . $filename;
    }

    $about->update($data);

    if (!empty($validated['goals'])) {
      foreach ($validated['goals'] as $goal) {
        $about->goals()
          ->where('id', $goal['id'])
          ->update([
            'title' => $goal['title'],
            'text' => $goal['text'],
          ]);
      }
    }

    return back();
  }

  public function destroy(About $about)
  {
    //
  }

  public function edit(About $about)
  {
    //
  }
}
