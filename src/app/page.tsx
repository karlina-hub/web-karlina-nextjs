import { NavbarComp } from "../components/ui/navbar";
import thumbnail from "../app/asset/Thumbnail1.png";
import { Button } from "../components/ui/button";
import MountainIcon from "../components/icons/mountain";
import HandIcon from "../components/icons/hand-wave";
import FireIcon from "../components/icons/fire";
import CupIcon from "../components/icons/cup";
import { Buttonnotes } from "../components/ui/buttonnotes";
import TrophyIcon from "../components/icons/trophy";
import Fivestarsicon from "../components/icons/five-star";
import HandshakeIcon from "../components/icons/hand-shake";
import CalendarIcon from "../components/icons/calendar";
import CoinIcon from "../components/icons/coin";
import BulbIcon from "../components/icons/bulb";
import { FooterbarComp } from "../components/ui/footerbar";
import Image from "next/image";
import logo1 from "./asset/logokarlinaputih.png";
import logo2 from "./asset/logokarlinamerah.png";
import { Averia_Sans_Libre } from "next/font/google";
import { Gantari } from "next/font/google";
import { LogoSlider } from "../components/ui/logo-slider";
import { ProductComp } from "../components/ui/product";

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
      <NavbarComp></NavbarComp>
      <header>
        <div className="relative h-svh md:min-h-screen w-full bg-[url('../app/asset/webp1.webp')] bg-cover bg-center bg-no-repeat">
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent">
            {/* content wrapper */}
            <div
              className="relative z-20 flex flex-col justify-center 
                 min-h-screen text-justify 
                 px-6 md:px-20 lg:px-30"
            >
              {/* SUBTITLE */}
              {/* Animasi langsung berjalan (tanpa delay) */}
              <div className="text-lg md:text-2xl font-medium text-white font-averia animate-in fade-in slide-in-from-top-6 duration-1000 fill-mode-both">
                Your Ultimate Coffee Solution,
              </div>

              {/* TITLE */}
              {/* Muncul dengan jeda 200ms setelah subtitle */}
              <div className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white font-averia leading-tight animate-in fade-in slide-in-from-top-6 duration-1000 delay-200 fill-mode-both">
                From Soil to Cup
              </div>

              {/* DESCRIPTION */}
              {/* Muncul dengan jeda 500ms */}
              <div className="mt-5 max-w-md md:max-w-2xl tracking-wide text-sm md:text-xl leading-relaxed text-white text-left animate-in fade-in slide-in-from-top-6 duration-1000 delay-500 fill-mode-both">
                Directly sourced specialty coffee crafted with transparency,
                sustainability, and exceptional flavor in every cup.
              </div>

              {/* SCROLL BUTTON WRAPPER */}
              {/* 
          1. Saya membuang penulisan class 'flex' yang ganda di kode sebelumnya.
          2. Class `absolute` dipindahkan ke div wrapper ini agar posisi tetap presisi.
          3. Muncul paling akhir dengan jeda 700ms.
      */}
              <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-6 duration-1000 delay-700 fill-mode-both">
                <a
                  href="#where-great-coffee"
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

      {/* <body> */}

      {/* Title Text Wrapper*/}
      {/* <div className="relative z-20 px-6 md:px-20 lg:px-40 text-center"> */}
      {/* TITLE TAG */}
      {/* <div className="flex justify-center pt-10 md:pt-14">
          <Buttonnotes variant="btitle" size="title">
            THIS WEEK'S SPOTLIGHT
          </Buttonnotes>
        </div> */}

      {/* <div className="mt-4 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
          Product of the Week
        </div>
        <div className="mt-3 mx-auto max-w-md md:max-w-xl text-sm md:text-xl leading-relaxed text-[#8D6E63]  font-gantari">
          Discover our most beloved coffee this week - handpicked by our
          community and celebrated for its exceptional quality.
        </div>
      </div> */}

      {/* <ProductComp></ProductComp> */}

      {/* <div className="items-center text-center justify-center">
        <div className="mt-14 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
          Our Signature Coffee
        </div>
        <div className="mt-4 mx-auto max-w-sm md:max-w-5xl text-sm md:text-xl leading-relaxed text-[#8D6E63]">
          Discover Karlina’s featured coffee selection, carefully roasted to
          deliver rich flavor, smooth aroma, and a memorable coffee experience
          in every cup.
        </div>
      </div> */}

      {/* <div
        className="
          px-4 md:px-6"
      >
        <div
          className="mt-8 md:mt-12 
        group relative overflow-hidden
        rounded-[2rem]
        h-[520px]
  "
        > */}
      {/* IMAGE */}
      {/* <div
            className="
      absolute inset-0
      bg-[url('../app/asset/ogblendproduct.webp')]
      bg-cover bg-center
      transition-transform duration-700 ease-out
      group-hover:scale-105
    "
          /> */}

      {/* DARK OVERLAY */}
      {/* <div
            className="
      absolute inset-0
      bg-gradient-to-t
      from-black/30
      via-black/5
      to-transparent
    "
          /> */}

      {/* FLOATING CARD */}
      {/* <div
            className="
            absolute
            bottom-5 md:bottom-6 left-5 md:left-6

            w-[90%] max-w-md md:max-w-xl

            rounded-2xl
            border border-white/20

            bg-[#F7F3EB]
      
            p-5 md:p-6  

            shadow-[0_10px_40px_rgba(0,0,0,0.12)]

            transition-all duration-500
            group-hover:-translate-y-2"
          >
            <div className="font-averia text-2xl md:text-3xl font-bold text-[#9E0040]">
              OG Blend
            </div>

            <div
              className="
                mt-2
              text-lg
              font-bold
              text-[#9E0040]
              font-averia
        "
            >
              Arabica 70% · Robusta 30%
            </div>

            <div
              className="
              mt-3
              text-sm md:text-base
              leading-relaxed
              text-[#7B6155]"
            >
              Rich chocolate notes with smooth body and balanced sweetness.
            </div>

            <div className="mt-6 flex items-center justify-between">
              <a
                href="#"
                className="
                text-[#9E0040]
                font-medium

                hover:underline
                underline-offset-4"
              >
                View Product →
              </a>
            </div>
          </div>
        </div> */}

      {/* ISI CARD KEDUA DI SINI */}
      {/* </div> */}

      {/* Parents Logo Divider */}
      <div className="mt-10 md:mt-20 flex gap-6 md:gap-14 items-center justify-center">
        <div className="w-7 h-7 md:h-14 md:w-14.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
        <div className="w-10 h-10 md:h-17 md:w-17.5 bg-[url('../app/asset/bungamaroon.webp')] bg-cover bg-center bg-no-repeat" />
        <div className="w-7 h-7 md:h-14 md:w-14.5 bg-[url('../app/asset/bungakrem.webp')] bg-cover bg-center bg-no-repeat" />
      </div>

      <div
        id="where-great-coffee"
        className="items-center text-center justify-center scroll-mt-24 md:scroll-mt-35"
      >
        <div className="mt-10 md:mt-14 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
          Where Great Coffee Begins
        </div>
        <div className="mt-4 mx-auto max-w-sm md:max-w-4xl text-sm md:text-xl leading-relaxed text-[#8D6E63] font-gantari">
          Every cup of Karlina coffee begins with carefully selected beans from
          trusted farmers, processed with passion and dedication to deliver
          quality you can taste.
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-10 md:mt-12 px-2 md:px-6">
        <div
          className="
      relative
      

      w-full
      h-[75vh] md:h-[85vh]
      

      rounded-2xl md:rounded-3xl

      bg-[url('../app/asset/herowheregreat.webp')]
      bg-cover
      bg-right md:bg-center
      bg-no-repeat

      overflow-hidden
          "
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/35 to-transparent" />

          {/* CONTENT */}
          <div
            className="
            
        relative z-10

        flex h-full flex-col justify-end

        p-6 md:p-12 lg:p-20
      "
          >
            <h1
              className="
          max-w-3xl

          text-3xl md:text-5xl

          font-bold
          text-white
          font-averia
        "
            >
              Everything Start Here
            </h1>

            <p
              className="
          mt-4

          max-w-xl

          text-sm md:text-lg

          leading-relaxed
          tracking-wide

          text-white/90
        "
            >
              From careful harvesting to precision roasting, every step is
              handled with intention to preserve the character of each bean.
            </p>

            <a
              href="/ourstory"
              className="mt-4 w-full md:w-fit flex items-center justify-center gap-3 px-5 py-3 text-sm md:text-lg md:px-6 md:py-4 bg-[#F7F3EB] text-[#9E0040] font-semibold rounded-xl transition-all duration-300 group
                        hover:bg-[#80102b] hover:text-[#F7F3EB] "
            >
              Learn Our Story
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="items-center text-center justify-center">
        <div className="mt-14 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
          How We Craft Our Coffee
        </div>
        <div className="mt-4 mx-auto max-w-sm md:max-w-4xl text-sm md:text-xl leading-relaxed text-[#8D6E63] font-gantari">
          We carefully roast and process every bean using precise techniques and
          modern equipment to bring out the best flavor and aroma in every
          batch.
        </div>
      </div>

      <div
        className=" mt-8 md:mt-14 px-6 md:px-10 lg:px-15 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-6 md:gap-8
                        max-w-7xl mx-auto"
      >
        {/* Card 1 */}
        <a href="/ourprocess">
          <div className="group relative w-full aspect-[4/3] md:aspect-[4/5] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('../app/asset/greenbeans1.webp')] bg-contain bg-cover bg-no-repeat">
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
                  <div className="mt-2 text-sm md:text-base text-[#F6F2EA] tracking-wide">
                    Carefully selected beans sourced from trusted farmers for
                    premium quality and freshness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a href="/ourroastery">
          <div className="group relative w-full aspect-[4/3] md:aspect-[4/5] rounded-xl overflow-hidden">
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
                  <div className="mt-2 text-sm md:text-base text-[#F6F2EA] tracking-wide">
                    Expertly roasted to bring out rich aroma, balanced flavor,
                    and consistency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a href="/oursolution">
          <div className="group relative w-full aspect-[4/3] md:aspect-[4/5] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('../app/asset/escopiacoffee.webp')] bg-position-[center_35%] md:bg-center bg-cover bg-no-repeat">
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
                  <div className="mt-2 text-sm md:text-base text-[#F6F2EA] tracking-wide">
                    Crafted from premium beans to deliver a smooth and
                    satisfying coffee experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Title Text Wrapper*/}
      {/* <div className="relative z-20 px-6 md:px-20 lg:px-40 text-center"> */}
      {/* DIRECT TRADE PARTNERSHIP */}
      {/* <div>
          <div className="flex justify-center mt-14 md:mt-18">
            <Buttonnotes
              variant="btitle"
              size="title"
              className="bg-[#FFEDE3] text-[#452829]"
            >
              DIRECT TRADE PARTNERSHIP
            </Buttonnotes>
          </div>

          <div className="mt-6 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
            Meet People Behind Your Coffee
          </div>
          <div className="mt-4 mx-auto max-w-md md:max-w-5xl text-sm md:text-xl leading-relaxed text-[#8D6E63] font-gantari">
            Every cup of Karlina coffee is a direct connection to passionate
            farmers who dedicate their lives to cultivating extraordinary beans
            through sustainable practices and unwavering commitment to quality.
          </div>
        </div> */}

      {/* Gambar "Meet the People" */}
      {/* <div className="flex justify-center mt-12 ">
          <div className="w-280 h-122 rounded-2xl bg-[url('../app/asset/ujicoba.webp')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div> */}

      {/* Title Text Wrapper*/}
      <div className="relative z-20 px-6 md:px-20 lg:px-36 text-center">
        {/* Building a Better Coffee Industry */}
        <div className="mt-16 font-bold text-2xl md:text-4xl lg:text-5xl text-heading-text font-averia">
          Building a Better Coffee Industry
        </div>

        <div className="mt-4 mx-auto max-w-sm md:max-w-5xl text-sm md:text-xl leading-relaxed text-[#8D6E63] font-gantari">
          Through our direct trade partnerships, we're creating lasting positive
          change for farming families, their communities, and the
          environment—one harvest at a time.
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-20">
        {/* Grid */}
        <div
          className="
          mt-8 md:mt-12
          grid grid-cols-1 md:grid-cols-2
          gap-6 md:gap-8
    "
        >
          {/* CARD 1 */}
          <div
            className="
        rounded-2xl
        bg-white
        border-3 border-[#EFE4D6]
        p-6 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
          >
            {/* Icon */}
            <div
              className="
          flex items-center justify-center
          w-12 h-12 md:w-16 md:h-16
          rounded-xl md:rounded-2xl
          bg-[#9E0040]
          text-white
        "
            >
              <HandshakeIcon className="scale-80 md:scale-100" />
            </div>

            {/* Title */}
            <div className="mt-6 text-xl md:text-2xl font-averia font-semibold text-navbar">
              Direct Relationships
            </div>

            {/* Desc */}
            <p className="mt-3 text-base md:text-lg tracking-wide text-[#7B6155] leading-relaxed">
              We work directly with coffee farmers to ensure transparency, fair
              pricing, and long-term trust.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
        rounded-2xl
        bg-white
        border-3 border-[#EFE4D6]
        p-6 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
          >
            {/* Icon */}
            <div
              className="
          flex items-center justify-center
          w-12 h-12 md:w-16 md:h-16
          rounded-xl md:rounded-2xl
          bg-[#9E0040]
          text-white
        "
            >
              <CalendarIcon className="scale-80 md:scale-100" />
            </div>

            {/* Title */}
            <div className="mt-6 text-xl md:text-2xl font-averia font-semibold text-navbar">
              Long-Term Commitment
            </div>

            {/* Desc */}
            <p className="mt-3 text-base md:text-lg tracking-wide text-[#7B6155] leading-relaxed">
              Stable partnerships help farming communities grow sustainably
              across generations.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
        rounded-2xl
        bg-white
        border-3 border-[#EFE4D6]
        p-6 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
          >
            {/* Icon */}
            <div
              className="
          flex items-center justify-center
          w-12 h-12 md:w-16 md:h-16
          rounded-xl md:rounded-2xl
          bg-[#9E0040]
          text-white
        "
            >
              <CoinIcon className="scale-80 md:scale-100" />
            </div>

            {/* Title */}
            <div className="mt-6 text-xl md:text-2xl font-averia font-semibold text-navbar">
              Premium Pricing
            </div>

            {/* Desc */}
            <p className="mt-3 text-base md:text-lg tracking-wide text-[#7B6155] leading-relaxed">
              We pay above fair trade standards to reward exceptional quality
              and ethical farming.
            </p>
          </div>

          {/* CARD 4 */}
          <div
            className="
        rounded-2xl
        bg-white
        border-3 border-[#EFE4D6]
        p-6 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
          >
            {/* Icon */}
            <div
              className="
          flex items-center justify-center
          w-12 h-12 md:w-16 md:h-16
          rounded-xl md:rounded-2xl
          bg-[#9E0040]
          text-white
        "
            >
              <BulbIcon className="scale-80 md:scale-100" />
            </div>

            {/* Title */}
            <div className="mt-6 text-xl md:text-2xl font-averia font-semibold text-navbar">
              Shared Knowledge
            </div>

            {/* Desc */}
            <p className="mt-3 text-base md:text-lg tracking-wide text-[#7B6155] leading-relaxed">
              Continuous collaboration and education help improve quality and
              sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* TEASER EVENT SECTION */}
      <div className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-white">
        {/* Perhatikan penambahan 'gap-6 lg:gap-8' dan penghapusan warna background pada wrapper utama */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 lg:gap-4">
          {/* BAGIAN KIRI: Kotak Teks & Tombol */}
          <div className="w-full md:w-1/2 bg-[#F7F3EB] rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col justify-center">
            {/* Judul Utama (Diberi warna Maroon agar lebih menonjol seperti di referensi) */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#9E0040] font-averia mb-6 md:mb-8 leading-tight">
              Where Coffee Brings People Together
            </h2>

            {/* Deskripsi */}
            <p className="mb-6 md:mb-8 text-sm md:text-lg lg:text-xl leading-relaxed text-[#7B6155] font-gantari">
              From industry exhibitions to local festivals, we're always excited
              to share our coffee and connect with the community. Explore
              Karlina's journey and discover the moments we've brewed together.
            </p>

            {/* Tombol CTA */}
            <a
              href="/events"
              className="w-full md:w-fit flex items-center justify-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-[#80102b] text-[#F7F3EB] border-2 border-[#80102b] font-semibold rounded-2xl transition-all duration-300 group hover:bg-transparent hover:text-[#80102b]"
            >
              Explore Events
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* BAGIAN KANAN: Kotak Foto */}
          {/* Diberi min-h agar tinggi foto minimal menyesuaikan teks di sebelahnya saat di layar kecil */}
          <div className="w-full md:w-1/2 min-h-[350px] md:min-h-fill relative rounded-xl md:rounded-2xl overflow-hidden group shadow-sm">
            <div className="absolute inset-0 bg-[url('../app/asset/teaserevent.webp')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>

            {/* Efek gradasi tipis agar tidak terlalu flat */}
            <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* Parent Relation */}
      <div className="relative w-full h-105 bg-[url('../app/asset/bgpartnership2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="pt-12 md:pt-16 text-center font-semibold text-3xl text-[#9E0040] font-averia">
          OUR PARTNERSHIP
        </div>
        <div className="mt-4 text-center font-base text-lg md:text-xl text-black font-averia">
          Trusted by
        </div>
        {/* Parent Logo Partnership */}
        <div className="flex gap-25 mt-12 justify-center">
          <LogoSlider></LogoSlider>
        </div>
      </div>

      <footer>
        <FooterbarComp />
      </footer>
    </div>
  );
}
