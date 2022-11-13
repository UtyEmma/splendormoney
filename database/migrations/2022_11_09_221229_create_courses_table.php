<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('courses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('instructor');
            $table->string('name')->unique();
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->string('category')->nullable();
            $table->string('image')->nullable();
            $table->string('video')->nullable();
            $table->integer('price');
            $table->integer('discount')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
