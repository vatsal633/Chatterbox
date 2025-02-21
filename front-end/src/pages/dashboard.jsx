import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Dashboard_nav from '../components/dashboard_nav';

const Dashboard = () => {
  const location = useLocation();
  const user_name = location.state?.username || "Guest";
  const [Username, setUsername] = useState("");
  // const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const sidebarRef = useRef();

  useEffect(() => {
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key === user_name) {
        const userData = JSON.parse(localStorage.getItem(key));
        if (userData.username) {
          setUsername(key);
          break;
        }
      }
    }
  }, [user_name]);

  // Handle click outside sidebar to close
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      
      <Dashboard_nav/>

      {/* Main Dashboard */}
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-3xl font-bold">Welcome, {Username}</h1>
        <p className="text-gray-400 mt-2">Track your progress and continue learning.</p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Practice Card */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">C Language</h2>
            <p className="text-gray-400 mt-2">Loops & Control statement</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Continue Practice
            </button>
          </div>

          {/* Courses Card */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">📚 Courses</h2>
            <p className="text-gray-400 mt-2">5 courses enrolled</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">📝 Recent Activity</h2>
            <p className="text-gray-400 mt-2">Solved 3 challenges today</p>
          </div>
        </div>

        {/* User Statistics Section */}
        <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white">📊 User Statistics</h2>
          <p className="text-gray-400">Your progress at a glance</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {/* Solved Questions */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">✅ Solved</h3>
              <p className="text-4xl font-bold text-[#00c6ff]">120</p>
            </div>

            {/* Attempted Questions */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">🔄 Attempted</h3>
              <p className="text-4xl font-bold text-[#FF9800]">150</p>
            </div>

            {/* Success Rate */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">📈 Success Rate</h3>
              <div className="relative w-full bg-gray-700 h-4 rounded-full mt-2">
                <div className="absolute top-0 left-0 h-4 bg-[#00c6ff] rounded-full" style={{ width: "80%" }}></div>
              </div>
              <p className="text-sm text-gray-400 mt-1">80% correct</p>
            </div>

            {/* Streak */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">🔥 Streak</h3>
              <p className="text-4xl font-bold text-red-500">7</p>
              <p className="text-sm text-gray-400">Days active</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;