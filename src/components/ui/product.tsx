import { Averia_Sans_Libre } from "next/font/google";
import { Gantari } from "next/font/google";
import { Buttonnotes } from "./buttonnotes";
import TrophyIcon from "../icons/trophy";
import FireIcon from "../icons/fire";
import Fivestarsicon from "../icons/five-star";
import { Button } from "./button";

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

export function ProductComp() {
  return (
    <header className="font-gantari">
      <div className="flex justify-center mt-13">
        <div className="group relative w-280 h-267 rounded-2xl overflow-hidden">
          {/* BACKGROUND (yang di-zoom) di cek lagi sama di gpt ya, biar paham*/}
          <div
            className="absolute inset-0 bg-[url('../app/asset/ogblendproduct.webp')] 
                  bg-cover bg-center bg-no-repeat
                  transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
          />
          {/* overlay */}
          <div
            className="absolute bottom-0 inset-x-0 h-3/4
                  bg-gradient-to-t from-white via-white/90 to-transparent "
          />

          <div className="relative z-20 mt-67 ml-40 pt-100 flex items-center gap-4">
            <Buttonnotes variant="bbest" size="best">
              <TrophyIcon />
              BEST SELLER
            </Buttonnotes>

            <Buttonnotes
              variant="bbest"
              size="best"
              className="bg-[#FFE08F] text-notes-text border-transparent"
            >
              <FireIcon />
              MEDIUM
            </Buttonnotes>
          </div>

          <div className="relative z-20 px-40 pt-4 text-4xl font-semibold text-heading-text font-gantari">
            Karlina OG Blend
          </div>
          <div className="relative z-20 px-40 pt-2.5 text-base font-medium text-[#8D6E63]">
            Garut, Indonesia
          </div>

          {/* Flavour Notes */}
          <div className="relative z-20 flex items-center gap-4 pt-4 px-40">
            <Buttonnotes>Floral</Buttonnotes>
            <Buttonnotes>Citrus</Buttonnotes>
            <Buttonnotes>Bergamot</Buttonnotes>
            <Buttonnotes>Jasmine</Buttonnotes>
          </div>

          <div className="relative z-20 px-40 pt-3 flex items-center gap-4">
            <Fivestarsicon />
            <div className="text-sm text-[#8D6E63]">4.9 (127)</div>
          </div>

          <div className="relative z-20 text-heading-text text-xl/8 px-40 pt-3 font-normal">
            Grown at high altitudes in Garut's legendary region, this coffee
            delivers an exquisite cup with pronounced floral notes, bright
            citrus acidity, and a delicate tea-like body.
          </div>

          <div className="relative z-20 flex px-40 pt-6 items-center gap-4 w-full">
            <Button variant="tertiary" className="flex-1" disabled>
              View Detail
            </Button>
            <Button variant="tertiary" className="flex-1" disabled>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
