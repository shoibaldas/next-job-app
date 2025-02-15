'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import Loader from '@/components/Loader';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from "react-icons/fi";

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
        setConsultants(response.data);
        console.log(response)
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
        {/* <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r text-primary text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
          <p className="text-lg mb-8">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        </section> */}
        <section className="min-h-screen lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
            {consultants.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center group relative transition-all duration-300"
              >
                {/* Darken the whole card (including image) on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                <div className="relative w-full h-96">
                  <img
                    src={member.profilePicUrl}
                    alt={member.fullName}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{member.fullName}</h3>
                  <p className="text-gray-500 mt-2">{member.designation}</p>
                  <div className="mt-2">
                    <span className="mx-2">Skills:</span>
                    {member.skills
                      .split(',')
                      .slice(0, 5)
                      .map((skill, index) => (
                        <span
                          key={index}
                          className={`inline-block bg-${getSkillColor(index)}-100 text-${getSkillColor(index)}-800 rounded-full px-3 py-1 text-sm font-medium mr-2`}
                        >
                          {skill.trim()}
                        </span>
                      ))}
                  </div>
                </div>

                {/* View Button - Only visible when hovering */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/consultants/${member.id}?name=${member.fullName}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  )
}

export default Consultants;