import Bg3 from '@/assets/images/bg-3.svg';

export default function StrukturCeritaFantasi() {
    const items = [
        {
            title: "Orientasi",
            desc: "Bagian awal cerita yang berisi pengenalan tokoh, latar tempat, waktu, dan suasana.",
            contoh:
                'Contoh: "Di sebuah hutan berkabut, seorang anak bernama Raka menemukan cincin bercahaya..."',
        },
        {
            title: "Komplikasi",
            desc: "Bagian awal cerita yang berisi pengenalan tokoh, latar tempat, waktu, dan suasana.",
            contoh:
                'Contoh: "Di sebuah hutan berkabut, seorang anak bernama Raka menemukan cincin bercahaya..."',
        },
        {
            title: "Resolusi",
            desc: "Bagian awal cerita yang berisi pengenalan tokoh, latar tempat, waktu, dan suasana.",
            contoh:
                'Contoh: "Di sebuah hutan berkabut, seorang anak bernama Raka menemukan cincin bercahaya..."',
        },
        {
            title: "Koda",
            desc: "Bagian awal cerita yang berisi pengenalan tokoh, latar tempat, waktu, dan suasana.",
            contoh:
                'Contoh: "Di sebuah hutan berkabut, seorang anak bernama Raka menemukan cincin bercahaya..."',
        },
    ];

    return (
        <div style={{ backgroundImage: `url(${Bg3})` }} className="bg-no-repeat bg-cover bg-center w-full min-h-screen bg-[#25024C] flex flex-col items-center py-16 px-4">
         
            {/* Header Ribbon */}
            <div className="relative mb-12">
                <div className="bg-[#3B056D] px-10 py-4 rounded-lg text-white text-center text-2xl md:text-3xl font-bold shadow-lg">
                    Struktur Teks Cerita Fantasi
                </div>
                {/* ekstra pita kiri-kanan */}
                <div className="hidden md:block absolute -left-6 top-1/2 h-4 w-6 bg-[#3B056D] -translate-y-1/2 rounded-l-sm"></div>
                <div className="hidden md:block absolute -right-6 top-1/2 h-4 w-6 bg-[#3B056D] -translate-y-1/2 rounded-r-sm"></div>
            </div>

            <div className="space-y-8 w-full max-w-4xl">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-6 rounded-2xl shadow-md border-2 border-orange-300"
                    >
                        {/* Badge Title */}
                        <div className="absolute -top-4 left-6 bg-orange-500 text-white font-semibold px-4 py-1 rounded-full shadow">
                            {item.title}
                        </div>

                        <p className="text-gray-800 mt-4">{item.desc}</p>
                        <p className="text-gray-600 text-sm mt-1 italic">{item.contoh}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
