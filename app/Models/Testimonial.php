<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Testimonial extends Model
{
  /** @use HasFactory<\Database\Factories\TestimonialFactory> */
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'profile',
    'name',
    'company',
    'testimonial',
  ];

  protected static function booted()
  {
    static::deleting(function ($testimonial) {
      if ($testimonial->profile) {
        $path = public_path($testimonial->profile);

        if (File::exists($path)) {
          File::delete($path);
        }
      }
    });
  }
}
