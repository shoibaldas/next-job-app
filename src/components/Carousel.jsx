'use client';

import { useCallback, useEffect } from 'react';

const Carousel = ({
    children: slides,
    current,
    next,
    prev,
    autoSlide = false,
    autoSlideInterval = 3000,
    transitionType = "fade", // "fade" or "slide"
    showDots = true
}) => {

    const memoizedNext = useCallback(() => {
        next();
    }, [next]); // Only recreate `next` when `next` changes

    useEffect(() => {
        if (!autoSlide || slides.length === 0) return;

        const slideInterval = setInterval(() => {
            memoizedNext(); // Use the memoized version of `next`
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length, memoizedNext]); // Add `memoizedNext` to the dependency array


    return (
        <div className="overflow-hidden relative h-screen w-full">
            <div
                className={`flex ${transitionType === 'slide' ? 'transition-transform' : ''
                    } duration-1000 ease-in-out`}
                style={{
                    transform: transitionType === 'slide' ? `translateX(-${current * 100}%)` : '',
                    position: transitionType === 'fade' ? 'relative' : 'static',
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full flex-shrink-0 ${transitionType === 'fade'
                            ? `absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
                            }`
                            : ''
                            }`}
                        style={{
                            height: '100%', // Ensure consistent height
                            width: '100%', // Ensure consistent width
                        }}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            {showDots && (
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? 'p-2' : 'bg-opacity-50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carousel;
