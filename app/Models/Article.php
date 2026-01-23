<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
    'title',
    'body',
  ];

  public function getRouteKeyName()
  {
    return 'id_article';
  }

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class, 'id_user');
  }
}
