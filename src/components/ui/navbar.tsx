"use client";

import Image from "next/image";
import { Averia_Sans_Libre, Gantari } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  LogOutIcon,
  UserIcon,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  User,
} from "lucide-react";

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-gantari",
});

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
});

export function NavbarComp() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [firstName, setFirstName] = useState("User");
  const [fullName, setFullName] = useState("User Name");
  const [userEmail, setUserEmail] = useState("user@email.com");
  
  // 1. Tambahkan state untuk avatar
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    // 2. Buat fungsi untuk memuat data dari localStorage
    const loadUserData = () => {
      const token = localStorage.getItem("token");
      const storedName = localStorage.getItem("userName") || "User Name";
      const storedEmail = localStorage.getItem("userEmail") || "user@email.com";
      const storedAvatar = localStorage.getItem("userAvatar"); // Ambil avatar

      if (token) {
        setIsLoggedIn(true);
        setFullName(storedName);
        setFirstName(storedName.split(" ")[0]);
        setUserEmail(storedEmail);
        setAvatar(storedAvatar);
      }
    };

    // Jalankan saat pertama kali dimuat
    loadUserData();

    // 3. Pasang "telinga" (Listener) untuk mendengarkan sinyal perubahan profil
    window.addEventListener("profileUpdated", loadUserData);

    // Bersihkan listener saat komponen dilepas
    return () => window.removeEventListener("profileUpdated", loadUserData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userAvatar"); // Hapus juga avatar saat logout
    setIsLoggedIn(false);
    window.location.reload();
  };

  const initial = fullName.charAt(0).toUpperCase();

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-4">
      <div
        className="mx-auto flex items-center justify-between 
        max-w-6xl rounded-2xl px-6 py-4 shadow-xl
        border border-white/10
        bg-navbar/90
        backdrop-blur-md"
      >
        {/* LEFT - Logo  */}
        <a
          href="/"
          className="w-32 h-8 bg-[url('../app/asset/logofooter.webp')] bg-[length:auto_100%] bg-no-repeat"
        />

        {/* CENTER - Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 text-base font-medium text-[#F7F3EB]">
          {[
            { name: "Our Story", href: "/ourstory" },
            { name: "Product", href: "/product" },
            { name: "Wholesale", href: "/wholesale" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-5 py-2 rounded-2xl hover:bg-white/10 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT - Auth & Cart (Desktop) */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {isLoggedIn ? (
            <>
              <button className="text-[#F7F3EB] hover:text-white transition">
                <ShoppingBag strokeWidth={1.5} size={24} />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-[#F7F3EB] hover:bg-white/10 transition outline-none cursor-pointer">
                  <span className="text-sm font-gantari">Hi, {firstName}!</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[280px] mt-2 p-1 bg-[#F7F3EB] rounded-2xl shadow-xl border border-white/30 font-gantari"
                >
                  <div className="flex items-center justify-between p-4 mb-2 border border-white/30 rounded-xl bg-navbar/90">
                    <div className="flex flex-col overflow-hidden mr-3">
                      <span className="font-semibold text-white text-base truncate">
                        {fullName}
                      </span>
                      <span className="text-sm text-[#F7F3EB] truncate">
                        {userEmail}
                      </span>
                    </div>
                    {/* 4. Tampilkan Gambar di Desktop Dropdown jika ada */}
                    <div className="h-10 w-10 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center flex-shrink-0 text-lg font-bold overflow-hidden border border-white/20">
                      {avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        initial
                      )}
                    </div>
                  </div>

                  {/* Tombol Profile */}
                  <DropdownMenuItem
                    onClick={() => router.push("/profile")}
                    className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer text-gray-500 font-medium transition-all outline-none focus:bg-navbar/90 focus:text-white"
                  >
                    <User
                      size={18}
                      strokeWidth={2}
                      className="text-gray-500 transition-colors group-focus:text-white"
                    />
                    Profile
                  </DropdownMenuItem>

                  {/* Tombol Sign Out */}
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="group mt-1 flex items-center gap-3 p-3 rounded-xl cursor-pointer text-gray-500 font-medium transition-all outline-none focus:bg-[#80102b]/10 focus:text-[#80102b]"
                  >
                    <LogOutIcon
                      size={18}
                      strokeWidth={2}
                      className="text-gray-500 transition-colors group-focus:text-[#80102b]"
                    />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="text-[#F7F3EB] hover:text-white transition text-sm"
              >
                Sign in
              </a>
              <a
                href="/register"
                className="bg-[#E8DAC6] text-[#6A0921] px-5 py-2 rounded-2xl text-sm font-semibold hover:bg-[#d6c7b3] transition"
              >
                Sign up
              </a>
            </>
          )}
        </div>

        {/* HAMBURGER (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F7F3EB] hover:text-white transition cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-[110%] left-1/2 -translate-x-1/2 w-[92%] overflow-hidden rounded-2xl bg-navbar shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out md:hidden
        ${isOpen ? "max-h-[600px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col px-3 font-gantari">
          {/* Link Menu Utama */}
          {[
            { name: "Our Story", href: "/ourstory" },
            { name: "Product", href: "/product" },
            { name: "Contact", href: "/contact" },
            { name: "Wholesale", href: "/wholesale" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="rounded-xl px-4 py-4 text-base font-medium text-[#F7F3EB] transition-all duration-300 hover:bg-white/10"
            >
              {item.name}
            </a>
          ))}

          <div className="mt-2 mb-2 h-px bg-white/20 mx-4" />

          {/* Mobile Auth Links Terpadu */}
          {isLoggedIn ? (
            <div className="flex flex-col gap-1">
              {/* Kotak Identitas Mobile */}
              <div className="flex items-center gap-3 mt-2 px-4 py-3 mx-2 mb-2 rounded-xl bg-white/10 border border-white/20">
                {/* 5. Tampilkan Gambar di Mobile Menu jika ada */}
                <div className="h-10 w-10 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center flex-shrink-0 text-lg font-bold overflow-hidden border border-white/20">
                  {avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    initial
                  )}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold text-white text-base truncate">
                    {fullName}
                  </span>
                  <span className="text-sm text-[#F7F3EB]/70 truncate">
                    {userEmail}
                  </span>
                </div>
              </div>

              {/* Menu Profile */}
              <a
                href="/profile"
                className="rounded-xl px-4 py-3 text-base font-medium text-[#F7F3EB] hover:bg-white/10 flex items-center gap-3"
              >
                <User size={20} /> Profile
              </a>

              {/* Menu Cart */}
              <a
                href="/cart"
                className="rounded-xl px-4 py-3 text-base font-medium text-[#F7F3EB] hover:bg-white/10 flex items-center gap-3"
              >
                <ShoppingBag size={20} /> Cart
              </a>

              {/* Menu Logout */}
              <button
                onClick={handleLogout}
                className="rounded-xl px-4 py-3 text-base font-medium text-red-300 hover:bg-white/10 text-left flex items-center gap-3 w-full"
              >
                <LogOutIcon size={20} /> Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 px-4 mt-2">
              <a
                href="/login"
                className="rounded-xl py-3 text-center text-base font-medium text-[#F7F3EB] border border-white/30 hover:bg-white/10"
              >
                Sign in
              </a>
              <a
                href="/register"
                className="rounded-xl mb-3 bg-[#E8DAC6] py-3 text-center text-base font-bold text-[#6A0921] hover:bg-[#d6c7b3]"
              >
                Sign up
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}