<?php

use App\Http\Controllers\ChartController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Beranda');
Route::inertia('/TentangKami', 'TentangKami');
Route::inertia('/Endorsement', 'Endorsement');
Route::inertia('/PengelolaanAkunMedsos', 'PengelolaanAkunMedsos');

Route::get('/Admin/Login', [UserController::class, 'login']);
Route::get('/Admin/Register', [UserController::class, 'create']);

Route::middleware('auth')
->prefix('Admin')
->group(function () {
  Route::get('/', [ChartController::class, 'index']);
  Route::get('/AddChartData', [ChartController::class, 'create']);
  Route::get('/Users', [UserController::class, 'index']);
});

Route::resource('/users', UserController::class)
->except(['index', 'create']);
Route::post('/users/auth', [UserController::class, 'auth'])
->name('users.login');
Route::post('/users/logout', [UserController::class, 'logout'])
->name('users.logout');

Route::resource('/charts', ChartController::class)
->except(['index', 'create']);
