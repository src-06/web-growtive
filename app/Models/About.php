<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class About extends Model
{
  /** @use HasFactory<\Database\Factories\AboutFactory> */
  use HasFactory;

  protected $table = 'abouts';

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'profile_owner',
    'profile_company',
    'description',
    'visi',
    'misi',
  ];

  protected $guarded = [];

  public function goals(): HasMany
  {
    return $this->hasMany(AboutGoal::class, 'id_about');
  }
}
