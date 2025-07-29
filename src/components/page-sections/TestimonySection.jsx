'use client';
import { useState } from 'react';
import Carousel from '../Carousel';
import Link from 'next/link';
import { MdNavigateNext } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Image from 'next/image';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FiArrowRight } from 'react-icons/fi';
import { Heading, Text } from '../ui/Typography';
import Button from '../ui/button';
import testimonyimg from '../../../public/testimony/reviewimg.png';

const TestimonySection = () => {
    const [current, setCurrent] = useState(0);

    const reviews = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/connect.jpg',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/ishop.jpg',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Pellentesque sit amet sapien.',
            image: '/products/carebot.jpg',
        },
    ];

    const next = () => {
        setCurrent((current) => (current === reviews.length - 1 ? 0 : current + 1));
    };

    const prev = () => {
        setCurrent((current) => (current === 0 ? reviews.length - 1 : current - 1));
    };

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
                                    className="p-0 bg-white rounded-lg shadow-md flex flex-col h-[400px] lg:h-[500px] mx-2 overflow-hidden"
                                >
                                    <div className="p-4 lg:p-6">
                                        <h2 className="text-lg lg:text-xl font-bold">{review.title}</h2>
                                        <p className="text-gray-600 mt-2 flex-grow text-sm lg:text-base">
                                            {review.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

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


