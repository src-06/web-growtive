<?php

namespace App\Http\Controllers;

use App\Models\Charts;
use Inertia\Response;

class AdminController extends Controller
{
  public function index(): Response
  {
    return inertia("admin/dashboard", [
      'charts' => Charts::all(),
    ]);
  }

  public function profile(): Response
  {
    return inertia("admin/profile");
  }
}
