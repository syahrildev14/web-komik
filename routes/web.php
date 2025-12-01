<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\CeritaFantasiController;


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
Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/Dashboard');
})->name('dashboard');

Route::get('/admin/nilai-ruang-kreatif', function () {
    return Inertia::render('admin/Nilai_Ruang_Kreatif');
})->name('nilai-ruang-kreatif');

Route::get('/admin/nilai-evaluasi-latihan', function () {
    return Inertia::render('admin/Nilai_Evaluasi_Latihan');
})->name('nilai-evaluasi-latihan');


// Route API
Route::prefix('api')->group(function () {
    Route::post('/simpan-kuis', [QuizController::class, 'store'])
        ->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);
    Route::get('/simpan-kuis', [QuizController::class, 'index'])
        ->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);
    Route::post('/cerita', [CeritaFantasiController::class, 'store'])
        ->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class);
    Route::get('/cerita', [CeritaFantasiController::class, 'index'])
        ->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class);
    Route::post('/nilai-kreatif', [CeritaFantasiController::class, 'storeNilai'])
        ->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class);
});




require __DIR__ . '/settings.php';
