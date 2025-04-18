import { useEffect, useState } from "react";
import API from "../services/api";
import { Leave } from "../types";

const AdminPanel = () => {
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await API.get("/leaves");

        // Cast status values to proper union type
        const formattedLeaves: Leave[] = res.data.map((leave: any) => ({
          ...leave,
          status: leave.status as "pending" | "accepted" | "rejected",
        }));

        setLeaves(formattedLeaves);
      } catch (err) {
        console.error("Failed to fetch leaves", err);
      }
    };

    fetchLeaves();
  }, []);

  const handleUpdateStatus = async (
    leaveId: string,
    status: "pending" | "accepted" | "rejected"
  ) => {
    try {
      await API.put(`/leaves/${leaveId}`, { status });

      setLeaves((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave._id === leaveId ? { ...leave, status } : leave
        )
      );
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div className="bg-white text-black px-4 py-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel - Leave Requests</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Student</th>
              <th className="p-3 border">Reason</th>
              <th className="p-3 border">From Date</th>
              <th className="p-3 border">To Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} className="text-center">
                <td className="p-3 border">{leave.student.name}</td>
                <td className="p-3 border">{leave.reason}</td>
                <td className="p-3 border">{new Date(leave.fromDate).toLocaleDateString()}</td>
                <td className="p-3 border">{new Date(leave.toDate).toLocaleDateString()}</td>
                <td className="p-3 border capitalize">{leave.status}</td>
                <td className="p-3 border flex flex-col sm:flex-row justify-center items-center gap-2">
                  <button
                    onClick={() => handleUpdateStatus(leave._id, "accepted")}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(leave._id, "rejected")}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
