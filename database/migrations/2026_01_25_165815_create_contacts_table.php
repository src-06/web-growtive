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
    Schema::create('contacts', function (Blueprint $table) {
      $table->id();
      $table->foreignId('id_menu')->constrained(
        table: 'menus',
        indexName: 'contact_id_menu',
      )->cascadeOnDelete();
      $table->string('url_wa')->nullable();
      $table->string('url_ig')->nullable();
      $table->string('url_tt')->nullable();
      $table->string('url_lk')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('contacts');
  }
};
