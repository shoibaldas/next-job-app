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
    <footer className="bg-[#142B63] text-white pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <div className="mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0 border-b border-white/20 pb-12">
          {/* Logo & Desc */}
          <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col gap-4">
            {/* Logo */}
            <div className="mb-2">
              <Image src="/logo.png" alt="ICEL TECH" width={120} height={60} className="mb-2" />
            </div>
            <Text size="sm" color="text-white" fontFamily="primary" className="opacity-90">I CHOOSE EASY LIFE <br/> TECHNOLOGY SOLUTIONS.</Text>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading} className="md:w-1/5 mb-8 md:mb-0">
              <Heading level={4} color="text-white" fontFamily="primary" className="mb-4">{section.heading}</Heading>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white opacity-90 hover:text-brand-secondary transition-opacity text-base font-primary font-bold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:w-1/3">
            <Heading level={4} color="text-white" fontFamily="primary" className="mb-4">Contact</Heading>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  {item.isMail ? (
                    <a href={`mailto:${item.text}`} className="text-white opacity-90 hover:text-brand-secondary transition-opacity text-base font-primary font-bold">
                      {item.icon}{item.text}
                    </a>
                  ) : (
                    <span className="text-white opacity-90 text-base font-primary font-bold">{item.icon}{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-8 gap-8">
          {/* Language Selector */}
          <div className="flex items-center gap-2 font-primary font-bold ">
            <FiGlobe className="text-xl" />
            <span className="text-white">ENGLISH</span>
            <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-2xl">
            {socials.map((s, idx) => (
              <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-secondary transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-white/70 text-sm font-primary font-bold ">
          &copy; 2025 ICEL TECH LLC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
