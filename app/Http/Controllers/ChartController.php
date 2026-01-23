<?php

namespace App\Http\Controllers;

use App\Models\Chart;
use Illuminate\Http\Request;

class ChartController extends Controller
{
  public function index()
  {
    return inertia('Admin/Dashboard/Chart', [
      'charts' => Chart::all(),
    ]);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "instagram" => ["integer"],
      "tiktok" => ["integer"],
      "instagram_tiktok" => ["integer"],
      "endorsement" => ["integer"],
    ]);

    Chart::create([
      "instagram" => $validated["instagram"],
      "tiktok" => $validated["tiktok"],
      "instagram_tiktok" => $validated["instagram_tiktok"],
      "endorsement" => $validated["endorsement"],
    ]);

    return back();
  }

  public function create()
  {
    return inertia('Admin/Dashboard/Tambah', [
      'charts' => Chart::latest("id")->paginate(20),
    ]);
  }

  public function show(Chart $chart)
  {
    //
  }

  public function update(Chart $chart)
  {
    //
  }

  public function destroy(Chart $chart)
  {
    $chart->delete();
    return back();
  }

  public function edit(Chart $chart)
  {
    //
  }
}
