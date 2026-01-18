<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('charts', function (Blueprint $table) {
      $table->id();
      $table->integer('instagram');
      $table->integer('tiktok');
      $table->integer('instagram_tiktok');
      $table->integer('endorsement');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('charts');
  }
};
