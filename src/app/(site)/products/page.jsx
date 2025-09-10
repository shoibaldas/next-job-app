'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/Typography";
import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const Products = () => {
  usePageTitle('Products');

  const productData = [
    {
      title: "iMed",
      image: "/products/connect.jpg",
      description: "AI-powered healthcare platform for smarter patient care and hospital management. iMed improves diagnostics, secures records, and enhances treatment outcomes."
    },
    {
      title: "iStore",
      image: "/products/ishop.jpg",
      description: "A next-gen digital retail platform unifying AI, analytics, and e-commerce. iStore helps businesses boost sales, optimize inventory, and personalize shopping."
    },
    {
      title: "iDelivery",
      image: "/products/carebot.jpg",
      description: "Smart logistics and delivery system with real-time tracking, optimized routes, and automation. iDelivery ensures faster, more reliable, and cost-efficient delivery."
    },
    {
      title: "iGov",
      image: "/products/gov.jpg",
      description: "A unified smart platform for government services. iGov simplifies citizen access, enhances transparency, and drives digital transformation in governance."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle="Products"></Banner>
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 xs:px-6 sm:px-6 md:px-6 lg:px-10 xl:px-18 2xl:px-32 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="text-left">
          <Heading
            level={1}
            color="text-[#2563EB]"
            fontFamily="akira"
            className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            Browse Our Products
          </Heading>
        </div>
        {/* Product Cards section */}
        <div className="mt-0 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-12 xl:mt-16 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-5 2xl:gap-18 mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-28 xl:mb-48">
          {productData.map((product, index) => {
            return (
              <div key={index} className="max-w-lg overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 object-cover p-2 xs:p-3 sm:p-4" src={product.image} alt={product.title} />
                <div className="px-4 xs:px-5 sm:px-6 py-2 xs:py-3 sm:py-4">
                  <div className="font-bold text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl mb-1 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-2">
                    {product.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <div className="my-4 xs:my-5 sm:my-6">
                    <Link href={`/products/${product.title.toLowerCase() === 'imed' ? 'imed' : product.title.toLowerCase() === 'istore' ? 'istore' : product.title.toLowerCase() === 'idelivery' ? 'idelivery' : product.title.toLowerCase() === 'igov' ? 'igov' : ''}`}>
                      <Button
                        variant="primary"
                        size="md"
                        icon={<FiArrowRight />}
                        iconPosition="right"
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

      {/*Contact Section*/}
      <section className="relative bg-transparent min-h-[500px] w-full overflow-hidden mb-44 flex justify-center items-center">
        <Image
          src="/products/contact-p.png"
          alt="Our Story"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center px-10 py-10 text-center">
          <Heading
            level={3}
            color="text-gray-50"
            fontFamily="akira"
            className="uppercase mb-4 text-2xl md:text-4xl text-center"
          >
            Ready To Grow Your Business?
          </Heading>
          <p className="text-gray-200 text-sm">
            Join the thousands of creators who have transformed their ideas into wearable art and memorable gifts. Our intuitive design tools make it effortless and fun
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="md"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
