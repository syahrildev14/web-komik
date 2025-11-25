import AppLayout from '@/layouts/app-layout';

import FormCeritaFantasi from '@/components/ui/FormRuangKreatif';
import HeroSection from '@/components/ui/HeroSectionKreatif';

const RuangKreatif = () => {
    return (
        <AppLayout>
            {/* Hero Section */}
            <HeroSection />

            {/* Petunjuk */}
            <div className="mt-20 p-8">
                <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
                    Petunjuk Umum
                </h1>
                <div className="mx-auto mt-10 max-w-7xl space-y-4 rounded-2xl border border-purple-300 bg-white p-6 leading-relaxed shadow-md sm:p-8">
                    <p className="text-gray-800">
                        Perhatikan setiap gambar yang muncul secara berurutan.
                    </p>

                    <p className="text-gray-800">
                        Gunakan imajinasimu untuk menghubungkan gambar-gambar
                        itu menjadi satu cerita utuh. Tuliskan narasimu di kolom
                        yang tersedia.
                    </p>

                    <p className="font-semibold text-gray-800">
                        Gunakan struktur teks cerita fantasi:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-gray-700">
                        <li>Orientasi: perkenalan tokoh dan latar</li>
                        <li>Komplikasi: munculnya masalah</li>
                        <li>Resolusi: penyelesaian masalah</li>
                        <li>Koda: pesan moral atau penutup</li>
                    </ul>

                    <p className="text-gray-800">
                        Tambahkan unsur magis atau ajaib untuk memperkuat ciri
                        cerita fantasi.
                    </p>

                    <p className="font-medium text-gray-800">
                        Setelah selesai, klik{' '}
                        <span className="font-bold text-purple-700">
                            “Kirim Ceritaku”
                        </span>{' '}
                        untuk menyimpan hasil tulisanmu.
                    </p>
                </div>
            </div>

            {/* Form */}
            <FormCeritaFantasi
                onSubmit={(data) => {
                    console.log('🔍 Data diterima dari form:', data);
                    alert('Cerita berhasil dikirim!');
                }}
            />
        </AppLayout>
    );
};

export default RuangKreatif;
