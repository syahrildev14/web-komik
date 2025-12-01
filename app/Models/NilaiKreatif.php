<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NilaiKreatif extends Model
{
    protected $fillable = [
        'cerita_id',
        'nilai1',
        'nilai2',
        'nilai3',
        'nilai4',
        'nilai5',
        'nilai6',
        'nilai7',
        'nilai8',
        'nilai9',
        'nilai10',
        'nilai11',
        'nilai12',
        'nilai13',
        'nilai14',
        'nilai15',
        'nilai16',
        'nilai17',
        'total'
    ];

    public function cerita()
    {
        return $this->belongsTo(CeritaFantasi::class, 'cerita_id');
    }
}
