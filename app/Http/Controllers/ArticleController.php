<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
  public function index()
  {
    return inertia('Artikel/List', [
      'articles' => Article::with('user')->latest('updated_at')->paginate(10),
    ]);
  }

  public function store(Request $request)
  {
    $request->validate([
      'thumbnail' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
      'title' => ['required', 'string'],
      'body' => ['required', 'string'],
    ]);

    $path = null;

    if ($request->hasFile('thumbnail')) {
      $file = $request->file('thumbnail');
      $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
      $file->move(public_path('storage/articles'), $filename);
      $path = 'storage/articles/' . $filename;
    }

    $request->user()->articles()->create([
      'id_article' => Str::uuid(),
      'thumbnail' => $path,
      'title' => $request->title,
      'body' => $request->body,
    ]);

    return redirect("Admin/Artikel");
  }

  public function create()
  {
    return inertia('Admin/Artikel/Tambah');
  }

  public function list()
  {
    return inertia('Admin/Artikel/List', [
      'articles' => Article::where('id_user', Auth::id())->with('user')->latest('updated_at')->paginate(10),
    ]);
  }

  public function show(Article $article)
  {
    return inertia('Artikel/Lihat', [
      'article' => $article->loadMissing('user'),
    ]);
  }

  public function update(Article $article)
  {
    //
  }

  public function destroy(Article $article)
  {
    $article->delete();
    return back();
  }

  public function edit(Article $article)
  {
    //
  }
}
