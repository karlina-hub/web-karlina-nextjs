"use client";

import { useState } from "react";
import { Averia_Sans_Libre, Gantari } from "next/font/google";
import { ArrowRight, ChevronDown, Award, X, Maximize2 } from "lucide-react";
import { NavbarComp } from "@/src/components/ui/navbar";
import { FooterbarComp } from "@/src/components/ui/footerbar";

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-averia",
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gantari",
});

export default function EventsPage() {
  // State untuk melacak Accordion mana yang terbuka.
  // Default '1' agar saat halaman dimuat, kartu pertama sudah terbuka.
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  // Fungsi untuk toggle accordion
  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // STATE BARU: Untuk menyimpan class gambar yang sedang di-klik (di-zoom)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // DATA GALLERY: Gunakan thumbnailevent.webp untuk semua 6 kotak sementara
  const galleryImages = [
    "bg-[url('../app/asset/recap1.webp')]",
    "bg-[url('../app/asset/recap2.webp')]",
    "bg-[url('../app/asset/recap3.webp')]",
    "bg-[url('../app/asset/recap4.webp')]",
    "bg-[url('../app/asset/recap5.webp')]",
    "bg-[url('../app/asset/recap6.webp')]",
  ];

  // Data Highlights Event
  const eventHighlights = [
    {
      id: 1,
      title: "Experiencing The Karlina Booth",
      description:
        "More than just a pop-up, our booth became a lively gathering spot for coffee lovers. From serving quick espressos to sharing the stories behind our beans, we made sure every visitor felt Karlina's signature hospitality.",
      image: "bg-[url('../app/asset/card1event.webp')]",
      link: "https://www.instagram.com/p/DbU68IavJRo/",
    },
    {
      id: 2,
      title: "The Slow Bar Experience",
      description:
        "We took a moment to slow down and appreciate the craft. Over our finest manual brews, we connected with visitors to chat about flavor notes, bean origins, and our meticulous roasting process.",
      image: "bg-[url('../app/asset/card2event.webp')]",
      link: null,
    },
    {
      id: 3,
      title: "Perfecting The Coffee Craft",
      description:
        "Behind every great cup is pure dedication to precision. Throughout the festival, our team constantly calibrated the equipment and perfected our recipes to ensure consistent quality in every single drop.",
      image: "bg-[url('../app/asset/card3event.webp')]",
      link: null,
    },
  ];

  return (
    <main className="relative">
      <NavbarComp />

      <div
        className={`min-h-screen bg-white ${averia.variable} ${gantari.variable} font-gantari text-gray-800`}
      >
        {/* 1. HERO SECTION */}
        <section className="relative h-svh w-full bg-[url('../app/asset/thumbnailevent.webp')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/35 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12 lg:p-20">
            <h1 className="max-w-3xl text-3xl md:text-5xl font-bold text-white font-averia animate-in fade-in slide-in-from-top-6 duration-1000 delay-300 fill-mode-both">
              Beyond the Cup.
              <br />
              Into the Community.
            </h1>
            <p className="mt-4 max-w-2xl text-sm md:text-lg leading-relaxed tracking-wider text-white/90 font-gantari animate-in fade-in slide-in-from-top-6 duration-1000 delay-500 fill-mode-both">
              The best coffee is meant to be shared. Experience how we bring our
              roastery's and processing's expertise and warmth straight to you.
            </p>
          </div>
        </section>

        {/* 2. MAIN EVENT HIGHLIGHTS (ACCORDION STYLE) */}
        <section className="py-10 md:py-16 px-6 md:px-10 w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Header Event */}
            <div className="w-fit flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={16} />
              Official Sponsor
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-averia mb-4 text-center">
              Bandung Coffee Carnival
            </h2>

            <p className="text-gray-500 text-sm md:text-lg leading-relaxed tracking-wide mb-10 text-center max-w-2xl md:max-w-3xl font-gantari">
              As the pride of Garut, Karlina Coffee Company brought vibrant
              energy to the main stage of West Java’s largest coffee festival.
              Discover our favorite moments below.
            </p>

            {/* Accordion List */}
            <div className="w-full flex flex-col gap-4">
              {eventHighlights.map((item) => (
                <div
                  key={item.id}
                  className={`w-full bg-white border-2 ${
                    openAccordion === item.id
                      ? "border-[#80102b] shadow-md"
                      : "border-gray-200"
                  } rounded-2xl overflow-hidden hover:border-navbar transition-all duration-300`}
                >
                  {/* Accordion Trigger (Button) */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer focus:outline-none transition-colors duration-300 group ${
                      openAccordion === item.id
                        ? "bg-[#80102b]" // Latar belakang Header menjadi Marun saat aktif
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`text-lg md:text-xl font-bold font-averia transition-colors duration-300 ${
                        openAccordion === item.id
                          ? "text-[#F7F3EB]" // Teks judul berubah menjadi Krem saat aktif
                          : "text-gray-900 group-hover:text-[#80102b]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openAccordion === item.id
                          ? "rotate-180 text-[#F7F3EB]" // Ikon panah berputar & berubah Krem saat aktif
                          : "text-gray-400 group-hover:text-[#80102b]"
                      }`}
                      size={24}
                    />
                  </button>

                  {/* Accordion Content (Smooth Expand/Collapse using Grid Trick) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openAccordion === item.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-6 md:pt-8 flex flex-col gap-6">
                        {/* Hapus items-start dari sini agar tinggi teks menyamai gambar */}
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Foto Moment */}
                          {/* Tambahkan pembungkus agar rasio gambar tidak rusak saat diregangkan */}
                          <div className="w-full md:w-[280px] shrink-0 flex flex-col">
                            <div
                              className={`w-full aspect-[4/3] rounded-xl ${item.image} bg-cover bg-center`}
                            ></div>
                          </div>

                          {/* Teks & CTA */}
                          {/* Tambahkan flex-1 di sini agar memakan sisa ruang kanan */}
                          <div className="flex flex-col flex-1">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-gantari">
                              {item.description}
                            </p>

                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                // Tambahkan mt-auto di sini agar terdorong ke bawah sejajar gambar
                                className="mt-4 md:mt-auto w-auto md:w-fit flex justify-center items-center gap-2 px-5 py-2.5 bg-white border-2 border-navbar text-[#80102b] text-sm font-semibold rounded-xl hover:border-[#80102b] transition-all duration-300 group hover:bg-navbar hover:text-[#F7F3EB]"
                              >
                                View on Instagram{" "}
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                  →
                                </span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* =========================================
                3. BBRC MOMENTS: GALLERY & LIGHTBOX
                ========================================= */}
            {/* Container gallery dibuat lebih lebar (max-w-5xl) dari accordion agar dinamis */}
            <div className="w-full max-w-5xl mx-auto mt-16 md:mt-24">
              <h3 className="text-lg md:text-xl font-bold text-[#80102b] font-averia mb-8 text-center uppercase tracking-widest">
                BBRC Moments: A Visual Recap
              </h3>

              {/* Grid 3 Kolom */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {galleryImages.map((bgClass, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(bgClass)}
                    className="w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer relative group shadow-sm"
                  >
                    {/* Gambar Utama */}
                    <div
                      className={`absolute inset-0 ${bgClass} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
                    ></div>

                    {/* Overlay hitam tipis & Ikon Zoom yang muncul saat di-hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Maximize2
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100"
                        size={32}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================================
    MODAL LIGHTBOX (ZOOM IN)
    ========================================= */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 animate-in fade-in duration-300"
                // Baris onClick di sini sudah dihapus agar area hitam tidak merespon klik
              >
                {/* Tombol Close Silang */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-[110] cursor-pointer"
                >
                  <X size={36} />
                </button>

                {/* Wadah Gambar yang di-Zoom */}
                {/* Menggunakan !bg-contain agar gambar utuh (tidak terpotong) saat di-zoom */}
                <div
                  className={`w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-xl ${selectedImage} !bg-contain bg-center bg-no-repeat cursor-default animate-in zoom-in-95 duration-300`}
                  // Baris e.stopPropagation() di sini juga dihapus karena sudah tidak diperlukan lagi
                ></div>
              </div>
            )}

            {/* B2B / Collaboration Card (Seperti di referensi paling bawah) */}
            <div className="w-full mt-8 p-6 md:p-8 bg-[#F7F3EB] border border-[#EFE4D6] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 font-averia mb-2">
                  Bring Karlina to Your Event
                </h4>
                <p className="text-gray-600 text-sm md:text-base font-gantari max-w-md">
                  Elevate your next festival or corporate gathering with our
                  professional coffee catering and roastery expertise.
                </p>
              </div>

              <a
                href="/contact"
                className="w-full md:w-auto text-center px-6 py-3 bg-[#80102b] text-[#F7F3EB] border-2 border-[#80102b] rounded-xl font-semibold transition-all duration-300 group hover:bg-transparent hover:text-[#80102b] whitespace-nowrap shadow-md"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <FooterbarComp />
      </footer>
    </main>
  );
}
