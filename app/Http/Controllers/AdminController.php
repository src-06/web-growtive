<?php

namespace App\Http\Controllers;

use App\Models\User;

class AdminController extends Controller
{
  public function index() {
    return inertia('admin/panel', [
      'users' => User::all(),
    ]);
  }

  public function paket() {
    return inertia('admin/panel');
  }

  public function profile() {
    return inertia('admin/profile');
  }
}
