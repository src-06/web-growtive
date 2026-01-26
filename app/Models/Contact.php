<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{
  /** @use HasFactory<\Database\Factories\ContactFactory> */
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'url_wa',
    'url_ig',
    'url_tt',
    'url_lk',
  ];

  public function menu(): BelongsTo
  {
    return $this->belongsTo(Menu::class, 'id_menu');
  }
}
