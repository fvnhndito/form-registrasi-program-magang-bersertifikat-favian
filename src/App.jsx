import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const menteeName = "Favian Hanindito Projosudjadi";
  const menteeGroup = "Sandyakala";
  const menteeId = "Sandyakala";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    const hasMinimumLength = value.length >= 8;
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[^A-Za-z0-9]/.test(value);

    return (
      (hasMinimumLength && hasNumber && hasSymbol) ||
      "Password harus 8+ karakter, mengandung angka & simbol"
    );
  };

  const onSubmit = (data) => {
    const submittedData = {
      ...data,
      watermark: {
        namaMentee: menteeName,
        namaGrup: menteeGroup,
        idMentee: menteeId,
        temaEvent: "Program Magang Bersertifikat",
      },
    };

    console.log("Registrasi Berhasil");
    console.log(JSON.stringify(submittedData, null, 2));

    setIsSubmitted(true);
    reset();
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <main className="min-h-screen bg-[#e4e6eb] text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Capstone Project
            </p>
            <p className="mt-1 text-base font-bold text-slate-900 md:text-lg">
              {menteeName} - {menteeGroup}
            </p>
          </div>

          <div className="hidden rounded-full bg-[#C5C7CE] px-4 py-2 text-sm font-semibold text-slate-900 md:block">
            Program Magang Bersertifikat
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
            Event Registration
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Formulir Registrasi Magang
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-700 md:text-base">
            Mulai dari melihat detail event, lalu lanjutkan ke formulir
            pendaftaran Program Magang Bersertifikat.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-300 bg-[#f8fafc] p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                currentStep === 1
                  ? "bg-[#C5C7CE] text-slate-950 shadow-sm"
                  : "text-slate-500 hover:bg-slate-200"
              }`}
            >
              1. Detail Event
            </button>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                currentStep === 2
                  ? "bg-[#C5C7CE] text-slate-950 shadow-sm"
                  : "text-slate-500 hover:bg-slate-200"
              }`}
            >
              2. Form Pendaftaran
            </button>
          </div>

          <div
            className="mt-2 h-1 w-1/2 rounded-full bg-[#C5C7CE] transition-all duration-300"
            style={{ marginLeft: currentStep === 2 ? "50%" : "0%" }}
          />
        </div>

        {/* Page 1 - Event Detail */}
        {currentStep === 1 && (
          <section className="mt-10 overflow-hidden rounded-3xl border border-slate-300 bg-[#f8fafc] shadow-xl">
            <div className="grid lg:grid-cols-5">
              {/* Left Panel */}
              <div className="bg-[#C5C7CE] p-8 text-slate-900 md:p-10 lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
                  Event Detail
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                  Program Magang Bersertifikat
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-800">
                  Event ini ditujukan untuk peserta yang ingin mempersiapkan
                  diri sebelum mengikuti program magang secara lebih terarah dan
                  profesional.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-slate-400/60 bg-white/45 p-4">
                    <p className="text-sm text-slate-700">Fokus Event</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      Pengembangan Karier dan Persiapan Industri
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-400/60 bg-white/45 p-4">
                    <p className="text-sm text-slate-700">Metode Registrasi</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      Online Form dengan Validasi Data
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-400/60 bg-white/45 p-4">
                    <p className="text-sm text-slate-700">Status</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      Pendaftaran Dibuka
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="p-8 md:p-10 lg:col-span-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Overview
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    Persiapan Awal Menuju Dunia Kerja
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Peserta akan memahami alur pendaftaran, memilih bidang
                    magang yang sesuai, dan menyiapkan data yang dibutuhkan
                    untuk mengikuti program.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-300 bg-white p-5">
                    <p className="text-2xl font-bold text-slate-700">01</p>
                    <p className="mt-3 font-semibold text-slate-950">
                      Baca Detail
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Pahami tema dan tujuan event.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-300 bg-white p-5">
                    <p className="text-2xl font-bold text-slate-700">02</p>
                    <p className="mt-3 font-semibold text-slate-950">
                      Isi Form
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Lengkapi data peserta dengan benar.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-300 bg-white p-5">
                    <p className="text-2xl font-bold text-slate-700">03</p>
                    <p className="mt-3 font-semibold text-slate-950">
                      Submit
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Kirim data dan cek notifikasi berhasil.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-300 bg-slate-100 p-6">
                  <h4 className="font-bold text-slate-950">Benefit Event</h4>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
                      Sertifikat partisipasi setelah mengikuti event.
                    </div>
                    <div className="rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
                      Pemahaman proses seleksi dan persiapan karier.
                    </div>
                    <div className="rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
                      Pilihan bidang magang sesuai minat peserta.
                    </div>
                    <div className="rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
                      Jalur tiket yang disesuaikan dengan kebutuhan peserta.
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center md:justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="rounded-xl bg-[#C5C7CE] px-10 py-3 font-semibold text-slate-950 shadow-md transition hover:bg-[#b7bac2] focus:outline-none focus:ring-4 focus:ring-slate-300"
                  >
                    Lanjut ke Form
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Page 2 - Form */}
        {currentStep === 2 && (
          <section className="mt-10 rounded-3xl border border-slate-300 bg-[#f8fafc] p-6 shadow-xl md:p-8">
            <div className="mb-7">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="mb-5 rounded-xl bg-[#C5C7CE] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#b7bac2]"
              >
                Kembali ke Detail Event
              </button>

              <div className="rounded-2xl border border-slate-300 bg-[#C5C7CE] p-6 text-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
                  Form Pendaftaran
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950 md:text-3xl">
                  Lengkapi Data Peserta
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-800">
                  Pastikan data yang dimasukkan valid. Website atau portofolio
                  bersifat opsional, sedangkan field lainnya wajib diisi.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("fullName", {
                      required: "Nama lengkap wajib diisi",
                    })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: favianmagang"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("username", {
                      required: "Username wajib diisi",
                      minLength: {
                        value: 6,
                        message: "Username minimal 6 karakter",
                      },
                      maxLength: {
                        value: 20,
                        message: "Username maksimal 20 karakter",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("email", {
                      required: "Email wajib diisi",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Format email tidak valid",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Minimal 8 karakter, angka, simbol"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("password", {
                      required: "Password wajib diisi",
                      validate: validatePassword,
                    })}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Umur
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 21"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("age", {
                      required: "Umur wajib diisi",
                      valueAsNumber: true,
                      min: {
                        value: 18,
                        message: "Peserta harus berusia antara 18-100 tahun",
                      },
                      max: {
                        value: 100,
                        message: "Peserta harus berusia antara 18-100 tahun",
                      },
                    })}
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Tipe Tiket
                  </label>
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("ticketType", {
                      required: "Anda harus memilih tipe tiket",
                    })}
                  >
                    <option value="" disabled>
                      Pilih tipe tiket
                    </option>
                    <option value="Peserta Reguler">Peserta Reguler</option>
                    <option value="Peserta Fast Track">
                      Peserta Fast Track
                    </option>
                    <option value="Peserta Beasiswa">Peserta Beasiswa</option>
                    <option value="Peserta Prioritas Industri">
                      Peserta Prioritas Industri
                    </option>
                  </select>
                  {errors.ticketType && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.ticketType.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Situs Web Pribadi / Portofolio
                  </label>
                  <input
                    type="url"
                    placeholder="https://portfolio-kamu.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#C5C7CE] focus:ring-4 focus:ring-slate-200"
                    {...register("websiteUrl", {
                      pattern: {
                        value: /^https?:\/\/[^\s$.?#].[^\s]*$/,
                        message: "Format URL tidak valid",
                      },
                    })}
                  />
                  {errors.websiteUrl && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.websiteUrl.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-3 block text-sm font-semibold text-slate-800">
                    Bidang Magang yang Diminati
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white p-4 transition hover:border-[#C5C7CE] hover:bg-slate-100">
                      <input
                        type="radio"
                        value="Frontend Developer"
                        {...register("customField", {
                          required: "Bidang magang wajib dipilih",
                        })}
                      />
                      <span>Frontend Developer</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white p-4 transition hover:border-[#C5C7CE] hover:bg-slate-100">
                      <input
                        type="radio"
                        value="Backend Developer"
                        {...register("customField", {
                          required: "Bidang magang wajib dipilih",
                        })}
                      />
                      <span>Backend Developer</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white p-4 transition hover:border-[#C5C7CE] hover:bg-slate-100">
                      <input
                        type="radio"
                        value="UI/UX Designer"
                        {...register("customField", {
                          required: "Bidang magang wajib dipilih",
                        })}
                      />
                      <span>UI/UX Designer</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white p-4 transition hover:border-[#C5C7CE] hover:bg-slate-100">
                      <input
                        type="radio"
                        value="Quality Assurance"
                        {...register("customField", {
                          required: "Bidang magang wajib dipilih",
                        })}
                      />
                      <span>Quality Assurance</span>
                    </label>
                  </div>

                  {errors.customField && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.customField.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
                    <input
                      type="checkbox"
                      className="mt-1"
                      {...register("agreeToTerms", {
                        required: "Anda harus menyetujui syarat dan ketentuan",
                      })}
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      Saya menyetujui syarat dan ketentuan pendaftaran Program
                      Magang Bersertifikat.
                    </span>
                  </label>

                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.agreeToTerms.message}
                    </p>
                  )}
                </div>
              </div>

              {isSubmitted && (
                <div className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
                  Registrasi Berhasil, {menteeName} - {menteeGroup}!
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-xl bg-[#C5C7CE] px-10 py-3 font-semibold text-slate-950 shadow-md transition hover:bg-[#b7bac2] focus:outline-none focus:ring-4 focus:ring-slate-300"
                >
                  Submit Registrasi
                </button>
              </div>
            </form>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;