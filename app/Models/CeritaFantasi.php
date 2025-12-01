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
        'cerita4',
        'cerita5',
        'cerita6',
        'cerita7',
        'cerita8',
        'cerita9',
        'cerita10',
        'cerita11',
        'cerita12',
        'cerita13',
        'cerita14',
        'cerita15',
        'cerita16',
        'cerita17',
    ];
    
    // Relasi ke nilai kreatif
    public function nilai()
    {
        return $this->hasOne(NilaiKreatif::class, 'cerita_id');
    }
}
