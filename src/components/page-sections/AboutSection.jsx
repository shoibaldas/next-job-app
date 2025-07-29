import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import Button from '@/components/ui/button';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import aboutimg from '../../../public/about/about.png'

const AboutSection = () => {
  return (
    <section className="">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-28 items-center">
          {/* Images with gradient backgrounds */}
          <div className="flex-1">
            <Image
                  src={aboutimg}
                  alt="Future technology"
                  className=""
                />
          </div>

          {/* Text content */}
          <div className="space-y-4 max-w-3xl">
            <Heading
              level={2}
              color="text-[#2563EB]"
              fontFamily="akira"
              className="text-3xl md:text-4xl lg:text-5xl"
            >
              WHO WE ARE ?
            </Heading>

            <Text size="lg" color="text-gray-600">
              ICEL TECH LLC is an IT solutions company specializing in cybersecurity,
              digital marketing, project management, and software development. We
              leverage advanced technology and skilled professionals to help businesses
              grow and stay protected in the digital age.
            </Text>

            <ul className="space-y-3">
              {['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'Lorem ipsum dolor sit amet'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <FiCheck className="text-[#2563EB] mr-2" />
                  <Text size="base" color="text-gray-700">{item}</Text>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/about" passHref legacyBehavior>
                <Button
                  variant="primary"
                  size="md"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                >
                  Discover More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;