import { Box, Button } from "@mui/material";
import Img1 from "@/assets/images/1.jpeg";
import Img2 from "@/assets/images/2.jpeg";
import Img3 from "@/assets/images/3.jpeg";

const FEATURES = [
  {
    img: Img1,
    title: "Text to Image",
    desc: "Text to image can generate marvelous images from just a simple prompt. It supports creation based on the words of your prompt, has a better semantic understanding, and transforms abstract thoughts into visual works of art.",
    aos: "zoom-in",
  },
  {
    img: Img2,
    title: "Super Fast Rendering",
    desc: "Our engine produces high-quality output with incredible speed. Perfect for prototyping, production, and creative exploration.",
    aos: "zoom-in",
  },
  {
    img: Img3,
    title: "Creative Output",
    desc: "Powerful AI allows you to produce unique and imaginative visuals with ease. Suitable for branding, storytelling, and art creation.",
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
              className={`space-y-6 text-white ${index % 2 === 1 ? "md:order-1" : ""}`}
              data-aos={item.aos}
            >
              <p className="md:text-4xl font-semibold">{item.title}</p>

              <p className="leading-relaxed text-lg">{item.desc}</p>

              <Button
                variant="outlined"
                className="!border-white !text-white !rounded-xl !px-6 !py-3 !text-lg 
                  hover:!bg-white hover:!text-amber-600 duration-300"
              >
                ✦ Coba Sekarang
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
