<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizResult extends Model
{
    protected $fillable = [
        'nama',
        'absen',
        'kelas',
        'answers',
        'correctCount',
        'totalQuestions',
        'score',
    ];

    // Supaya kolom answers otomatis di-cast ke array
    protected $casts = [
        'answers' => 'array',
    ];
}
