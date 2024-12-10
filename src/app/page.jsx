'use client';
import Carousel from "@/components/Carousel";
import Image from 'next/image';

const Home = () => {
  const slides = [
    { id: 1, src: '/office1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/office2.jpg', alt: 'Slide 2' },
  ];

  return (
    <section className="min-h-screen bg-lightBackground text-lightText">
      <Carousel autoSlide={true} autoSlideInterval={5000}>
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
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <div className="container mx-auto h-full">Home Page1</div> */}
    </section>
  );
}

export default Home;