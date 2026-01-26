<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
  public function index()
  {
    return inertia('Admin/Pengaturan/Kontak');
  }

  public function store(Request $request)
  {
    //
  }

  public function create()
  {
    //
  }

  public function list()
  {
    //
  }

  public function show(Contact $contact)
  {
    //
  }

  public function update(Request $request, Contact $contact)
  {
    $validated = $request->validate([
      "url_wa" => ["string"],
      "url_ig" => ["string"],
      "url_tt" => ["string"],
      "url_lk" => ["string"],
    ]);

    Contact::query()->first()->update($validated);

    return back();
  }

  public function destroy(Contact $contact)
  {
    //
  }

  public function edit(Contact $contact)
  {
    //
  }
}
