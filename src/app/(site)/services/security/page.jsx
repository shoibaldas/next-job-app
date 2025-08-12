'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Heading, Text } from "@/components/ui/Typography";
import Image from "next/image";
import security from "../../../../../public/service/security.png";

// /app/services/azure-solution/page.js
export default function AzureSolution() {
    const steps = [
        {
            number: "01",
            title: "Assessment &",
            subtitle: "Planning",
        },
        {
            number: "02",
            title: "Solution",
            subtitle: "Deployment",
        },
        {
            number: "03",
            title: "Monitoring &",
            subtitle: "Optimization",
        },
        {
            number: "04",
            title: "Ongoing",
            subtitle: "Support",
        },
    ]

    usePageTitle('Cyber Security');

    return (
        <div className="min-h-screen">
            <div className='relative'>
                <Banner customTitle="Cyber Security"></Banner>
                <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
                    <BreadCrumbs></BreadCrumbs>
                </div>
            </div>
            {/* TOP Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16">
                <div className="px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-10 justify-center">
                        {/* Text content */}
                        <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 w-full">
                            <Heading
                                level={2}
                                color="text-[#2563EB]"
                                fontFamily="akira"
                                className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                            >
                                Protecting yourn <br /> business in a connected world
                            </Heading>

                            <div className="max-w-3xl">
                                <Text size="lg" color="text-gray-600" className="text-base xs:text-base sm:text-base md:text-base lg:text-base">
                                    At ICEL TECH LLC, our cybersecurity solutions are designed to defend your digital infrastructure against evolving threats. We focus on prevention, detection, and response—ensuring your data, systems, and people stay protected around the clock.
                                </Text>
                            </div>
                            <ul className="space-y-2 xs:space-y-3 sm:space-y-4 w-full">
                                {['24/7 Threat Monitoring', 'Risk Assessment & Compliance', 'Incident Response & Recovery'].map((item, i) => (
                                    <li key={i} className="flex items-center w-full">
                                        <svg className="w-5 xs:w-6 sm:w-7 md:w-8 lg:w-8" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 15.875C13.7775 15.875 13.56 15.8091 13.375 15.6854C13.19 15.5618 13.0458 15.3861 12.9606 15.1806C12.8755 14.975 12.8532 14.7488 12.8966 14.5305C12.94 14.3123 13.0472 14.1118 13.2045 13.9545L19.1591 8.00003L13.2045 2.04554C12.9935 1.83456 12.875 1.54841 12.875 1.25003C12.875 0.951653 12.9935 0.665497 13.2045 0.454513C13.4155 0.243529 13.7017 0.125 14 0.125C14.2984 0.125 14.5846 0.243529 14.7956 0.454513L21.5456 7.20451C21.65 7.30898 21.7329 7.433 21.7894 7.5695C21.846 7.70599 21.8751 7.85229 21.8751 8.00003C21.8751 8.14777 21.846 8.29407 21.7894 8.43056C21.7329 8.69108 21.5456 8.79554L14.7956 15.5455C14.6912 15.6502 14.5672 15.7331 14.4307 15.7897C14.2942 15.8462 14.1478 15.8752 14 15.875Z" fill="url(#paint0_linear_258_1255)" />
                                            <path d="M7.62504 15.875C7.40253 15.875 7.18502 15.8091 7 15.6854C6.81499 15.5618 6.67079 15.3861 6.58564 15.1806C6.50049 14.975 6.47821 14.7488 6.52162 14.5305C6.56503 14.3123 6.67218 14.1118 6.82953 13.9545L12.7841 8.00003L6.82953 2.04554C6.61854 1.83456 6.50001 1.54841 6.50001 1.25003C6.50001 0.951653 6.61854 0.665497 6.82953 0.454513C7.04051 0.243529 7.32667 0.125 7.62504 0.125C7.92342 0.125 8.20957 0.243529 8.42056 0.454513L15.1706 7.20451C15.275 7.30898 15.3579 7.433 15.4144 7.5695C15.471 7.70599 15.5001 7.85229 15.5001 8.00003C15.5001 8.14777 15.471 8.29407 15.4144 8.43056C15.3579 8.69108 15.1706 8.79554L8.42056 15.5455C8.3162 15.6502 8.1922 15.7331 8.05568 15.7897C7.91916 15.8462 7.77281 15.8752 7.62504 15.875Z" fill="url(#paint1_linear_258_1255)" />
                                            <path d="M1.25004 15.875C1.02753 15.875 0.810016 15.8091 0.625003 15.6854C0.439991 15.5618 0.29579 15.3861 0.210638 15.1806C0.125486 14.975 0.103208 14.7488 0.146619 14.5305C0.190031 14.3123 0.297183 14.1118 0.454526 13.9545L6.40906 8.00003L0.454526 2.04554C0.243542 1.83456 0.125013 1.54841 0.125013 1.25003C0.125013 0.951653 0.243542 0.665497 0.454526 0.454513C0.66551 0.243529 0.951665 0.125 1.25004 0.125C1.54842 0.125 1.83457 0.243529 2.04556 0.454513L8.79556 7.20451C8.90003 7.30898 8.9829 7.433 9.03944 7.5695C9.09598 7.70599 9.12508 7.85229 9.12508 8.00003C9.12508 8.14777 9.09598 8.29407 9.03944 8.43056C8.9829 8.69108 8.79556 8.79554L2.04556 15.5455C1.9412 15.6502 1.8172 15.7331 1.68068 15.7897C1.54416 15.8462 1.39781 15.8752 1.25004 15.875Z" fill="url(#paint2_linear_258_1255)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_258_1255" x1="17.375" y1="0.125" x2="17.375" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_258_1255" x1="11" y1="0.125" x2="11" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_258_1255" x1="4.62504" y1="0.125" x2="4.62504" y2="15.875" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#6E9EF8" />
                                                    <stop offset="1" stopColor="#13157B" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <Text size="base" color="text-gray-700" className="text-sm xs:text-base sm:text-base md:text-base lg:text-base mx-2">
                                            {item}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Images with gradient backgrounds */}
                        <div className="w-full mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-0">
                            <Image
                                src={security}
                                alt="Future technology"
                                className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[600px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Middle Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                <Heading
                    level={2}
                    color="text-[#2563EB]"
                    fontFamily="akira"
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                >
                    How We Work
                </Heading>
                {/* Process flow */}
                <div className="relative w-full mx-auto">
                    {/* Desktop layout - horizontal */}
                    <div className="hidden lg:block mt-14">
                        {/* Connecting lines */}
                        <div className="absolute top-12 lg:top-16 lg:left-10 lg:right-10 xl:left-12 xl:right-12 flex justify-between items-center px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex-1 h-0.5 bg-blue-400 mx-2 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-8" />
                            ))}
                        </div>

                        {/* Steps container */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    {/* Circle with number */}
                                    <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-32 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 xs:mb-6 sm:mb-8 md:mb-8 lg:mb-8 relative z-10">
                                        <span className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold opacity-50">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step title */}
                                    <div className="space-y-1">
                                        <Heading
                                            level={4}
                                            color="text-text-secondary"
                                            fontFamily="roboto"
                                            className="text-lg text-center"
                                        >
                                            {step.title}
                                        </Heading>
                                        <Heading
                                            level={4}
                                            color="text-text-secondary"
                                            fontFamily="roboto"
                                            className="text-lg text-center"
                                        >
                                            {step.subtitle}
                                        </Heading>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile layout - vertical */}
                    <div className="lg:hidden space-y-6 xs:space-y-8 sm:space-y-10 mt-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 xs:space-y-6 sm:space-y-8">
                                {/* Circle with number */}
                                <div className="w-16 xs:w-18 sm:w-20 h-16 xs:h-18 sm:h-20 rounded-full p-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-lg xs:text-xl sm:text-2xl font-bold opacity-50">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step title and subtitle */}
                                <div className="space-y-1">
                                    <h3 className="text-base xs:text-lg sm:text-lg font-bold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <h3 className="text-base xs:text-lg sm:text-lg font-bold text-gray-900">
                                        {step.subtitle}
                                    </h3>
                                </div>

                                {/* Connecting line for mobile (except last item) */}
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 h-6 xs:h-8 sm:h-10 bg-blue-400 self-center" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Feature Section */}
            <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-10 2xl:px-20">
                
            </section>
        </div>
    );
}
