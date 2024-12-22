'use client';

import { useState } from 'react';
import Carousel from './Carousel';
import Link from 'next/link';
import { MdNavigateNext } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Image from 'next/image';

const ProductSection = () => {
    const [current, setCurrent] = useState(0);

    const cards = [
        {
            id: 1,
            title: 'iConnect',
            description: 'This is a brief description for Card 1.',
            image: '/connect.jpg',
        },
        {
            id: 2,
            title: 'iShop',
            description: 'This is a brief description for Card 2.',
            image: '/shop.jpg',
        },
        {
            id: 3,
            title: 'iCareBot',
            description: 'This is a brief description for Card 3.',
            image: '/care.jpg',
        },
    ];

    const next = () => {
        setCurrent((current) => (current === cards.length - 1 ? 0 : current + 1));
    };

    const prev = () => {
        setCurrent((current) => (current === 0 ? cards.length - 1 : current - 1));
    };

    return (
        <div className="relative w-full h-auto flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Left Side: Carousel */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative px-4 lg:px-12">
                <Carousel
                    current={current}
                    next={next}
                    prev={prev}
                    autoSlide={true}
                    autoSlideInterval={5000}
                    transitionType="slide"
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="p-0 bg-white rounded-lg shadow-md flex flex-col h-[400px] lg:h-[500px] mx-2 overflow-hidden"
                        >
                            <div className="relative w-full h-1/2">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <div className="p-4 lg:p-6 flex flex-col justify-between text-center flex-grow">
                                <h2 className="text-lg lg:text-xl font-bold">{card.title}</h2>
                                <p className="text-gray-600 mt-2 flex-grow text-sm lg:text-base">
                                    {card.description}
                                </p>
                                <Link href="#" className="inline-flex justify-center items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    View Product
                                    <FaEye className='mx-2 text-lg' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-2 lg:left-4 transform -translate-y-1/2">
                    <button
                        onClick={prev}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                    >
                        &#8592;
                    </button>
                </div>
                <div className="absolute top-1/2 right-2 lg:right-4 transform -translate-y-1/2">
                    <button
                        onClick={next}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 h-auto bg-white flex flex-col justify-center p-6 lg:px-8 lg:py-12 text-center lg:text-left">
                <div className="flex">
                    <div className="flex justify-center items-center text-4xl w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                        <AiFillProduct />
                    </div>
                    <div>
                        <h2 className="max-w-lg mt-2 px-2 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">
                            Our Products
                        </h2>
                    </div>
                </div>
                {/* <p className="text-gray-600 mb-6 text-sm lg:text-base"> */}
                <p className="text-base text-gray-700 md:text-lg lg:text-xl mb-6">
                    Discover our range of innovative and high-quality products
                    designed to make your life easier. Browse our collections to
                    find what suits your needs.
                </p>
                <div>
                    <Link
                        href="/products"
                        className="inline-flex items-center rounded-lg font-semibold px-6 py-3 transition duration-200 text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <span className="mx-2">View All Products</span>
                        <div className="text-2xl">
                            <MdNavigateNext />
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ProductSection;
