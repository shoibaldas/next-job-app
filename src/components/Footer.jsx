'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Text } from "@/components/ui/Typography";
import { FaLinkedin, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "Who we Are", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const contactInfo = [
  {
    icon: <FiMapPin className="inline mr-2 text-xl align-text-top" />,
    text: "7901 4th St N STE 300, St. Petersburg, FL 33702, USA",
  },
  {
    icon: <FiPhone className="inline mr-2 text-xl align-text-top" />,
    text: "+1-813-563-2612 (America and Canada), +216-23-189-129 (Africa)",
  },
  {
    icon: <FiMail className="inline mr-2 text-xl align-text-top" />,
    text: "contactus@iceltech.com",
    isMail: true,
  },
];

const socials = [
  { icon: <FaWhatsapp />, href: "#" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/iceltech" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/people/ICEL-Technology-and-Entertainment/100090846309695/" },
  { icon: <FaTwitter />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#142B63] text-white pt-4 xs:pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-4 xs:pb-6 sm:pb-8 md:pb-8 lg:pb-6 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
  <div className="mx-auto w-full max-w-7xl">
    {/* Top Section */}
    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-start gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-0 border-b border-white/20 pb-4 xs:pb-6 sm:pb-8 md:pb-12">
      {/* Logo & Desc */}
      <div className="lg:w-1/4 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-0 flex flex-col gap-2 xs:gap-3 sm:gap-4">
        {/* Logo */}
        <div className="mb-1 xs:mb-2 sm:mb-3">
          <Image
            src="/logo.png"
            alt="ICEL TECH"
            width={120}
            height={60}
            sizes="(max-width: 480px) 100px, (max-width: 640px) 120px, 80px"
            className="mb-1 xs:mb-2 sm:mb-3"
          />
        </div>
        <Text size="xs" color="text-white" fontFamily="primary" className="opacity-90 sm:text-sm">I CHOOSE EASY LIFE <br /> TECHNOLOGY SOLUTIONS.</Text>
      </div>

      {/* Links */}
      {footerLinks.map((section) => (
        <div key={section.heading} className="lg:w-1/5 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <Heading level={4} color="text-white" fontFamily="primary" className="mb-2 xs:mb-3 sm:mb-4 text-base xs:text-lg sm:text-xl md:text-base lg:text-lg"> {section.heading}</Heading>
          <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="opacity-90 hover:text-brand-secondary transition-opacity">
                  <Text size="xs" color="text-white" fontFamily="primary" className="opacity-90 sm:text-sm"> {link.label}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Contact */}
      <div className="lg:w-1/3 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-0">
        <Heading level={4} color="text-white" fontFamily="primary" className="mb-2 xs:mb-3 sm:mb-4 text-base xs:text-lg sm:text-xl md:text-base lg:text-lg">Contact</Heading>
        <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
          {contactInfo.map((item, idx) => (
            <li key={idx}>
              {item.isMail ? (
                <a href={`mailto:${item.text}`} className="text-white opacity-90 hover:text-brand-secondary transition-opacity text-sm xs:text-base sm:text-lg md:text-sm lg:text-base font-primary font-bold">
                  <Text size="xs" color="text-white" fontFamily="primary" className="opacity-90 sm:text-sm">{item.icon}{item.text}</Text>
                </a>
              ) : (
                <span><Text size="xs" color="text-white" fontFamily="primary" className="opacity-90 sm:text-sm">{item.icon}{item.text}</Text></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center mt-4 xs:mt-6 sm:mt-8 md:mt-12 lg:mt-8 gap-4 xs:gap-6 sm:gap-8">
      {/* Language Selector */}
      <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 font-primary font-bold">
        <FiGlobe className="text-base xs:text-lg sm:text-xl" />
        <span><Text size="xs" color="text-white" fontFamily="primary" className="opacity-90 sm:text-sm">English</Text></span>
        <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>

      {/* Socials */}
      <div className="flex gap-3 xs:gap-4 sm:gap-5 text-lg xs:text-xl sm:text-2xl">
        {socials.map((s, idx) => (
          <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-secondary transition-colors">
            {s.icon}
          </a>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-4 xs:mt-6 sm:mt-8 text-center text-white/70 text-xs sm:text-sm font-primary">
      &copy; 2025 ICEL TECH LLC. ALL RIGHTS RESERVED.
    </div>
  </div>
</footer>
  );
};

export default Footer;
