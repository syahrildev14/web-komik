import KuisPilihanGanda, {
    type AnswerPayload,
    type Question,
} from '@/components/ui/KuisPilgan';

import AppLayout from '@/layouts/app-layout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

interface SubmitPayload {
    nama?: string;
    absen?: string;
    kelas?: string;
    answers: Record<number, string>;
    correctCount: number;
    totalQuestions: number;
    score: number;
}

const questions: Question[] = [
    {
        question: 'Bagian orientasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Puncak konflik dan masalah utama' },
            { value: 'B', label: 'B. Perkenalan tokoh, waktu, dan tempat' },
            { value: 'C', label: 'C. Penyelesaian akhir cerita' },
            { value: 'D', label: 'D. Pesan moral dari cerita' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Bagian komplikasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Tokoh, latar, dan suasana diperkenalkan' },
            {
                value: 'B',
                label: 'B. Konflik utama mulai muncul dan berkembang',
            },
            { value: 'C', label: 'C. Penyelesaian masalah utama' },
            { value: 'D', label: 'D. Penutup cerita yang menyentuh' },
        ],
        correctAnswer: 'B',
    },
    {
        question:
            'Resolusi dalam struktur cerita fantasi adalah bagian untuk...',
        options: [
            { value: 'A', label: 'A. Menyebutkan masalah awal tokoh' },
            { value: 'B', label: 'B. Mengembangkan konflik tokoh utama' },
            {
                value: 'C',
                label: 'C. Menyelesaikan konflik dan memberi akhir cerita',
            },
            { value: 'D', label: 'D. Memperkenalkan tokoh pendukung' },
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Tokoh dalam cerita fantasi biasanya memiliki karakter...',
        options: [
            { value: 'A', label: 'A. Selalu realistis dan sesuai kenyataan' },
            {
                value: 'B',
                label: 'B. Bisa memiliki kekuatan atau kemampuan di luar nalar',
            },
            { value: 'C', label: 'C. Hanya tokoh manusia nyata' },
            { value: 'D', label: 'D. Tidak memiliki perkembangan karakter' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Ciri utama cerita fantasi adalah...',
        options: [
            { value: 'A', label: 'A. Semuanya harus berdasarkan fakta nyata' },
            {
                value: 'B',
                label: 'B. Memiliki unsur magis atau dunia imajinatif',
            },
            { value: 'C', label: 'C. Berisi data dan angka statistik' },
            { value: 'D', label: 'D. Tidak menggunakan tokoh protagonis' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Bagian orientasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Puncak konflik dan masalah utama' },
            { value: 'B', label: 'B. Perkenalan tokoh, waktu, dan tempat' },
            { value: 'C', label: 'C. Penyelesaian akhir cerita' },
            { value: 'D', label: 'D. Pesan moral dari cerita' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Bagian komplikasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Tokoh, latar, dan suasana diperkenalkan' },
            {
                value: 'B',
                label: 'B. Konflik utama mulai muncul dan berkembang',
            },
            { value: 'C', label: 'C. Penyelesaian masalah utama' },
            { value: 'D', label: 'D. Penutup cerita yang menyentuh' },
        ],
        correctAnswer: 'B',
    },
    {
        question:
            'Resolusi dalam struktur cerita fantasi adalah bagian untuk...',
        options: [
            { value: 'A', label: 'A. Menyebutkan masalah awal tokoh' },
            { value: 'B', label: 'B. Mengembangkan konflik tokoh utama' },
            {
                value: 'C',
                label: 'C. Menyelesaikan konflik dan memberi akhir cerita',
            },
            { value: 'D', label: 'D. Memperkenalkan tokoh pendukung' },
        ],
        correctAnswer: 'C',
    },
    {
        question: 'Tokoh dalam cerita fantasi biasanya memiliki karakter...',
        options: [
            { value: 'A', label: 'A. Selalu realistis dan sesuai kenyataan' },
            {
                value: 'B',
                label: 'B. Bisa memiliki kekuatan atau kemampuan di luar nalar',
            },
            { value: 'C', label: 'C. Hanya tokoh manusia nyata' },
            { value: 'D', label: 'D. Tidak memiliki perkembangan karakter' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'Ciri utama cerita fantasi adalah...',
        options: [
            { value: 'A', label: 'A. Semuanya harus berdasarkan fakta nyata' },
            {
                value: 'B',
                label: 'B. Memiliki unsur magis atau dunia imajinatif',
            },
            { value: 'C', label: 'C. Berisi data dan angka statistik' },
            { value: 'D', label: 'D. Tidak menggunakan tokoh protagonis' },
        ],
        correctAnswer: 'B',
    },
];

const EvaluasiLatihan: React.FC = () => {
    // ⚠ utils submit
    const handleSubmit = async (data: AnswerPayload): Promise<void> => {
        const { answers, nama, absen, kelas } = data;

        console.log('Jawaban siswa:', answers);

        const correctAnswers: string[] = ['B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B'];
        const totalQuestions = correctAnswers.length;

        // Hitung jumlah jawaban benar
        const correctCount = Object.values(answers).filter(
            (ans, index) => ans === correctAnswers[index],
        ).length;

        const score = (correctCount / totalQuestions) * 100;

        // Payload akhir (bisa langsung pakai data yang diinput)
        const payload: SubmitPayload = {
            nama,
            absen,
            kelas,
            answers,
            correctCount,
            totalQuestions,
            score,
        };

        try {
            const res = await axios.post(
                'http://localhost:8000/api/simpan-kuis',
                payload,
            );
            console.log('Response dari server:', res.data);

            // SweetAlert2
            Swal.fire({
                title: '🎉 Kuis Berhasil!',
                text: `Skor kamu: ${score}`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error('Gagal mengirim data:', error);

            Swal.fire({
                title: '⚠ Terjadi Kesalahan',
                text: 'Gagal mengirim jawaban!',
                icon: 'error',
                confirmButtonText: 'Coba Lagi',
            });
        }
    };

    return (
        <AppLayout>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-purple-800 to-purple-900 px-6 py-16 text-center text-white">
                <div className="absolute inset-0 bg-[url('/pattern-lines.svg')] bg-repeat opacity-10"></div>

                <div className="relative z-10 mx-auto max-w-3xl space-y-4">
                    <h1 className="text-3xl font-extrabold drop-shadow-md md:text-5xl">
                        Kuis Pilihan Ganda
                    </h1>

                    <p className="text-base leading-relaxed opacity-90 md:text-lg">
                        Uji pemahamanmu tentang{' '}
                        <span className="font-semibold">
                            teks cerita fantasi
                        </span>
                        . Pilih jawaban paling tepat dari setiap soal yang
                        diberikan.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <div className="flex items-center gap-3 rounded-full bg-white/20 px-6 py-3 text-sm font-medium shadow backdrop-blur-md md:text-base">
                            Jawablah semua soal dengan teliti{' '}
                            <TipsAndUpdatesIcon />
                        </div>
                    </div>
                </div>
            </section>

            {/* Kuis */}
            <div className="p-6">
                <KuisPilihanGanda
                    questions={questions}
                    onSubmit={handleSubmit}
                />
            </div>
        </AppLayout>
    );
};

export default EvaluasiLatihan;
