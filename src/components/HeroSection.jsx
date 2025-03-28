import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Carousel from './Carousel';

const HeroSection = () => {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            id: 1,
            src: '/office1.jpg',
            alt: 'Slide 1',
            title: "Life Made Simple: Embrace Effortless Living",
            description: "Streamline your daily routines with innovative technology designed for simplicity."
        },
        {
            id: 2,
            src: '/office2.jpg',
            alt: 'Slide 2',
            title: "Effortless Living, Powered by Technology",
            description: "Get cutting-edge solutions that simplify life, so you can focus on what matters most."
        },
        {
            id: 3,
            src: '/office3.jpeg',
            alt: 'Slide 3',
            title: "Redefining Ease: Technology for a Better Tomorrow",
            description: "We make the complex simple, bringing ease and efficiency to every part of your life."
        },
    ];

    // Handle next slide
    const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    };

    // Handle previous slide
    const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    };

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div>
            <Carousel
                current={current}
                next={next}
                prev={prev}
                autoSlide={true}
                autoSlideInterval={10000}
                transitionType="fade"
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="h-screen w-full relative">
                        <div className="image-container">
                            <div className="zoom-effect h-full w-full relative">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={80}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                            </div>
                        </div>
                        {/* Dynamic text overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 fade-in-text">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Fixed buttons */}
            <div className="absolute inset-x-0 flex justify-center bottom-48 space-x-4">
                <div>
                    <Link
                        href="/services"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>
                </div>
                {/* <div>
                    <Link
                        href="#"
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                        Learn More
                    </Link>
                </div> */}
            </div>

            {/* External Navigation Buttons */}
            <div className="absolute bottom-20 inset-x-0 flex justify-center items-center space-x-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundBack size={40} />
                </button>
                {/* Slide number display */}
                <div className="text-white text-md">
                    <span>{String(current + 1).padStart(2, '0')}</span> / <span>{String(slides.length).padStart(2, '0')}</span>
                </div>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundForward size={40} />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
