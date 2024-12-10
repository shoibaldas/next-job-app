'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <div className="relative">
        {/* Menu Button */}
        <button
          className="flex justify-center items-center text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <CiMenuBurger className="text-[32px] text-lightText" />
        </button>
  
        {/* Navigation Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-primary text-darkText transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-lightText"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <IoClose className="text-[32px] text-darkText"/>
          </button>
  
          <div className="mt-32 mb-16 text-center font-medium text-2xl">
            ICEL TECH<span className="text-darkText">.</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-white border-b-2 border-white"
                    : ""
                } capitalize font-medium transition-all`}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
  
        {/* Optional: Backdrop when the menu is open */}
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