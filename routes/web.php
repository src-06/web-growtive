<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('home');
});

Route::get('/about', function () {
  return view('about');
});

Route::get('/endors', function () {
  return view('endors');
});

Route::get('/services', function () {
  return view('services');
});
