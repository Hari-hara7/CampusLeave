import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaRegFileAlt } from "react-icons/fa";

const ApplyLeave = () => {
  const [form, setForm] = useState({ reason: "", fromDate: "", toDate: "" });
  const navigate = useNavigate();

  const handleApplyLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post("/leaves", form);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">Apply for Leave</h2>
        <form onSubmit={handleApplyLeave} className="flex flex-col gap-4">
          <div className="flex items-center border rounded px-3 py-2">
            <FaRegFileAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Reason for leave"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full outline-none text-black bg-transparent"
              required
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              value={form.fromDate}
              onChange={(e) => setForm({ ...form, fromDate: e.target.value })}
              className="w-full outline-none text-black bg-transparent"
              required
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              value={form.toDate}
              onChange={(e) => setForm({ ...form, toDate: e.target.value })}
              className="w-full outline-none text-black bg-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-900 transition-all duration-200"
          >
            Submit Leave Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeave;
