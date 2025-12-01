import Bg3 from '@/assets/images/bg-3.svg';

export default function StrukturCeritaFantasi() {
    const items = [
        {
            title: "ORIENTASI (Pengenalan)",
            desc: "Bagian awal cerita yang berisi pengenalan tokoh, latar tempat, waktu, dan suasana.",
            fungsi: [
                    "Memperkenalkan siapa tokoh utama",
                    "Menjelaskan di mana dan kapan cerita terjadi",
                    "Memberikan gambaran awal tentang situasi",
            ],
            contoh:
                'Di sebuah desa kecil bernama Lumina yang terletak di kaki Gunung Cahaya, hiduplah seorang gadis bernama Aria. Aria adalah gadis berusia 12 tahun yang memiliki mata berwarna ungu langka. Di desanya, mata ungu dipercaya sebagai tanda bahwa seseorang memiliki kemampuan khusus. Namun, Aria sendiri belum pernah merasakan kemampuan apapun dalam dirinya. Ia hidup seperti anak-anak lainnya, membantu orang tuanya di ladang dan bermain bersama teman-temannya."',
        },
         {
            title: "KOMPLIKASI (Masalah/Konflik)",
            desc: "Bagian tengah cerita yang menceritakan munculnya masalah atau konflik yang harus dihadapi oleh tokoh utama.",
            fungsi: [
                    "Menciptakan ketegangan dalam cerita",
                    "Membuat cerita menjadi menarik",
                    "Menunjukkan tantangan yang harus dihadapi tokoh",
            ],
            contoh:
                'Suatu malam, Aria bermimpi tentang sebuah kristal bercahaya yang tersembunyi di puncak Gunung Cahaya. Dalam mimpi itu, sebuah suara berbisik kepadanya bahwa kristal tersebut adalah kunci untuk menyelamatkan desanya dari kutukan kegelapan yang akan datang. Ketika Aria terbangun, ia melihat cahaya ungu keluar dari kedua tangannya. Ia ketakutan namun juga penasaran. Keesokan harinya, langit di atas desa mulai menggelap meskipun masih pagi hari. Tetua desa mengatakan bahwa kutukan kuno telah dimulai, dan hanya orang dengan mata ungu yang bisa menghentikannya."',
        },
         {
            title: "RESOLUSI (Penyelesaian)",
            desc: "Bagian akhir cerita yang menceritakan bagaimana masalah diselesaikan.",
            fungsi: [
                    "Menyelesaikan konflik dalam cerita",
                    "Memberikan akhir yang memuaskan",
                    "Menyampaikan pesan atau amanat",
            ],
            contoh:
                'Dengan bekal keberanian dan kepercayaan diri, Aria memutuskan untuk mendaki Gunung Cahaya sendirian. Perjalanannya penuh tantangan—ia harus melewati hutan gelap, sungai berbatu, dan gua yang dijaga makhluk misterius. Namun, setiap kali ia dalam bahaya, cahaya ungu dari tangannya melindunginya. Akhirnya, ia sampai di puncak dan menemukan kristal bercahaya seperti dalam mimpinya. Ketika Aria menyentuh kristal tersebut, cahaya terang menyebar ke seluruh desa dan mengusir kegelapan. Langit kembali cerah, dan desa Lumina selamat. Aria pulang sebagai pahlawan, dan ia kini memahami bahwa kemampuan khususnya adalah untuk melindungi orang-orang yang dicintainya."',
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
                        {/* Pengertian */}
                        <div>
                            <p className='font-semibold'>Pengertian</p>
                            <p className="text-gray-800">{item.desc}</p>
                        </div>
                        {/* Fungsi */}
                        <div>
                            <p className='font-semibold'>Fungsi</p>
                            <ul className="ml-5 list-disc text-base">
                                {item.fungsi.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Contoh */}
                        <div>
                            <p className='font-semibold'>Contoh</p>
                            <p className="text-gray-600 text-sm italic">{item.contoh}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
