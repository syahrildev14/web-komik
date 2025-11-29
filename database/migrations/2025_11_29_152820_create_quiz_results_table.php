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
        Schema::create('quiz_results', function (Blueprint $table) {
            $table->id();

             // IDENTITAS USER / PESERTA KUIS (sesuaikan dengan frontend)
            $table->string('nama')->nullable();
            $table->string('absen')->nullable();
            $table->string('kelas')->nullable();
        

            // HASIL KUIS
            $table->json('answers');
            $table->integer('correctCount');
            $table->integer('totalQuestions');
            $table->float('score');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_results');
    }
};
