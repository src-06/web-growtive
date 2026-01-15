<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Charts extends Model
{
    /** @use HasFactory<\Database\Factories\ChartsFactory> */
    use HasFactory;

    protected $fillable = [
      'instagram',
      'tiktok',
      'ig_and_tt',
    ];
}
