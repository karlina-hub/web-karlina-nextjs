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
        </div>
      </div>
    </header>
  );
}
