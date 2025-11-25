import Img1 from '@/assets/images/panci.svg';


export default function UnsurKebahasaanFantasi() {
    return (
        <div className="w-full text-slate-800 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">

            {/* Text Section */}
            <div className="max-w-xl space-y-6">

                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                        Unsur Kebahasaan Cerita Fantasi
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-center md:text-left text-slate-800">
                        Cerita fantasi memiliki ciri khusus dalam penggunaan bahasa:
                    </p>
                </div>

                {/* 1. Kata Sifat */}
                <div>
                    <h3 className="font-bold text-lg">1. Kata Sifat (Adjektiva)</h3>
                    <p className="text-slate-800 text-sm mb-2">
                        Untuk menggambarkan tokoh atau latar.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["megah", "bersinar", "raksasa", "misterius", "berkilau"].map((w, i) => (
                            <span key={i} className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                {w}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 2. Majas */}
                <div>
                    <h3 className="font-bold text-lg">2. Majas</h3>
                    <p className="text-slate-800 text-sm mb-2">
                        Digunakan untuk memperkuat imajinasi.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["personifikasi", "metafora", "hiperbola"].map((w, i) => (
                            <span key={i} className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                {w}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 3. Dialog */}
                <div>
                    <h3 className="font-bold text-lg">3. Dialog</h3>
                    <p className="text-slate-800 text-sm mb-2">
                        Untuk memperjelas karakter tokoh.
                    </p>

                    <div className="bg-amber-600 text-white px-4 py-2 rounded-xl text-sm italic shadow">
                        “Ayo cepat! Kita harus keluar sebelum portal tertutup!” seru Luna.
                    </div>
                </div>

                {/* 4. Kata Kerja Aksi */}
                <div>
                    <h3 className="font-bold text-lg">4. Kata Kerja Aksi</h3>
                    <p className="text-slate-800 text-sm mb-2">Contoh</p>

                    <div className="flex flex-wrap gap-2">
                        {["berlari", "melompat", "terbang", "menyihir"].map((w, i) => (
                            <span key={i} className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                {w}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 5. Penggunaan Waktu */}
                <div>
                    <h3 className="font-bold text-lg">5. Penggunaan Waktu</h3>
                    <p className="text-slate-800 text-sm mb-2">
                        Biasanya fleksibel: masa lalu, masa depan, atau waktu tidak spesifik.
                    </p>

                    <div className="bg-amber-600 text-white px-4 py-2 rounded-xl text-sm italic shadow max-w-sm">
                        Pada zaman yang tidak dikenal…
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="justify-center hidden md:block">
                <img
                    src={Img1}
                    alt="Bahasa Fantasi"
                    className="w-60 md:w-96 object-contain"
                />
            </div>

        </div>
    );
}
