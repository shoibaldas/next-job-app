'use client';

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
        <footer className="bg-gray-900 text-white py-8">
            <section className="px-6 sm:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
                        <ul>
                            <li><a href="about-us#ourstory" className="text-white">Our Story</a></li>
                            <li><a href="about-us#ourpurpose" className="text-white">Our Purpose</a></li>
                            <li><a href="about-us#ourmission" className="text-white">Our Mission</a></li>
                            <li><a href="about-us#ourvision" className="text-white">Our Vision</a></li>
                            <li><a href="careers" className="text-white">Careers</a></li>
                            <li><a href="about-us#whytechalph" className="text-white">Why Icel Tech?</a></li>
                        </ul>
                    </div>
                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                        <div className="text-white mb-4">
                            <p>+971 56 6466389</p>
                            <p>+971 56 6673589</p>
                        </div>
                        <a href="mailto:sales@techalph.com" className="text-white mb-4">
                            <i className="text-white"></i> icel.tech@gmail.com
                        </a>
                        <a
                            href="contact-us"
                            className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
                        >
                            Message Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Horizontal Line */}
            <div className="bg-gray-800">
                <hr className="my-6 border-gray-700" />
            </div>

            {/* Footer Bottom Section (Copyright and Social Media) */}
            <section className="bg-gray-900 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12">
                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            Techalph © {new Date().getFullYear()} All rights reserved |{' '}
                            <Link href="/privacy-policy" className="text-white hover:text-gray-400">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a
                            href="https://www.linkedin.com/company/techalph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Techalph on LinkedIn"
                            className="text-white hover:text-white"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://www.facebook.com/techalph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Techalph on Facebook"
                            className="text-white hover:text-white"
                        >
                            <FaFacebookF size={30} />
                        </a>
                        <a
                            href="https://www.instagram.com/techalph.it/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Techalph on Instagram"
                            className="text-white hover:text-white"
                        >
                            <FaInstagram size={30} />
                        </a>
                        <a
                            href="https://www.youtube.com/@techalph"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Techalph on YouTube"
                            className="text-white hover:text-white"
                        >
                            <FaYoutube size={30} />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
