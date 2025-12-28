<?php

namespace App\Http\Controllers;

class EndorsController extends Controller
{
  public function index() {
    return inertia('endors');
  }
}
