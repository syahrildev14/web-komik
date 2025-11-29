<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_result_id',
        'question',
        'selected_answer',
        'correct_answer',
        'is_correct',
    ];

    public function result()
    {
        return $this->belongsTo(QuizResult::class, 'quiz_result_id');
    }


    public function answers()
    {
        return $this->hasMany(QuizAnswer::class);
    }
}
