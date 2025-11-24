import BgHero from '@/assets/images/bgfull.svg';
import Laba2 from '@/assets/images/laba.svg';
import Labu from '@/assets/images/labu.svg';

import { Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
  className="
    relative flex w-full min-h-[70vh] md:min-h-[90vh] 
    items-center justify-center rounded-3xl text-white
    bg-cover bg-center
  "
  style={{
    backgroundImage: `url(${BgHero})`,
  }}
>
  {/* Labu Overlay */}
  <img
    src={Labu}
    alt="labu"
    className="
      absolute top-0 right-2/3 -translate-x-[60%] w-16
       sm:left-1/4 sm:w-20
       md:left-72 md:w-28
      z-20
    "
  />

  {/* Laba2 Overlay */}
  <img
    src={Laba2}
    alt="laba2"
    className="
      absolute top-0 left-2/3 translate-x-[60%] w-16
       sm:right-1/4 sm:left-auto sm:w-20 
       md:right-72 md:w-28 md:translate-x-0
      z-20
    "
  />


  {/* Content */}
  <div className="relative z-10 mx-auto px-6 text-center max-w-3xl">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        font-extrabold text-5xl sm:text-6xl 
        md:text-7xl text-amber-500 max-w-[8em] md:max-w-2xl mx-auto
      "
    >
      Visual, Cerita, Edukasi — Semua dalam Satu Komik Animasi
    </motion.h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="mt-6 flex justify-center"
    >
    <Button
                variant="outlined"
                className="!border-white !bg-white !text-amber-600 !rounded-xl !px-6 !py-3 !text-lg 
                  hover:!bg-white/80 hover:!text-amber-600 duration-300"
              >
                Mulai Sekarang
              </Button>
    </motion.div>
  </div>

  {/* Decorative Glow */}
  <div className="
    absolute right-2 bottom-2 
    md:right-10 md:bottom-10
    h-24 w-24 md:h-40 md:w-40
    rounded-full bg-white/20 opacity-20 blur-3xl
  "></div>
</section>

    );
}
