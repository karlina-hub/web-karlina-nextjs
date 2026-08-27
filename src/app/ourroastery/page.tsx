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
        <div className="relative h-svh md:min-h-screen w-full bg-[url('../app/asset/cardroastery.webp')] bg-cover bg-center bg-no-repeat">
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-tl from-black/90 to-black/40 flex items-center justify-center">
            {/* text */}
            <div
              className="relative z-20 flex flex-col justify-center 
                        min-h-screen items-center 
                        px-6 md:px-20 lg:px-40"
            >
              {/* <div className="relative z-20 flex justify-center">
                <Buttonnotes variant="btitle" size="title">
                  ROASTERY
                </Buttonnotes>
              </div> */}

              <div className="font-bold text-3xl md:text-5xl text-white font-averia animate-in fade-in slide-in-from-top-6 duration-1000 delay-300 fill-mode-both">
                Karlina Roastery
              </div>

              <div className="mt-5 md:mt-6 max-w-md md:max-w-5xl tracking-wide text-sm md:text-xl leading-relaxed text-center text-white animate-in fade-in slide-in-from-top-6 duration-1000 delay-500 fill-mode-both">
                Every roast is carefully crafted to bring out the unique
                character of each bean, delivering exceptional flavor and
                consistent quality in every batch.
              </div>

              <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-6 duration-1000 delay-700 fill-mode-both">
                <a
                  href="#roastery"
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
          id="roastery"
          className="px-6 md:px-20 max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-30"
        >
          <div>
            {/* Title 1 */}
            <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
              ABOUT ROASTERY
            </div>
            <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia ">
              Crafting Connection Through Coffee
            </div>
            <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
              Karlina Coffee Roastery is the heart of our operation, where raw
              green beans are transformed into the aromatic, flavorful coffee
              you know and love. Located in the heart of Indonesia's coffee
              region, our roastery is equipped with the latest roasting
              technology while honoring traditional methods passed down through
              generations.
            </div>

            <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
              Our facility operates with a commitment to sustainability,
              utilizing energy-efficient equipment and implementing waste
              reduction practices at every stage. We maintain strict quality
              control protocols, ensuring every batch meets our exacting
              standards before it reaches your cup.
            </div>
          </div>

          {/* Parent Picture 1 */}
          <div className="w-full">
            <div className="mt-8 aspect-[5/3] bg-[url('../app/asset/roasterypic1.webp')] bg-cover bg-center bg-no-repeat rounded-xl"></div>
          </div>

          <div className="mt-4 text-sm md:text-lg text-navbar tracking-wide">
            Advanced control, handcrafted quality in every batch.
          </div>

          <div>
            {/* Title 2 */}
            <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
              PREMIUM BEANS
            </div>
            <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia ">
              Excellent Quality
            </div>
            <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
              At Karlina, excellent quality is the foundation of everything we
              create. From carefully selecting premium beans to applying precise
              and consistent roasting techniques, every step is designed to
              bring out the best in each origin. We maintain strict quality
              control to ensure every batch meets our highest standards before
              reaching our customers.
            </div>
          </div>

          {/* Parent Picture 2 */}
          {/* Positions background 25% from left and 75% from top */}
          <div className="mt-8 w-full aspect-[5/3] bg-[url('../app/asset/roasterypic2.webp')] bg-[25%_75%] bg-cover bg-no-repeat rounded-xl"></div>
          <div className="mt-4 text-sm md:text-lg text-navbar tracking-wide">
            A box full of passion, crafted for your perfect cup.
          </div>

          <div className="mt-10 md:mt-20 max-w-5xl mx-auto">
            <div className="text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide ">
              Whether we are supporting our business partners{" "}
              <a className=" font-bold">(B2B)</a> or serving individual coffee
              lovers <a className=" font-bold">(B2C)</a>, our commitment remains
              the same — delivering a reliable, refined, and exceptional coffee
              experience in every cup.
            </div>
          </div>

          {/* PERLU DI CEK BUAT RESPONSIVE */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 Process */}
            <div className="relative w-full aspect-[16/7] md:aspect-[143/60] rounded-2xl">
              <a href="https://www.instagram.com/karlinaroastery/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                <div className="absolute inset-0 bg-[url('../app/asset/b2b.webp')] bg-cover bg-top bg-no-repeat rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl">
                    {/* TEXT */}
                    <div className="absolute bottom-4 left-6 right-4 text-[#F6F2EA]">
                      <div className="text-xl md:text-2xl font-bold">B2B</div>
                      <div className="text-sm md:text-lg">
                        Business to Business
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* INI BELUM RESPONSIVE, BUAT KAYAK ATASNYA */}
            {/* Card 2 B2C */}
            <div className="relative w-full aspect-[16/7] md:aspect-[143/60] rounded-2xl">
              <a href="#">
                <div className="absolute inset-0 bg-[url('../app/asset/b2c.webp')] bg-cover bg-top bg-no-repeat rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl">
                    {/* TEXT */}
                    <div className="absolute bottom-4 left-6 right-4 text-[#F6F2EA]">
                      <div className="text-xl md:text-2xl font-bold">B2C</div>

                      <div className="text-sm md:text-lg">
                        Business to Customer
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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

        <div className="px-6 md:px-20 max-w-5xl mx-auto">
          {/* Title 3 */}
          <div className="mt-10 md:mt-20 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
            Why Choose Us
          </div>
          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            At Karlina Roastery, we stand apart from the competition through our
            unwavering commitment to quality, innovation, and sustainability.
            Here's what makes us the preferred choice for coffee lovers and
            businesses alike.
          </div>
        </div>

        {/* COBA CARD */}
        <div className="mt-8 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}
            <div className="bg-white rounded-2xl p-8 border-5 border-gray-100 transition-all duration-400 ease-out hover:border-gray-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 pl-1 rounded-xl flex items-center justify-start mb-6">
                <FactoryIcon className="text-navbar scale-100 md:scale-120" />
              </div>
              <h3 className="text-2xl font-averia font-black text-black mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600 tracking-wide leading-relaxed md:leading-7">
                Modern roasting equipment with precise temperature control,
                automated monitoring, and consistent roasting profiles.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="bg-white rounded-2xl p-8 border-5 border-gray-100 transition-all duration-400 ease-out hover:border-gray-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 pl-1 rounded-xl bg-white flex items-center justify-start mb-6">
                <RewardIcon className="text-navbar scale-100 md:scale-110" />
              </div>
              <h3 className="text-2xl font-averia font-black text-black mb-3">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600 tracking-wide leading-relaxed md:leading-7">
                Our master roasters combine years of experience with traditional
                techniques to craft exceptional coffee.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="bg-white rounded-2xl p-8 border-5 border-gray-100 transition-all duration-400 ease-out hover:border-gray-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 pl-1 rounded-xl bg-white flex items-center justify-start mb-6">
                <TrendingIcon className="text-navbar scale-100 md:scale-110" />
              </div>
              <h3 className="text-2xl font-averia font-black text-black mb-3">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 tracking-wide leading-relaxed md:leading-7">
                From small specialty batches to large commercial orders, we
                scale production without compromising quality.
              </p>
            </div>
          </div>
        </div>

        {/* Parents Card */}

        {/* Belum bikin bagian B2C dan B2B */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto">
          <div className="mt-10 md:mt-20 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
            Our Capabilities
          </div>

          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            At Karlina, our capabilities are built on a strong foundation of
            expertise, innovation, and precision. From advanced roasting
            techniques to careful coffee processing, every step is designed to
            ensure consistent quality and exceptional flavor. We provide
            end-to-end coffee solutions tailored for both businesses and coffee
            enthusiasts, delivering reliability, scalability, and excellence in
            every detail.
          </div>
          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            You can click on the card that you want to know more further
            information about our values.
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
              sustainability.
            </div>
            <div className="mt-auto pt-8 text-md md:text-xl text-[#9E0040] transition-colors group-hover:text-[#F6F2EA]">
              click here
            </div>
          </a>

          {/* Card 2 Sizing */}
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
