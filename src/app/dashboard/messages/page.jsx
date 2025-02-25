'use client';
import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MessagesPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestMessages, setRequestMessages] = useState(null);

  const fetchMessageRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://next-job-backend.vercel.app/api/hiring-messages");
      setRequestMessages(response.data);
    } catch (err) {
      setError("Failed to fetch hire requests data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchConsultants when component mounts
  useEffect(() => {
    fetchMessageRequests();
  }, []);

  if (loading) return <Loader></Loader>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hiring Messages</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Message</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {requestMessages.length > 0 ? (
              requestMessages.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{item.message}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      View Message
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
    </div>
  );
}
