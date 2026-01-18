<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  public function index()
  {
    return inertia('Admin/Users', [
      'users' => User::paginate(14),
    ]);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "name" => ["required", "string", "max:255"],
      "email" => ["required", "string", "email", "max:255", "unique:users"],
      "password" => ["required", "string", "min:8"],
    ]);

    User::create([
      "name" => $validated["name"],
      "email" => $validated["email"],
      "password" => bcrypt($validated["password"]),
    ]);

    return redirect("/Admin");
  }

  public function create()
  {
    return inertia('Admin/Auth/Register');
  }

  public function login()
  {
    return inertia('Admin/Auth/Login');
  }

  public function auth(Request $request)
  {
    $credentials = $request->validate([
      "email" => ["required", "email"],
      "password" => ["required"],
    ]);

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      return redirect()->intended("/Admin");
    }

    return back();
  }

  public function logout(Request $request)
  {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/Admin/Login');
  }

  public function show(User $user)
  {
    //
  }

  public function update(Request $request, User $user)
  {
    $auth = $request->user();

    $validated = $request->validate([
      "name" => ["sometimes", "required", "string", "max:255"],
      "email" => ["sometimes", "required", "string", "email", "max:255", "unique:users,email," . $user->id],
      "password" => ["sometimes", "required", "string", "min:8"],
      "role" => ["sometimes", "required", "in:admin,owner,user"],
    ]);

    foreach ($validated as $key => $value) {
      if ($key == "password")
        $user->password = bcrypt($value);
      elseif ($key == "role") {
        if (in_array($auth->role, ["admin"])) {
          if ($auth->role === "admin") continue;
          else $user->role = $value;
        } else $user->$key = $value;
      }
    }

    $user->save();

    return back();
  }

  public function destroy(User $user)
  {
    $user->delete();
    return back();
  }

  public function edit(User $user)
  {
    //
  }
}
