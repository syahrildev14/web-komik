import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@mui/material";

// 🟡 Definisikan tipe option
interface Option {
  value: string;
  label: string;
}

// 🟡 Definisikan tipe untuk setiap soal
export interface Question {
  question: string;
  options: Option[];
  correctAnswer: string;
}

// 🟡 Tipe data yang dikirim ke parent (EvaluasiLatihan)
export interface AnswerPayload {
  nama: string;
  absen: string;
  kelas: string;
  answers: Record<number, string>;
  correctCount: number;
  totalQuestions: number;
  score: number;
}

// 🟡 Props dari komponen
interface KuisPilihanGandaProps {
  questions: Question[];
  onSubmit: (data: AnswerPayload) => void;
}

const KuisPilihanGanda: React.FC<KuisPilihanGandaProps> = ({
  questions,
  onSubmit,
}) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [identitas, setIdentitas] = useState({
    nama: "",
    absen: "",
    kelas: "",
  });

  // 📌 Handle input identitas
  const handleIdentitasChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setIdentitas({
      ...identitas,
      [e.target.name]: e.target.value,
    });
  };

  // 📌 Handle perubahan jawaban
  const handleChange = (soalIndex: number, value: string): void => {
    setAnswers((prev) => ({ ...prev, [soalIndex]: value }));
  };

  // 📌 Handle Submit kuis
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const correctCount = questions.filter(
      (q, i) => answers[i] === q.correctAnswer
    ).length;
    const totalQuestions = questions.length;
    const score = (correctCount / totalQuestions) * 100;

    onSubmit({
      nama: identitas.nama,
      absen: identitas.absen,
      kelas: identitas.kelas,
      answers: Object.values(answers),
      correctCount,
      totalQuestions,
      score,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto space-y-6 text-white"
    >
      {/* ============================
            FORM IDENTITAS SISWA
      ============================= */}
      <div className="bg-primary p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="font-bold text-xl mb-2">Identitas Siswa</h2>

        <input
          type="text"
          name="nama"
          value={identitas.nama}
          onChange={handleIdentitasChange}
          placeholder="Nama Lengkap"
          required
          className="w-full p-2 border  rounded-lg focus:outline-primary"
        />

        <input
          type="number"
          name="absen"
          value={identitas.absen}
          onChange={handleIdentitasChange}
          placeholder="Nomor Absen"
          required
          className="w-full p-2 border  rounded-lg focus:outline-primary"
        />

        <input
          type="text"
          name="kelas"
          value={identitas.kelas}
          onChange={handleIdentitasChange}
          placeholder="Kelas"
          required
          className="w-full p-2 border  rounded-lg focus:outline-primary"
        />
      </div>

      {/* ============================
            DAFTAR SOAL
      ============================= */}
      {questions.map((q, index) => (
        <div
          key={index}
          className="bg-primary p-6 rounded-2xl shadow-md space-y-4"
        >
          <h3 className="font-bold text-lg">Soal {index + 1}</h3>
          <p className="text-sm leading-relaxed text-justify">{q.question}</p>

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
                  required
                  className="accent-accent scale-110"
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
          className=" !bg-primary !text-white !rounded-xl !px-6 !py-3 !text-lg 
          hover:!bg-primary/80 duration-300"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default KuisPilihanGanda;
