import React from 'react'

const Example = () => {
    return (
        <div>
            {/* <div
                // className="flex transition-transform ease-out duration-500 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 h-full w-full">
                        {slide}
                    </div>
                ))}
            </div> */}

            {/* Navigation Buttons */}
            {/* <div className="absolute inset-0 bottom-0 flex items-center justify-center p-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundBack size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundForward size={40} />
                </button>
            </div> */}
        </div>
    )
}

export default Example

// 'use client';

// import { useState, useEffect } from 'react';

// const Carousel = ({
//     children: slides,
//     current,
//     next,
//     prev,
//     autoSlide = false,
//     autoSlideInterval = 3000,
// }) => {
//     // const [curr, setCurr] = useState(0);

//     // const prev = () => {
//     //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//     // }

//     // const next = () => {
//     //     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//     //     // console.log("Next slide:", curr + 1);
//     // };

//     useEffect(() => {
//         if (!autoSlide || slides.length === 0) return;

//         const slideInterval = setInterval(() => {
//             next();
//         }, autoSlideInterval);

//         return () => clearInterval(slideInterval);
//     }, [autoSlide, autoSlideInterval, slides.length]);

//     //    useEffect(() => {
//     //     console.log("Current slide:", curr);
//     // }, [curr]);

//     return (
//         <div className="overflow-hidden relative h-screen w-full">
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
//                         }`}
//                 >
//                     {slide}
//                 </div>
//             ))}
//             {/* Pagination Dots */}
//             <div className="absolute bottom-4 right-0 left-0">
//                 <div className="flex items-center justify-center gap-2">
//                     {slides.map((_, i) => (
//                         <div
//                             key={i}
//                             className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? 'p-2' : 'bg-opacity-50'
//                                 }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carousel;