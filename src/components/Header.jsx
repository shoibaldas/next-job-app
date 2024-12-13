'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md text-blue-800 py-4'
          : 'bg-transparent text-white py-8 xl:py-12'
      }`}
    >
      <div className="mx-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1
            className={`text-4xl font-semibold ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}
          >
            ICEL TECH<span className={isScrolled ? 'text-blue-800' : 'text-darkText'}>.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav isScrolled={isScrolled} />
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden flex items-center gap-6">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
