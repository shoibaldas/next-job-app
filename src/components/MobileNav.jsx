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

const MobileNav = () => {
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
        <CiMenuBurger className="text-text-primary text-[32px] hover:text-brand-primary transition-colors duration-200" />
      </button>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white text-text-primary transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <IoClose className="text-text-primary text-[32px] hover:text-brand-primary transition-colors duration-200" />
        </button>

        <div className="mt-32 mb-16 text-center font-family-primary font-weight-bold text-2xl text-text-primary">
          ICEL TECH<span className="text-brand-primary">.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            
            return (
              <Link
                key={index}
                href={link.path}
                scroll={false}
                className={`
                  relative
                  capitalize
                  font-family-primary
                  font-weight-bold
                  text-lg
                  transition-all
                  duration-200
                  cursor-pointer
                  ${isActive 
                    ? 'text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary after:transform after:scale-x-100' 
                    : 'text-text-primary hover:text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200'
                  }
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu();
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Backdrop when the menu is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-100]"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default MobileNav;
