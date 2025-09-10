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
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Images with gradient backgrounds */}
          <div className="w-full lg:max-w-7xl">
            <Image
                  src={aboutimg}
                  alt="Future technology"
                  className=""
                />
          </div>

          {/* Text content */}
          <div className="space-y-4 w-full lg:max-w-3xl">
            <Heading
              level={2}
              color="text-[#2563EB]"
              fontFamily="akira"
              className="text-xl lg:text-4xl 2xl:text-5xl"
            >
              WHO WE ARE ?
            </Heading>

            <Text size="md" color="text-gray-600">
              ICEL TECH LLC is a global software and IT solutions company with decades of collective experience in enterprise software engineering, cybersecurity, cloud technologies, and artificial intelligence.<br/>
              We specialize in cybersecurity, cloud computing, digital transformation, project management, and software development, delivering scalable, secure, and innovative solutions tailored to modern business needs.
            
            </Text>

            <ul className="space-y-3">
              {['Enterprise-grade cybersecurity and identity solutions', 'Cloud-native, AI-driven software development', 'Scalable digital transformation and IT project delivery'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <FiCheck className="text-[#2563EB] mr-2" />
                  <Text size="base" color="text-gray-700">{item}</Text>
                </li>
              ))}
            </ul>

            <div className='mt-4'>
              <Text size="md" color="text-gray-600">
              At ICEL TECH LLC, our mission is to empower organizations with cutting-edge solutions that protect, modernize, and accelerate growth in the digital era.
            
            </Text>
            </div>

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