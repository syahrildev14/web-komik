import AppLayout from '@/layouts/app-layout';

const KamusFantasi = () => {
    const istilahFantasi = [
        //==================================================== 1-5
        {
            kata: 'Alam Gaib',
            arti: 'Dunia yang tidak terlihat manusia',
            contoh: '"Ia masuk ke alam gaib."',
        },
        {
            kata: 'Bayangan',
            arti: 'Makhluk gelap yang sulit dilihat',
            contoh: '"Bayangan itu bergerak tanpa suara."',
        },
        {
            kata: 'Benteng',
            arti: 'Bangunan kuat untuk pertahanan',
            contoh: '"Pasukan berlindung di dalam benteng."',
        },
        {
            kata: 'Cahaya Suci',
            arti: 'Kekuatan baik untuk melawan kejahatan',
            contoh: '"Cahaya suci mengusir kegelapan."',
        },
        {
            kata: 'Dimensi',
            arti: 'Ruang atau dunia yang berbeda',
            contoh: '"Mereka terjebak di dimensi lain."',
        },
        //==================================================== 6-10
        {
            kata: 'Dunia Paralel',
            arti: 'Dunia lain yang berbeda dari dunia manusia',
            contoh: '"Ia tersesat ke dunia paralel."',
        },
        {
            kata: 'Gerbang Ajaib',
            arti: 'Pintu besar yang memiliki kekuatan sihir',
            contoh: '"Gerbang ajaib itu terbuka."',
        },
        {
            kata: 'Hutan Terlarang',
            arti: 'Hutan berbahaya dan dilarang dimasuki',
            contoh: '"Tak ada yang berani masuk hutan terlarang."',
        },
        {
            kata: 'Ilusi',
            arti: 'Tipuan penglihatan akibat sihir',
            contoh: '"Musuh terperangkap dalam ilusi."',
        },
        {
            kata: 'Istana Ajaib',
            arti: 'Istana dengan kekuatan sihir',
            contoh: '"Istana ajaib tampak berkilau."',
        },
        //==================================================== 11-15
        {
            kata: 'Jimat',
            arti: 'Benda kecil yang memiliki kekuatan magis',
            contoh: '"Ia membawa jimat pelindung."',
        },
        {
            kata: 'Kekuatan Gelap',
            arti: 'Kekuatan jahat',
            contoh: '"Kekuatan gelap mengancam dunia."',
        },
        {
            kata: 'Kerajaan',
            arti: 'Wilayah yang dipimpin raja',
            contoh: '"Kerajaan Elvaria diserang naga."',
        },
        {
            kata: 'Klan',
            arti: 'Kelompok atau keluarga besar',
            contoh: '"Ia berasal dari klan pejuang."',
        },
        {
            kata: 'Kristal Ajaib',
            arti: 'Batu berkilau berkekuatan',
            contoh: '"Kristal ajaib sangat berharga."',
        },
        //==================================================== 16-20
        {
            kata: 'Kutukan',
            arti: 'Sihir jahat',
            contoh: '"Desa itu terkena kutukan."',
        },
        {
            kata: 'Makhluk Ajaib',
            arti: 'Makhluk tidak nyata',
            contoh: '"Hutan dihuni makhluk ajaib."',
        },
        {
            kata: 'Makhluk Gaib',
            arti: 'Makhluk tak kasat mata',
            contoh: '"Ia mendengar suara makhluk gaib."',
        },
        {
            kata: 'Mantra',
            arti: 'Ucapan khusus sihir',
            contoh: '"Ia membaca mantra."',
        },
        {
            kata: 'Medan Perang',
            arti: 'Tempat pertempuran',
            contoh: '"Medan perang dipenuhi kabut."',
        },
        //==================================================== 21-25
        {
            kata: 'Naga',
            arti: 'Makhluk besar bersayap',
            contoh: '"Naga menjaga gunung emas."',
        },
        {
            kata: 'Pahlawan',
            arti: 'Tokoh utama berani',
            contoh: '"Pahlawan menolong semua orang."',
        },
        {
            kata: 'Pedang Ajaib',
            arti: 'Senjata berkekuatan',
            contoh: '"Pedang ajaib bersinar."',
        },
        {
            kata: 'Pedang Cahaya',
            arti: 'Pedang bersinar',
            contoh: '"Pedang cahaya menyala."',
        },
        {
            kata: 'Pedang terlarang',
            arti: 'Senjata berbahaya',
            contoh: '"Pedang terlarang disimpan."',
        },
        //==================================================== 26-30
        {
            kata: 'Penjaga',
            arti: 'Pelindung tempat',
            contoh: '"Penjaga gerbang berdiri."',
        },
        {
            kata: 'Penjaga Gerbang',
            arti: 'Pelindung pintu dunia lain',
            contoh: '"Penjaga gerbang melarang masuk."',
        },
        {
            kata: 'Penjaga Waktu',
            arti: 'Makhluk pengatur waktu',
            contoh: '"Penjaga waktu muncul."',
        },
        {
            kata: 'Penjahat',
            arti: 'Tokoh jahat',
            contoh: '"Penjahat merebut kekuasaan."',
        },
        {
            kata: 'Penjelmaan',
            arti: 'Perubahan wujud',
            contoh: '"Penyihir melakukan penjelmaan."',
        },
        //==================================================== 31-35
        {
            kata: 'Peri',
            arti: 'Makhluk kecil bersayap',
            contoh: '"Peri membantu anak itu."',
        },
        {
            kata: 'Portal',
            arti: 'Pintu ajaib antar dunia',
            contoh: '"Ia masuk portal."',
        },
        {
            kata: 'Pusaka',
            arti: 'Benda warisan sakti',
            contoh: '"Pusaka dijaga turun-temurun."',
        },
        {
            kata: 'Putri',
            arti: 'Anak perempuan raja',
            contoh: '"Putri memiliki kekuatan."',
        },
        {
            kata: 'Raja',
            arti: 'Pemimpin kerajaan',
            contoh: '"Raja memerintah pasukan."',
        },
        //==================================================== 36-40
        {
            kata: 'Raksasa',
            arti: 'Makhluk besar',
            contoh: '"Raksasa menjaga gerbang."',
        },
        {
            kata: 'Ramalan',
            arti: 'Perkiraan masa depan',
            contoh: '"Ramalan mengatakan pahlawan datang."',
        },
        {
            kata: 'Ramuan',
            arti: 'Cairan ajaib',
            contoh: '"Ia meminum ramuan."',
        },
        {
            kata: 'Ratu',
            arti: 'Pemimpin perempuan',
            contoh: '"Ratu bijaksana."',
        },
        {
            kata: 'Roh Penjaga',
            arti: 'Roh pelindung',
            contoh: '"Roh penjaga muncul."',
        },
        //==================================================== 41-44
        {
            kata: 'Sayap',
            arti: 'Alat terbang',
            contoh: '"Peri memiliki sayap."',
        },
        {
            kata: 'Sihir',
            arti: 'Kekuatan ajaib',
            contoh: '"Penyihir menggunakan sihir."',
        },
        {
            kata: 'Takdir',
            arti: 'Jalan hidup',
            contoh: '"Itu adalah takdirnya."',
        },
        {
            kata: 'Tongkat Sihir',
            arti: 'Alat mengeluarkan sihir',
            contoh: '"Ia memegang tongkat sihir."',
        },
    ];

    return (
        <AppLayout>
            <div className="mx-auto max-w-5xl px-6 py-10 text-white">
                {/* Judul */}
                <h1 className="mb-4 text-center text-4xl font-bold text-primary">
                    📚 Kamus Fantasi
                </h1>
                <p className="mb-8 text-center text-lg text-accent md:max-w-3xl mx-auto">
                    Temukan istilah-istilah penting dalam dunia fantasi untuk
                    membantumu menulis cerita yang lebih seru dan imajinatif!
                </p>

                {/* Daftar Kamus */}
                <div className="space-y-4">
                    {istilahFantasi.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-primary p-4 transition duration-300 hover:bg-primary/90"
                        >
                            <h2 className="text-xl font-semibold text-amber-300">
                                {item.kata}
                            </h2>
                            <p className="text-gray-200">{item.arti}</p>
                            <p className="text-gray-200 italic">
                                Contoh: {item.contoh}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Motivasi */}
                <p className="mt-8 text-center text-lg font-semibold text-primary">
                    "Kata yang tepat bisa membuka pintu menuju dunia fantasi
                    yang luar biasa!"
                </p>
            </div>
        </AppLayout>
    );
};

export default KamusFantasi;
