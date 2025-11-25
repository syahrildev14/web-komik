import AppLayout from '@/layouts/app-layout';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';

const KamusFantasi = () => {
    const istilahFantasi = [
        {
            kata: 'Tokoh Utama',
            arti: 'Karakter utama dalam cerita yang mengalami petualangan.',
        },
        {
            kata: 'Tokoh Antagonis',
            arti: 'Karakter yang menentang tokoh utama atau menjadi penghalang.',
        },
        {
            kata: 'Magis',
            arti: 'Hal-hal yang berhubungan dengan kekuatan sihir atau keajaiban.',
        },
        {
            kata: 'Dimensi',
            arti: 'Dunia atau ruang lain yang berbeda dari dunia nyata.',
        },
        {
            kata: 'Legenda',
            arti: 'Cerita turun-temurun yang biasanya bercampur unsur magis.',
        },
        { kata: 'Portal', arti: 'Gerbang untuk berpindah ke dunia lain.' },
        {
            kata: 'Misi',
            arti: 'Tugas penting yang harus diselesaikan tokoh utama.',
        },
        {
            kata: 'Makhluk Fantasi',
            arti: 'Makhluk yang tidak ada di dunia nyata, seperti naga, peri, elf.',
        },
        {
            kata: 'Kutukan',
            arti: 'Sihir negatif yang membuat seseorang mengalami nasib buruk.',
        },
        {
            kata: 'Artefak',
            arti: 'Benda magis yang memiliki kekuatan atau rahasia penting.',
        },
        {
            kata: 'Mentor',
            arti: 'Tokoh yang menjadi pembimbing atau pemberi petunjuk kepada tokoh utama.',
        },
        {
            kata: 'Climax',
            arti: 'Bagian puncak dari cerita, biasanya saat pertarungan atau konflik utama.',
        },
        {
            kata: 'Ending',
            arti: 'Akhir cerita, bisa berupa kebahagiaan, kesedihan, atau kejutan.',
        },
    ];

    return (
        <AppLayout>
            <div className="mx-auto max-w-5xl px-6 py-10 text-white">
                {/* Judul */}
                <h1 className="mb-4 text-center text-4xl font-bold text-amber-400">
                    📚 Kamus Fantasi
                </h1>
                <p className="mb-8 text-center text-lg text-gray-300">
                    Temukan istilah-istilah penting dalam dunia fantasi untuk
                    membantumu menulis cerita yang lebih seru dan imajinatif!
                </p>

                {/* Daftar Kamus */}
                <div className="space-y-4">
                    {istilahFantasi.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-amber-600 bg-[#ffffff10] p-4 transition duration-300 hover:bg-[#ffffff20]"
                        >
                            <h2 className="text-xl font-semibold text-amber-300">
                                {item.kata}
                            </h2>
                            <p className="text-gray-200">{item.arti}</p>
                        </div>
                    ))}
                </div>

                {/* Tips penggunaan */}
                <div className="mt-10 rounded-lg border border-amber-600 bg-[#ffffff08] p-6">
                    <h3 className="mb-2 text-2xl font-semibold text-amber-400">
                        <NoiseAwareIcon/> Cara Menggunakan Kamus Fantasi
                    </h3>
                    <ul className="list-inside list-disc space-y-2 text-gray-200">
                        <li>Pilih istilah yang cocok untuk ceritamu.</li>
                        <li>Kembangkan menjadi kalimat atau dialog menarik.</li>
                        <li>
                            Misalnya gunakan kata{' '}
                            <span className="font-bold text-amber-300">
                                “portal”
                            </span>{' '}
                            untuk memulai petualangan.
                        </li>
                        <li>
                            Jika ada istilah baru yang belum ada, kamu boleh
                            menambahkannya sendiri!
                        </li>
                    </ul>
                </div>

                {/* Motivasi */}
                <p className="mt-8 text-center text-lg font-semibold text-amber-400">
                    "Kata yang tepat bisa membuka pintu menuju dunia fantasi
                    yang luar biasa!"
                </p>
            </div>
        </AppLayout>
    );
};

export default KamusFantasi;
