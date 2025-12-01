<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CeritaFantasi extends Model
{
    protected $fillable = [
        'nama',
        'absen',
        'kelas',
        'judul',
        'cerita1',
        'cerita2',
        'cerita3',
        'cerita4'
    ];
}
