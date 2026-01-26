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
    Schema::create('abouts', function (Blueprint $table) {
      $table->id();
      $table->string('profile_owner');
      $table->string('profile_company');
      $table->text('description');
      $table->text('visi');
      $table->text('misi');
      $table->timestamps();
    });

    Schema::create('about_goals', function (Blueprint $table) {
      $table->id();
      $table->foreignId('id_about')->constrained(
        table: 'abouts',
        indexName: 'about_id_about',
      )->cascadeOnDelete();
      $table->string('title');
      $table->text('text');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('abouts');
    Schema::dropIfExists('about_goals');
  }
};
