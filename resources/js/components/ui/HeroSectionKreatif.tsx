import BgHero from '@/assets/images/bg-kreatif.svg';


export default function HeroSection() {
    return (
        <section className="top-0 p-8 text-center lg:text-left lg:p-12 relative flex w-full min-h-screen items-center bg-cover bg-center" style={{ backgroundImage: `url(${BgHero})`}}>
            {/* Content */}
            <div className="relative z-10 px-6 max-w-4xl">
                <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-amber-500">
                    “Ciptakan Dunia Fantasimu Sendiri!”
                </h1>
                <p className='text-white max-w-2xl lg:text-justify'>“Di Ruang Kreatif, kamu bisa menulis cerita fantasi bergambar dengan panduan struktur teks lengkap. Mulailah petualanganmu dari orientasi hingga resolusi—atau tambahkan koda untuk pesan terakhir!”</p>
            </div>
        </section>

    );
}