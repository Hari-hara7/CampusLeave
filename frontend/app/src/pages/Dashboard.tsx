import { useEffect, useState } from "react";
import API from "../services/api";
import { Leave } from "../types";
import { FaRegFileAlt, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";

const Dashboard = () => {
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const res = await API.get("/leaves/my");
      setLeaves(res.data);
    };
    fetchLeaves();
  }, []);

  const renderStatus = (status: string) => {
    const baseClass = "px-3 py-1 text-sm rounded-full font-medium flex items-center gap-1 w-fit";
    switch (status) {
      case "accepted":
        return <span className={`${baseClass} bg-green-100 text-green-700`}><FaCheckCircle /> Accepted</span>;
      case "rejected":
        return <span className={`${baseClass} bg-red-100 text-red-700`}><FaTimesCircle /> Rejected</span>;
      default:
        return <span className={`${baseClass} bg-yellow-100 text-yellow-700`}><FaHourglassHalf /> Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">📋 My Leave Requests</h2>
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
          <table className="min-w-full text-left text-black text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3"><FaRegFileAlt className="inline mr-1" /> Reason</th>
                <th className="px-4 py-3"><FaCalendarAlt className="inline mr-1" /> From</th>
                <th className="px-4 py-3"><FaCalendarAlt className="inline mr-1" /> To</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    No leave requests yet.
                  </td>
                </tr>
              ) : (
                leaves.map((leave) => (
                  <tr key={leave._id} className="border-t">
                    <td className="px-4 py-3">{leave.reason}</td>
                    <td className="px-4 py-3">{new Date(leave.fromDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{new Date(leave.toDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{renderStatus(leave.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
