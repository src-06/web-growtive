<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
  /** @use HasFactory<\Database\Factories\ChartFactory> */
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'instagram',
    'tiktok',
    'instagram_tiktok',
    'endorsement',
  ];
}
