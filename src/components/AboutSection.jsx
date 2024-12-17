import Link from 'next/link';
import React from 'react';
import { MdBusinessCenter, MdNavigateNext } from "react-icons/md";


const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center">
            {/* Image Section */}
            <div className="flex items-center justify-center mx-0 lg:mx-4 pl-0 lg:pl-6">
                <div className="flex flex-col items-end space-y-6">
                    <img
                        className="object-cover rounded shadow-lg w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
                        src="/cybersecurity.jpg"
                        alt="Cyber Security"
                    />
                    <img
                        className="object-cover rounded shadow-lg w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                        src="/digitalmarketing.jpg"
                        alt="Digital Marketing"
                    />
                </div>
                <div className="px-6">
                    <img
                        className="object-cover rounded-md shadow-lg w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80 xl:w-[500px] xl:h-[500px]"
                        src="/softwaredev.jpeg"
                        alt="Software Development"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col px-10 lg:px-0  mt-10 lg:mt-0 justify-center">
                <div className="flex">
                    <div className="flex justify-center items-center text-4xl w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                        <MdBusinessCenter />
                    </div>
                    <div>
                        <h2 className="max-w-lg mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">
                            Who We Are ?
                        </h2>
                    </div>
                </div>
                <div className="lg:max-w-lg mb-6">
                    <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                        ICEL TECH LLC-FZ UAE is committed to providing innovative IT products, services, and human resources with a focus on best security practices. We specialize in cybersecurity, digital marketing, project management, and software development.
                    </p>
                </div>
                <div>
                    <Link href="/services" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 duration-200 text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                        <span className="mx-2">Discover More About Us</span>
                        <div
                            className="text-2xl"
                        >
                            <MdNavigateNext />
                        </div>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;