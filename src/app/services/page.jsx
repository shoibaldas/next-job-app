'use client';

import Banner from "@/components/Banner";
import { GrShieldSecurity, GrCloudSoftware } from 'react-icons/gr';
import { BsGraphUpArrow } from 'react-icons/bs';
import { SiAuthelia } from 'react-icons/si';
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

const Services = () => {

  const servicesData = [
    {
      title: "Cybersecurity",
      description: "Protect your business with our robust cybersecurity solutions.",
      icon: <div className="text-9xl text-blue-700"><GrShieldSecurity /></div>
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence with expert digital marketing.",
      icon: <div className="text-9xl h-16 text-blue-700"><BsGraphUpArrow /></div>
    },
    {
      title: "Software Development",
      description: "Custom software solutions for specific business needs.",
      icon: <div className="text-9xl text-blue-700"><GrCloudSoftware /></div>
    },
    {
      title: "Identity and Access Management",
      description: "Identify your business seamlessly with our access management.",
      icon: <div className="text-9xl text-blue-700"><SiAuthelia /></div>
    }
  ];

  return (
    <div>
      <div className='relative'>
        <Banner customTitle="Our Services"></Banner>
      </div>

      <div
        className="
      min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText">

        <section className="py-16 bg-white">
          <div className="mx-36 px-6 md:px-12">

            {/* Services List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 w-full"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 mb-10 md:mb-0">
                    {service.icon}
                  </div>

                  {/* Title and Description */}
                  <div className="mx-4 flex-grow text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                
              </button>
            </div> */}
            <div className="text-center mt-12">
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
        </section>
      </div>
    </div>
  );
};

export default Services;
