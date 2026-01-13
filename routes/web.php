<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EndorsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/endors', [EndorsController::class, 'index']);

Route::get('/register', [UserController::class, 'create']);
Route::get('/login', [UserController::class, 'login']);

Route::middleware(['role:user'])
->prefix('admin')->group(function () {
  Route::get('/', [AdminController::class, 'index']);
  Route::get('/profile', [AdminController::class, 'profile']);
  Route::get('/users', [UserController::class, 'index']);
});

Route::resource('users', UserController::class)
->except(['index', 'create']);
Route::post('/login', [UserController::class, 'auth'])
->name('users.login');
Route::post('/logout', function (Request $request) {
  Auth::logout();
  $request->session()->invalidate();
  $request->session()->regenerateToken();
  return redirect('/login');
})->name('users.logout');
