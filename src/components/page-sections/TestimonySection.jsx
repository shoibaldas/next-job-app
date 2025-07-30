'use client';
import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import { FaStar, FaRegStar } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import { Heading, Text } from '../ui/Typography';
import Button from '../ui/button';
import testimonyimg from '../../../public/testimony/reviewimg.png';

const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
        index < rating ? (
            <FaStar key={index} className="w-4 h-4 text-yellow-400" />
        ) : (
            <FaRegStar key={index} className="w-4 h-4 text-gray-200" />
        ),
    )
}

const TestimonySection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % reviews.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            next()
        }, 5000)

        return () => clearInterval(timer)
    }, [])
    const reviews = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/connect.jpg',
            rating: 4,
            author: "John Milton",
            position: "CEO GetNextDesign"
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/ishop.jpg',
            rating: 5,
            author: "John Milton",
            position: "CEO GetNextDesign"
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/carebot.jpg',
            rating: 4.5,
            author: "John Milton",
            position: "CEO GetNextDesign"
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-8">
            <div className="lg:w-7/12 w-full">
                <Heading
                    level={1}
                    color="text-[#2563EB]"
                    fontFamily="akira"
                    className="text-3xl md:text-4xl lg:text-5xl flex justify-start"
                >
                    Clients<br /> Testimonial
                </Heading>
                <div className="relative w-full h-auto">
                    {/* Left Side: Carousel */}
                    <div className="w-full md:w-10/12 h-[400px] lg:h-[500px]">
                        <Carousel
                            current={current}
                            next={next}
                            prev={prev}
                            autoSlide={true}
                            autoSlideInterval={5000}
                            transitionType="slide"
                            showDots={false}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="p-0 bg-white rounded-lg shadow-xl flex flex-col h-[400px] lg:h-[500px] mx-2 overflow-hidden relative"
                                >
                                    <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                                        <FaQuoteRight className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 opacity-60" />
                                    </div>

                                    <div className="p-4 lg:p-6 flex flex-col h-full">
                                        <div className='mt-16'>
                                            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 pr-12 lg:pr-16 leading-tight">
                                                {review.title}
                                            </h2>

                                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-grow mb-6 lg:mb-8">
                                                {review.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-base lg:text-lg">{review.author}</h3>
                                                <p className="text-gray-500 text-sm lg:text-base -mt-4">{review.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <div className="absolute bottom-12 right-4 lg:bottom-10 lg:right-44 flex items-center gap-2 z-10">
                            <Button
                                onClick={next}
                                icon={<FiArrowLeft />}
                                iconOnly
                                size="sm"
                                customColor={{
                                    background: 'bg-blue-600',
                                    text: 'text-gray-100',
                                    border: 'border-yellow-600',
                                    hover: 'hover:bg-yellow-500',
                                    focus: 'focus:ring-yellow-400'
                                }}
                            />


                            <Button
                                onClick={next}
                                icon={<FiArrowRight />}
                                iconOnly
                                size="sm"
                                customColor={{
                                    background: 'bg-blue-300',
                                    text: 'text-gray-800',
                                    border: 'border-yellow-600',
                                    hover: 'hover:bg-yellow-500',
                                    focus: 'focus:ring-yellow-400'
                                }}
                            />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 lg:hidden">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === current ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-5/12 w-full mt-16">
                <Image
                    src={testimonyimg}
                    alt="Future technology"
                    className=""
                />
            </div>
        </div>
    );
};

export default TestimonySection;


