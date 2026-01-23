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
    Schema::create('article_tag', function (Blueprint $table) {
      $table->id();
      $table->foreignUuid('id_article')->constrained(
        table: 'articles',
        column: 'id_article',
        indexName: 'article_tag_id_article',
      );
      $table->foreignId('id_tag')->constrained(
        table: 'tags',
        indexName: 'article_tag_id_tag',
      );
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('article_tag');
  }
};
