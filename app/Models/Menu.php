<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
  /** @use HasFactory<\Database\Factories\MenuFactory> */
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var list<string>
   */
  protected $fillable = [
    'name',
    'url',
  ];

  public function submenus(): HasMany
  {
    return $this->hasMany(SubMenu::class, 'id_menu');
  }

  public function contact(): HasOne
  {
    return $this->hasOne(Contact::class, 'id_menu');
  }
}
