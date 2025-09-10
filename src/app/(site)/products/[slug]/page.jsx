import React from 'react';
import { notFound } from 'next/navigation';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import { Heading } from '@/components/ui/Typography';
import Image from 'next/image';

// Example product data (should be replaced with real data source)
const productData = [
  {
    slug: 'imed',
    title: 'iMed',
    image: '/products/connect.jpg',
    description: 'A smart healthcare solution designed to streamline patient care, medical records, and hospital operations. iMed uses AI-driven diagnostics and secure cloud platforms to empower healthcare providers with real-time insights, improving patient outcomes and reducing administrative overhead.'
  },
  {
    slug: 'istore',
    title: 'iStore',
    image: '/products/ishop.jpg',
    description: 'A next-generation digital retail platform that combines AI, analytics, and seamless e-commerce experiences. iStore enables businesses to optimize inventory, personalize customer journeys, and scale effortlessly across online and offline channels, driving growth and customer loyalty.'
  },
  {
    slug: 'idelivery',
    title: 'iDelivery',
    image: '/products/carebot.jpg',
    description: 'An intelligent logistics and delivery management system built to power modern supply chains. iDelivery ensures real-time tracking, optimized routes, and automated scheduling, helping businesses reduce costs, improve efficiency, and deliver exceptional customer experiences.'
  },
  {
    slug: 'igov',
    title: 'iGov',
    image: '/products/gov.jpg',
    description: 'An initiative to unify and simplify government services through a single smart management plane. iGov enables digital transformation for public institutions by providing secure, transparent, and citizen-focused platforms that enhance accessibility, efficiency, and trust in governance.'
  }
];

export default function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = productData.find(p => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="min-h-screen">
      <div className='relative'>
        <Banner customTitle={product.title} />
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
          <BreadCrumbs />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="rounded-lg object-cover mb-6"
          />
          <Heading level={3} color="text-blue-600" className="text-2xl mb-4 text-center">
            {product.title}
          </Heading>
          <p className="text-gray-700 text-lg text-center mb-4">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return productData.map(product => ({ slug: product.slug }));
}
