'use client';
import React from "react";
import { usePathname } from "next/navigation";

const Banner = ({ customTitle }) => {
  const pathname = usePathname();
  const defaultTitle = pathname === "/" ? "Home" : pathname.slice(1).replace("-", " ").replace("/", " ");

  return (
    <div className="relative bg-[url('/service.jpg')] bg-cover bg-no-repeat bg-center text-white text-center">
      <div className="py-28 xl:py-40">
        <h1 className="text-2xl md:text-4xl font-bold">{customTitle || defaultTitle}</h1>
      </div>
      {/* Curved Blue Line and Parabola */}
      <div className="absolute inset-x-0 bottom-[-1px] overflow-hidden">
      <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Blue Curve */}
          <path
            fill="none"
            stroke="#2563eb" /* Tailwind's text-blue-600 in hex */
            strokeWidth="30"
            d="M0,64 C360,128 1080,0 1440,64"
            className="sm:stroke-4 md:stroke-6 lg:stroke-8"
          />
          {/* White Parabola */}
          <path
            fill="white"
            d="M0,64 C360,128 1080,0 1440,64 L1440,100 L0,100 Z"
            stroke="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
