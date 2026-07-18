"use client";

import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price: string;
  href?: string;
};

export default function ProductCard({
  title,
  description,
  image,
  price,
  href = "#",
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className="
          overflow-hidden rounded-2xl
          bg-[#F7F3EB]
          border border-[#E7DCCB]
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/4.5] overflow-hidden">
          <div
            className="
              absolute inset-0 bg-cover bg-center
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            style={{
              backgroundImage: `url(${image})`,
            }}
          />

          {/* overlay hover */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/40 via-black/10 to-transparent
              opacity-0 transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6">
          {/* TITLE */}
          <h3
            className="
              font-averia
              text-xl md:text-2xl
              font-bold
              text-[#9E0040]
              transition-colors duration-300
            "
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              text-sm md:text-base
              leading-relaxed
              tracking-wide
              text-[#6D4C41]
              line-clamp-3
            "
          >
            {description}
          </p>

          {/* FOOTER */}
          <div className="mt-5 flex items-center justify-between">
            {/* PRICE */}
            <div
              className="
                text-lg md:text-xl
                font-semibold
                text-navbar
              "
            >
              {price}
            </div>

            {/* BUTTON */}
            <div
              className="
                rounded-full
                border border-[#9E0040]
                px-4 py-2
                text-sm font-medium
                text-[#9E0040]
                transition-all duration-300
                group-hover:bg-[#9E0040]
                group-hover:text-white
              "
            >
              View Product
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}