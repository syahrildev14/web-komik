<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


// Route User
Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');
Route::get('/materi', function () {
    return Inertia::render('Materi');
})->name('materi');
Route::get('/ruang-kreatif', function () {
    return Inertia::render('RuangKreatif');
})->name('ruang-kreatif');
Route::get('/evaluasi-latihan', function () {
    return Inertia::render('EvaluasiLatihan');
})->name('evaluasi-latihan');
Route::get('/kamus-fantasi', function () {
    return Inertia::render('KamusFantasi');
})->name('kamus-fantasi');

// Route Admin
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
