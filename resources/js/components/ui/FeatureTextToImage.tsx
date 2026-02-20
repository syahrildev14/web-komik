import { Box, Button } from "@mui/material";
import Img1 from "@/assets/images/1.jpeg";
import Img2 from "@/assets/images/2.jpeg";
import Img3 from "@/assets/images/3.jpeg";

import { Link } from '@inertiajs/react';


const FEATURES = [
  {
    img: Img1,
    title: "Belajar Lewat Ilustrasi",
    desc: "Pelajari materi dan cerita edukatif melalui ilustrasi yang menarik. Teks dan gambar saling melengkapi untuk membantu memahami konsep dengan cara yang lebih menyenangkan.",
    aos: "zoom-in",
  },
  {
    img: Img2,
    title: "Mudah Dipahami",
    desc: "Penyajian visual yang jelas membantu pembaca memahami alur cerita dan pesan pembelajaran dengan lebih cepat dan efektif.",
    aos: "zoom-in",
  },
  {
    img: Img3,
    title: "Kreativitas dalam Belajar",
    desc: "Menggabungkan cerita, gambar, dan imajinasi untuk menumbuhkan minat belajar serta kemampuan berpikir kreatif melalui media komik.",
    aos: "zoom-in",
  },
];

export default function FeatureTextToImage() {

  
  return (
    <Box className="w-full py-20  from-gray-100/0 via-white/20 to-gray-100/0 md:mt-24">
      <div className="mx-auto max-w-6xl px-4 space-y-32">
        
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20`}
          >
            {/* --- IMAGE (kiri/kanan bergantian) --- */}
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div
                data-aos={item.aos}
                className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-white/40"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* --- TEXT --- */}
            <div
              className={`space-y-6 text-accent ${index % 2 === 1 ? "md:order-1" : ""}`}
              data-aos={item.aos}
            >
              <p className="md:text-4xl font-semibold">{item.title}</p>

              <p className="leading-relaxed text-lg">{item.desc}</p>

              <Link href="/ruang-kreatif">
                <Button
                  variant="outlined"
                  className="!border-accent !text-accent !rounded-xl !px-6 !py-3 !text-lg 
                    hover:!bg-primary hover:!text-white duration-300"
                >
                  ✦ Coba Sekarang
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
