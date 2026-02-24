import { FaInstagram, FaTiktok } from "react-icons/fa";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Instagram */}
      <a
        href="https://instagram.com/ditatid"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-gradient-to-tr from-blue-800 via-red-500 to-yellow-500
          p-4 rounded-full shadow-lg
          text-white text-2xl
          hover:scale-110 transition-all duration-300
        "
      >
        <FaInstagram size={18}/>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@ditapermatasari3"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-black
          p-4 rounded-full shadow-lg
          text-white text-2xl
          hover:scale-110 hover:bg-neutral-800
          transition-all duration-300
        "
      >
        <FaTiktok size={18}/>
      </a>

    </div>
  );
};

export default FloatingSocial;