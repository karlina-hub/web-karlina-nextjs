"use client";
import InstagramIcon from "../icons/instagram";
import WhatsappIcon from "../icons/whatsapp";
import Image from "next/image";
import { Averia_Sans_Libre } from "next/font/google";
import { Gantari } from "next/font/google";
import MapIcon from "../icons/map";

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify needed weights
  display: "swap",
  variable: "--font-gantari", // Optional: for CSS variable usage
});

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Choose required weights
  variable: "--font-averia", // Define CSS variable name [1, 3]
});

const pesanWhatsApp = `Halo Karlina, 
Saya tertarik dengan produk kopi Anda.
Apakah stoknya masih ada?`;

// 2. Gunakan encodeURIComponent agar JS yang mengubahnya jadi kode URL
const linkWhatsApp = `https://wa.me/6285111313611?text=${encodeURIComponent(pesanWhatsApp)}`;

export function FooterbarComp() {
  return (
    <footer className="relative bg-navbar w-full overflow-hidden ">
      {/* Background Flower Accent */}
      <div
        className="pointer-events-none absolute 
                  -top-30 -right-20 
                   w-[350px] h-[330px] md:w-[470px] md:h-[444px] 
                   bg-[url('../app/asset/logomerahmuda.png')]
                   -rotate-12 md:-rotate-30
                   bg-no-repeat bg-contain 
                   z-0"
      />

      <div className="relative z-10 px-6 md:px-12 py-10 md:py-16">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
          {/* LEFT */}
          <div className="max-w-md">
            {/* Logo Wrapper */}
            <a
              href="/"
              className="w-32 md:w-40 h-8 md:h-10 bg-[url('../app/asset/logofooter.webp')] bg-contain bg-no-repeat block"
            />

            {/* Tagline */}
            <div className="mt-5 font-medium text-lg md:text-xl text-[#F7F3EB] italic font-averia">
              From Soil to Cup
            </div>

            {/* Description */}
            <div className="mt-3 text-sm md:text-base leading-relaxed text-[#F7F3EB] font-gantari">
              We work closely with coffee farmers to provide you with great,
              sustainably farmed coffee while supporting the communities that
              grow it.
            </div>
          </div>

          {/* RIGHT: Vertically Grouped Navigation */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 text-[#F7F3EB] font-gantari lg:w-auto">
            {/* Kolom 1: Company */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="font-semibold text-base md:text-lg mb-1 font-averia tracking-wide">
                Company
              </h3>
              <a
                href="/ourstory"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                Our Story
              </a>
              <a
                href="/wholesale"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                Contact Us
              </a>
              {/* <a
                href="/faq"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition"
              >
                FAQ
              </a> */}
            </div>

            {/* Kolom 2: Shop & Business */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="font-semibold text-base md:text-lg mb-1 font-averia tracking-wide">
                Shop & Business
              </h3>
              <a
                href="/product"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                All Products
              </a>
              <a
                href="/wholesale"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                Wholesale / B2B Partner
              </a>
              {/*               
              <a
                href="#"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                My Account / Login
              </a>
              <a
                href="#"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                Cart
              </a> */}
            </div>

            {/* Kolom 3: Business & Legal */}
            {/* <div className="flex flex-col gap-3 md:gap-4 col-span-2 md:col-span-1 w-fit">
              <h3 className="font-semibold text-base md:text-lg mb-1 font-averia tracking-wide">
                Business
              </h3>
              <a
                href="/wholesale"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition w-fit"
              >
                Wholesale / B2B Partner
              </a> */}
            {/* <a
                href="/terms"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-sm md:text-base opacity-90 hover:opacity-100 hover:underline transition"
              >
                Privacy Policy
              </a> */}
            {/* </div> */}
          </div>

          {/* <nav className="flex flex-row h-fit text-sm md:text-base gap-9 text-[#F7F3EB] font-medium font-gantari">
            <a href="/ourstory" className="hover:underline">
              Our Story
            </a>
            <a href="/product" className="hover:underline">
              Product
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/wholesale" className="hover:underline">
              Wholesale
            </a>
          </nav> */}

          {/* <div className="mt-6 pr-[69%] font-light tracking-wide text-base leading-relaxed text-secondary font-gantari">
          Jl. Raya Bayongbong Km 10, Karyajaya, Kec. Bayongbong, Kabupaten
          Garut, Jawa Barat 44162
        </div> */}
        </div>

        {/* Line Divider */}
        <div className="mt-8 mb-8 h-px bg-white/30 w-full" />

        {/* Bottom Content: Social Media */}
        <div className="flex justify-start gap-10 md:gap-14">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F3EB] hover:opacity-70 transition"
          >
            <WhatsappIcon />
          </a>
          <a
            href="https://www.instagram.com/karlinaroastery/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F3EB] hover:opacity-70 transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://maps.app.goo.gl/W949UTn3TwowPcBJA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F3EB] hover:opacity-70 transition"
          >
            <MapIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
