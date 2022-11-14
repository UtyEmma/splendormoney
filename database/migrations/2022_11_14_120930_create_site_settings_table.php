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
    public function up()
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('commission');
            $table->string('address');
            $table->string('name');
            $table->string('logo');
            $table->string('phone');
            $table->string('email');
            $table->string('flutterwave_test_secret_key');
            $table->string('flutterwave_test_public_key');
            $table->string('flutterwave_live_secret_key');
            $table->string('flutterwave_live_public_key');
            $table->boolean('test_mode');
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
        Schema::dropIfExists('site_settings');
    }
};
