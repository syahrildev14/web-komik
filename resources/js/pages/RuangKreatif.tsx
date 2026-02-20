import AppLayout from '@/layouts/app-layout';

import FormCeritaFantasi from '@/components/ui/FormRuangKreatif';
import HeroSection from '@/components/ui/HeroSectionKreatif';

const RuangKreatif = () => {
    return (
        <AppLayout>
            {/* Hero Section */}
            <HeroSection />

            {/* Petunjuk Umum */}
            <div className="mt-20  max-w-7xl mx-auto rounded-2xl py-8 px-4">
                <h1 className="text-center text-3xl font-bold text-accent md:text-5xl">
                    Petunjuk Umum
                </h1>
                <div className="mx-auto mt-10 max-w-7xl space-y-4 p-6 leading-relaxed text-accent">
                    <p className="">
                        Perhatikan setiap gambar yang muncul secara berurutan.
                    </p>

                    <p>
                        Gunakan imajinasimu untuk menghubungkan gambar-gambar
                        itu menjadi satu cerita utuh. Tuliskan narasimu di kolom
                        yang tersedia.
                    </p>

                    <div>
                        <p>
                            1. Perhatikan setiap gambar yang muncul pada layar
                            secara berurutan.
                        </p>
                        <p>
                            2. Gunakan imajinasimu untuk menghubungkan
                            gambar-gambaritu menjadi satu cerita utuh.
                        </p>
                        <p>
                            3. Tuliskan narasimu di kolom yang tersedia.
                        </p>
                        <div>
                            <p>
                                4. Gunakan struktur teks cerita fantasi
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Orientasi: perkenalan tokoh dan latar</li>
                                <li>Komplikasi: munculnya masalah</li>
                                <li>Resolusi: penyelesaian masalah</li>
                                <li>Koda: pesan moral atau penutup</li>
                            </ul>
                        </div>
                        <p>
                            5. Tambahkan unsur magis atau ajaib.
                        </p>
                    </div>

                    <p className="font-medium">
                        Setelah selesai, klik{' '}
                        <span className="font-bold text-primary">
                            “Kirim Ceritaku”
                        </span>{' '}
                        untuk menyimpan hasil tulisanmu.
                    </p>
                </div>
            </div>

            {/* Langkah-Langkah Menulis Cerita Fantasi */}
            <div className="p-8 text-accent">

                <div className="mx-auto mt-10 max-w-7xl space-y-4 rounded-2xl bg-primary p-6 leading-relaxed shadow-md sm:p-8 text-white">
                    <h1 className="text-center mb-10 md:mb-20 text-3xl font-bold text-white md:text-5xl">
                        Langkah-langkah Menulis Cerita Fantasi
                    </h1>
                    <p className=">
                        Perhatikan setiap gambar yang muncul secara berurutan.
                    </p>

                    <p className=">
                        Gunakan imajinasimu untuk menghubungkan gambar-gambar
                        itu menjadi satu cerita utuh. Tuliskan narasimu di kolom
                        yang tersedia.
                    </p>

                    <div>
                        <p className="font-semibold">
                            1. Gunakan struktur teks cerita fantasi
                        </p>
                        <ul className="ml-6 list-disc space-y-1 ">
                            <li>Perhatikan gambar dengan seksama</li>
                            <li>
                                Identifikasi elemen-elemen dalam gambar (tokoh,
                                tempat, objek)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            2. Tentukan Tema
                        </p>
                        <ul className="ml-6 list-disc space-y-1 ">
                            <li>
                                Apa ide utama cerita yang ingin kamu sampaikan?
                            </li>
                            <li>
                                Contoh: petualangan, persahabatan, keberanian
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            3. Buat Kerangka Cerita
                        </p>
                        <ul className="ml-6 list-disc space-y-1 ">
                            <li>
                                Orientasi: Siapa tokoh utama? Di mana dan kapan
                                cerita terjadi? Apa situasi awalnya?
                            </li>
                            <li>
                                Komplikasi: Masalah apa yang muncul? Tantangan
                                apa yang dihadapi tokoh?
                            </li>
                            <li>
                                Resolusi: Bagaimana masalah diselesaikan? Apa
                                akhir ceritanya?
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            4. Tentukan Tokoh
                        </p>
                        <ul className="ml-6 list-disc space-y-1 ">
                            <li>Siapa tokoh utama</li>
                            <li>Apa sifat/wataknya</li>
                            <li>Siapa tokoh lain yang terlibat?</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            5. Tentukan Latar
                        </p>
                        <ul className="ml-6 list-disc space-y-1 ">
                            <li>Di mana cerita terjadi?</li>
                            <li>Kapan cerita terjadi?</li>
                            <li>Bagaimana suasananya?</li>
                        </ul>
                    </div>

                    <p className="font-medium">
                        Setelah selesai, klik{' '}
                        <span className="font-bold text-amber-500">
                            “Kirim Ceritaku”
                        </span>{' '}
                        untuk menyimpan hasil tulisanmu.
                    </p>
                </div>
            </div>

            {/* Penulisan Draf */}
            <div className="p-8">
                <div className="mx-auto mt-10 max-w-7xl space-y-4 rounded-2xl bg-primary p-6 leading-relaxed shadow-md sm:p-8 text-white">
                    <h1 className="text-center mb-10 md:mb-20 text-3xl font-bold text-white md:text-5xl">
                        Struktur Ruang Kreatif
                    </h1>
                    <div className="rounded-xl md:p-6">
                        {/* Poin 1 */}
                        <div>
                            <p className="rounded-full bg-white px-4 py-2 text-center font-semibold text-accent md:w-fit md:text-left">
                                1. Tulis Orientasi (Paragraf 1)
                            </p>

                            {/* Grid Konten */}
                            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Penjelasan */}
                                <div>
                                    <p className="font-semibold ">
                                        Penjelasan:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>Perkenalkan tokoh utama</li>
                                        <li>
                                            Jelaskan di mana dan kapan cerita
                                            terjadi
                                        </li>
                                        <li>Gambarkan situasi awal</li>
                                    </ul>
                                </div>

                                {/* Tips */}
                                <div>
                                    <p className="font-semibold ">
                                        Tips:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>Buat pembukaan yang menarik</li>
                                        <li>Gunakan deskripsi yang detail</li>
                                        <li>Berikan kesan pertama yang kuat</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contoh */}
                            <div className="mt-4">
                                <p className="font-semibold ">
                                    Contoh:
                                </p>
                                <p className="mt-1 text-justify italic">
                                    Di sebuah hutan yang dipenuhi pohon-pohon
                                    raksasa bercahaya, hiduplah seekor rubah
                                    bersayap bernama Zephyr. Zephyr adalah rubah
                                    yang istimewa karena ia memiliki sayap
                                    berwarna perak yang bisa mengeluarkan debu
                                    bintang. Setiap malam, Zephyr terbang
                                    mengelilingi hutan untuk memastikan semua
                                    makhluk hutan tidur dengan nyenyak. Ia
                                    adalah penjaga hutan yang sangat dicintai
                                    oleh seluruh penghuni hutan.
                                </p>
                            </div>
                        </div>

                        {/* Poin 2 */}
                        <div className="mt-4 md:mt-10">
                            <p className="rounded-full bg-white px-4 py-2 text-center font-semibold text-accent md:w-fit md:text-left">
                                2. Tulis Komplikasi (Paragraf 2)
                            </p>

                            {/* Grid Konten */}
                            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Penjelasan */}
                                <div>
                                    <p className="font-semibold ">
                                        Penjelasan:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>Munculkan masalah atau konflik</li>
                                        <li>Ciptakan ketegangan</li>
                                        <li>
                                            Tunjukkan tantangan yang harus
                                            dihadapi tokoh
                                        </li>
                                    </ul>
                                </div>

                                {/* Tips */}
                                <div>
                                    <p className="font-semibold ">
                                        Tips:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>
                                            Buat masalah yang menarik dan tidak
                                            terduga
                                        </li>
                                        <li>Tunjukkan perjuangan tokoh</li>
                                        <li>
                                            Gunakan dialog untuk membuat cerita
                                            lebih hidup
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contoh */}
                            <div className="mt-4">
                                <p className="font-semibold ">
                                    Contoh:
                                </p>
                                <p className="mt-1 text-justify italic">
                                    Namun, suatu malam, sebuah bencana menimpa
                                    hutan. Portal hitam tiba-tiba muncul di
                                    tengah hutan, dan dari portal itu keluar
                                    makhluk-makhluk bayangan yang mulai menyerap
                                    cahaya dari pohon-pohon. Pohon-pohon yang
                                    kehilangan cahaya menjadi layu dan mati.
                                    Para penghuni hutan panik dan meminta
                                    bantuan Zephyr. "Kamu satu-satunya yang bisa
                                    menyelamatkan kami, Zephyr!" kata seekor
                                    rusa tua. Zephyr ketakutan, namun ia tahu ia
                                    harus melakukan sesuatu. Ia harus menemukan
                                    sumber portal hitam itu dan menutupnya
                                    sebelum seluruh hutan musnah.
                                </p>
                            </div>
                        </div>

                        {/* Poin 3 */}
                        <div className="mt-4 md:mt-10">
                            <p className="rounded-full bg-white px-4 py-2 text-center font-semibold text-accent md:w-fit md:text-left">
                                3. Tulis Resolusi (Paragraf 3)
                            </p>

                            {/* Grid Konten */}
                            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Penjelasan */}
                                <div>
                                    <p className="font-semibold ">
                                        Penjelasan:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>
                                            Selesaikan masalah dengan cara yang
                                            masuk akal
                                        </li>
                                        <li>
                                            Tunjukkan bagaimana tokoh mengatasi
                                            tantangan
                                        </li>
                                        <li>Berikan akhir yang memuaskan</li>
                                    </ul>
                                </div>

                                {/* Tips */}
                                <div>
                                    <p className="font-semibold ">
                                        Tips:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1">
                                        <li>
                                            Jangan terburu-buru menyelesaikan
                                            konflik
                                        </li>
                                        <li>
                                            Tunjukkan keberanian dan kekuatan
                                            tokoh
                                        </li>
                                        <li>Berikan pesan moral yang jelas</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contoh */}
                            <div className="mt-4">
                                <p className="font-semibold">
                                    Contoh:
                                </p>
                                <p className="mt-1 text-justify italic">
                                    Dengan penuh keberanian, Zephyr terbang
                                    mendekati portal hitam. Ia mengepakkan
                                    sayapnya sekuat tenaga, dan debu bintang
                                    yang keluar dari sayapnya mulai menerangi
                                    kegelapan. Makhluk-makhluk bayangan mundur,
                                    tidak tahan dengan cahaya debu bintang.
                                    Zephyr terus terbang mengelilingi portal
                                    sambil menyebarkan debu bintang, hingga
                                    akhirnya portal hitam itu menutup dan
                                    menghilang. Pohon-pohon hutan kembali
                                    bercahaya, dan semua penghuni hutan bersorak
                                    gembira. Zephyr telah menyelamatkan hutan,
                                    dan ia belajar bahwa keberanian dan
                                    kepedulian adalah kekuatan terbesar yang
                                    dimilikinya.
                                </p>
                            </div>
                        </div>
                    </div>
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
