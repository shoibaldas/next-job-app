'use client';
import React from "react";
import { usePathname } from "next/navigation";
import { Heading } from "./ui/Typography";

const Banner = ({ customTitle }) => {
  const pathname = usePathname();
  const defaultTitle = pathname === "/" ? "Home" : pathname.slice(1).replace("-", " ").replace("/", " ");

  return (
    <div className="relative bg-[url('/banner.png')] bg-cover bg-no-repeat bg-center text-white text-start px-6 md:px-6 lg:px-10 xl:px-10 2xl:px-20">
      <div className="absolute inset-0 bg-black opacity-10 z-0" />
      <div className="py-28 xl:py-40">
        <Heading
          level={1}
          color="text-white"
          fontFamily="akira"
          className="absolute text-lg md:text-3xl lg:text-4xl z-[10]"
        >
          {customTitle || defaultTitle}
        </Heading>
      </div>
    </div>
  );
};

export default Banner;
