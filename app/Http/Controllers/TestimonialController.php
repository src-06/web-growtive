<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TestimonialController extends Controller
{
  public function index()
  {
    return inertia('Admin/Testimoni/List', [
      'testimonials' => Testimonial::latest('created_at')->get(),
    ]);
  }

  public function store(Request $request)
  {
    $request->validate([
      'profile' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
      'name' => ['required', 'string'],
      'company' => ['required', 'string'],
      'testimonial' => ['required', 'string'],
    ]);

    $file = $request->file('profile');
    $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
    $file->move(public_path('storage/testimonials'), $filename);

    Testimonial::create([
      'profile' => 'storage/testimonials/' . $filename,
      'name' => $request->name,
      'company' => $request->company,
      'testimonial' => $request->testimonial,
    ]);

    return redirect("Admin/Testimoni");
  }

  public function create()
  {
    return inertia('Admin/Testimoni/Tambah');
  }

  public function list()
  {
    //
  }

  public function show(Testimonial $testimonial)
  {
    //
  }

  public function update(Request $request, Testimonial $testimonial)
  {
    //
  }

  public function destroy(Testimonial $testimonial)
  {
    $testimonial->delete();
    return back();
  }

  public function edit(Testimonial $testimonial)
  {
    //
  }
}
