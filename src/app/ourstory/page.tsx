import { NavbarComp } from "@/src/components/ui/navbar";
import { Buttonnotes } from "@/src/components/ui/buttonnotes";
import HandshakeIcon from "@/src/components/icons/hand-shake";
import { Button } from "@/src/components/ui/button";
import { FooterbarComp } from "@/src/components/ui/footerbar";
import LeafIcon from "@/src/components/icons/leaf";
import RewardIcon from "@/src/components/icons/reward";
import { DropdownMenu } from "@/src/components/ui/dropdown-menu";
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
  return (
    <div className="font-gantari">
      <NavbarComp />
      <header>
        <div className="relative h-svh md:min-h-screen w-full bg-[url('../app/asset/heroimage2.webp')] bg-cover bg-center bg-no-repeat">
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-tl from-black/90 to-black/40 flex items-center justify-center">
            {/* text */}
            <div
              className="relative z-20 flex flex-col justify-center 
                        min-h-screen items-center 
                        px-6 md:px-20 lg:px-40"
            >
              <div className="font-bold text-3xl md:text-5xl text-white font-averia animate-in fade-in slide-in-from-top-6 duration-1000 delay-300 fill-mode-both">
                Karlina Coffee Company
              </div>

              <div className="mt-5 md:mt-6 max-w-md md:max-w-4xl tracking-wide text-sm md:text-xl leading-relaxed text-center text-white animate-in fade-in slide-in-from-top-6 duration-1000 delay-500 fill-mode-both">
                At Karlina Coffee, we believe that each cup of coffee should
                tell stories of connection, sustainability, and respect. Our
                purpose is to create meaningful partnerships that value the
                earth and those who cultivate it.
              </div>

              <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-6 duration-1000 delay-700 fill-mode-both">
                <a
                  href="#story"
                  className="flex flex-col items-center text-white/70 transition-all duration-300 hover:text-white animate-bounce"
                >
                  <span className="text-xs uppercase font-averia">
                    Tap to Start The Journey
                  </span>

                  <div className="mt-2 text-2xl">↓</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div
          id="story"
          className="px-6 md:px-20 max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-30"
        >
          {/* Title 1 */}
          <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
            THE BEGINNING
          </div>
          <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia ">
            Where It All Started
          </div>
          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            Our journey began with a simple question: What if coffee could do
            more than just wake you up in the morning? What if it could connect
            communities, preserve traditions, and create positive change across
            continents? This curiosity led us deep into the coffee-growing
            regions of the world, where we discovered farmers whose dedication
            and expertise deserved far more recognition than they were
            receiving.
          </div>

          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            We saw firsthand how the traditional coffee supply chain often left
            farmers with the smallest share of profits, despite their crucial
            role in producing exceptional beans. We knew there had to be a
            better way—a path that honored both quality and ethics, flavor and
            fairness.
          </div>

          {/* Quote */}
          <div className="bg-[#FFFBEA] mt-8 md:mt-10 p-4 md:p-6">
            <div className="text-lg md:text-2xl text-navbar italic font-semibold leading-relaxed">
              “We dont just source coffee. We invest in relationship,
              communities, and future of sustainable farming.”
            </div>
            <div className="mt-2 text-sm md:text-base font-light text-black tracking-wide">
              Karlina Coffee Company
            </div>
          </div>

          {/* Title 2 */}
          <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
            OUR CORE BELIEFS
          </div>
          <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia ">
            From Soil to Cup
          </div>
          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            Our philosophy is rooted in transparency, sustainability, and
            genuine partnerships. We work directly with coffee farmers to build
            long-term relationships based on trust and fair value. By supporting
            responsible farming practices and investing in local communities, we
            ensure every bean is grown with care before it reaches our roastery.
            This is what "From Soil to Cup" truly means—creating exceptional
            coffee while making a positive impact on the people and places
            behind it.
          </div>
          <div className="mt-8 w-full aspect-[5/3] bg-[url('../app/asset/webp5.webp')] bg-cover bg-no-repeat rounded-xl"></div>
        </div>

        {/* Parents Logo Divider */}
        <div className="mt-10 md:mt-20 flex gap-3 md:gap-5 justify-center">
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungamaroon.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungamaroon.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
        </div>

        <div className="mt-10 md:mt-20 px-6 md:px-20 max-w-5xl mx-auto">
          <div className="text-sm md:text-lg leading-relaxed md:leading-9 text-black font-semibold tracking-wide ">
            You can click on the card to know more further information about our
            three big points:
          </div>
        </div>

        {/* Card Parent */}
        <div
          className="mt-10
             px-6 md:px-20 
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
             gap-6 md:gap-8
             max-w-7xl mx-auto"
        >
          {/* Card 1 Sizing */}
          <a
            href="/ourprocess"
            className="group
               flex flex-col h-full w-full rounded-2xl bg-[#F6F2EA]
               p-5 md:p-6 transition duration-500
               hover:bg-[#9E0040] hover:shadow-xl"
          >
            {/* Parent Image */}
            <div className="w-full flex-shrink-0 aspect-[4/3] rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('../app/asset/newprocessing.webp')]"></div>

            <div className="mt-7 text-2xl md:text-[28px] text-[#9E0040] font-bold transition-colors group-hover:text-[#F6F2EA] font-averia">
              Coffee Processing
            </div>
            <div className="mt-4 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              Carefully processed for exceptional consistency, quality, and
              flavor.
            </div>
            <div className="mt-auto pt-8 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              click here
            </div>
          </a>

          {/* Card 2 Sizing */}
          <a
            href="/ourroastery"
            className="group
               flex flex-col h-full w-full rounded-2xl bg-[#F6F2EA]
               p-5 md:p-6 transition duration-500
               hover:bg-[#9E0040] hover:shadow-xl"
          >
            {/* Parent Image */}
            <div className="w-full flex-shrink-0 aspect-[4/3] rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('../app/asset/cardroastery.webp')]"></div>

            <div className="mt-7 text-2xl md:text-[28px] text-[#9E0040] font-bold transition-colors group-hover:text-[#F6F2EA] font-averia">
              Roastery
            </div>
            <div className="mt-4 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              Modern roasting technology expertly handled by expert roasters.
            </div>
            <div className="mt-auto pt-8 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              click here
            </div>
          </a>

          {/* Card 3 Sizing */}
          <a
            href="/oursolution"
            className="group
               flex flex-col h-full w-full rounded-2xl bg-[#F6F2EA]
               p-5 md:p-6 transition duration-500
               hover:bg-[#9E0040] hover:shadow-xl"
          >
            {/* Parent Image */}
            <div className="w-full flex-shrink-0 aspect-[4/3] rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('../app/asset/cardsolution2.webp')]"></div>

            <div className="mt-7 text-2xl md:text-[28px] text-[#9E0040] font-bold transition-colors group-hover:text-[#F6F2EA] font-averia">
              Coffee Solution
            </div>
            <div className="mt-4 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              Tailored coffee solutions for businesses and passionate coffee
              lovers.
            </div>
            <div className="mt-auto pt-8 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              click here
            </div>
          </a>
        </div>
      </main>

      <footer className="mt-14">
        <FooterbarComp />
      </footer>
    </div>
  );
}
