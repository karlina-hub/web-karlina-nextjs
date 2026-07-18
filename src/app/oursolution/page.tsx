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
        <div className="relative h-svh md:min-h-screen w-full bg-[url('../app/asset/cardsolution2.webp')] bg-cover bg-center bg-no-repeat">
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-tl from-black/90 to-black/40 flex items-center justify-center">
            {/* text */}
            <div
              className="relative z-20 flex flex-col justify-center 
                        min-h-screen items-center 
                        px-6 md:px-20 lg:px-40"
            >
              {/* <div className="relative z-20 flex justify-center pt-75">
                <Buttonnotes variant="btitle" size="title">
                  THE JOURNEY
                </Buttonnotes>
              </div> */}

              <div className="font-bold text-3xl md:text-5xl text-white font-averia">
                Coffee Solution
              </div>

              <div className="mt-5 md:mt-6 max-w-md md:max-w-5xl tracking-wide text-sm md:text-xl leading-relaxed text-center text-white">
                Karlina Roastery offers complete coffee solutions for businesses
                and coffee enthusiasts. We combine quality and knowledge to
                provide consistent outcomes in every cup, including premium bean
                sourcing, precision roasting, tailored mixes, and brewing
                support.
              </div>

              <div className=" flex gap-4 md:gap-8 mt-6 md:mt-8 flex items-center scroll-smooth">
                <a
                  href="#solution"
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
          id="solution"
          className="px-6 md:px-20 max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-30"
        >
          {/* Title 1 */}
          <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
            GUIDANCE
          </div>
          <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia ">
            Professional Coffee Guidance
          </div>
          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            Experience the excellence of Karlina Roastery's comprehensive coffee
            solutions, where quality meets innovation in every cup. Premium
            quality beans sourced from the finest coffee-growing regions.
          </div>

          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            At Karlina Roastery, we pride ourselves on delivering complete
            coffee solutions that cater to both individual coffee enthusiasts
            and businesses. Our roastery combines traditional craftsmanship with
            modern technology to ensure every batch meets the highest standards.
            From single-origin specialty beans to custom blends, we offer a
            diverse range of products tailored to your specific needs. Our
            state-of-the-art roasting facility maintains strict quality control
            throughout the entire process, ensuring consistency and excellence
            in every bag.
          </div>

          {/* Parent Picture 1 */}
          <div className="w-full">
            <div className="mt-8 aspect-[5/3] bg-[url('../app/asset/Daffa1.png')] bg-cover bg-center bg-no-repeat rounded-xl"></div>
          </div>
          <div className="mt-4 text-sm md:text-lg text-navbar tracking-wide">
            Our experts providing personalized coffee consultation and guidance.
          </div>

          <div>
            {/* Title 2 */}
            <div className="mt-12 md:mt-14 text-sm md:text-lg text-[#558B2F] font-medium">
              PROFESSIONAL CONSULTATION
            </div>
            <div className="mt-3 md:mt-6 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
              Expert Coffee Consultation
            </div>
            <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
              Get expert guidance from our certified Q Grader and experienced
              roasting team for all your coffee-related questions.
            </div>

            <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
              Our team includes certified Q Graders—internationally recognized
              coffee quality experts—who work alongside our master roasters to
              provide unparalleled consultation services. Whether you're curious
              about brewing techniques, want to understand flavor profiles, or
              need guidance on selecting the perfect coffee for your café, we're
              here to help. We specialize in answering questions about Karlina
              Roastery's products, coffee origins, roast profiles, and brewing
              methods. Our consultation service is designed to educate and
              empower you to make informed decisions about your coffee choices.
            </div>
          </div>

          {/* Parent Picture 2 */}
          <div className="w-full mt-8 aspect-[5/3] bg-[url('../app/asset/daffacupping2.webp')] bg-cover bg-center bg-no-repeat rounded-xl"></div>
          <div className="mt-4 text-sm md:text-lg text-navbar tracking-wide">
            Our certified Q Graders evaluating flavor profiles during a
            professional cupping session.
          </div>
        </div>

        {/* <div>
          Title 3
          <div className="pt-14 text-lg text-[#558B2F] font-normal px-43">
            CUSTOM BLEND CREATION
          </div>
          <div className="px-43 pt-6 text-4xl text-black font-bold font-averia">
            Create Your Own Coffee Blend
          </div>
          <div className="pt-6 px-43 text-lg/9 text-black tracking-wide text-justify">
            Mix and match our premium roasted beans to craft a unique blend that
            perfectly matches your taste preferences.
          </div>
          <div className="pt-6 px-43 text-lg/9 text-black tracking-wide text-justify">
            Unleash your creativity and become your own master blender at
            Karlina Roastery. We offer you the freedom to mix our various
            roasted beans to create a personalized coffee blend that's uniquely
            yours. Choose from our selection of single-origin beans, each with
            distinct flavor profiles—from bright and fruity Ethiopian beans to
            rich and chocolatey Brazilian varieties. Our team can guide you
            through the blending process, helping you understand how different
            origins and roast levels complement each other. This service is
            perfect for home enthusiasts looking to experiment or businesses
            wanting to develop their signature house blend.
          </div>
        </div> */}

        {/* Parent Picture 3 */}
        {/* <div className="mt-8 mx-auto w-295 h-55 bg-[url('../app/asset/Daffa1.png')] bg-cover bg-center bg-no-repeat rounded-xl"></div>
        <div className="px-43 pt-4 text-lg font-thin text-primary tracking-wide">
          Keterangan Gambar 3
        </div> */}
        <div className="px-6 md:px-20 max-w-5xl mx-auto">
          <div className="mt-10 md:mt-15 text-2xl md:text-4xl lg-text-5xl text-black font-bold font-averia">
            Organized by Karlina
          </div>

          <div className="mt-6 text-sm md:text-lg leading-relaxed md:leading-9 text-black tracking-wide text-justify">
            Karlina has built strong partnerships with a wide range of brands
            and communities, reflecting our commitment to collaboration and
            growth. Among these, we proudly highlight three of our key partners
            — Escopia, Bumi Upi, and Kedai Berdikari — each representing a
            shared vision in delivering quality and meaningful experiences.
          </div>
        </div>

        <div
          className="mt-8 px-6 md:px-20 lg:px-40 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-6 md:gap-8
                        max-w-7xl mx-auto font-averia"
        >
          {/* Card 1 Process */}
          <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('../app/asset/escopia.webp')] bg-left bg-cover bg-no-repeat">
              <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                <div className="text-xl md:text-2xl text-[#9E0040] font-bold">
                  Escopia
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 Process */}
          <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('../app/asset/bumiupidepan.webp')] bg-center bg-cover bg-no-repeat">
              <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                <div className="text-xl md:text-2xl text-[#9E0040] font-bold">
                  Bumi Upi
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 Process */}
          <div className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('../app/asset/berdikari.webp')] bg-cover bg-no-repeat">
              <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-[#F6F2EA] via-[#F6F2EA]/70 to-transparent">
                <div className="text-xl md:text-2xl text-[#9E0040] font-bold">
                  Kedai Berdikari
                </div>
              </div>
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

        <div className="mt-10 md:mt-20 px-6 md:px-20 max-w-5xl mx-auto">
          <div className="text-sm md:text-lg leading-relaxed md:leading-9 text-black font-semibold tracking-wide ">
            You can click on the card that you want to know more further
            information about our three big points.
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
        </div>
        {/* Belum bikin bagian B2C dan B2B */}
      </main>

      <footer className="mt-14">
        <FooterbarComp />
      </footer>
    </div>
  );
}
