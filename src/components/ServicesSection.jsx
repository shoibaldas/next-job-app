import React from 'react';
import { GrServices, GrShieldSecurity, GrCloudSoftware } from "react-icons/gr";
import Link from 'next/link';
import { BsGraphUpArrow } from "react-icons/bs";
import { SiAuthelia } from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

const ServicesSection = () => {
    const servicesData = [
        {
            title: "Cybersecurity",
            description: "Protect your business with our robust cybersecurity solutions.",
            icon: <div className="flex justify-center items-center text-4xl h-12 text-gray-100 mb-2">
                <GrShieldSecurity /> </div>
        },
        {
            title: "Digital Marketing",
            description: "Grow your online presence with expert digital marketing.",
            icon: <div className="flex justify-center items-center text-4xl h-12 text-gray-100 mb-2">
                <BsGraphUpArrow /> </div>
        },
        {
            title: "Software Development",
            description: "Custom software solutions for specific business needs.",
            icon: <div className="flex justify-center items-center text-4xl h-12 text-gray-100 mb-2">
                <GrCloudSoftware /> </div>
        },
        {
            title: "Identity and Access Management",
            description: "Identify your business seamlessly with our access management.",
            icon: <div className="flex justify-center items-center text-4xl h-12 text-gray-100 mb-2">
                <SiAuthelia /> </div>
        },
    ];

    return (
        <div className="flex flex-col justify-center gap-10">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-center lg:px-0 mt-10 lg:mt-0">
                <div className="flex justify-center items-center mb-4">
                    <div className="flex justify-center items-center p-2 text-4xl rounded-full bg-gray-100 text-blue-600">
                        <GrServices />
                    </div>
                    <div>
                        <h2 className="px-2 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-2xl sm:leading-none lg:text-4xl">
                            Our Services
                        </h2>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-base text-center text-gray-200 md:text-lg lg:text-xl">
                        Discover the wide range of services we offer, designed to meet your needs and help you succeed.
                    </p>
                </div>
                <div>
                    <Link href="/services" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 transition duration-200 text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <span className="mx-2">View All Services</span>
                        <div
                            className="text-2xl"
                        >
                            <MdNavigateNext />
                        </div>

                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
                    {servicesData.map((service, index) => (
                        <div key={index} className="relative max-w-sm h-64 rounded-lg overflow-hidden shadow-lg bg-white">
                            {/* Half Circle at the bottom-left corner */}
                            <div className="absolute right-0 bottom-0 w-48 h-48 bg-blue-600 rounded-full transform translate-x-[50%] translate-y-[50%]"></div>
                            <div className="absolute right-4 bottom-1">{service.icon}</div>
                            {/* Card Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-blue-600">{service.title}</h2>
                                <p className="mt-4 text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Image Section */}
            {/* <div className="grid lg:grid-cols-2 gap-10">
                <div>
                    <div className="flex flex-col px-10 lg:px-0  mt-10 lg:mt-0 justify-center">
                        <div className="flex">
                            <div className="flex justify-center items-center text-4xl h-12 text-blue-600 mb-4">
                                <GrShieldSecurity />
                            </div>
                            <div>
                                <h2 className="mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-md sm:leading-none lg:text-xl">
                                    Cybersecurity
                                </h2>
                            </div>
                        </div>
                        <div className="lg:max-w-lg mb-6">
                            <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col px-10 lg:px-0  mt-10 lg:mt-0 justify-center">
                        <div className="flex">
                            <div className="flex justify-center items-center text-4xl h-12 text-blue-600 mb-4">
                                <GrCloudSoftware />
                            </div>
                            <div>
                                <h2 className="mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-md sm:leading-none lg:text-xl">
                                    Software Development
                                </h2>
                            </div>
                        </div>
                        <div className="lg:max-w-lg mb-6">
                            <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col px-10 lg:px-0  mt-10 lg:mt-0 justify-center">
                        <div className="flex">
                            <div className="flex justify-center items-center text-4xl h-12 text-blue-600 mb-4">
                                <BsGraphUpArrow />
                            </div>
                            <div>
                                <h2 className="mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-md sm:leading-none lg:text-xl">
                                    Digital Marketing
                                </h2>
                            </div>
                        </div>
                        <div className="lg:max-w-lg mb-6">
                            <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col px-10 lg:px-0  mt-10 lg:mt-0 justify-center">
                        <div className="flex">
                            <div className="flex justify-center items-center text-4xl h-12 text-blue-600 mb-4">
                                <SiAuthelia />
                            </div>
                            <div>
                                <h2 className="mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-md sm:leading-none lg:text-xl">
                                    Identity and Access Management
                                </h2>
                            </div>
                        </div>
                        <div className="lg:max-w-lg mb-6">
                            <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ServicesSection