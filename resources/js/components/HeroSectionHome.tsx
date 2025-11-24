import BgHero from '@/assets/images/bgfull.svg';
import Laba2 from '@/assets/images/laba.svg';
import Labu from '@/assets/images/labu.svg';

import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            className=" flex h-[90vh] w-full items-center justify-center rounded-3xl text-white z-10"
            style={{
                backgroundImage: `url(${BgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Labu Overlay */}
            <img
                src={Labu}
                alt="labu"
                className="float-x absolute top-0 left-72 z-20 w-20 -translate-x-1/2 md:w-30"
            />
            {/* Laba Overlay */}
            <img
                src={Laba2}
                alt="laba2"
                className="float-x absolute top-0 right-72 z-20 w-20 -translate-x-1/2 md:w-30"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl text-4xl font-extrabold text-amber-600 md:text-6xl"
                >
                    Visual, Cerita, Edukasi — Semua dalam Satu Komik Animasi
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="rounded-xl bg-white text-slate-800 px-6 py-3 font-semibold shadow-lg hover:bg-gray-200 z-999 duration-200"
                    >
                        Lihat Fitur
                    </Link>
                </motion.div>
            </div>

            {/* Extra Glow Decoration */}
            <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-white/20 opacity-20 blur-3xl"></div>
        </section>
    );
}
