'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FaCode } from "react-icons/fa6";
import { LuDatabaseZap, LuZap, LuServer } from "react-icons/lu";
import { FiLayout, FiPlus } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

// /app/services/azure-solution/page.js
export default function AzureSolution() {

  const soulitionServiceData = [
    {
      title: "PowerApps Development",
      description: "Build intuitive Canvas and Model-Driven apps to digitize and optimize business processes for any industry, from corporate enterprises to small shops or individual sellers.",
      icon: <FaCode className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "Power Automate Integration",
      description: "Automate repetitive tasks and workflows, ensuring seamless communication across platforms. Perfect for logistics providers, restaurants, and other time-critical operations.",
      icon: <LuZap className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "SharePoint Customization",
      description: "Create custom web parts, APIs, and secure permission levels to match your organizations needs, whether it is a large shipping company or a local business.",
      icon: <FiLayout className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "AI-Driven Automation",
      description: "Leverage Microsoft AI Builder to automate data extraction and streamline operations, offering solutions that scale for both large organizations and home-based businesses.",
      icon: <LuServer className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "System Migrations",
      description: "Efficiently migrate SharePoint sites and data using industry best practices and tools like ShareGate to ensure continuity and growth for businesses of any size.",
      icon: <LuDatabaseZap className="w-12 h-12 text-blue-600 mb-4" />
    }
  ];

  const industryData = [
    {
      title: "Restaurants",
      description: "Streamline booking, order management, and inventory processes.",
      image: "/resturant.jpg"
    },
    {
      title: "Shipping",
      description: "Automate invoicing and payment tracking for operational efficiency.",
      image: "/shipping.jpg"
    },
    {
      title: "Corporate Enterprises",
      description: "Develop comprehensive employee management and productivity tools.",
      image: "/corporate.jpg"
    },
    {
      title: "Logistics",
      description: "Enable real-time tracking and workflow automation.",
      image: "/logistics.jpg"
    },
    {
      title: "Small Businesses and Shops",
      description: "Build simple, cost-effective apps for managing inventory, sales, and customer engagement.",
      image: "/small.jpg"
    },
    {
      title: "Individual Entrepreneurs",
      description: "Provide scalable tools to help home-based sellers manage their products and customers effortlessly.",
      image: "/entrepreneur.jpg"
    },
  ]

  usePageTitle('Ready to go Solutions');

  return (
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle="Ready to go Solutions"></Banner>
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="">
        {/* Hero Section */}
        <div className="relative text-white">
          {/* Hero Content */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl text-gray-800 font-bold mb-6">
                Innovative PowerApps and SharePoint Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                At ICEL TECH, we specialize in delivering customized PowerApps and SharePoint solutions to streamline workflows, enhance productivity, and revolutionize your business processes. Our team leverages the latest Microsoft technologies to provide tailored solutions for diverse industries and business sizes.
              </p>
              <Link href="/contact" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 duration-200 text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                <span className="mx-2">Request a Service</span>
                <div
                  className="text-2xl"
                >
                  <FiPlus />
                </div>

              </Link>
            </div>
            <div className="absolute bottom-5 right-10 w-1/3 hidden lg:block">
              <img src="/power.png" alt="Dashboard Preview" className="object-cover" />
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="py-16 mt-0 md:mt-10 bg-gradient-to-r from-purple-800/70 via-purple-800/100 to-blue-800/70 to-blue-800">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PowerApps Development */}
              {soulitionServiceData.map((sol, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div>{sol.icon}</div>
                  <h3 className="text-xl text-gray-800 font-semibold mb-3">{sol.title}</h3>
                  <p className="text-gray-600">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryData.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <div className="h-48 bg-gray-100 rounded-lg mb-4">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <p className="text-gray-600"> {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        7<div className="bg-gradient-to-r from-purple-800/70 via-purple-800/100 to-blue-800/70 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our PowerApps and SharePoint solutions can help streamline your operations.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 duration-200 text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              <span className="mx-2">Reach To Us</span>
              <MdNavigateNext className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
