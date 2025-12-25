import AppLayout from '@/layouts/app-layout';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
// image
import Img2 from '@/assets/images/2.jpeg';
import imgHero from '@/assets/images/book.svg';
import StrukturCeritaFantasi from '@/components/ui/StrukturCeritaFantasi';
import UnsurKebahasaanFantasi from '@/components/ui/UnsurKebahasaanFantasi';
import { Button } from '@mui/material';
// icons

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const Materi = () => {
    return (
        <AppLayout>
            {/* Hero Section */}
            <div className="top-0 flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 px-4 py-12 md:flex-row md:gap-20">
                {/* Text */}
                <motion.div
                    className="max-w-xl space-y-5 text-center text-white md:text-left"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Title */}
                    <motion.h1
                        variants={item}
                        className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl"
                    >
                        Apa Itu Cerita Fantasi?
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={item}
                        className="text-base sm:text-lg md:text-xl"
                    >
                        Cerita fantasi adalah cerita yang mengandung unsur
                        keajaiban, keanehan, atau kemisteriusan yang tidak
                        ditemukan dalam dunia nyata. Cerita fantasi mengajak
                        pembaca masuk ke dalam dunia imajinatif yang penuh
                        dengan hal-hal yang mustahil terjadi di kehidupan
                        sehari-hari.
                    </motion.p>

                    {/* Button */}
                    <motion.div variants={item}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mx-auto w-fit md:mx-0"
                        >
                            <Button
                                onClick={() => {
                                    document
                                        .getElementById('struktur-cerita')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                                variant="outlined"
                                className="group flex items-center gap-2 !rounded-xl !border-amber-600 !bg-white !px-5 !py-3 text-base !text-amber-600 transition-all duration-300 hover:!bg-amber-600 hover:!text-white sm:!text-lg"
                            >
                                Pelajari Selengkapnya
                                {/* Animated Icon */}
                                <motion.span
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <ArrowCircleDownIcon className="text-amber-600 transition-colors duration-300 group-hover:text-white" />
                                </motion.span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <div>
                    <motion.img
                        src={imgHero}
                        alt="Cerita Fantasi"
                        className="w-[20rem] object-contain sm:w-64 md:w-96 lg:w-[42rem]"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                            y: -8,
                            rotate: 1,
                            transition: { duration: 0.3 },
                        }}
                    />
                </div>
            </div>

            <StrukturCeritaFantasi />
            <UnsurKebahasaanFantasi />

            {/* Contoh Teks Cerita Fantasi */}
            <section className="px-8 py-10 text-white md:px-12">
                <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
                    Contoh Teks Cerita Fantasi
                </h1>

                {/* Wrapper 2 kolom responsif */}
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
                    {/* Gambar */}
                    <div className="flex w-full justify-center md:w-1/3 md:justify-start">
                        <img
                            src={Img2}
                            alt="Cerita Fantasi"
                            className="w-64 object-cover md:w-full"
                        />
                    </div>

                    {/* Teks */}
                    <div className="mx-auto mt-6 w-full space-y-4 text-center md:mt-0 md:w-2/3 md:text-left">
                        <h1 className="text-xl font-semibold sm:text-2xl">
                            Judul: “Penjaga Hutan Bercahaya”
                        </h1>

                        {/* ========================= ORIENTASI ========================= */}
                        <div>
                            <p className="font-semibold">(Orientasi)</p>
                            <p className="text-justify text-base leading-relaxed">
                                Di sebuah hutan yang dipenuhi pohon-pohon
                                raksasa bercahaya, hiduplah seekor rubah
                                bersayap bernama Zephyr. Zephyr adalah rubah
                                yang istimewa karena ia memiliki sayap berwarna
                                perak yang bisa mengeluarkan debu bintang.
                                Setiap malam, Zephyr terbang mengelilingi hutan
                                untuk memastikan semua makhluk hutan tidur
                                dengan nyenyak. Ia adalah penjaga hutan yang
                                sangat dicintai oleh seluruh penghuni hutan.
                                Bulunya yang lembut berwarna putih keperakan,
                                dan matanya bersinar seperti permata biru di
                                kegelapan malam.
                            </p>
                        </div>

                        {/* ======================= KOMPLIKASI ======================== */}
                        <div>
                            <p className="font-semibold">(Komplikasi)</p>
                            <p className="text-justify text-base leading-relaxed">
                                Namun, suatu malam, sebuah bencana menimpa
                                hutan. Portal hitam tiba-tiba muncul di tengah
                                hutan, dan dari portal itu keluar
                                makhluk-makhluk bayangan yang mulai menyerap
                                cahaya dari pohon-pohon. Pohon-pohon yang
                                kehilangan cahaya menjadi layu dan mati. Para
                                penghuni hutan panik dan meminta bantuan Zephyr.
                                "Kamu satu-satunya yang bisa menyelamatkan kami,
                                Zephyr!" kata seekor rusa tua dengan suara
                                bergetar. Zephyr ketakutan, namun ia tahu ia
                                harus melakukan sesuatu. Ia harus menemukan
                                sumber portal hitam itu dan menutupnya sebelum
                                seluruh hutan musnah. Debu bintang yang biasanya
                                keluar dari sayapnya mulai meredup karena
                                ketakutan yang ia rasakan.
                            </p>
                        </div>

                        {/* ========================= RESOLUSI ========================= */}
                        <div>
                            <p className="font-semibold">(Resolusi)</p>
                            <p className="text-justify text-base leading-relaxed">
                                Dengan penuh keberanian, Zephyr mengingat
                                kata-kata ibunya: "Keberanian sejati bukan
                                tentang tidak merasa takut, tetapi tentang
                                melakukan hal yang benar meskipun kamu takut."
                                Zephyr mengambil napas dalam-dalam dan terbang
                                mendekati portal hitam. Ia mengepakkan sayapnya
                                sekuat tenaga, dan debu bintang yang keluar dari
                                sayapnya mulai menerangi kegelapan.
                                Makhluk-makhluk bayangan mundur, tidak tahan
                                dengan cahaya debu bintang. Zephyr terus terbang
                                mengelilingi portal sambil menyebarkan debu
                                bintang, hingga akhirnya portal hitam itu
                                menutup dan menghilang sepenuhnya. Pohon-pohon
                                hutan kembali bercahaya lebih terang dari
                                sebelumnya, seolah-olah mereka merayakan
                                kemenangan. Semua penghuni hutan bersorak
                                gembira dan memeluk Zephyr. Sejak hari itu, debu
                                bintang dari sayap Zephyr bersinar lebih terang,
                                menjadi simbol keberanian yang menginspirasi
                                seluruh penghuni hutan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Youtube */}
            <section className="w-full px-6 py-16 text-white">
                <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
                    Pemutaran Video Cerita Fantasi
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-center text-base md:text-lg">
                    Tonton video pembelajaran berikut untuk memahami cerita
                    fantasi secara lebih menarik.
                </p>

                {/* Wrapper agar video responsif */}
                <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/MQ2ByRSEcH8?si=yqUprRyx3-5mpMFY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </AppLayout>
    );
};

export default Materi;
