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
    Schema::create('sub_menus', function (Blueprint $table) {
      $table->id();
      $table->foreignId('id_menu')->constrained(
        table: 'menus',
        indexName: 'sub_menu_id_menu',
      )->cascadeOnDelete();
      $table->string('name');
      $table->string('url');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('sub_menus');
  }
};
