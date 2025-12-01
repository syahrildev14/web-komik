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
        Schema::create('cerita_fantasis', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('absen');
            $table->string('kelas');
            $table->string('judul');
            $table->text('cerita1')->nullable();
            $table->text('cerita2')->nullable();
            $table->text('cerita3')->nullable();
            $table->text('cerita4')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cerita_fantasis');
    }
};
