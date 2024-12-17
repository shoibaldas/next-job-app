'use client';

import { useEffect } from 'react';

const Carousel = ({
    children: slides,
    current,
    next,
    prev,
    autoSlide = false,
    autoSlideInterval = 3000,
    transitionType = "fade" // "fade" or "slide"
}) => {
    useEffect(() => {
        if (!autoSlide || slides.length === 0) return;

        const slideInterval = setInterval(() => {
            next();
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length]);

    return (
        <div className="overflow-hidden relative h-screen w-full">
            <div
                className={`flex transition-transform duration-1000 ease-in-out ${
                    transitionType === 'slide'
                        ? `-translate-x-[${current * 100}%]`
                        : ''
                }`}
                style={{ transform: transitionType === 'slide' ? `translateX(-${current * 100}%)` : '' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full flex-shrink-0 ${
                            transitionType === 'fade'
                                ? `absolute inset-0 transition-opacity duration-1000 ${
                                      index === current ? 'opacity-100' : 'opacity-0'
                                  }`
                                : ''
                        }`}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-white rounded-full ${
                                current === i ? 'p-2' : 'bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
