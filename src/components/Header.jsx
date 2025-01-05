'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll handler to update the isScrolled state
  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
    // console.log('Scrolled:', scrolled);
  };

  useEffect(() => {
    // Select all divs with an id (you can use section as well)
    const sections = document.querySelectorAll('div[id]');
    // console.log('Sections to observe:', sections);

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Entry:', entry); // Log each entry
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // console.log('Active Section:', entry.target.id);
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

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener on component unmount or route change
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]); // Reattach the event listener on route change

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-blue-600 py-4' : 'bg-transparent text-white py-8 xl:py-12'}`}>
      <div className="mx-8 flex justify-between items-center">
        <Link href="/">
          {/* <h1 className={`text-4xl font-semibold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            ICEL TECH<span className={isScrolled ? 'text-blue-600' : 'text-darkText'}>.</span>
          </h1> */}
          <Image
            src='/logo.png'
            alt= "ICEL TECH"
            width={100}
            height={50}
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav isScrolled={isScrolled} activeSection={activeSection} />
        </div>

        <div className="xl:hidden flex items-center gap-6">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;