import React, { use, useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Back from '../assets/back.svg'
import { useNavigate,useParams } from "react-router-dom";
 
const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const {username} = useParams()


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
    <div className="flex max-h-full[#0b0f17] text-white max-[768px]:flex-col">
      {/* Sidebar */}

      <div className="w-full bg-gray-900 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-white">Settings</h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`absolute md:relative z-50 w-64 bg-gray-800 p-6 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:block fixed h-full top-0 left-0 md:h-auto md:static`}
      >
        <h1 className="text-2xl text-center my-3 text-white">Settings</h1>

        {/* Dashboard Navigation */}
        <nav>
          <div className="flex" onClick={()=>{
            navigate(`/${username}/dashboard`)
          }}>

          <img src={Back}alt="" width={20}/>
          <span className="text-xl flex items-center gap-3 my-4 hover:text-white text-gray-300">Back To dashboard</span>
          </div>
        </nav>

        <div className="absolute text-gray-400 bottom-0">@CodeQuest</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        
        {/* Profile Settings */}
        <div id="profile" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Profile Settings</h3>
          <div className="flex items-center space-x-4 max-[933px]:flex-col">
            <div className="w-16 h-16 bg-gray-600 rounded-full  max-[933px]:mb-4"></div>
            <div className="space-y-2">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-600 rounded  text-white" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-600 rounded  text-white" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Save Changes</button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div id="security" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Account Security</h3>
          <input type="password" placeholder="Change Password" className="w-full p-2 border border-gray-600 rounded  text-white" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Update Password</button>
        </div>

        {/* Notifications */}
        <div id="notifications" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="w-6 h-6"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
