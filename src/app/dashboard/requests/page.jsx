'use client';
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaFilePdf } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdBusinessCenter, MdOutlineEventAvailable } from "react-icons/md";

export default function DashboardPage() {

  const [consultants, setConsultants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);
  const [consultantDetails, setConsultantDetails] = useState(null);

  const fetchConsultants = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://next-job-backend.vercel.app/api/consultant-requests");
      setConsultants(response.data);
    } catch (err) {
      setError("Failed to fetch consultants data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchConsultants when component mounts
  useEffect(() => {
    fetchConsultants();
  }, []);

  // Fetch details of a specific consultant when modal is opened
  useEffect(() => {
    if (selectedConsultantId) {
      const fetchConsultantDetails = async () => {
        try {
          const response = await axios.get(`https://next-job-backend.vercel.app/api/consultant-profiles/${selectedConsultantId}`);
          setConsultantDetails(response.data);
          console.log(response.data);
        } catch (err) {
          console.error("Error fetching consultant details:", err);
        }
      };

      fetchConsultantDetails();
    }
  }, [selectedConsultantId]);

  const handleApprove = async () => {
    if (!selectedConsultantId) return;

    try {
      const response = await axios.put(
        `https://next-job-backend.vercel.app/api/approve/${selectedConsultantId}`
      );

      alert("Consultant approved successfully!");
      setIsModalOpen(false);
      fetchConsultants();
    } catch (error) {
      console.error("Error approving consultant:", error);
      alert("Failed to approve consultant.");
    }
  };

  const formatText = (text) => {
    return text.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getSkillColor = (index) => {
    const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'indigo', 'teal', 'orange', 'pink'];
    return colors[index % colors.length]; // Cycle through colors
  };

  if (loading) return <Loader></Loader>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Consultant Request Table</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Contact No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {consultants.length > 0 ? (
              consultants.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.fullName}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.contact}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold 
                          ${item.isPending ? "bg-yellow-100 text-yellow-700" :
                          item.isApproved ? "bg-green-100 text-green-700" :
                            "bg-red-100 text-red-700"
                        }`}
                    >
                      {item.isPending && !item.isApproved ? "Pending" :
                        !item.isPending && item.isApproved ? "Active" :
                          item.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button onClick={() => {
                      setSelectedConsultantId(item.id);
                      setIsModalOpen(true);
                    }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
      <Modal
        maxWidth="max-w-6xl"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        headerContent="Review Cosultant Profile"
        bodyContent={
          consultantDetails ? (
            <div className="mx-auto bg-white shadow-lg rounded-lg p-6">
              {/* Profile Header */}
              <div className='flex justify-between'>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  {/* Profile Image */}
                  <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500">
                    <Image
                      src={consultantDetails.profilePicUrl}
                      alt={consultantDetails.firstName}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Consultant Info */}
                  <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {consultantDetails.firstName} {consultantDetails.lastName}
                    </h2>
                    <p className="text-gray-600">{consultantDetails.designation}</p>
                    <p className="text-gray-500 flex items-center justify-center md:justify-start">
                      <FaBriefcase className="mr-2 text-blue-500" /> {consultantDetails.employer}
                    </p>
                    <p className="text-gray-500 flex items-center justify-center md:justify-start">
                      <FaMapMarkerAlt className="mr-2 text-red-500" /> {consultantDetails.address}
                    </p>
                  </div>
                </div>
                {/* Resume & Email */}
                <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6">
                  <a
                    href={consultantDetails.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    <FaFilePdf className="mr-2" /> View Resume
                  </a>
                </div>
              </div>

              {/* Bio & Contact */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">About</h3>
                <p className="text-gray-600 mt-2">{consultantDetails.bio}</p>
              </div>

              {/* Work Hours */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Work Hours</h3>
                <div className="flex items-center gap-2">
                  <FiClock size={20} color='purple' />
                  <span className='text-gray-800'>{formatText(consultantDetails.workHours)}</span>
                </div>
              </div>

              {/* Work Hours */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Availablity</h3>
                <div className="flex items-center gap-2">
                  <MdOutlineEventAvailable size={20} color='green' />
                  <span>{formatText(consultantDetails.availability)}</span>
                </div>
              </div>

              <div className='flex items-center gap-2 mt-3'>

              </div>

              {/* Skills */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
                <p className="text-blue-600 flex items-center mt-2">
                  {consultantDetails.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-block bg-${getSkillColor(index)}-100 text-${getSkillColor(index)}-800 rounded-full px-3 py-1 text-sm font-medium mr-2`}
                    >
                      {skill} {/* Access skill.name instead of splitting a string */}
                    </span>
                  ))}
                </p>
              </div>

              {/* Projects Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
                {consultantDetails.projects.length > 0 ? (
                  <ul className="mt-2 space-y-3">
                    {consultantDetails.projects.map((project, index) => (
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
          ) : (
            <div>Loading details...</div>
          )
        }
        footerContent={
          <>
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
              Cancel
            </button>
            <button
              onClick={handleApprove}
              className="px-4 py-2 bg-green-600 text-white rounded-lg">
              Approve
            </button>
          </>
        }
      />
    </div>
  );
}
