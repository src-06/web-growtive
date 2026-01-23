<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/* -------------------------------------------------------------------------- */
/*                                 Route Main                                 */
/* -------------------------------------------------------------------------- */
Route::inertia('/', 'Beranda');
Route::inertia('/TentangKami', 'TentangKami');
Route::inertia('/Endorsement', 'Endorsement');
Route::inertia('/PengelolaanAkunMedsos', 'PengelolaanAkunMedsos');
Route::get('/Artikel', [ArticleController::class, 'index']);
Route::get('/Artikel/{article}', [ArticleController::class, 'show']);

/* -------------------------------------------------------------------------- */
/*                             Route Authenticate                             */
/* -------------------------------------------------------------------------- */
Route::get('/Admin/Login', [UserController::class, 'login']);
Route::get('/Admin/Register', [UserController::class, 'create']);

/* -------------------------------------------------------------------------- */
/*                                 Route Admin                                */
/* -------------------------------------------------------------------------- */
Route::middleware('auth')
->prefix('Admin')->group(function () {

  /* -------------------------------------------------------------------------- */
  /*                               Route Dashboard                              */
  /* -------------------------------------------------------------------------- */
  Route::get('/', [ChartController::class, 'index']);
  Route::middleware('check:admin,editor')
  ->get('/Tambah', [ChartController::class, 'create']);

  /* -------------------------------------------------------------------------- */
  /*                                Route Article                               */
  /* -------------------------------------------------------------------------- */
  Route::get('/Artikel', [ArticleController::class, 'list']);
  Route::middleware('check:admin,editor')
  ->get('/Artikel/Baru', [ArticleController::class, 'create']);
  Route::get('/Artikel/{article}/Ubah', [ArticleController::class, 'edit']);

  /* -------------------------------------------------------------------------- */
  /*                                 Route User                                 */
  /* -------------------------------------------------------------------------- */
  Route::middleware('check:admin')
  ->get('/Users', [UserController::class, 'index']);
});

/* -------------------------------------------------------------------------- */
/*                               Resource charts                              */
/* -------------------------------------------------------------------------- */
Route::resource('/charts', ChartController::class)
->except(['index', 'create']);

/* -------------------------------------------------------------------------- */
/*                              Resource artices                              */
/* -------------------------------------------------------------------------- */
Route::resource('/articles', ArticleController::class)
->except(['index', 'create', 'show', 'edit']);

/* -------------------------------------------------------------------------- */
/*                               Resource users                               */
/* -------------------------------------------------------------------------- */
Route::resource('/users', UserController::class)
->except(['index', 'create']);
Route::post('/users/auth', [UserController::class, 'auth'])
->name('users.login');
Route::post('/users/logout', [UserController::class, 'logout'])
->name('users.logout');
