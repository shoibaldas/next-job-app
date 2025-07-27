import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import Button from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Hero Image with overlay and mirror effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full [transform:scaleX(-1)]">
          <Image
            src="/hero/hero-img.jpg"
            alt="Technology for a better tomorrow"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Small heading */}
            <Text
              size="sm"
              color="text-gray-300"
              className="mb-2 sm:mb-4 uppercase tracking-widest text-xs sm:text-sm"
            >
              REDEFINING EASE
            </Text>

            {/* Main heading */}
            <Heading
              level={1}
              color="text-white"
              fontFamily="akira"
              className="mb-3 sm:mb-6 leading-tight text-2xl sm:text-4xl md:text-5xl"
            >
              TECHNOLOGY
              <br />
              FOR A BETTER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                TOMORROW
              </span>
            </Heading>

            {/* Subtext */}
            <Text
              size="base"
              color="text-gray-300"
              className="mb-6 sm:mb-8 max-w-md sm:max-w-lg text-sm sm:text-base"
            >
              We make the complex simple, bringing ease and efficiency
              <br/>
              to every part of your life.
              <br/>
            </Text>

            {/* Get Started Button */}
            <Link href="/services" passHref legacyBehavior>
              <Button
                variant="primary"
                size="sm sm:md"
                icon={<FiArrowRight />}
                iconPosition="right"
                className="text-xs sm:text-sm mt-8"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
