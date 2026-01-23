<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    //
  }

  public function create()
  {
    //
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
