<?php

namespace App\Http\Controllers;

use Inertia\Response;

class EndorsController extends Controller
{
  public function index(): Response
  {
    return inertia("endors");
  }
}
