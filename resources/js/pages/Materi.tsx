import AppLayout from '@/layouts/app-layout';
// image
import imgHero from '@/assets/images/book.svg';
import Img2 from '@/assets/images/penari.svg';
import StrukturCeritaFantasi from '@/components/ui/StrukturCeritaFantasi';
import UnsurKebahasaanFantasi from '@/components/ui/UnsurKebahasaanFantasi';
import { Button } from '@mui/material';
// icons
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Materi = () => {
    return (
        <AppLayout>
            {/* Hero Section */}
            <div className="top-0 flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 px-4 py-12 md:flex-row md:gap-20 md:px-12 lg:px-20">
                {/* Text */}
                <div className="max-w-xl space-y-5 text-center text-amber-600 md:text-left">
                    <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                        Apa Itu Cerita Fantasi?
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl">
                        Cerita fantasi adalah cerita yang menghadirkan dunia,
                        tokoh, dan peristiwa yang tidak dapat ditemukan dalam
                        kehidupan nyata. Imajinasi menjadi penggerak utama,
                        sehingga pembaca dibawa ke pengalaman yang penuh
                        keajaiban.
                    </p>

                    <Button
                        variant="outlined"
                        className="group mx-auto flex items-center gap-2 !rounded-xl !border-amber-600 !bg-white !px-5 !py-3 text-base !text-amber-600 duration-300 hover:!bg-amber-600 hover:!text-white sm:!text-lg md:mx-0"
                    >
                        Pelajari Selengkapnya
                        <ArrowCircleDownIcon className="text-amber-600 duration-300 group-hover:text-white" />
                    </Button>
                </div>

                {/* Image */}
                <div className="flex w-full justify-center">
                    <img
                        src={imgHero}
                        alt="Cerita Fantasi"
                        className="w-52 object-contain sm:w-64 md:w-96 lg:w-[28rem]"
                    />
                </div>
            </div>

            <StrukturCeritaFantasi />
            <UnsurKebahasaanFantasi />

            {/* Contoh Teks Cerita Fantasi */}
            <section className="px-4 py-10">
                <h1 className="text-center text-3xl font-bold md:text-5xl">
                    Contoh Teks Cerita Fantasi
                </h1>

                <div className="mx-auto mt-14 flex max-w-screen-lg flex-col items-center justify-center gap-10 md:flex-row">
                    {/* Gambar */}
                    <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                        <img
                            src={Img2}
                            alt="Cerita Fantasi"
                            className="w-64 object-contain sm:w-80 md:w-[30rem]"
                        />
                    </div>

                    {/* Teks */}
                    <div className="w-full space-y-4 text-center text-slate-800 md:w-1/2 md:text-left">
                        <h1 className="text-xl font-semibold text-slate-800 sm:text-2xl">
                            Judul: “Penjaga Cahaya di Bukit Awan”
                        </h1>
                        <p className="text-justify text-base leading-relaxed">
                            Di sebuah desa yang selalu diselimuti kabut,
                            hiduplah seorang gadis bernama Lira. Suatu hari ia
                            menemukan bola cahaya kecil yang mengambang di atas
                            telapak tangannya. Cahaya itu membawanya menuju
                            Bukit Awan, tempat tinggal para penjaga dunia.
                            Namun, kedatangan Lira membuat Penjaga Kegelapan
                            bangkit kembali. Mereka mencoba merebut bola cahaya
                            untuk menguasai desa. Lira harus berlari menyusuri
                            awan sambil menyembunyikan cahaya tersebut. Dengan
                            keberanian, Lira menyerahkan bola cahaya pada
                            Penjaga Tertua. Bola itu berubah menjadi sayap
                            bercahaya yang melindungi desa dari kegelapan. Sejak
                            itu, desa kabut menjadi tempat penuh harapan dan
                            cahaya.
                            <br />
                            <br />
                            <strong>Pesan moral:</strong> Keberanian yang kecil
                            dapat membawa perubahan besar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Youtube */}
            <section className="w-full px-6 py-16">
                <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
                    Pemutaran Video Cerita Fantasi
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-center text-base text-gray-600 md:text-lg">
                    Tonton video pembelajaran berikut untuk memahami cerita
                    fantasi secara lebih menarik.
                </p>

                {/* Wrapper agar video responsif */}
                <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </AppLayout>
    );
};

export default Materi;
