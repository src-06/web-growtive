<?php

namespace App\Http\Controllers;

use App\Models\Chart;
use Illuminate\Http\Request;

class ChartController extends Controller
{
  public function index()
  {
    return inertia('Admin/Dashboard', [
      'charts' => Chart::all(),
    ]);
  }

  public function store()
  {
    //
  }

  public function create()
  {
    //
  }

  public function show(Chart $user)
  {
    //
  }

  public function update(Request $request, Chart $user)
  {
    //
  }

  public function destroy(Chart $user)
  {
    //
  }

  public function edit(Chart $user)
  {
    //
  }
}
