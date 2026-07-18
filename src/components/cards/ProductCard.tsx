"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// 1. Ubah tipe data 'prices' menggunakan Record<string, string> 
// agar kuncinya (key) bisa fleksibel/bebas berupa string apa saja
type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  prices: Record<string, string>; 
  href?: string;
};

export default function ProductCard({
  title,
  description,
  image,
  prices,
  href = "#",
}: ProductCardProps) {
  // 2. Ambil semua opsi ukuran yang tersedia dari objek 'prices' secara dinamis
  // Contoh hasil: ["125gr", "500gr"] atau ["250gr", "1kg"]
  const sizeOptions = Object.keys(prices);

  // MODAL STATE
  const [openCart, setOpenCart] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // 3. Set ukuran default otomatis mengambil variasi ukuran PERTAMA yang tersedia
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] || "");

  // QUANTITY STATE
  const [quantity, setQuantity] = useState(1);

  // Pastikan size reset ke opsi pertama jika prop prices berubah (keamanan ekstra)
  useEffect(() => {
    if (sizeOptions.length > 0) {
      setSelectedSize(sizeOptions[0]);
    }
  }, [prices]);

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenCart(false);
      setIsClosing(false);
      setSelectedSize(sizeOptions[0] || ""); // Reset ke ukuran pertama produk ini
      setQuantity(1);
    }, 400); 
  };

  // ==========================================
  // LOGIKA PERHITUNGAN TOTAL HARGA DINAMIS
  // ==========================================
  
  // Ambil string harga berdasarkan ukuran terpilih saat ini
  const currentPriceStr = prices[selectedSize] || "Rp 0";

  // Konversi string harga menjadi angka murni
  const pricePerUnit = parseInt(currentPriceStr.replace(/[^0-9]/g, ""), 10) || 0;

  // Hitung total harga
  const calculatedTotal = pricePerUnit * quantity;

  // Format kembali ke Rupiah
  const formattedTotal = `Rp ${calculatedTotal.toLocaleString("id-ID")}`;

  return (
    <div
      className="
          flex h-full flex-col
          relative overflow-hidden  rounded-xl md:rounded-xl
          bg-[#F7F3EB]
          border border-[#E7DCCB]
          transition-all duration-500 ease-out
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          group block
        "
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/4.5] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <p className="font-averia text-xl md:text-2xl font-bold text-[#9E0040] transition-colors duration-300">
          {title}
        </p>

        <p className="mt-2 text-sm md:text-base leading-relaxed tracking-wide text-[#6D4C41] line-clamp-2">
          {description}
        </p>

        {/* FOOTER WAPPER */}
        <div className="mt-auto pt-2 md:pt-4">
          {/* Otomatis menampilkan harga variasi ukuran pertama (termurah/terkecil) di katalog utama */}
          <div className="mt-px md:mt-2 text-lg md:text-xl font-semibold text-navbar font-averia">
            {prices[sizeOptions[0]] || "Rp 0"}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() => setOpenCart(true)}
              className="
                  rounded-xl border border-[#9E0040] px-4 py-2 bg-[#9E0040] text-sm md:text-base
                  font-medium text-[#F6F2EA] transition-all duration-300
                  hover:bg-white hover:text-[#9E0040]
                "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openCart && (
        <div
          className={`
            absolute inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm
            transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* MODAL BOX */}
          <div
            className={`
              w-full max-w-md rounded-t-2xl bg-[#F7F3EB] p-6 md:p-8 shadow-2xl
              transition-transform duration-500 ease-in-out
              ${isClosing ? "translate-y-full" : "translate-y-0 animate-in slide-in-from-bottom"}
            `}
          >
            {/* TITLE */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-averia text-2xl font-bold text-[#9E0040]">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-[#6D4C41]">
                  Choose your preferred size and quantity.
                </p>
              </div>

              <button
                onClick={handleCloseCart}
                className="text-xl text-[#9E0040] transition-opacity duration-300 hover:opacity-60 font-bold"
              >
                ✕
              </button>
            </div>

            {/* SIZE - SEKARANG DIBACA DINAMIS MENGGUNAKAN sizeOptions */}
            <div className="mt-6 md:mt-8">
              <p className="mb-3 text-sm font-semibold text-[#6D4C41]">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      rounded-xl border px-4 py-2 text-sm transition-all duration-300
                      ${
                        selectedSize === size
                          ? "border-[#9E0040] bg-[#9E0040] text-white"
                          : "border-[#D7C8B5] text-[#6D4C41] hover:border-[#9E0040]"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-6 md:mt-8">
              <p className="mb-3 text-sm font-semibold text-[#6D4C41]">
                Quantity
              </p>
              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#D7C8B5]">
                <button
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="px-4 py-2 text-lg text-[#9E0040] transition-colors duration-300 hover:bg-[#EFE5D6]"
                >
                  −
                </button>
                <span className="min-w-[50px] text-center text-[#6D4C41]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-lg text-[#9E0040] transition-colors duration-300 hover:bg-[#EFE5D6]"
                >
                  +
                </button>
              </div>
            </div>

            {/* TOTAL HARGA SECTION */}
            <div className="mt-8 border-t border-[#D7C8B5] pt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#6D4C41]">
                  Total Prize
                </p>
                <p className="font-averia text-xl md:text-2xl font-bold text-[#9E0040]">
                  {formattedTotal}
                </p>
              </div>
            </div>

            {/* FINAL BUTTON */}
            <button
              className="
                mt-6 w-full rounded-xl border border-[#9E0040]
                bg-[#9E0040] py-3 text-sm md:text-base font-medium text-white
                transition-all duration-300 hover:bg-white hover:text-[#9E0040]
              "
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}