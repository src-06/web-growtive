<?php

namespace App\Http\Controllers;

use Inertia\Response;

class ServicesController extends Controller
{
  public function index(): Response
  {
    return inertia("services");
  }
}
