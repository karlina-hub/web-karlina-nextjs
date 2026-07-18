"use client";

import { useState } from "react";
import { Carousel } from "@/src/components/ui/carousel";
import { FooterbarComp } from "@/src/components/ui/footerbar";
import { LogoSlider } from "@/src/components/ui/logo-slider";
import { NavbarComp } from "@/src/components/ui/navbar";
import { Averia_Sans_Libre } from "next/font/google";
import { Gantari } from "next/font/google";

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-gantari", // Defines a CSS variable
});

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Choose required weights
  variable: "--font-averia", // Define CSS variable name [1, 3]
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // State baru untuk mengontrol Modal Pop-up
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: "success", // Bisa 'success' atau 'error'
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = e.currentTarget;

    // GANTI URL DI BAWAH INI DENGAN URL WEB APP DARI GOOGLE APPS SCRIPT ANDA
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzH0nUKVsjWeLH7uQLZjuOWzLLiFuJcOPYVtkRAKVKx8UENE1nXmSHpwFavn1d0Z_z1/exec";

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        // Penting: Apps script lebih mudah menerima format text/plain untuk menghindari masalah CORS dari browser
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        // TAMPILKAN MODAL SUKSES
        setModalConfig({
          isOpen: true,
          type: "success",
          message:
            "Thank you for reaching out to Karlina Roastery. Our team will review your inquiry and get back to you soon.",
        });
        formElement.reset(); // Mengosongkan form setelah berhasil
      } else {
        // TAMPILKAN MODAL ERROR (Dari Google)
        setModalConfig({
          isOpen: true,
          type: "error",
          message: "Failed to send message: " + result.message,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // TAMPILKAN MODAL ERROR (Koneksi/Sistem)
      setModalConfig({
        isOpen: true,
        type: "error",
        message:
          "An error occurred. Please check your internet connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  return (
    <header className="relative">
      <NavbarComp />

      <div className="flex min-h-screen justify-center bg-[url('../app/asset/emptyspacebg.webp')] bg-cover bg-center bg-no-repeat p-6">
        <div className="mt-20 md:mt-22 w-full max-w-4xl h-full rounded-2xl bg-white p-6 ">
          <div className="font-bold text-2xl md:text-4xl text-navbar font-averia">
            Get in Touch
          </div>
          <div className="mt-2 font-normal text-sm md:text-base text-[#8D6E63] ">
            We'd love to hear from you! Whether you have questions about our
            coffee, wholesale inquiries, or just want to say hello, we're here
            to help.
          </div>

          <form onSubmit={handleSubmit}>
            {/* <!-- Input Group: Name --> */}
            <div className="mt-4">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700 "
              />
            </div>

            {/* <!-- Input Group: Email --> */}
            <div className="my-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700 "
              />
            </div>

            {/* <!-- Input Group: Phone Number --> */}
            <div className="mb-4">
              {/* htmlFor terhubung dengan id="whatsapp" */}
              <label
                htmlFor="whatsapp"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>

              <div className="relative rounded-lg ">
                {/* Indikator Kode Negara (Opsional, agar user tidak bingung) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-sm text-gray-500 font-medium">+62</span>
                </div>

                <input
                  required
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="8123456789"
                  pattern="[0-9]{9,13}"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 md:p-3 pl-10 md:pl-11 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700"
                />
              </div>

              <p className="mt-1.5 text-xs text-gray-500">
                Enter the number (e.g., 8123456789) without the leading zero.
              </p>
            </div>

            {/* <!-- Form Group: Subject --> */}
            <div className="mt-4">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <div className="relative">
                <select
                  required
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select the reason you are contacting us
                  </option>
                  <option value="General Question">General Question</option>
                  <option value="Wholesale / B2B Partnership">
                    Wholesale / B2B Partnership
                  </option>
                </select>

                {/* Ikon Panah Kecil Kustom di Sebelah Kanan Dropdown */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Input Group: Company Name --> */}
            <div className="mt-4">
              <label
                htmlFor="companyname"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Company's Name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Enter your company's name here"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700"
              />
            </div>

            {/* <!-- Input Group: Message --> */}
            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Tell us how we can help you"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all focus:border-gray-200 focus:ring-1 focus:ring-gray-700"
              />
            </div>

            {/* <!-- Tombol Submit --> */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-8 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium transition-all cursor-pointer ${
                isLoading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#9E0040] text-white hover:text-[#9E0040] hover:bg-[#F7F3EB]"
              }`}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      <div>
        <FooterbarComp />
      </div>

      {/* Modal Pop Up */}

      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-opacity">
          {/* Box Modal */}
          <div className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 md:p-8 text-center shadow-2xl transition-all">
            {/* Ikon Dinamis (Centang Hijau / Silang Merah) */}
            {modalConfig.type === "success" ? (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}

            {/* Judul Modal */}
            <h3 className="mb-2 text-2xl font-bold text-gray-900 font-averia">
              {modalConfig.type === "success" ? "Success!" : "Oops!"}
            </h3>

            {/* Pesan Modal */}
            <p className="mb-8 text-sm text-gray-500 tracking-wide">
              {modalConfig.message}
            </p>

            {/* Tombol Done */}
            <button
              onClick={closeModal}
              className="w-full rounded-lg bg-[#9E0040] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#7A0031] focus:outline-none cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
