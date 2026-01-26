<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AboutGoalController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/* -------------------------------------------------------------------------- */
/*                                 Route Main                                 */
/* -------------------------------------------------------------------------- */
Route::get('/', [BerandaController::class, 'index']);
Route::get('/TentangKami', [AboutController::class, 'index']);
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
/*                           Route Need Authenticate                          */
/* -------------------------------------------------------------------------- */
Route::middleware('auth')->group(function () {

  /* -------------------------------------------------------------------------- */
  /*                                 Route Admin                                */
  /* -------------------------------------------------------------------------- */
  Route::prefix('Admin')->group(function () {

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
    ->get('/Artikel/Tambah', [ArticleController::class, 'create']);
    Route::get('/Artikel/{article}/Ubah', [ArticleController::class, 'edit']);

    /* -------------------------------------------------------------------------- */
    /*                              Route Testimonial                             */
    /* -------------------------------------------------------------------------- */
    Route::get('/Testimoni', [TestimonialController::class, 'index']);
    Route::middleware('check:admin,editor')
    ->get('/Testimoni/Tambah', [TestimonialController::class, 'create']);

    /* -------------------------------------------------------------------------- */
    /*                                 Route User                                 */
    /* -------------------------------------------------------------------------- */
    Route::middleware('check:admin')
    ->get('/Users', [UserController::class, 'index']);

    /* -------------------------------------------------------------------------- */
    /*                               Route Settings                               */
    /* -------------------------------------------------------------------------- */
    Route::prefix('Pengaturan')->group(function () {
      Route::get('/', function () { return back(); });

      /* -------------------------------------------------------------------------- */
      /*                                 Route About                                */
      /* -------------------------------------------------------------------------- */
      Route::get('/TentangKami', [AboutController::class, 'create']);
      Route::get('/TentangKami/Tambah', [AboutGoalController::class, 'create']);

      /* -------------------------------------------------------------------------- */
      /*                                 Route Menus                                */
      /* -------------------------------------------------------------------------- */
      Route::get('/Menu', [MenuController::class, 'index']);

      /* -------------------------------------------------------------------------- */
      /*                                Route Contact                               */
      /* -------------------------------------------------------------------------- */
      Route::get('/Kontak', [ContactController::class, 'index']);
    });
  });
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
->except(['index', 'store', 'create']);
Route::post('/users/logout', [UserController::class, 'logout'])
->name('users.logout');

/* -------------------------------------------------------------------------- */
/*                            Resource testimonials                           */
/* -------------------------------------------------------------------------- */
Route::resource('/testimonials', TestimonialController::class)
->except('index', 'create');

/* -------------------------------------------------------------------------- */
/*                               Resource abouts                              */
/* -------------------------------------------------------------------------- */
Route::resource('/abouts', AboutController::class)
->except('index', 'create');
Route::post('/abouts/{about}', [AboutController::class, 'update'])
->name('abouts.update');
Route::resource('/about_goals', AboutGoalController::class)
->except('create');

/* -------------------------------------------------------------------------- */
/*                               Resource Menus                               */
/* -------------------------------------------------------------------------- */
Route::resource('/menus', MenuController::class)
->except('index');

/* -------------------------------------------------------------------------- */
/*                               Resource Kontak                              */
/* -------------------------------------------------------------------------- */
Route::resource('/contacts', ContactController::class)
->except('index');

/* -------------------------------------------------------------------------- */
/*                               Resource users                               */
/* -------------------------------------------------------------------------- */
Route::post('/users', [UserController::class, 'store'])
->name('users.store');
Route::post('/users/auth', [UserController::class, 'auth'])
->name('users.login');
