import { useState } from "react";
import axios from "axios";
import Img1 from "@/assets/images/FormRuangKreatif/01.jpeg";
import Img2 from "@/assets/images/FormRuangKreatif/02.jpeg";
import Img3 from "@/assets/images/FormRuangKreatif/03.jpeg";
import Img4 from "@/assets/images/FormRuangKreatif/04.jpeg";
import Img5 from "@/assets/images/FormRuangKreatif/05.jpeg";
import Img6 from "@/assets/images/FormRuangKreatif/06.jpeg";
import Img7 from "@/assets/images/FormRuangKreatif/07.jpeg";
import Img8 from "@/assets/images/FormRuangKreatif/08.jpeg";
import Img9 from "@/assets/images/FormRuangKreatif/09.jpeg";
import Img10 from "@/assets/images/FormRuangKreatif/10.jpeg";
import Img11 from "@/assets/images/FormRuangKreatif/11.jpeg";
import Img12 from "@/assets/images/FormRuangKreatif/12.jpeg";
import Img13 from "@/assets/images/FormRuangKreatif/13.jpeg";
import Img14 from "@/assets/images/FormRuangKreatif/14.jpeg";
import Img15 from "@/assets/images/FormRuangKreatif/15.jpeg";
import Img16 from "@/assets/images/FormRuangKreatif/16.jpeg";
import Img17 from "@/assets/images/FormRuangKreatif/17.jpeg";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

interface CeritaFantasiFormData {
  nama: string;
  absen: string;
  kelas: string;
  judul: string;
  cerita1: string;
  cerita2: string;
  cerita3: string;
  cerita4: string;
  cerita5: string;
  cerita6: string;
  cerita7: string;
  cerita8: string;
  cerita9: string;
  cerita10: string;
  cerita11: string;
  cerita12: string;
  cerita13: string;
  cerita14: string;
  cerita15: string;
  cerita16: string;
  cerita17: string;
}

interface FormCeritaFantasiProps {
  onSubmit?: (data: CeritaFantasiFormData) => void;
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
    cerita5: "",
    cerita6: "",
    cerita7: "",
    cerita8: "",
    cerita9: "",
    cerita10: "",
    cerita11: "",
    cerita12: "",
    cerita13: "",
    cerita14: "",
    cerita15: "",
    cerita16: "",
    cerita17: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.nama.trim() ||
      !form.absen.trim() ||
      !form.kelas.trim() ||
      !form.judul.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Lengkapi Identitas!",
        text: "Isi nama, absen, kelas, dan judul terlebih dahulu ya 😊",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "/api/cerita",
        form,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("📦 Data terkirim:", response.data);

      Swal.fire({
        icon: "success",
        title: "Cerita Berhasil Dikirim! 🎉",
        text: "Terima kasih sudah mengirimkan cerita fantasi kamu.",
      });

      onSubmit?.(response.data);

      setForm({
        nama: "",
        absen: "",
        kelas: "",
        judul: "",
        cerita1: "",
        cerita2: "",
        cerita3: "",
        cerita4: "",
        cerita5: "",
        cerita6: "",
        cerita7: "",
        cerita8: "",
        cerita9: "",
        cerita10: "",
        cerita11: "",
        cerita12: "",
        cerita13: "",
        cerita14: "",
        cerita15: "",
        cerita16: "",
        cerita17: "",
      });
    } catch (error) {
      console.error("❌ Error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim 😢",
        text: "Silakan coba lagi nanti atau cek koneksi internet kamu.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto text-accent space-y-8 px-4 mt-10 mb-12"
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
            className="bg-transparent px-2 rounded-md border-b border-accent py-2 focus:outline-none"
          />
        ))}
      </div>

      {/* Gambar + Cerita */}
      {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17,].map((img, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          <img src={img} alt={`gambar-${index + 1}`} className="rounded-lg" />
          <textarea
            name={`cerita${index + 1}`}
            value={form[`cerita${index + 1}` as keyof typeof form]}
            onChange={handleChange}
            placeholder={`Tulis Cerita Untuk Gambar ${index + 1}`}
            className="w-full bg-transparent border-b border-accent p-2 min-h-[100px] focus:outline-none"
          />
        </div>
      ))}

      <div className="flex justify-center pt-6">
        <Button
          type="submit"
          variant="outlined"
          disabled={loading}
          className="!bg-primary !text-white !rounded-xl !px-6 !py-3 !text-lg hover:!bg-primary/80 duration-300"
        >
          {loading ? "Mengirim..." : "Kirim Ceritaku"}
        </Button>
      </div>
    </form>
  );
}
