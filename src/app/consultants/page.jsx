'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import Link from 'next/link';
import React from 'react';
import { FiPlus, FiSearch } from "react-icons/fi";

const Consultants = () => {
  usePageTitle("Consultants");

  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <Banner customTitle="Consultants"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="bg-lightBackground text-lightText">
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
          {/* Top Section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Search Box */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <form className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-3 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button type="submit" className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <FiSearch className="text-xl" />
                  </button>
                </form>
              </div>

              {/* Button */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Link href="/consultants/hireme" className="inline-flex items-center rounded-lg font-semibold px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition duration-200">
                  <span className="mx-2">Become a Consultant</span>
                  <FiPlus className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300"></div>
        </section>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r text-primary text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
          <p className="text-lg mb-8">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        </section>

      </div>
    </div>
  )
}

export default Consultants;