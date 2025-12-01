import Img1 from '@/assets/images/panci.svg';


export default function UnsurKebahasaanFantasi() {
    return (
        <div className="w-full text-white flex flex-col md:flex-row items-center justify-around px-6 md:px-16 py-16 gap-10">

            {/* Text Section */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Heading (tetap satu kolom, spanning 2 kolom di layar besar) */}
    <div className="md:col-span-2 space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Unsur Kebahasaan Cerita Fantasi
        </h2>
        <p className="mt-2 text-sm md:text-base text-center md:text-left">
            Cerita fantasi memiliki ciri khusus dalam penggunaan bahasa:
        </p>
    </div>

    {/* 1. Kata Ganti */}
    <div className="space-y-3">
        <h3 className="font-bold text-lg mb-2 bg-amber-600 w-fit px-4 py-1 rounded-full">1. Kata Ganti</h3>
        <p className="text-white text-sm">
            Konjungsi menghubungkan kata, frasa, atau kalimat agar alur cerita runtut dan logis.
        </p>

        <div className="font-semibold">
            <p>Kata Ganti Orang</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">Orang pertama: aku, saya, kami, kita</li>
                <li className="list-disc font-normal">Orang kedua: kamu, kalian</li>
                <li className="list-disc font-normal">Orang ketiga: ia, dia, mereka, beliau</li>
                <li className="list-none font-normal">
                    Contoh:
                    <ul className="ml-5 italic">
                        <li>- Aku memasuki hutan cahaya itu dengan berdebar</li>
                        <li>- Mereka berlarian mengejar naga perak yang melintas di langit</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="font-semibold">
            <p>Kata Ganti Benda/Petunjuk</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">ini</li>
                <li className="list-disc font-normal">itu</li>
                <li className="list-disc font-normal">tersebut</li>
                <li className="list-none font-normal">
                    Contoh: <span className="italic">Kota itu bersinar terang</span>
                </li>
            </ul>
        </div>
    </div>

    {/* 2. Konjungsi */}
    <div className="space-y-3">
        <h3 className="font-bold text-lg mb-2 bg-amber-600 w-fit px-4 py-1 rounded-full">2. Konjungsi</h3>
        <p className="text-white text-sm">
            Konjungsi menghubungkan kata, frasa, atau kalimat agar alur cerita runtut dan logis.
        </p>

        <div className="font-semibold">
            <p>a. Konjungsi Waktu</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">ketika, kemudian, setelah itu, pada akhirnya</li>
                <li className="list-disc font-normal">
                    Contoh: Setelah itu, pintu dimensi terbuka dengan sendirinya.
                </li>
            </ul>
        </div>

        <div className="font-semibold">
            <p>b. Konjungsi Sebab-Akibat</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">karena, sehingga, maka</li>
                <li className="list-disc font-normal">
                    Contoh: Kristal itu retak sehingga cahaya magisnya keluar.
                </li>
            </ul>
        </div>

        <div className="font-semibold">
            <p>c. Konjungsi Pilihan</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">atau, maupun</li>
                <li className="list-disc font-normal">
                    Contoh: Ia bisa kembali ke desa atau terus menjelajahi dunia paralel.
                </li>
            </ul>
        </div>

        <div className="font-semibold">
            <p>d. Konjungsi Pertentangan</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">tetapi, namun</li>
                <li className="list-disc font-normal">
                    Contoh: Nina ingin pulang, tetapi kekuatan angin menahannya.
                </li>
            </ul>
        </div>
    </div>

    {/* 3. Kalimat Langsung & Tidak Langsung */}
    <div className="md:col-span-2 space-y-3">
        <h3 className="font-bold text-lg mb-2 bg-amber-600 w-fit px-4 py-1 rounded-full">
            3. Kalimat Langsung dan Tidak Langsung
        </h3>

        {/* a. Kalimat Langsung */}
        <div className="font-semibold">
            <p>a. Kalimat Langsung</p>
            <ul className="ml-6 space-y-1">
                <li className="font-normal">Kalimat yang mengutip langsung ucapan tokoh, ditandai dengan tanda petik.</li>
                <ul className="ml-6">
                    <li className="list-disc font-normal">Rafa berkata, “Aku melihat bayangan raksasa itu!”</li>
                    <li className="list-disc font-normal">“Ayo ikuti aku!” seru Peri Bintang.</li>
                </ul>
            </ul>
        </div>

        {/* b. Kalimat Tidak Langsung */}
        <div className="font-semibold">
            <p>b. Kalimat Tidak Langsung</p>
            <p className="font-normal">Kalimat yang melaporkan isi ucapan tokoh.</p>
            <p className="font-normal">Ciri-ciri:</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">Tidak menggunakan tanda petik</li>
                <li className="list-disc font-normal">Menggunakan kata bahwa, agar, untuk, dll.</li>
                <li className="list-disc font-normal">Isi ucapan berubah menjadi laporan.</li>
            </ul>
            <p className="font-normal mt-2">Contoh:</p>
            <ul className="ml-6 space-y-1">
                <li className="list-disc font-normal">Rafa mengatakan bahwa ia melihat bayangan raksasa itu.</li>
                <li className="list-disc font-normal">Peri Bintang meminta mereka untuk mengikutinya.</li>
            </ul>
        </div>
    </div>

</div>


           

        </div>
    );
}
