'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Select all divs with an id (you can use section as well)
    const sections = document.querySelectorAll('div[id]');

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed for when sections are considered "active"
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup on component unmount or route change
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [pathname]); // This hook now triggers on route changes

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md py-4">
      <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-16 flex justify-between items-center">
        <Link href="/">
          <Image
            src='/logo4.png'
            alt="ICEL TECH"
            width={100}
            height={50}
            className="w-auto"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav activeSection={activeSection} />
        </div>

        <div className="xl:hidden flex items-center gap-6">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;