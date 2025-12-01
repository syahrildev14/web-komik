<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CeritaFantasi;
use App\Models\NilaiKreatif;

class CeritaFantasiController extends Controller
{
    // 🔹 Simpan cerita
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
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
        return response()->json(CeritaFantasi::all());
    }

    // 🔹 Simpan nilai ruang kreatif (admin)
    public function storeNilai(Request $request)
    {
        $request->validate([
            'cerita_id' => 'required|exists:cerita_fantasis,id',
            'nilai'     => 'required|integer|min:0|max:100',
            'komentar'  => 'nullable|string|max:255',
        ]);

        $nilai = NilaiKreatif::create([
            'cerita_id' => $request->cerita_id,
            'nilai'     => $request->nilai,
            'komentar'  => $request->komentar,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Nilai berhasil disimpan!',
            'data' => $nilai
        ], 201);
    }

    // 🔹 Cek nilai per cerita
    public function showNilai($id)
    {
        $nilai = NilaiKreatif::where('cerita_id', $id)->first();

        return response()->json($nilai);
    }
}
