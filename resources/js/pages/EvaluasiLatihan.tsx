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
        // Soal 1
        question:
            'Di sebuah desa kecil bernama Lembah Senja, tinggal seorang anak bernama Raka yang gemar mengumpulkan benda-benda unik. Suatu sore, ia menemukan sebuah jam pasir berpendar biru di gudang peninggalan kakeknya. Saat ia membalik jam pasir itu, waktu di sekelilingnya tiba-tiba berhenti. Raka awalnya senang, namun panik ketika jam pasir itu retak dan butir pasirnya berhenti mengalir. Dari kejauhan muncul Penjaga Gelap yang memperingatkan bahwa jika jam pasir rusak, waktu akan terhenti selamanya. Raka menarik napas panjang dan berusaha tetap tenang. Dengan keberanian dan ketelitian, ia memperbaiki jam pasir tersebut. Perlahan, waktu kembali berjalan dan desa terselamatkan. Sikap Raka saat menghadapi jam pasir yang rusak menunjukkan bahwa tokoh tersebut memiliki sifat...',
        options: [
            { value: 'A', label: 'A. Ceroboh' },
            { value: 'B', label: 'B. Mudah panik' },
            { value: 'C', label: 'C. Mampu mengendalikan emosi' },
            { value: 'D', label: 'D. Bergantung pada benda ajaib' },
        ],
        correctAnswer: 'C',
    },
    // Soal 2
    {
        question:
            'Cerita Jam Pasir Penjaga Waktu tetap terasa logis meskipun bersifat fantasi karena...',
        options: [
            { value: 'A', label: 'A. Tokohnya seorang anak' },
            { value: 'B', label: 'B. Ceritanya berakhir bahagia' },
            {
                value: 'C',
                label: 'C. Kejadian memiliki hubungan sebab dan akibat',
            },
            { value: 'D', label: 'D. Latar ceritanya di desa' },
        ],
        correctAnswer: 'C',
    },
    // Soal 3
    {
        question:
            'Mira memasuki Hutan Kristal Ajaib yang berkilauan seperti cahaya pelangi. Pohon-pohon kristal berdenting halus setiap kali tertiup angin, membuat suasana terasa magis sekaligus menegangkan. Tiba-tiba, seekor Serigala Bayangan muncul dan menghadang jalannya. Mira gemetar ketakutan dan hampir melarikan diri karena makhluk itu menggeram dengan mata menyala tajam. Namun, Mira memilih menenangkan diri. Ia berbicara dengan lembut kepada Serigala Bayangan hingga makhluk itu pergi. Hutan kembali tenang dan Mira berhasil melanjutkan perjalanannya. Penyelesaian konflik dalam cerita Hutan Kristal Ajaib menunjukkan bahwa masalah dapat diatasi dengan...',
        options: [
            { value: 'A', label: 'A. Kekuatan fisik' },
            { value: 'B', label: 'B. Kekerasan' },
            { value: 'C', label: 'C. Kecepatan bertindak' },
            { value: 'D', label: 'D. Ketenangan dan kebijaksanaan' },
        ],
        correctAnswer: 'D',
    },
    // Soal 4
    {
        question:
            'Jika Mira langsung melarikan diri dari Serigala Bayangan, dampak yang paling mungkin terjadi adalah...',
        options: [
            { value: 'A', label: 'A. Konflik cerita hilang' },
            { value: 'B', label: 'B. Pesan moral cerita berkurang' },
            { value: 'C', label: 'C. Alur cerita menjadi lebih panjang' },
            { value: 'D', label: 'D. Cerita menjadi lebih menarik' },
        ],
        correctAnswer: 'B',
    },
    // Soal 5
    {
        question:
            'Raja Kertamarta adalah raja dari kerajaan Daha. Raja mempunyai dua orang putri, namanya Galuh Ajeng dan Candra Kirana yang cantik dan baik. Candra Kirana sudah ditunangkan dengan putra mahkota Kerajaan Kahuripan, yaitu Raden Inu Kertapati yang baik dan bijaksana. Akan tetapi, saudara kandung Candra Kirana, yaitu Galuh Ajeng, sangat iri pada Candra Kirana karena Galuh Ajeng menaruh hati pada Raden Inu. Galuh Ajeng menemui nenek sihir untuk mengutuk Candra Kirana. Dia juga memfitnahnya sehingga Candra Kirana diusir dari istana. Tokoh yang sudah ditunangkan dengan putra mahkota Kerajaan Kahuripan adalah...',
        options: [
            { value: 'A', label: 'A. Galuh Ajeng' },
            { value: 'B', label: 'B. Candra Kirana' },
            { value: 'C', label: 'C. Kertamerta' },
            { value: 'D', label: 'D. Inu Kertapati' },
        ],
        correctAnswer: 'B',
    },
    // Soal 6
    {
        question:
            'Raja Kertamarta adalah raja dari kerajaan Daha. Raja mempunyai dua orang putri, namanya Galuh Ajeng dan Candra Kirana yang cantik dan baik. Candra Kirana sudah ditunangkan dengan putra mahkota Kerajaan Kahuripan, yaitu Raden Inu Kertapati yang baik dan bijaksana. Akan tetapi, saudara kandung Candra Kirana, yaitu Galuh Ajeng, sangat iri pada Candra Kirana karena Galuh Ajeng menaruh hati pada Raden Inu. Galuh Ajeng menemui nenek sihir untuk mengutuk Candra Kirana. Dia juga memfitnahnya sehingga Candra Kirana diusir dari istana. Watak tokoh Galuh Ajeng pada cerita fantasi di atas adalah...',
        options: [
            { value: 'A', label: 'A. Baik hati' },
            { value: 'B', label: 'B. Sombong' },
            { value: 'C', label: 'C. Licik' },
            { value: 'D', label: 'D. Kikir' },
        ],
        correctAnswer: 'C',
    },
    // Soal 7
    {
        question:
            'Lampu itu penuh dengan debu. Ibu Aladin memegang lampu itu dan membersihkannya. Ketika ia mengusap-usap kaca lampu itu, tiba-tiba muncullah Jin yang sangat tinggi besar. “ Nyonya, katakan apa yang kau inginkan ? Aku adalah pelayanmu ! ”, kata sang Jin tiba-tiba. Ibu Aladin terkejut dan dilemparkannya lampu itu. Aladin yang sudah pernah mengalami, segera memberikan perintah. “ Kami lapar dan miskin. Datangkan makanan yang enak dan lezat ! ”, perintah Aladin. Dalam sekejap tampaklah di meja makan mereka sebuah hidangan ayam panggang, buah-buahan, susu segar dan nasi hangat dalam baki yang terbuat dari emas. Aladin dan ibunya makan sampai kenyang dan tiada henti-hentinya mereka mengucap rasa syukur. Latar tempat pada cerita fantasi di atas adalah...',
        options: [
            { value: 'A', label: 'A. Ruang Tamu' },
            { value: 'B', label: 'B. Kamar Tidur' },
            { value: 'C', label: 'C. Kamar Mandi' },
            { value: 'D', label: 'D. Ruang Makan' },
        ],
        correctAnswer: 'D',
    },
    // Soal 8
    {
        question:
            '“Kami lapar dan miskin. Datangkan makanan yang enak dan lezat!”, perintah Aladin. Dalam sekejap tampaklah di meja makan mereka sebuah hidangan ayam panggang, buah-buahan, susu segar dan nasi hangat dalam baki yang terbuat dari emas. Aladin dan ibunya makan sampai kenyang dan tiada henti-hentinya mereka mengucap rasa syukur. Penggalan teks di atas merupakan teks cerita fantasi bagian struktur...',
        options: [
            { value: 'A', label: 'A. Orientasi' },
            { value: 'B', label: 'B. Komplikasi' },
            { value: 'C', label: 'C. Resolusi' },
            { value: 'D', label: 'D. Identifikasi' },
        ],
        correctAnswer: 'C',
    },
    // Soal 9
    {
        question:
            'Lampu itu penuh dengan debu. Ibu Aladin memegang lampu itu dan membersihkannya. Ketika ia mengusap-usap kaca lampu itu, tiba-tiba muncullah Jin yang sangat tinggi besar. “Nyonya, katakan apa yang kau inginkan? Aku adalah pelayanmu!”, kata sang Jin tiba-tiba. Ibu Aladin terkejut dan dilemparkannya lampu itu. Aladin yang sudah pernah mengalami, segera memberikan perintah. “Kami lapar dan miskin. Datangkan makanan yang enak dan lezat!”, perintah Aladin. Dalam sekejap tampaklah di meja makan mereka sebuah hidangan ayam panggang, buah-buahan, susu segar dan nasi hangat dalam baki yang terbuat dari emas. Aladin dan ibunya makan sampai kenyang dan tiada henti-hentinya mereka mengucap rasa syukur. Keajaiban yang terdapat dalam cerita fantasi di atas adalah...',
        options: [
            { value: 'A', label: 'A. Lampu penuh dengan debu' },
            { value: 'B', label: 'B. Nasi hangat dalam baki yang terbuat dari emas' },
            { value: 'C', label: 'C. Makan sampai kenyang' },
            { value: 'D', label: 'D. Muncul Jin setelah mengusap-usap kaca lampu' },
        ],
        correctAnswer: 'D',
    },
    // Soal 10
    {
        question:
            'Setelah itu, Raja Kera melompat ke seberang sungai, berenang dengan susah payah. Dicarinya seutas akar yang menjulai ke pohon kayu. Ujung akarnya dibawa ke seberang kembali. Maksudnya hendak dibuat jembatan untuk rakyatnya. Namun malang, akar itu tidak sampai. Kurang sedikit lagi. Dengan tidak pikir panjang diikatnya kakinya sebelah, kemudian ia bergantung pada batang kayu. Dari kutipan cerita tersebut, dapat diketahui tentang hal-hal berikut ini, kecuali...',
        options: [
            { value: 'A', label: 'A. Nama tokoh' },
            { value: 'B', label: 'B. Latar peristiwa' },
            { value: 'C', label: 'C. Masalah yang dihadapi' },
            { value: 'D', label: 'D. Penyelesaian' },
        ],
        correctAnswer: 'D',
    },
    {
        // Soal 11
        question:
            'Setelah itu, Raja Kera melompat ke seberang sungai, berenang dengan susah payah. Dicarinya seutas akar yang menjulai ke pohon kayu. Ujung akarnya dibawa ke seberang kembali. Maksudnya hendak dibuat jembatan untuk rakyatnya. Namun malang, akar itu tidak sampai. Kurang sedikit lagi. Dengan tidak pikir panjang diikatnya kakinya sebelah, kemudian ia bergantung pada batang kayu. Latar peristiwa yang dipakai dalam konflik cerita fantasi tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Sejarah raja-raja dan kerajaan Nusantara' },
            { value: 'B', label: 'B. Masa prasejarah Indonesia' },
            { value: 'C', label: 'C. Perang kemerdekaan' },
            { value: 'D', label: 'D. Sejarah Islam Nusantara' },
        ],
        correctAnswer: 'B',
    },
    // Soal 12
    {
        question:
            'Setelah itu, Raja Kera melompat ke seberang sungai, berenang dengan susah payah. Dicarinya seutas akar yang menjulai ke pohon kayu. Ujung akarnya dibawa ke seberang kembali. Maksudnya hendak dibuat jembatan untuk rakyatnya. Namun malang, akar itu tidak sampai. Kurang sedikit lagi. Dengan tidak pikir panjang diikatnya kakinya sebelah, kemudian ia bergantung pada batang kayu. Pesan moral yang terdapat dalam kutipan tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Tidak ada akar anggota badan pun berguna bagi rakyat yang dipimpinnya' },
            { value: 'B', label: 'B. Melakukan sesuatu harus dengan perhitungan yang matang supaya selamat' },
            {
                value: 'C',
                label: 'C. Seorang pemimpin harus mau membuat jembatan untuk rakyatnya sehingga berhasil',
            },
            { value: 'D', label: 'D. Seorang pemimpin harus memikirkan nasib rakyatnya dalam keadaan bahaya sekalipun' },
        ],
        correctAnswer: 'D',
    },
    // Soal 13
    {
        question:
            'Kau harus membawanya kembali! Erza berteriak kalang kabut. Aku gugup dan bingung. Tak tau apa yang harus kuperbuat, sedangkan manusia dengan wajah setengah kera itu memandang sekeliling. Manusia purba itu menemukanku ketika aku memasuki dimensi alpha. Tanpa kusadari, ia mengikutiku. Manusia purba itu akan mati jika tidak kembali dalam waktu 12 jam. Kau harus membawanya kembali! Erza berteriak kalang kabut. Aku gugup dan bingung. Tak tau apa yang harus kuperbuat, sedangkan manusia dengan wajah setengah kera itu memandang sekeliling. Manusia purba itu menemukanku ketika aku memasuki dimensi alpha. Tanpa kusadari, ia mengikutiku. Manusia purba itu akan mati jika tidak kembali dalam waktu 12 jam. Bukti bahwa teks tersebut termasuk jenis teks cerita fantasi, antara lain...',
        options: [
            { value: 'A', label: 'A. Bersifat masuk akal' },
            { value: 'B', label: 'B. Berdasarkan dari kisah nyata' },
            { value: 'C', label: 'C. Mengajak pembaca mengenal sejarah' },
            { value: 'D', label: 'D. Memiliki tokoh dan latar cerita' },
        ],
        correctAnswer: 'D',
    },
    // Soal 14
    {
        question:
            'Pada saat yang sama peri kecil muncul sambil mengucurkan air mata. Dia mengaku bersalah dengan apa yang diperbuatnya. Dia sudah berbohong dan menuduh orang lain melakukan perbuatan jahat. Semua peri di negeri Fantasia merasa geram kepada peri kecil tersebut. Untungnya Ratu Peri menenangkan mereka dengan lembut. Tema teks cerita fantasi tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Keberanian' },
            { value: 'B', label: 'B. Kejujuran' },
            { value: 'C', label: 'C. Sosial' },
            { value: 'D', label: 'D. Keluarga' },
        ],
        correctAnswer: 'B',
    },
    // Soal 15
    {
        question:
            'Nono si Anak Rembulan, berangkat sendiri berlibur ke Wlingi, tempat tinggal Mbah Sastro. Ia selalu suka liburan disana karena ia bisa bersepeda keliling Wlingi dan bermandi-mandi di Sungai Lekso yang menyegarkan. Latar tempat yang tergambar pada teks cerita fantasi tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Tempat tinggal Mbah Sastro' },
            { value: 'B', label: 'B. Tempat liburan di desa' },
            { value: 'C', label: 'C. Sungai Lekso' },
            { value: 'D', label: 'D. Wlingi' },
        ],
        correctAnswer: 'D',
    },
    // Soal 16
    {
        question:
            'Tiba-tiba, Nataga, pemimpin perang seluruh binatang di Tana Modo, segera melesat menyeret ekor birunya. Mendadak, ekor Nataga mengeluarkan api besar. Nataga mengibaskan api pada ekornya yang keras, membentuk lingkaran sesuai tanda yang dibuat oleh semut, rayap, dan para tikus. Unsur cerita yang tidak terdapat pada teks tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Latar tempat' },
            { value: 'B', label: 'B. Latar waktu' },
            { value: 'C', label: 'C. Latar suasana' },
            { value: 'D', label: 'D. Tokoh cerita' },
        ],
        correctAnswer: 'B',
    },
    // Soal 17
    {
        question:
            'Saat membersihkan gudang sekolah, Alya menemukan sebuah pensil tua yang dapat menulis sendiri. Setiap kata yang tertulis berubah menjadi kenyataan, tetapi setiap perubahan membuat warna pensil semakin pudar. Alya menyadari bahwa jika pensil itu habis warnanya, ia tidak akan bisa menghapus kesalahan yang telah dibuat, sehingga ia harus memilih antara menggunakan kekuatan tersebut atau menghentikannya demi keselamatan semua orang. Konflik utama dalam teks cerita tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Alya tidak bisa menulis dengan baik' },
            { value: 'B', label: 'B. Pensil Alya dicuri oleh temannya' },
            { value: 'C', label: 'C. Alya harus memilih antara kekuatan dan risiko' },
            { value: 'D', label: 'D. Gudang sekolah yang kotor' },
        ],
        correctAnswer: 'C',
    },
    // Soal 18
    {
        question:
            'Saat masuk ke dalam rumah, mereka berempat dibuat takjub oleh berbagai hidangan cokelat yang ada. Mulai dari dinding rumah, engsel pintu, dan berbagai benda lain semuanya terbuat dari cokelat. Hans dan Jo yang sangat menyukai cokelat amat senang menemukan rumah yang terbuat dari cokelat ini. Keajaiban yang terdapat pada cerita fantasi tersebut adalah...',
        options: [
            { value: 'A', label: 'A. Rumah dan isinya terbuat dari cokelat' },
            { value: 'B', label: 'B. Tokoh sedang berpetualang ke tempat pembuatan cokelat' },
            { value: 'C', label: 'C. Nama tokoh hanyalah rekaan pengarang' },
            { value: 'D', label: 'D. Adanya dimensi tempat yang berbeda dengan dunia nyata' },
        ],
        correctAnswer: 'A',
    },
    // Soal 19
    {
        question:
            'Buku gambar Zaki bergambar Singa. Ia mencoba menyentuh buku gambar tersebut. Rasanya Zaki benar-benar menyentuh singa ... Tiba-tiba ia berada di sebuah alam liar. Kalimat yang tepat untuk melengkapiu cerita yang rumpang di atas adalah...',
        options: [
            { value: 'A', label: 'A. Zaki terkejut ketika buku gambar tersebut makin besar dan bergerak-gerak.' },
            { value: 'B', label: 'B. Tubuh Zaki mengecil dan menghilang di sebuah komidi putar.' },
            { value: 'C', label: 'C. Zaki ketakutan dan segera mengembalikan buku gambar tersebut.' },
            { value: 'D', label: 'D. Rasanya Zaki tak menyangka, ia tak percaya.' },
        ],
        correctAnswer: 'A',
    },
    // Soal 20
    {
        question:
            '20.	Pernyataan yang tepat digunakan pada bagian klimaks dalam sebuah cerita fantasi berikut ini adalah...',
        options: [
            { value: 'A', label: 'A. Di sebuah rumah manusia, hiduplah Cici si Cicak bersama dengan neneknya.' },
            { value: 'B', label: 'B. Cici akhirnya tahu ternyata neneknya dimangsa oleh si Kucing yang jahat. Ia berniat membalas dendam.' },
            { value: 'C', label: 'C. Cici si Cicak yang cerdik selalu membantu neneknya bekerja, baik di dalam maupun luar sarang.' },
            { value: 'D', label: 'D. Akhirnya kedua binatang yang saling bermusuhan itu sepakat untuk berdamai dan saling memaafkan.' },
        ],
        correctAnswer: 'B',
    },
];

const EvaluasiLatihan: React.FC = () => {
    // ⚠ utils submit
    const handleSubmit = async (data: AnswerPayload): Promise<void> => {
        const { answers, nama, absen, kelas } = data;

        console.log('Jawaban siswa:', answers);

        const correctAnswers: string[] = [
            'C',
            'C',
            'D',
            'B',
            'B',
            'C',
            'D',
            'C',
            'D',
            'D',
            'B',
            'D',
            'D',
            'B',
            'D',
            'B',
            'C',
            'A',
            'A',
            'B',
        ];
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
                '/api/simpan-kuis',
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
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary to-primary/50 px-6 py-16 text-center text-white">
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
