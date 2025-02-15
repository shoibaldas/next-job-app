'use client';

import Banner from "@/components/Banner";
import { GrShieldSecurity, GrCloudSoftware } from 'react-icons/gr';
import { BsGraphUpArrow } from 'react-icons/bs';
import { SiAuthelia } from 'react-icons/si';
import { FiPlus } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { MdNavigateNext } from "react-icons/md";

const Services = () => {

  const servicesData = [
    {
      title: "Cybersecurity",
      description: "We specialize in cybersecurity, safeguarding your business with advanced threat detection, risk management, and robust defense strategies. Trust our expertise to secure your data and operations.",
      icon: <div className="text-4xl text-gray-600 hover:text-blue-700"><GrShieldSecurity /></div>,
      url: "#"
    },
    {
      title: "Digital Marketing",
      description: "We excel in digital marketing, driving growth with data-driven strategies, SEO, social media, and content marketing. Trust our expertise to boost engagement, leads, and conversions.",
      icon: <div className="text-4xl text-gray-600 hover:text-blue-700"><BsGraphUpArrow /></div>,
      url: "#"
    },
    {
      title: "Software Development",
      description: "We offer exceptional expertise in enterprise software, legacy system modernization, and seamless integration, eliminating workflow issues and implementing advanced technology to streamline application portfolios efficiently.",
      icon: <div className="text-4xl text-gray-600 hover:text-blue-700"><GrCloudSoftware /></div>,
      url: "#"
    },
    {
      title: "Identity and Access Management",
      description: "We excel in Identity and Access Management, ensuring secure authentication, seamless user access, and robust compliance. Trust us to protect your systems and streamline operations.",
      icon: <div className="text-4xl text-gray-600 hover:text-blue-700"><SiAuthelia /></div>,
      url: "#"
    },
    {
      title: "Ready to go Solutions ",
      description: "we offer tailored Azure-based solutions for all industries and businesses—whether you're a restaurant owner, a shipping company, a corporate enterprise, a logistics provider, a small business, a local shop, or even an individual housewife selling dresses from home. Our scalable and secure services include app development, process automation, data management, and AI-driven insights to help you grow and streamline your operations. No matter the size of your business, we’ve got you covered with innovative, cost-effective, and user-friendly solutions. Empower your business with the power of Azure—let’s build your success together!",
      icon: <div className="text-4xl text-gray-600 hover:text-blue-700"><VscAzure /></div>,
      url: "/services/solutions"
    }
  ];

  usePageTitle('Services');

  return (
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle="Services"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div
        className="
       flex flex-col items-center justify-center bg-lightBackground text-lightText mb-12">
        <section className="px-6 md:px-12 lg:px-24 py-16">
          {/* Top Section */}
          <div className="text-center md:text-left mb-12">
            <h2 className="text-blue-600 text-sm font-semibold uppercase">our services</h2>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    We Offer a Wide Variety of IT Services
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-5 flex items-start justify-center md:justify-start lg:justify-end lg:items-end">
                <div className="">
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
              </div>
            </div>
          </div>
          {/* Services List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className=" w-full"
              >
                {/* Icon */}
                <div className="flex flex-col md:flex-row">
                  {/* Title and Description */}
                  <div className="flex-grow text-left">
                    <div className="flex items-center">
                      <div>{service.icon}</div>
                      <div className="mx-2">
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                      </div>
                    </div>
                    <div className="ms-12">
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="ms-12 mt-4">
                  <Link
                    href={service?.url}
                    className="inline-flex items-center font-semibold px-6 py-3 transition duration-200 text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <span className="mx-2">Explore</span>
                    <div className="text-2xl">
                      <MdNavigateNext />
                    </div>
                  </Link>
                </div>
              </div>

            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
