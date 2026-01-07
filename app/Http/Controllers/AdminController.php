<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Response;

class AdminController extends Controller
{
  public function index(): Response
  {
    return inertia("admin/panel", [
      "users" => User::all(),
    ]);
  }

  public function paket(): Response
  {
    return inertia("admin/panel");
  }

  public function profile(): Response
  {
    return inertia("admin/profile");
  }
}
