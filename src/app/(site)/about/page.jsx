'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'

const About = () => {
  usePageTitle("About");

  const teamMembers = [
    {
      name: "Nasir Uddin",
      role: "CEO",
      image: "/nasir.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/nasiru/" },
    },
    {
      name: "Mohammad S Jabr",
      role: "CTO",
      image: "/sahr.jpg",
      socials: { linkedin: "#" },
    },
    {
      name: "Ikhlas Taleb",
      role: "Marketing Head",
      image: "/iklas.jpg",
      socials: { linkedin: "#" },
    },
    {
      name: "Taufiqul Wahab",
      role: "Project Manager",
      image: "/wahab.jpg",
      socials: { linkedin: "#" },
    },
    {
      name: "Shoibal Das",
      role: "Full Stack Developer",
      image: "/shoibal.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/shoibaldas/" },
    },
    {
      name: "Nahid Amin",
      role: "Full Stack Developer",
      image: "/nahid.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/nahid-amin-283950220/" },
    }
  ];

  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <Banner customTitle="About ICEL TECH LLC-FZ"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-lightBackground text-lightText mb-12">
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          {/* Top Section */}
          <div className="text-center md:text-left mb-12">
            <h2 className="text-blue-600 text-sm font-semibold uppercase">About Us</h2>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Simplify Your Business, Empower Your Future
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5">
                <p className="text-gray-600 text-lg">
                  &quot;At ICEL TECH LLC-FZ UAE, we believe in making life simpler with our philosophy of &apos;I Choose Easy Life.&apos; Our innovative IT products, cutting-edge services, and global expertise are designed to streamline your daily operations and empower your business. With a focus on security, trust, and reliability, we help you focus on what matters most—achieving your goals effortlessly.&quot;
                </p>

              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div className="relative h-96 w-full rounded-xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Our Story"
                layout='fill'
                className=''
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Our Story</h3>
                <p className="text-gray-300 text-sm">
                  ICEL TECH LLC-FZ UAE is driven by the philosophy of &apos;I Choose Easy Life.&apos; We strive to make daily life easier by offering innovative IT products, cutting-edge services, and global expertise. We prioritize security in all we do, ensuring trust and reliability.                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 gap-6">
              {/* Our Mission */}
              <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative IT solutions that empower businesses.
                </p>
              </div>

              {/* Our Vision */}
              <div className="bg-blue-700 text-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                <p>
                  To lead in technology and shape a smarter, more connected future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-4/4 px-6 md:px-12 lg:px-24 py-16 bg-white">
          {/* Header Section */}
          <div className="flex justify-center items-center flex-col mb-12">
            {/* <div><h2 className="text-blue-600 text-sm font-semibold uppercase">Founders</h2></div> */}
            <div><h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet The Brains
            </h1></div>
            <div><p className="text-gray-600 text-lg">
              These people work on making our product best.
            </p></div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-[300px] flex flex-col items-center text-center bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 relative overflow-hidden group"
              >
                {/* Image */}
                <div className="w-full h-96 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    layout="fill"
                  />
                </div>
                <div className="p-3">
                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>

                {/* Social Media Links */}
                {/* Social Media Links */}
                <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:right-4 group-hover:opacity-100">
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  )
}

export default About;