import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {/* Mobile Navbar */}
            <div className="w-full bg-gray-900 p-4 flex justify-between items-center md:hidden">
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`absolute md:relative z-50 w-64 bg-gray-800 p-6 transition-transform transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                } md:block fixed h-full top-0 left-0 md:h-auto md:static`}
            >
                <h1 className="text-2xl text-center my-3 text-white">Dashboard</h1>

                {/* Dashboard Navigation */}
                <nav>
                    <Link to="/dashboard" className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
                        🏠 <p>Home</p>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
                        <FaUserCircle />
                        <p>Profile</p>
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
                        ⚙️ <p>Settings</p>
                    </Link>
                    <Link to="/" className="flex items-center gap-3 my-4 hover:text-red-500 text-red-400">
                        <FaSignOutAlt />
                        <p>Log Out</p>
                    </Link>
                </nav>

                <div className="absolute text-gray-400 bottom-0">@CodeQuest</div>
            </aside>
        </>
    );
};

export default DashboardNav;
