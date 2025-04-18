import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">Leave Management</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {!token ? (
            <>
              <Link to="/" className="hover:text-gray-600">Register</Link>
              <Link to="/login" className="hover:text-gray-600">Login</Link>
            </>
          ) : (
            <>
              <Link to="/apply" className="hover:text-gray-600">Apply Leave</Link>
              <Link to="/dashboard" className="hover:text-gray-600">Dashboard</Link>
              {user.role === "teacher" && (
                <Link to="/admin" className="hover:text-gray-600">Admin Panel</Link>
              )}
              <button onClick={handleLogout} className="hover:text-gray-600">Logout</button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          {!token ? (
            <>
              <Link to="/" className="block hover:text-gray-600">Register</Link>
              <Link to="/login" className="block hover:text-gray-600">Login</Link>
              <Link to="/dashboard" className="block hover:text-gray-600">Dashboard</Link>
            </>
          ) : (
            <>
              <Link to="/apply" className="block hover:text-gray-600">Apply Leave</Link>
              <Link to="/dashboard" className="block hover:text-gray-600">Dashboard</Link>
              {user.role === "teacher" && (
                <Link to="/admin" className="block hover:text-gray-600">Admin Panel</Link>
              )}
              <button onClick={handleLogout} className="block hover:text-gray-600">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
