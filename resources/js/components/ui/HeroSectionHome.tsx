import BgHero from '@/assets/images/OBJECTS.png';
import JanurKanan from '@/assets/images/kanan.png';
import JanurKiri from '@/assets/images/kiri.png';
import JanurGoyang from '@/assets/images/goyang.png';

import { Link } from '@inertiajs/react';

import { Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="
    relative flex w-full h-screen min-h-[70vh] md:min-h-[90vh] 
    items-center justify-center text-accent
    bg-cover bg-center bg-primary overflow-hidden
  "
      style={{
        backgroundImage: `url(${BgHero})`,
      }}
    >

      {/* JANUR KIRI */}
      <motion.img
        src={JanurKiri}
        alt="Janur Kiri"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="
    absolute hidden md:block left-[-100px] md:left-[-60px] lg:left-[-80px]
    bottom-0
    h-[70vh]  lg:h-[90vh]
    object-contain
    z-0
    pointer-events-none
  "
      />

      {/* JANUR KANAN */}
      <motion.img
        src={JanurKanan}
        alt="Janur Kanan"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="
    absolute hidden md:block right-[100px] md:right-[-60px] lg:right-[-80px]
    bottom-0
    h-[70vh] lg:h-[90vh]
    object-contain
    z-0
    pointer-events-none
  "
      />

      {/* JANUR GOYANG KIRI */}
      <motion.img
        src={JanurGoyang}
        alt="Janur Goyang Kanan"
        initial={{ x: -120, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: [0, 3, -3, 2, -2, 0],   // goyang halus
        }}
        transition={{
          x: { duration: 1 },
          opacity: { duration: 1 },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
    absolute left-[0px] md:left-[20px] lg:left-[250px]
  bottom-34
  h-[70vh] md:h-[85vh] lg:h-[60vh]
  object-contain
  z-0
  pointer-events-none
  origin-top-right
  "
      />

      {/* JANUR GOYANG KANAN */}
      <motion.img
        src={JanurGoyang}
        alt="Janur Goyang Kanan"
        initial={{ x: 120, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: [0, 3, -3, 2, -2, 0],   // goyang halus
        }}
        transition={{
          x: { duration: 1 },
          opacity: { duration: 1 },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
    absolute right-[0px] md:right-[20px] lg:right-[250px]
  bottom-34
  h-[70vh] md:h-[85vh] lg:h-[60vh]
  object-contain
  z-0
  pointer-events-none
  origin-top-right
  "
      />
      <div className='bg-gradient-to-t from-black/90 via-black/20 to-black/0 absolute h-screen w-full'></div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
        font-extrabold text-6xl sm:text-7xl 
        md:text-8xl max-w-[8em] text-white md:max-w-2xl mx-auto leading-tight
      "
        >
          Layar Imajinasi <p className='text-3xl mt-6 italic mx-auto text-center w-2/3'>Satu Layar Seribu Imajinasi</p>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 flex justify-center"
        >
          <Link href="/materi">
            <Button
              variant="outlined"
              className="!border-white !mt-4 !bg-white !text-primary !rounded-xl !px-6 !py-3 !shadow-lg !text-lg 
          hover:!bg-primary hover:!text-white duration-300 animate-bounce">
              Mulai Sekarang
            </Button>
          </Link>
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
