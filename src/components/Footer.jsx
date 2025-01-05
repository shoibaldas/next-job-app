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
                          alt= "ICEL TECH"
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
              <Link href="/terms-of-use" className="hover:text-blue-400 transition duration-300">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Info and Social Media */}
          <div className="flex flex-col space-y-4">
            {/* Contact Information */}
            <div>
              <p className="text-sm text-gray-400">Email: <a href="mailto:info@iceltech.com" className="hover:text-blue-400">info@iceltech.com</a></p>
              <p className="text-sm text-gray-400">Phone: <a href="tel:+97123456789" className="hover:text-blue-400">+971 000 000 00</a></p>
              <p className="text-sm text-gray-400">Address: Dubai, UAE</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; {currentYear || new Date().getFullYear()} ICEL TECH LLC-FZ UAE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
