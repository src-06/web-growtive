<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
  /** @use HasFactory<\Database\Factories\ArticleFactory> */
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'id_article',
    'thumbnail',
    'title',
    'body',
  ];

  public function getRouteKeyName()
  {
    return 'id_article';
  }

  protected static function booted()
  {
    static::deleting(function ($article) {
      if ($article->thumbnail) {
        $path = public_path($article->thumbnail);

        if (File::exists($path)) {
          File::delete($path);
        }
      }
    });
  }

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class, 'id_user');
  }
}
