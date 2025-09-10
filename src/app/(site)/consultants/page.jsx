'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import ConsultantCard from '@/components/page-sections/ConsultantCard';
import usePageTitle from '@/components/hooks/usePageTitle';
import Loader from '@/components/Loader';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiPlus, FiSearch, FiClock } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import Button from '@/components/ui/button';

const Consultants = () => {
  usePageTitle("Consultants");

  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API call when the component is mounted
    const fetchConsultants = async () => {
      try {
        const response = await axios.get("https://next-job-backend.vercel.app/api/consultant-profiles");

        const filteredConsultants = response.data.filter(
          (consultant) => !consultant.isPending && consultant.isApproved
        );
        setConsultants(filteredConsultants);
      } catch (err) {
        setError("Failed to fetch consultants data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultants();
  }, []);

  const getSkillColor = (index) => {
    const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'indigo', 'teal', 'orange', 'pink'];
    return colors[index % colors.length]; // Cycle through colors
  };


  if (loading) return <Loader></Loader>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <Banner customTitle="Consultants"></Banner>
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-48 2xl:top-52 px-6 lg:px-10 xl:px-10 2xl:px-20 md:px-6">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="bg-lightBackground text-lightText">
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 pt-12">
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
                <Link href="/consultants/hireme" passHref legacyBehavior>
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<FiPlus />}
                    iconPosition="right"
                    className="text-xs sm:text-sm mt-8"
                  >
                    Become a Consultant
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300"></div>
        </section>
        {/* <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r text-primary text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
          <p className="text-lg mb-8">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        </section> */}
        <section className="min-h-screen px-6 lg:px-24 py-2">
          {consultants.length > 0 ?
            (
              <div className="card-container">
                {consultants.map((member) => (
                  <ConsultantCard key={member.id} member={member} />
                ))}
              </div>
            ) : <div className='flex justify-center'>
              <h1>No data found</h1>
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default Consultants;