import FactoryIcon from "@/src/components/icons/factory";
import HandshakeIcon from "@/src/components/icons/hand-shake";
import LeafIcon from "@/src/components/icons/leaf";
import RewardIcon from "@/src/components/icons/reward";
import TrendingIcon from "@/src/components/icons/trending";
import { Buttonnotes } from "@/src/components/ui/buttonnotes";
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
      <NavbarComp />
      <header>
        <div className="relative h-svh md:min-h-screen w-full bg-[url('../app/asset/newprocessing.webp')] bg-cover bg-center bg-no-repeat">
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-tl from-black/90 to-black/40 flex items-center justify-center">
            {/* text */}
            <div
              className="relative z-20 flex flex-col justify-center 
                        min-h-screen items-center 
                        px-6 md:px-20 lg:px-40"
            >
              <div className="font-bold text-3xl md:text-5xl text-white font-averia">
                Coffee Processing
              </div>

              <div className="mt-5 md:mt-6 max-w-md md:max-w-5xl tracking-wide text-sm md:text-xl leading-relaxed text-center text-white">
                From the moment a coffee cherry is picked to the moment it hits
                your cup, every step in the process is carefully organized to
                protect quality, enhance flavor, and honor the skill of coffee
                production.
              </div>

              <div className=" flex gap-4 md:gap-8 mt-6 md:mt-8 flex items-center scroll-smooth">
                <a
                  href="#processing"
                  className="    
                  absolute bottom-20 md:bottom-8 left-1/2    
                  -translate-x-1/2    
                  flex flex-col items-center    
                  text-white/70    
                  transition-all duration-300    
                  hover:text-white    
                  animate-bounce"
                >
                  <span className="text-xs uppercase font-averia">
                    Tap to Continue
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
          id="processing"
          className="mt-16 space-y-16 md:space-y-6 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto scroll-mt-24 md:scroll-mt-30"
        >
          {/* ===== SECTION 1 ===== */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              {/* h-full buat gambar stretch, kalau mau fix kasih h-165 aja (sama kayak figma) */}
              <div className="w-full aspect-[4/3] md:h-full bg-[url('../app/asset/equipment.webp')] bg-cover bg-center rounded-xl" />
            </div>

            {/* RIGHT - KONTEN */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="mt-px text-sm md:text-lg text-[#558B2F] font-medium">
                ADVANCED EQUIPMENT
              </div>

              <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
                Excellent Equipment
              </div>

              <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
                Karlina Roastery is equipped with modern coffee processing
                equipment and advanced instrumentation designed to maintain
                precision, consistency, and efficiency throughout every stage of
                production. From monitoring temperature and roasting profiles to
                controlling processing conditions, our technology helps ensure
                that each bean is handled with accuracy and care. Combined with
                the expertise of our roasting team, these state-of-the-art tools
                allow us to preserve flavor quality, improve consistency, and
                deliver exceptional coffee products in every batch.
              </div>
            </div>
          </div>

          {/* ===== SECTION 2 (REVERSE) ===== */}
          <div className="flex flex-col md:flex-row-reverse justify-center gap-8 md:gap-16 mt-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              {/* h-full buat gambar stretch, kalau mau fix kasih h-165 aja (sama kayak figma) */}
              <div className=" w-full aspect-[4/3] md:h-full bg-[url('../app/asset/daffacupping.webp')] bg-cover bg-center rounded-xl" />
            </div>

            {/* RIGHT - KONTEN */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="md:mt-px text-sm md:text-lg text-[#558B2F] font-medium">
                QUALITY STANDARDS
              </div>

              <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
                Certification
              </div>

              <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
                At Karlina Roastery, every processing stage follows strict
                quality standards to ensure consistency, safety, and excellence
                in every batch. Our commitment to certified processing practices
                reflects our dedication to maintaining high industry standards,
                from bean handling and roasting to final quality control. By
                combining professional procedures with careful monitoring, we
                ensure that every coffee product delivers reliable quality,
                exceptional flavor, and a trusted coffee experience for both
                businesses and individual customers.
              </div>
            </div>
          </div>

          {/* ===== SECTION 3 ===== */}
          {/* <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              {/* h-full buat gambar stretch, kalau mau fix kasih h-165 aja (sama kayak figma) */}
          {/* <div className="md:mt-14 w-full aspect-[3/3] bg-[url('../app/asset/brewing.webp')] bg-cover bg-center rounded-xl" />
            </div>  */}

          {/* RIGHT - KONTEN */}
          {/* <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="mt-0 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
                BREWING
              </div>

              <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
                Brewing
              </div>

              <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
                At Karlina Roastery, we source only the finest beans from
                trusted farmers across Indonesia and select regions worldwide.
                Each bean is hand-selected, ensuring only those that meet our
                rigorous quality standards make it to the roasting stage. Our
                master roasters apply precision temperature profiles tailored to
                each origin, unlocking unique flavor notes while preserving the
                bean's inherent characteristics.
              </div>

              <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
                We use advanced roasting technology that allows us to monitor
                and adjust every variable in real-time—from temperature and
                airflow to roast time and cooling rate. This scientific
                approach, combined with decades of roasting expertise, ensures
                consistency across every batch while celebrating the distinct
                qualities of each coffee origin.
              </div>
            </div> */}
          {/* </div> */}
        </div>

        <div className="px-6 md:px-20 lg:px-40 max-w-7xl mx-auto">
          <div className="mt-16 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
            Our Commitment
          </div>

          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            Building on our commitment to excellence, Karlina is guided by three
            core values. <a className=" font-bold underline ">Quality</a> in
            every carefully selected and roasted bean,{" "}
            <a className=" font-bold underline">Transparency</a> in every
            process and partnership, and{" "}
            <a className=" font-bold underline">Welfare</a> in supporting the
            communities behind our coffee. Together, these principles ensure
            every cup is not only exceptional, but meaningful.
          </div>
        </div>

        <div
          className="mt-10
                    px-6 md:px-20 lg:px-50
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                    gap-6 md:gap-8"
        >
          <div className="group flex relative w-full aspect-square rounded-2xl overflow-hidden">
            {/* CARD 1 */}
            <div
              className="
              absolute inset-0
              bg-[url('../app/asset/qualitycard.webp')]
              bg-cover bg-center bg-no-repeat

              transition-all duration-700 ease-out
              group-hover:scale-105
              group-hover:brightness-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* TEXT */}
            <div
              className="
               absolute bottom-6 left-6 right-6
              text-[#F6F2EA]
              text-xl md:text-2xl
              font-bold
              z-10"
            >
              Quality
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group flex relative w-full aspect-square rounded-2xl overflow-hidden">
            <div
              className="
              absolute inset-0
              bg-[url('../app/asset/transparacy1.webp')]
              bg-cover bg-left bg-no-repeat

              transition-all duration-700 ease-out
              group-hover:scale-105
              group-hover:brightness-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* TEXT */}
            <div
              className="
               absolute bottom-6 left-6 right-6
              text-[#F6F2EA]
              text-xl md:text-2xl
              font-bold
              z-10"
            >
              Transparacy
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group flex relative w-full aspect-square rounded-2xl overflow-hidden">
            <div
              className="
              absolute inset-0
              bg-[url('../app/asset/welfare1.webp')]
              bg-cover bg-center bg-no-repeat

              transition-all duration-700 ease-out
              group-hover:scale-105
              group-hover:brightness-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* TEXT */}
            <div
              className="
               absolute bottom-6 left-6 right-6
              text-[#F6F2EA]
              text-xl md:text-2xl
              font-bold
              z-10"
            >
              Welfare
            </div>
          </div>
        </div>

        {/* Parents Logo Divider */}
        <div className="mt-10 md:mt-20 flex gap-3 md:gap-5 justify-center">
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungamaroon.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungamaroon.webp')] bg-cover bg-center bg-no-repeat" />
          <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
        </div>

        <div className="mt-10 md:mt-20 px-6 md:px-20 max-w-6xl mx-auto">
          <div className="text-sm md:text-lg leading-relaxed md:leading-9 text-black font-bold tracking-wide ">
            You can click on the card that you want to know more further
            information about our three big points:
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
            href="/ourstory"
            className="group
               flex flex-col h-full w-full rounded-2xl bg-[#F6F2EA]
               p-5 md:p-6 transition duration-500
               hover:bg-[#9E0040] hover:shadow-xl"
          >
            {/* Parent Image */}
            <div className="w-full flex-shrink-0 aspect-[4/3] rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('../app/asset/heroimage2.webp')]"></div>

            <div className="mt-7 text-2xl md:text-[28px] text-[#9E0040] font-bold transition-colors group-hover:text-[#F6F2EA] font-averia">
              Our Story
            </div>
            <div className="mt-4 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              We invest in relationships, communities, and the future of
              sustainability
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
