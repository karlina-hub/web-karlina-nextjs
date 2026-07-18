"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Averia_Sans_Libre, Inter } from "next/font/google";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
});

export default function RegisterPage() {
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pesan, setPesan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setPesan("");

    if (password !== confirmPassword) {
      setPesan("Password dan Confirm Password tidak cocok!");
      return;
    }

    if (!agreed) {
      setPesan("Anda harus menyetujui Syarat dan Ketentuan.");
      return;
    }

    setIsLoading(true);
    setPesan("Sedang mendaftarkan akun...");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setPesan("Registrasi berhasil! Mengalihkan ke halaman login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setPesan(data.error || "Gagal registrasi");
      }
    } catch (error) {
      setPesan("Terjadi kesalahan jaringan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex w-full flex-col lg:flex-row relative ${inter.variable} ${averia.variable} font-inter`}>
      
      {/* ========================================================= */}
      {/* BACKGROUND IMAGE UNTUK MOBILE (Berada di belakang Form)   */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 block lg:hidden bg-[url('../app/asset/cardroastery.webp')] bg-cover bg-center">
        {/* Dark overlay agar form & teks putih tetap terbaca */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* ========================================================= */}
      {/* SISI KIRI: FORM REGISTRASI (Putih)                        */}
      {/* ========================================================= */}
      <div className="relative z-10 flex w-full lg:w-1/2 items-center justify-center px-4 py-10 lg:p-12 lg:bg-white overflow-y-auto">
        
        {/* Kotak Form: Menjadi Card putih di Mobile, tapi menyatu di Desktop */}
        <div className="w-full max-w-[640px] bg-white rounded-2xl p-6 md:p-8 lg:p-0 shadow-2xl lg:shadow-none">
          
          {/* Tombol Back */}
          <button 
            onClick={() => router.push("/")} 
            className="mb-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#5B8D3A] text-[#5B8D3A] hover:bg-[#F0FDF4] transition"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Judul & Deskripsi */}
          <h1 className="font-averia text-[32px] font-bold text-gray-800 mb-2 leading-tight">
            Create Account
          </h1>
          <p className="text-[#8D6E63] text-sm md:text-base mb-8">
            Create your account and start your coffee journey!
          </p>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            
            {/* Input Full Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Input your full name"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition-all focus:border-[#398C58] focus:ring-1 focus:ring-[#398C58] placeholder-gray-400"
              />
            </div>


            {/* Input Email Address */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Input your email"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition-all focus:border-[#398C58] focus:ring-1 focus:ring-[#398C58] placeholder-gray-400"
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Password<span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Input your password"
                  className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-sm outline-none transition-all focus:border-[#398C58] focus:ring-1 focus:ring-[#398C58] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Password Hint Box */}
            <div className="rounded-lg border border-green-200 bg-[#F0FDF4] p-4 text-sm text-[#166534]">
              <ol className="list-decimal pl-4 space-y-1">
                <li>Make sure your password is secure and not shared with anyone.</li>
                <li>Update your password regularly.</li>
                <li>Combine it with additional elements to strengthen your password.</li>
              </ol>
            </div>

            {/* Input Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Confirm Password<span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Input your password"
                  className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-sm outline-none transition-all focus:border-[#398C58] focus:ring-1 focus:ring-[#398C58] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Checkbox Terms & Privacy */}
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#80102b] focus:ring-[#80102b]"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-tight">
                I agree to Karlina's <span className="font-bold">Terms of Service</span> and <span className="font-bold">Privacy Policy</span>
              </label>
            </div>

            {pesan && (
              <p className={`text-center text-sm font-medium ${pesan.includes("berhasil") ? "text-green-600" : "text-red-500"}`}>
                {pesan}
              </p>
            )}

            {/* Tombol Create Account */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full rounded-lg bg-[#80102b] py-3.5 text-base font-semibold text-white transition-all hover:bg-[#6A0921] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Memproses..." : "Create Account"}
            </button>
          </form>

          {/* Pemisah "Or" */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-medium">Or</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-[#719E53] hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SISI KANAN: GAMBAR & PROMOSI (Tampil Penuh di Desktop)      */}
      {/* ========================================================= */}
      <div className="relative z-10 flex w-full lg:w-1/2 flex-col items-center justify-center lg:justify-end px-6 pb-12 lg:pb-24 lg:bg-[url('../app/asset/cardroastery.webp')] lg:bg-cover lg:bg-center">
        
        {/* Gradient gelap untuk Desktop agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent hidden lg:block"></div>
        
        {/* Teks Promosi */}
        <div className="relative z-20 text-center text-white max-w-lg mt-6 lg:mt-0">
          <h2 className="text-[26px] lg:text-4xl font-bold mb-4 font-averia">
            Join the Kopi Karlina Roastery
          </h2>
          <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
            Get exclusive access to new releases, special discounts, and become part of a community that values quality, sustainability, and exceptional coffee.
          </p>
        </div>

      </div>
    </div>
  );
}