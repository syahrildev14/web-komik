<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Nilai Kreatif</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        td,
        th {
            border: 1px solid black;
            padding: 4px;
            text-align: center;
            word-wrap: break-word;
        }

        h3 {
            margin-bottom: 5px;
        }

        p {
            margin: 2px 0;
        }

        .cerita-box {
            margin-top: 5px;
            padding: 5px;
            border: 1px solid #ccc;
            page-break-inside: avoid;
            /* supaya cerita tidak terpotong halaman PDF */
        }

        .cerita-title {
            font-weight: bold;
            margin-bottom: 2px;
        }
    </style>
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('logo-cerita.png') }}">


</head>

<body>

    <h3>📄 Hasil Nilai Ruang Kreatif</h3>
    <p><b>Nama:</b> {{ $nilai->cerita->nama }}</p>
    <p><b>Kelas:</b> {{ $nilai->cerita->kelas }}</p>
    <p><b>Judul:</b> {{ $nilai->cerita->judul }}</p>

    <!-- TABEL NILAI -->
    <table>
        <tr>
            @for ($i = 1; $i <= 14; $i++)
                <th>Cerita {{ $i }}</th>
                @endfor
                <th>Total</th>
        </tr>
        <tr>
            @for ($i = 1; $i <= 14; $i++)
                <td>{{ $nilai['nilai'.$i] }}</td>
                @endfor
                <td><b>{{ $nilai->total }}</b></td>
        </tr>
    </table>

    <p><b>Rata-rata Skor: {{ number_format($nilai->total / 14, 2) }}</b></p>


    <br><br>
    <h4>📘 Isi Cerita Lengkap</h4>

    @for ($i = 1; $i <= 14; $i++)
        <div class="cerita-box">
        <div class="cerita-title">Cerita {{ $i }}</div>
        <div>{{ $nilai->cerita['cerita'.$i] }}</div>
        </div>
        @endfor

        <br><br>
        <p>Guru Penilai <b>Dita Permatasari, S.Pd.</b></p>

</body>

</html>