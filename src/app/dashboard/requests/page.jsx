'use client';
import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  // Sample Data (Replace this with API Data)
  const tableData = [
    { name: "John Doe", email: "john@example.com", contact: "123-456-7890", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", contact: "987-654-3210", status: "Inactive" },
    { name: "Alice Brown", email: "alice@example.com", contact: "555-123-4567", status: "Active" },
    { name: "Bob Johnson", email: "bob@example.com", contact: "666-789-1234", status: "Inactive" },
  ];
  const [consultants, setConsultants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API call when the component is mounted
    const fetchConsultants = async () => {
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

    fetchConsultants();
  }, []);

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
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
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
    </div>
  );
}
