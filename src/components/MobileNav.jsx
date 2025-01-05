'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const links = [
  { name: "home", path: "/" },
  { name: "who we are", path: "/about" },
  { name: "services", path: "/services" },
  { name: "products", path: "/products" },
  { name: "consultants", path: "/consultants" },
  { name: "contact", path: "/contact" }
];

const MobileNav = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-10">
      {/* Menu Button */}
      <button
        className="flex justify-center items-center text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <CiMenuBurger className={`text-[32px] ${isScrolled ? "text-blue-700 " : "text-white"} `} />
      </button>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-blue-900 text-darkText transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <IoClose className="text-[32px] text-darkText" />
        </button>

        <div className="mt-32 mb-16 text-center font-medium text-2xl">
          ICEL TECH<span className="text-darkText">.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              scroll={false}
              className={`${link.path === pathname
                ? "text-white border-b-2 border-white"
                : ""
                } capitalize font-medium transition-all`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.location.href = link.path;
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop when the menu is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-10"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default MobileNav;
