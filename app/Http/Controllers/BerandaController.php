<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class BerandaController extends Controller
{
  public function index()
  {
    return inertia('Beranda', [
      'testimonials' => Testimonial::latest('created_at')->paginate(4),
    ]);
  }
}
