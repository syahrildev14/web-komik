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
        Schema::create('nilai_kreatifs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cerita_id')->constrained('cerita_fantasis')->onDelete('cascade');
            $table->integer('nilai1');
            $table->integer('nilai2');
            $table->integer('nilai3');
            $table->integer('nilai4');
            $table->integer('nilai5');
            $table->integer('nilai6');
            $table->integer('nilai7');
            $table->integer('nilai8');
            $table->integer('nilai9');
            $table->integer('nilai10');
            $table->integer('nilai11');
            $table->integer('nilai12');
            $table->integer('nilai13');
            $table->integer('nilai14');
            $table->integer('nilai15');
            $table->integer('nilai16');
            $table->integer('nilai17');
            $table->integer('total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilai_kreatifs');
    }
};
