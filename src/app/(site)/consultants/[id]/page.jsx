'use client';
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdBusinessCenter, MdOutlineEventAvailable } from "react-icons/md";
import { useParams, useSearchParams } from 'next/navigation';
import Loader from '@/components/Loader';
import axios from 'axios';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useForm } from 'react-hook-form';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const formatText = (text) => {
    return text.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const onSubmit = async (data) => {
    const payload = {
      consultantId: consultant._id,
      name: data.name,
      email: data.email,
      message: data.message,
      isRead: false
    };

    try {

      await axios.post('https://next-job-backend.vercel.app/api/hiring-request', payload);

      setIsModalOpen(false);
      alert("Request submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`https://next-job-backend.vercel.app/api/consultant-profiles/${id}`);
        setConsultant(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Failed to load consultant profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultant();
  }, [id]);

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
          <BreadCrumbs customLabels={customLabels}></BreadCrumbs>
        </div>
      </div>
      <div className='min-h-screen py-10'>
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Profile Header */}
          <div className='flex justify-between'>
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
            <div>
              <button onClick={() => setIsModalOpen(true)}
                className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                <MdBusinessCenter className="mr-2" /> Hire
              </button>
            </div>
          </div>

          {/* Bio & Contact */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <p className="text-gray-600 mt-2">{consultant.bio}</p>
          </div>

          {/* Work Hours */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Work Hours</h3>
            <div className="flex items-center gap-2">
              <FiClock size={20} color='purple' />
              <span className='text-gray-800'>{formatText(consultant.workHours)}</span>
            </div>
          </div>

          {/* Work Hours */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Availablity</h3>
            <div className="flex items-center gap-2">
              <MdOutlineEventAvailable size={20} color='green' />
              <span>{formatText(consultant.availability)}</span>
            </div>
          </div>

          <div className='flex items-center gap-2 mt-3'>

          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
            <p className="text-blue-600 flex items-center mt-2">
              {consultant.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`inline-block bg-${getSkillColor(index)}-100 text-${getSkillColor(index)}-800 rounded-full px-3 py-1 text-sm font-medium mr-2`}
                >
                  {skill} {/* Access skill.name instead of splitting a string */}
                </span>
              ))}
            </p>
          </div>

          {/* Resume & Email */}
          {/* <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6">
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
          </div> */}

          {/* Projects Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
            {consultant.projects.length > 0 ? (
              <ul className="mt-2 space-y-3">
                {consultant.projects.map((project, index) => (
                  <li key={index} className="border p-4 rounded-lg bg-gray-100">
                    <h4 className="font-medium text-blue-600">{project.title}</h4>
                    <p className="text-gray-700">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline mt-1 inline-block"
                      >
                        Visit Project
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No projects listed.</p>
            )}
          </div>

        </div>
      </div>
      <Modal
        maxWidth="max-w-lg"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        headerContent="Consultant Hire Request"
        bodyContent={
          <form id="modal-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block font-medium text-gray-700">Your Full Name</label>
              <input
                {...register("name", { required: "First name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-800"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" } })}
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-800"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                {...register('message', { required: "Message is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-800"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
          </form>
        }
        footerContent={
          <>
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
              Cancel
            </button>
            <button
              type="submit"
              form="modal-form"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Save
            </button>
          </>
        }
      >
      </Modal>
    </div>
  )
}