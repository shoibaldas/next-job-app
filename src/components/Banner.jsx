'use client';
import React from "react";
import { usePathname } from "next/navigation";

const Banner = ({ customTitle }) => {
  const pathname = usePathname();
  const defaultTitle = pathname === "/" ? "Home" : pathname.slice(1).replace("-", " ").replace("/", " ");

  return (
    <div className="relative bg-black text-white text-center">
      <div className="py-40">
        <h1 className="text-4xl font-bold">{customTitle || defaultTitle}</h1>
      </div>
      {/* Curved Blue Line and Parabola */}
      <div className="absolute inset-x-0 bottom-0">
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
          />
          {/* White Parabola */}
          <path
            fill="white"
            d="M0,64 C360,128 1080,0 1440,64 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
