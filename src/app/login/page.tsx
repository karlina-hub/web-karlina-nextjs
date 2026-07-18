"use client";

import { useState, useEffect } from "react";
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

export default function LoginPage() {
  const router = useRouter();
  
  // State untuk form login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  // State untuk UI
  const [showPassword, setShowPassword] = useState(false);
  const [pesan, setPesan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Efek untuk mengambil email yang diingat (opsional, jika fitur Remember Me digunakan)
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPesan("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
                
        // Simpan token dan nama
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email);
        
        // Logika Remember Me
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // Pindah ke halaman utama
        setTimeout(() => {
            router.push("/");
        }, 1000);
      } else {
        setPesan(data.error || "Email atau password salah");
      }
    } catch (error) {
      setPesan("Terjadi kesalahan jaringan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex w-full flex-col lg:flex-row relative ${inter.variable} ${averia.variable} font-inter bg-white`}>
      
      {/* ========================================================= */}
      {/* SISI KIRI: FORM LOGIN (Putih Penuh di Mobile & Desktop)   */}
      {/* ========================================================= */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-10 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        <div className="w-full max-w-[640px] mx-auto">
          
          {/* Tombol Back */}
          <button 
            onClick={() => router.push("/")} 
            className="mb-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#5B8D3A] text-[#5B8D3A] hover:bg-[#F0FDF4] transition"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Heading */}
          <h1 className="font-averia text-[32px] md:text-[36px] font-bold text-[#333333] mb-2 leading-tight">
            Welcome Back
          </h1>
          <p className="text-[#8D6E63] text-sm md:text-base mb-8">
            Sign in to access your account and continue your coffee journey
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            
            {/* Input Email Address */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Email Address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Input your email"
                className="w-full rounded-lg border border-gray-300 p-3.5 text-sm outline-none transition-all focus:border-[#80102b] focus:ring-1 focus:ring-[#80102b] placeholder-gray-400"
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Input your password"
                  className="w-full rounded-lg border border-gray-300 p-3.5 pr-12 text-sm outline-none transition-all focus:border-[#80102b] focus:ring-1 focus:ring-[#80102b] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-[#80102b] focus:ring-[#80102b] transition"
                />
                <span className="text-sm font-semibold text-gray-900 group-hover:text-[#80102b] transition">
                  Remember me
                </span>
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-[#719E53] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Pesan Error/Sukses */}
            {pesan && (
              <p className={`text-center text-sm font-medium ${pesan.includes("Berhasil") ? "text-green-600" : "text-red-500"}`}>
                {pesan}
              </p>
            )}

            {/* Tombol Sign In */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full rounded-lg bg-[#80102b] py-3.5 text-base font-semibold text-white transition-all hover:bg-[#6A0921] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Pemisah "Or" */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-medium">Or</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Tombol Continue with Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 cursor-pointer"
          >
            {/* SVG Logo Google */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Footer Link */}
          <p className="mt-10 text-center text-sm font-medium text-[#8D6E63]">
            Don’t have an account?{" "}
            <Link href="/register" className="font-bold text-[#719E53] hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SISI KANAN: GAMBAR & PROMOSI (Hanya Tampil di Desktop)    */}
      {/* ========================================================= */}
      {/* GANTI url('/gambar-roastery.jpg') DENGAN PATH GAMBAR ASLI ANDA */}
      <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-end px-6 pb-24 bg-[url('../app/asset/webp4.webp')] bg-cover bg-center">
        
        {/* Gradient gelap di bagian bawah gambar agar teks putih terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        {/* Teks Promosi */}
        <div className="relative z-20 text-center text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-4 font-averia">
            Join the Kopi Karlina Roastery
          </h2>
          <p className="text-base text-gray-200 leading-relaxed font-inter">
            Get exclusive access to new releases, special discounts, and become part of a community that values quality, sustainability, and exceptional coffee.
          </p>
        </div>

      </div>
      
    </div>
  );
}