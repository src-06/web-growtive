<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\File;

class AboutGoal extends Model
{
  /** @use HasFactory<\Database\Factories\AboutGoalFactory> */
  use HasFactory;

  protected $table = 'about_goals';

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'id_about',
    'title',
    'text',
  ];

  protected static function booted()
  {
    static::deleting(function ($about) {
      if ($about->profile_owner) {
        $path = public_path($about->profile_owner);
        if (File::exists($path)) {
          File::delete($path);
        }
      }
      if ($about->profile_company) {
        $path = public_path($about->profile_company);
        if (File::exists($path)) {
          File::delete($path);
        }
      }
    });
  }

  public function about(): BelongsTo
  {
    return $this->belongsTo(About::class, 'id_about');
  }
}
