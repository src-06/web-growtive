<?php

namespace App\Http\Controllers;

use Inertia\Response;

class AboutController extends Controller
{
  public function index(): Response
  {
    return inertia("about");
  }
}
