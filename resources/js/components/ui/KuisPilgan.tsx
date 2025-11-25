import { Button } from "@mui/material";
import { useState } from "react";

const KuisPilihanGanda = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [identitas, setIdentitas] = useState({
    nama: "",
    absen: "",
    kelas: "",
  });

  const handleIdentitasChange = (e) => {
    setIdentitas({
      ...identitas,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (soalIndex, value) => {
    setAnswers((prev) => ({ ...prev, [soalIndex]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      identitas,
      answers,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto space-y-6 text-purple-900"
    >
      {/* ============================
          FORM IDENTITAS SISWA
      ============================= */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="font-bold text-xl mb-2">Identitas Siswa</h2>

        <input
          type="text"
          name="nama"
          value={identitas.nama}
          onChange={handleIdentitasChange}
          placeholder="Nama Lengkap"
          className="w-full p-2 border border-purple-200 rounded-lg focus:outline-purple-600"
        />

        <input
          type="text"
          name="absen"
          value={identitas.absen}
          onChange={handleIdentitasChange}
          placeholder="Nomor Absen"
          className="w-full p-2 border border-purple-200 rounded-lg focus:outline-purple-600"
        />

        <input
          type="text"
          name="kelas"
          value={identitas.kelas}
          onChange={handleIdentitasChange}
          placeholder="Kelas"
          className="w-full p-2 border border-purple-200 rounded-lg focus:outline-purple-600"
        />
      </div>

      {/* ============================
          DAFTAR SOAL
      ============================= */}
      {questions.map((q, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          <h3 className="font-bold text-lg">Soal {index + 1}</h3>

          <p className="text-sm leading-relaxed">{q.question}</p>

          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <label
                key={i}
                className="flex items-center gap-3 cursor-pointer text-sm"
              >
                <input
                  type="radio"
                  name={`soal-${index}`}
                  value={opt.value}
                  checked={answers[index] === opt.value}
                  onChange={() => handleChange(index, opt.value)}
                  className="accent-purple-700 scale-110"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* ============================
          TOMBOL SUBMIT
      ============================= */}
      <div className="flex justify-center py-4">
        <Button
          type="submit"
          variant="outlined"
          className="!border-white !bg-white !text-amber-600 !rounded-xl !px-6 !py-3 !text-lg 
          hover:!bg-white/80 hover:!text-amber-600 duration-300"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default KuisPilihanGanda;
