import { FooterbarComp } from "@/src/components/ui/footerbar";
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
  return (
    <div className="font-gantari">
      <header>
        <NavbarComp />

        <div
          className="relative z-20 flex flex-col justify-center 
                        mt-7 md:mt-14  items-center 
                        px-6 md:px-20 lg:px-40
                        "
        >
          <div className="mt-20 md:mt-20 font-bold text-3xl md:text-5xl text-navbar font-averia">
            Product
          </div>
          <div className="mt-2 md:mt-4 max-w-md md:max-w-5xl tracking-wide text-sm md:text-xl leading-relaxed text-center text-black">
            From carefully selected green beans to expertly roasted coffee,
            explore our products crafted with quality, precision, and flavor in
            mind.
          </div>
        </div>

        <div
          className=" mt-8 md:mt-14 px-6 md:px-10 lg:px-15 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-6 md:gap-8
                        max-w-7xl mx-auto"
        >
          {/* Card 1 */}
          <a
            href="https://www.instagram.com/karlinacoffeeprocessing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('../app/asset/greenbeans.webp')] bg-left bg-cover bg-no-repeat">
                <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                  <div className="space-y-1 md:space-y-2 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-xl md:text-2xl  text-[#9E0040] font-bold font-averia ">
                      Green Beans
                    </div>
                  </div>
                </div>

                {/* HOVER SOLID OVERLAY */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#9E0040] via-[#9E0040]/60 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div
                    className="transform translate-y-4 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 
                              transition-all duration-300 delay-100"
                  >
                    <div className="text-xl md:text-2xl text-[#F6F2EA] font-bold font-averia">
                      Green Beans
                    </div>
                    <div className="mt-2 text-sm md:text-lg text-[#F6F2EA] tracking-wide">
                      Explore our state-of-the-art roastery and meet our master
                      roasters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://www.instagram.com/karlinaroastery/"
            target="_blank"
            rel="noopener noreffer"
          >
            <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('../app/asset/roastedbeans.webp')] bg-left bg-cover bg-no-repeat">
                <div className="absolute inset-0 flex items-end p-4 md:p-6  bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                  <div className="space-y-1 md:space-y-2 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-xl md:text-2xl text-[#9E0040] font-bold font-averia hover:text-transparent">
                      Roasted Beans
                    </div>
                  </div>
                </div>

                {/* HOVER SOLID OVERLAY */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#9E0040] via-[#9E0040]/60 to-transparent opacity-0  transition-all duration-300 group-hover:opacity-100">
                  <div
                    className="transform translate-y-4 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 
                              transition-all duration-300 delay-100"
                  >
                    <div className="text-xl md:text-2xl text-[#F6F2EA] font-bold font-averia">
                      Roasted Beans
                    </div>
                    <div className="mt-2 text-sm md:text-lg text-[#F6F2EA] tracking-wide">
                      Explore our state-of-the-art roastery and meet our master
                      roasters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="https://www.instagram.com/escopia.co/"
            target="_blank"
            rel="noopener noreffer"
          >
            <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('../app/asset/escopiacoffee.webp')] bg-left bg-cover bg-no-repeat">
                <div className="absolute inset-0 flex items-end p-4 md:p-6  bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                  <div className="space-y-1 md:space-y-2 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-xl md:text-2xl text-[#9E0040] font-bold font-averia">
                      Coffee
                    </div>
                  </div>
                </div>

                {/* HOVER SOLID OVERLAY */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#9E0040] via-[#9E0040]/60 to-transparent opacity-0  transition-all duration-300 group-hover:opacity-100">
                  <div
                    className="transform translate-y-4 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 
                              transition-all duration-300 delay-100"
                  >
                    <div className="text-xl md:text-2xl text-[#F6F2EA] font-bold font-averia">
                      Coffee
                    </div>
                    <div className="mt-2 text-sm md:text-lg text-[#F6F2EA] tracking-wide">
                      Explore our state-of-the-art roastery and meet our master
                      roasters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8 md:mt-14">
          <FooterbarComp></FooterbarComp>
        </div>
      </header>
    </div>
  );
}
