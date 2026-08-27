import { FooterbarComp } from "@/src/components/ui/footerbar";
import { NavbarComp } from "@/src/components/ui/navbar";
import { Averia_Sans_Libre } from "next/font/google";
import { Gantari } from "next/font/google";
import ProductCard from "@/src/components/cards/ProductCard";

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
  return (
    <header>
      <NavbarComp />

      <div className="relative min-h-screen w-full bg-[url('../app/asset/emptyspacebg.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-4xl">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navbar font-bold font-averia">
            <p>
              Page in <span className="font-medium italic">progress</span>
            </p>
          </div>

          <div className="mt-px md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navbar font-averia">
            We're preparing something here.
          </div>

          <div className="mt-px md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navbar font-averia">
            It will be
            <a className="font-medium"> available </a>
            <a className="italic">soon.</a>
          </div>
        </div>
      </div>

      <div
        className="mx-auto
    mt-10
    grid
    max-w-7xl
    grid-cols-1
    auto-rows-fr
    gap-3 md:gap-4

    md:grid-cols-2
    lg:grid-cols-3

    px-6
    md:px-10
    lg:px-16"
      >
        <ProductCard
          title="Arabica Gayo"
          description="Smooth body with chocolate notes Smooth body with chocolate notes Smooth body with chocolate notes Smooth body with chocolate notes"
          image="ogblendproduct.webp"
          prices={{
            "125 gr": "Rp 85.000",
            "200 gr": "Rp 130.000",
            "500 gr": "Rp 290.000",
            "1 kg": "Rp 550.000",
          }}
        />

        <ProductCard
          title="Arabica Gayo"
          description="Smooth body with chocolate notes..."
          image="ogblendproduct.webp"
          prices={{
            "125 gr": "Rp 85.000",
            "200 gr": "Rp 130.000",
            "500 gr": "Rp 290.000",
            "1 kg": "Rp 550.000",
          }}
        />

        <ProductCard
          title="Robusta Toraja"
          description="Bold body with strong dark chocolate taste..."
          image="ogblendproduct.webp"
          prices={{
            "250 gr": "Rp 70.000", // Otomatis teks tombol di modal akan memunculkan "250 Gram"
            "1 kg": "Rp 240.000", // Otomatis teks tombol di modal akan memunculkan "1 Kilo"
          }}
        />

        <ProductCard
          title="Robusta Toraja"
          description="Bold body with strong dark chocolate taste..."
          image="ogblendproduct.webp"
          prices={{
            "250 gr": "Rp 70.000", // Otomatis teks tombol di modal akan memunculkan "250 Gram"
            "1 kg": "Rp 240.000", // Otomatis teks tombol di modal akan memunculkan "1 Kilo"
          }}
        />
      </div>

      <div className="mt-8">
        <FooterbarComp />
      </div>
    </header>
  );
}
