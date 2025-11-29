<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuizResult;
use App\Models\QuizAnswer;

class QuizController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validasi data yang dikirim dari frontend
        $validated = $request->validate([
            // IDENTITAS (optional)
            'nama'           => 'nullable|string|max:255',
            'absen'          => 'nullable|string|max:255',
            'kelas'          => 'nullable|string|max:255',

            // DATA KUIS
            'answers'        => 'required|array',  
            'correctCount'   => 'required|integer',
            'totalQuestions' => 'required|integer',
            'score'          => 'required|numeric',
        ]);

        // 2. Simpan ke tabel quiz_results
        $result = QuizResult::create([
            'nama'           => $validated['nama'] ?? null,
            'absen'          => $validated['absen'] ?? null,
            'kelas'          => $validated['kelas'] ?? null,
            'answers'        => json_encode($validated['answers']),
            'correctCount'   => $validated['correctCount'],
            'totalQuestions' => $validated['totalQuestions'],
            'score'          => $validated['score'],
        ]);

        // 3. Kunci jawaban sementara (bisa dari DB nanti)
        $correct_answers = [
            '0' => 'B',
            '1' => 'B',
            '2' => 'B',
        ];

        // 4. Simpan ke tabel quiz_answers
        foreach ($validated['answers'] as $index => $answer) {
            QuizAnswer::create([
                'quiz_result_id'   => $result->id,
                'question'         => $index, // bisa diganti ID soal
                'selected_answer'  => $answer,
                'correct_answer'   => $correct_answers[$index] ?? null,
                'is_correct'       => ($answer === ($correct_answers[$index] ?? null)),
            ]);
        }

        // 5. Respon ke frontend
        return response()->json([
            'message' => 'Data kuis berhasil disimpan!',
            'data' => [
                'result'  => $result,
                'answers' => $validated['answers']
            ]
        ], 201);
    }
}
