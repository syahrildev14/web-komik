import KuisPilihanGanda from '@/components/ui/KuisPilgan';
import AppLayout from '@/layouts/app-layout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const questions = [
    {
        question: 'Bagian orientasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Puncak konflik dan masalah utama' },
            { value: 'B', label: 'B. Perkenalan tokoh, waktu, dan tempat' },
            { value: 'C', label: 'C. Penyelesaian akhir cerita' },
            { value: 'D', label: 'D. Pesan moral dari cerita' },
        ],
    },
    {
        question: 'Bagian orientasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Puncak konflik dan masalah utama' },
            { value: 'B', label: 'B. Perkenalan tokoh, waktu, dan tempat' },
            { value: 'C', label: 'C. Penyelesaian akhir cerita' },
            { value: 'D', label: 'D. Pesan moral dari cerita' },
        ],
    },
    {
        question: 'Bagian orientasi dalam cerita fantasi berisi...',
        options: [
            { value: 'A', label: 'A. Puncak konflik dan masalah utama' },
            { value: 'B', label: 'B. Perkenalan tokoh, waktu, dan tempat' },
            { value: 'C', label: 'C. Penyelesaian akhir cerita' },
            { value: 'D', label: 'D. Pesan moral dari cerita' },
        ],
    },
    // Tambahkan soal lain...
];

const EvaluasiLatihan = () => {
    const handleSubmit = (answers) => {
        console.log('Jawaban siswa:', answers);
    };

    return (
        <AppLayout>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-purple-800 to-purple-900 px-6 py-16 text-center text-white">
                {/* Garis dekorasi background */}
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
                        <div className="rounded-full bg-white/20 px-6 py-3 text-sm font-medium shadow backdrop-blur-md md:text-base gap-3 flex items-center">
                            Jawablah semua soal dengan teliti <TipsAndUpdatesIcon/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kuis Pilihan Ganda */}
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
