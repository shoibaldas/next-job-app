'use client';
import React from "react";
import { usePathname } from "next/navigation";
import { Heading } from "./ui/Typography";

const Banner = ({ customTitle }) => {
  const pathname = usePathname();
  const defaultTitle = pathname === "/" ? "Home" : pathname.slice(1).replace("-", " ").replace("/", " ");

  return (
    <div className="relative bg-[url('/banner.png')] bg-cover bg-no-repeat bg-center text-white text-start px-24 md:px-32">
      <div className="absolute inset-0 bg-black opacity-10 z-0" />
      <div className="py-28 xl:py-40">
        <Heading
          level={1}
          color="text-white"
          fontFamily="akira"
          className="absolute text-3xl md:text-4xl lg:text-5xl z-[10]"
        >
          {customTitle || defaultTitle}
        </Heading>
      </div>
    </div>
  );
};

export default Banner;
