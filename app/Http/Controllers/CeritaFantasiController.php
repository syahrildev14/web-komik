<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CeritaFantasi;
use App\Models\NilaiKreatif;
use Barryvdh\DomPDF\Facade\Pdf;

class CeritaFantasiController extends Controller
{
    // 🔹 Simpan cerita
    public function store(Request $request)
    {
        $request->validate([
            'nama'  => 'required|string',
            'absen' => 'required|string',
            'kelas' => 'required|string',
            'judul' => 'required|string',
        ]);

        $cerita = CeritaFantasi::create($request->all());

        return response()->json([
            'message' => 'Cerita berhasil disimpan!',
            'data' => $cerita
        ], 201);
    }

    // 🔹 Ambil semua cerita
    public function index()
    {
        return response()->json(CeritaFantasi::with('nilai')->latest()->get());
    }

    // 🔹 Simpan atau update nilai (versi 4 nilai + total)
    public function storeNilai(Request $request)
    {
        $request->validate([
            'cerita_id' => 'required|exists:cerita_fantasis,id',
            'nilai1'  => 'required|integer|min:0|max:100',
            'nilai2'  => 'required|integer|min:0|max:100',
            'nilai3'  => 'required|integer|min:0|max:100',
            'nilai4'  => 'required|integer|min:0|max:100',
            'nilai5'  => 'required|integer|min:0|max:100',
            'nilai6'  => 'required|integer|min:0|max:100',
            'nilai7'  => 'required|integer|min:0|max:100',
            'nilai8'  => 'required|integer|min:0|max:100',
            'nilai9'  => 'required|integer|min:0|max:100',
            'nilai10' => 'required|integer|min:0|max:100',
            'nilai11' => 'required|integer|min:0|max:100',
            'nilai12' => 'required|integer|min:0|max:100',
            'nilai13' => 'required|integer|min:0|max:100',
            'nilai14' => 'required|integer|min:0|max:100',
        ]);

        $total = $request->nilai1 + $request->nilai2 + $request->nilai3 + $request->nilai4 +
            $request->nilai5 + $request->nilai6 + $request->nilai7 + $request->nilai8 +
            $request->nilai9 + $request->nilai10 + $request->nilai11 + $request->nilai12 +
            $request->nilai13 + $request->nilai14;

        $nilai = NilaiKreatif::updateOrCreate(
            ['cerita_id' => $request->cerita_id],
            [
                'nilai1' => $request->nilai1,
                'nilai2' => $request->nilai2,
                'nilai3' => $request->nilai3,
                'nilai4' => $request->nilai4,
                'nilai5' => $request->nilai5,
                'nilai6' => $request->nilai6,
                'nilai7' => $request->nilai7,
                'nilai8' => $request->nilai8,
                'nilai9' => $request->nilai9,
                'nilai10' => $request->nilai10,
                'nilai11' => $request->nilai11,
                'nilai12' => $request->nilai12,
                'nilai13' => $request->nilai13,
                'nilai14' => $request->nilai14,
                'total'  => $total,
            ]
        );

        return response()->json([
            'success' => true,
            'message' => 'Nilai berhasil disimpan!',
            'data' => $nilai
        ]);
    }

    // 🔹 Cek nilai per cerita
    public function showNilai($id)
    {
        $nilai = NilaiKreatif::where('cerita_id', $id)->first();
        return response()->json($nilai);
    }

    // 🔹 Generate PDF nilai kreatif
    public function cetakPDF($id)
    {
        $nilai = NilaiKreatif::with('cerita')->where('cerita_id', $id)->firstOrFail();

        $pdf = Pdf::loadView('pdf.nilai-kreatif', compact('nilai'));
        return $pdf->stream('nilai_kreatif_' . $nilai->cerita->nama . '.pdf');
    }
}
