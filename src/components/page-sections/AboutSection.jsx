import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdBusinessCenter, MdNavigateNext } from "react-icons/md";


const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center pl-0 lg:pl-6">
                <div className="flex flex-col items-end space-y-6">
                    <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-4">
                        <Image
                            className="object-cover rounded-lg"
                            src="/cybersecurity.jpg"
                            alt="Cyber Security"
                            layout="fill"
                        />
                    </div>
                    <div className="relative w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-4">
                        <Image
                            className="object-cover rounded-lg"
                            src="/digitalmarketing.jpg"
                            alt="Digital Marketing"
                            layout="fill"
                        />
                    </div>
                </div>

                <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80 xl:w-[500px] xl:h-[500px]">
                    <Image
                        className="object-cover rounded-lg"
                        src="/softwaredev.jpeg"
                        alt="Software Development"
                        layout="fill"
                    />
                </div>

            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col px-10 lg:px-0 mt-10 lg:mt-0 justify-center items-center lg:items-start">
                <div className="flex justify-center lg:justify-start items-center mb-4">
                    <div className="flex justify-center items-center text-4xl p-2 rounded-full bg-blue-600 text-white">
                        <MdBusinessCenter />
                    </div>
                    <div>
                        <h2 className="px-2 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">
                            Who We Are ?
                        </h2>
                    </div>
                </div>
                <p className="text-base text-gray-700 md:text-lg lg:text-xl mb-6">
                    ICEL TECH LLC is committed to providing innovative IT products, services, and human resources with a focus on best security practices. We specialize in cybersecurity, digital marketing, project management, and software development.
                </p>
                <div>
                    <Link href="/about" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 duration-200 text-white bg-blue-600 hover:bg-blue-700 transition"
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