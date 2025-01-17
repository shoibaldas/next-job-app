'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null); // State to hold the year

  useEffect(() => {
    // This will only run on the client side
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Left Column: Company Name and Links */}
          <div className="mb-6 sm:mb-0">
            {/* <h2 className="text-2xl font-bold text-white mb-4">ICEL TECH LLC-FZ UAE</h2> */}
            <div>
              <Image
                src='/logo.png'
                alt="ICEL TECH"
                width={150}
                height={100}
              />
            </div>
            <div className="flex items-center">
              {/* Privacy Policy Link */}
              <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300">
                Privacy Policy
              </Link>
              <div>
                <span className='text-white mx-2'>|</span>
              </div>
              {/* Terms of Use Link */}
              <Link href="/terms" className="hover:text-blue-400 transition duration-300">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Info and Social Media */}
          <div className="flex flex-col space-y-4">
            {/* Contact Information */}
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                Email:
                <span className="hover:text-blue-400 cursor-pointer"> contactus@iceltech.com</span>
              </p>
              <p>
                Phone:
                <span className="hover:text-blue-400 cursor-pointer"> +1-813-563-2612</span> (Americas and Canada),
                <span className="hover:text-blue-400 cursor-pointer"> +216-23-189-129</span> (Africa)
              </p>
              <p>
                Whatsapp:
                <span className="hover:text-blue-400 cursor-pointer"> +971-58-221-0358</span> (Middle East and Asia Pacific)
              </p>
              <p>
                Head Office: 7901 4th St N STE 300, St. Petersburg, FL 33702, USA
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/iceltech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/people/ICEL-Technology-and-Entertainment/100090846309695/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaYoutube size={20} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 block md:hidden">
          <div className="border-t border-gray-400 mt-4"></div>
        </div>
        {/* Copyright Text */}
        <div className='mt-4 md:mt-20 flex flex-col md:flex-row justify-center gap-2'>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear || new Date().getFullYear()} ICEL TECH LLC </p>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>(I Choose Easy Life Technology Solutions)</p>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
