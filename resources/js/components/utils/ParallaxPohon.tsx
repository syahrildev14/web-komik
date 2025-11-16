import { useEffect, useState } from "react";
import Pohon from "@/assets/images/pohon.svg";

const ParallaxPohon: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.3); // parallax speed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animasi muncul dari atas saat halaman dibuka
  useEffect(() => {
    setTimeout(() => setLoaded(true), 50);
  }, []);

  return (
    <img
      src={Pohon}
      alt="pohon abadi"
      className="mx-auto absolute left-0 right-0 z-50 w-[300px] md:w-[620px]"
      style={{
        transform: `translateY(${offsetY * 0.3 + (loaded ? 0 : -80)}px)`,
        opacity: loaded ? 1 : 0,
        transition: "all 0.6s ease-out",
        marginTop: "-200px",
      }}
    />
  );
};

export default ParallaxPohon;
