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

    // Relasi ke QuizAnswer
    public function answers()
    {
        return $this->hasMany(QuizAnswer::class);
    }

    // Supaya kolom answers otomatis di-cast ke array
    protected $casts = [
        'answers' => 'array',
    ];
}
