"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

import logo1 from "@/src/app/asset/logomerahmuda.webp";
import logo2 from "@/src/app/asset/escopialogo.webp";
import logo3 from "@/src/app/asset/bumiupilogo.webp";
import logo4 from "@/src/app/asset/escopiapluslogo.webp";
import logo5 from "@/src/app/asset/logomerahmuda.webp";
import logo6 from "@/src/app/asset/escopialogo.webp";
import logo7 from "@/src/app/asset/bumiupilogo.webp";
import logo8 from "@/src/app/asset/escopiapluslogo.webp";

export function LogoSlider() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <div className="relative overflow-hidden py-10 ">
      {/* Fade kiri */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F7F3EB] to-transparent z-10" /> */}

      {/* Fade kanan */}
      {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F7F3EB] to-transparent z-10" /> */}

      {/* Track */}
      <div className="flex w-max animate-scroll gap-20 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center min-w-32">
            <img
              src={logo.src}
              alt="Partner Logo"
              className="h-16 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
