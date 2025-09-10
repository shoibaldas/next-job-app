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

const ProductSection = () => {
    // const [current, setCurrent] = useState(0);

    const cards = [
        {
            id: 1,
            title: 'iMed',
            description: 'AI-powered healthcare platform for smarter patient care and hospital management. iMed improves diagnostics, secures records, and enhances treatment outcomes.',
            image: '/products/connect.jpg',
        },
        {
            id: 2,
            title: 'iStore',
            description: 'A next-gen digital retail platform unifying AI, analytics, and e-commerce. iStore helps businesses boost sales, optimize inventory, and personalize shopping.',
            image: '/products/ishop.jpg',
        },
        {
            id: 3,
            title: 'iDelivery',
            description: 'Smart logistics and delivery system with real-time tracking, optimized routes, and automation. iDelivery ensures faster, more reliable, and cost-efficient delivery.',
            image: '/products/carebot.jpg',
        },
    ];

    /*const next = () => {
        setCurrent((current) => (current === cards.length - 1 ? 0 : current + 1));
    };

    const prev = () => {
        setCurrent((current) => (current === 0 ? cards.length - 1 : current - 1));
    };*/

    return (
        <div className='px-0 lg:px-8 pt-8'>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-7/12 w-full">
                    <Heading
                        level={1}
                        color="text-[#2563EB]"
                        fontFamily="akira"
                        className="text-xl lg:text-4xl 2xl:text-5xl flex justify-start"
                    >
                        Our Products
                    </Heading>
                </div>
                <div className="lg:w-5/12 w-full">
                    <Text
                        size="lg"
                        color="text-gray-500"
                        className="max-w-4xl mx-auto"
                    >
                        Discover our range of innovative and high-quality products designed to make your life easier. Browse our collections to find what suits your needs.<br />
                    </Text>
                    <div className='mt-12'>
                        <Link href="/products">
                            <Button
                                variant="primary"
                                size="md"
                                icon={<FiArrowRight />}
                                iconPosition="right"
                            // asChild
                            >
                                Explore All Products

                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full 2xl:max-w-6xl mt-16 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
                    {cards.map((product, index) => {
                        return (
                            <div key={index} className="max-w-lg overflow-hidden shadow-lg bg-white">
                                <img className="w-full h-64 object-cover p-2" src={product.image} alt={product.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{product.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {product.description}
                                    </p>
                                    <div className="my-6">
                                        <Link href="#">
                                            <Button
                                                variant="primary"
                                                size="md"
                                                icon={<FiArrowRight />}
                                                iconPosition="right"
                                            // asChild
                                            >
                                                View Details

                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>

    );
};

export default ProductSection;


