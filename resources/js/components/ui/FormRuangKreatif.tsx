import { useState } from "react";
import Img1 from "@/assets/grid/1.jpeg";
import Img2 from "@/assets/grid/2.jpeg";
import Img3 from "@/assets/grid/3.jpeg";
import Img4 from "@/assets/grid/4.jpeg";
import { Button } from "@mui/material";

interface FormCeritaFantasiProps {
  onSubmit?: (data: any) => void;
}

export default function FormCeritaFantasi({ onSubmit }: FormCeritaFantasiProps) {
  const [form, setForm] = useState({
    nama: "",
    absen: "",
    kelas: "",
    judul: "",
    cerita1: "",
    cerita2: "",
    cerita3: "",
    cerita4: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.nama.trim() || !form.absen.trim() || !form.kelas.trim() || !form.judul.trim()) {
      console.warn("⚠ Lengkapi data identitas sebelum mengirim!");
      return;
    }

    // Log ke console
    console.log("📦 Data terkirim:", form);

    // Kirim via fungsi parent jika ada
    onSubmit && onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto text-white space-y-8 px-4 mt-10 mb-12"
    >
      {/* Identitas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["nama", "absen", "kelas", "judul"].map((field, i) => (
          <input
            key={i}
            type="text"
            name={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            placeholder={
              field === "nama"
                ? "Nama Lengkap"
                : field === "absen"
                ? "No. Absen"
                : field === "kelas"
                ? "Kelas"
                : "Judul Cerita"
            }
            className="bg-transparent px-2 rounded-md border-b border-gray-400 py-2 focus:outline-none"
          />
        ))}
      </div>

      {/* Gambar + Cerita */}
      {[Img1, Img2, Img3, Img4].map((img, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start space-y-4 md:space-y-0"
        >
          <img src={img} alt={`gambar-${index + 1}`} className="rounded-lg shadow-white" />
          <textarea
            name={`cerita${index + 1}`}
            value={form[`cerita${index + 1}` as keyof typeof form]}
            onChange={handleChange}
            placeholder={`Tulis Cerita Untuk Gambar ${index + 1}`}
            className="w-full bg-transparent border-b border-gray-400 p-2 min-h-[100px] focus:outline-none"
          />
        </div>
      ))}

      {/* Tombol */}
      <div className="flex justify-center pt-6">
        <Button
          type="submit"
          variant="outlined"
          className="!border-white !bg-white !text-amber-600 !rounded-xl !px-6 !py-3 !text-lg hover:!bg-white/80 duration-300"
        >
          Kirim Ceritaku
        </Button>
      </div>
    </form>
  );
}
