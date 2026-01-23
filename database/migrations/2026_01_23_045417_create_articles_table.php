<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('articles', function (Blueprint $table) {
      $table->id();
      $table->uuid('id_article')->unique()->default(Str::uuid());
      $table->foreignId('id_user')->constrained(
        table: 'users',
        indexName: 'article_id_user',
      )->cascadeOnDelete();
      // $table->foreignId('id_tag')->constrained(
      //   table: 'tags',
      //   indexName: 'article_id_tag',
      // );
      $table->string('title');
      $table->text('body');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('articles');
  }
};
