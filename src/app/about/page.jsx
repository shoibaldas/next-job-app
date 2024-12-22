import Banner from '@/components/Banner';
import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const About = () => {

  const teamMembers = [
    {
      name: "Nasir Uddin",
      role: "CEO",
      image: "/avatar.png",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Mohammad S Jabr",
      role: "CTO",
      image: "/avatar.png",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Ikhlas Taleb",
      role: "Marketing Head",
      image: "/avatar.png",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Shoibal Das",
      role: "Devolper",
      image: "/avatar.png",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
  ];

  return (
    <div>
      <div className='relative'>
        <Banner customTitle="About ICEL TECH LLC-FZ UAE"></Banner>
      </div>

      <div className="
    min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText mb-12">

        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          {/* Top Section */}
          <div className="text-center md:text-left mb-12">
            <h2 className="text-blue-600 text-sm font-semibold uppercase">About Us</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Simplify Your Business, Empower Your Future
            </h1>
            <p className="text-gray-600 text-lg">
              "At ICEL TECH LLC-FZ UAE, we believe in making life simpler with our philosophy of 'I Choose Easy Life.' Our innovative IT products, cutting-edge services, and global expertise are designed to streamline your daily operations and empower your business. With a focus on security, trust, and reliability, we help you focus on what matters most—achieving your goals effortlessly."            </p>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/about.jpg" // Replace with your image URL
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Our Story</h3>
                <p className="text-gray-300 text-sm">
                  ICEL TECH LLC-FZ UAE is driven by the philosophy of 'I Choose Easy Life.' We strive to make daily life easier by offering innovative IT products, cutting-edge services, and global expertise. We prioritize security in all we do, ensuring trust and reliability.                </p>
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
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          {/* Header Section */}
          <div className="flex justify-center items-center flex-col mb-12">
            <div><h2 className="text-blue-600 text-sm font-semibold uppercase">Founders</h2></div>
            <div><h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet The Brains
            </h1></div>
              <div><p className="text-gray-600 text-lg">
                These people work on making our product best.
              </p></div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                {/* Image */}
                <div className="w-72 h-48 mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name and Role */}
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a
                    href={member.socials.twitter}
                    className="text-gray-400 hover:text-gray-800"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="text-gray-400 hover:text-gray-800"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="text-gray-400 hover:text-gray-800"
                  >
                    <FaLinkedin size={20} />
                  </a>
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