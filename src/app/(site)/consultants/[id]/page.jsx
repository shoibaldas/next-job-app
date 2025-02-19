'use client';
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import { FaBriefcase, FaMapMarkerAlt, FaCode, FaFilePdf, FaEnvelope } from "react-icons/fa";
import { useParams, useSearchParams } from 'next/navigation';
import Loader from '@/components/Loader';
import axios from 'axios';
import Image from 'next/image';

export default function ConsultantProfile() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const customLabels = {
    "/consultants/67a9f25515fb4def81e0990d": `${name}`,
  };

  const { id } = useParams();
  const [consultant, setConsultant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`https://next-job-backend.vercel.app/api/consultant-profiles/${id}`);
        setConsultant(response.data);
        console.log()
      } catch (err) {
        setError("Failed to load consultant profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultant();
  }, [id]);

  if (loading) return <Loader></Loader>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <Banner customTitle="Consultants"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs customLabels={customLabels}></BreadCrumbs>
        </div>
      </div>
      <div className='min-h-screen py-10'>
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500">
              <Image
                src={consultant.profilePicUrl}
                alt={consultant.firstName}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Consultant Info */}
            <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-800">
                {consultant.firstName} {consultant.lastName}
              </h2>
              <p className="text-gray-600">{consultant.designation}</p>
              <p className="text-gray-500 flex items-center justify-center md:justify-start">
                <FaBriefcase className="mr-2 text-blue-500" /> {consultant.employer}
              </p>
              <p className="text-gray-500 flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-red-500" /> {consultant.address}
              </p>
            </div>
          </div>

          {/* Bio & Contact */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <p className="text-gray-600 mt-2">{consultant.bio}</p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
            <p className="text-blue-600 flex items-center mt-2">
              <FaCode className="mr-2" /> {consultant.skills}
            </p>
          </div>

          {/* Resume & Email */}
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6">
            <a
              href={consultant.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            >
              <FaFilePdf className="mr-2" /> View Resume
            </a>

            <a
              href={`mailto:${consultant.email}`}
              className="flex items-center text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </div>

          {/* Projects Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
            {consultant.projects.length > 0 ? (
              <ul className="list-disc list-inside mt-2">
                {consultant.projects.map((project, index) => (
                  <li key={index} className="text-gray-600">
                    {project}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No projects listed.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}