import React, { useEffect, useState } from 'react'
import { FaUserCircle, FaTasks, FaChartLine, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"


const dashboard = () => {
  const location = useLocation();
  const user_name = location.state?.username || "Guest"
  const [Username, setUsername] = useState("")


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

  return (
    <>
      <div className='flex min-h-screen bg-black text-white'>

        {/* aside area and navbar starts*/}
        <div className='aside w-64 bg-gray-800 p-6 max-[1069px]:hidden'>
          <h1 className='text-2xl text-center my-3'>Dashboard</h1>
          {/* dashboard nav section start*/}
          <nav>
            <Link to='/dashboard' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <p>home</p>
            </Link>
            <Link to='/profile' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
              <FaUserCircle />
              <p>profile</p>
            </Link>
            <Link to='/settings' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              <p>settings</p>
            </Link>
            <Link to='/' className='flex items-center gap-3 my-4 hover:text-red-500 text-red-400'>
              <FaSignOutAlt />
              <p>log out</p>
            </Link>
          </nav>
          <div className='absolute text-gray-400 bottom-0'>
            @CodeQuest
          </div>
          {/* dashboard nav section end */}
        </div>
        {/* aside area and navbar ends  */}

        {/* main dashboard start*/}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Welcome, {Username}</h1>
          <p className="text-gray-400 mt-2">Track your progress and continue learning.</p>

          {/* Cards Section start*/}
          <div className="grid min-[1122px]:grid-cols-3  gap-6 mt-6">

            {/* cards */}
            <div className=" bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">C Language</h2>
              <p className="text-gray-400 mt-2">Loops & Control statement </p>

              <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 py-2 px-4 rounded-lg text-white font-semibold transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-md">
                Continue Practice
              </button>

            </div>

            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">📚 Courses</h2>
              <p className="text-gray-400 mt-2">5 courses enrolled</p>
            </div>

            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">📝 Recent Activity</h2>
              <p className="text-gray-400 mt-2">Solved 3 challenges today</p>
            </div>

          </div>
          {/* cards section end */}




          {/* User Statistics Section */}
          <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">📊 User Statistics</h2>
            <p className="text-gray-400">Your progress at a glance</p>

            <div className="grid md:grid-cols-4 gap-6 mt-4">
              {/* Total Solved Questions */}
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
                <h3 className="text-xl font-semibold text-white">✅ Solved</h3>
                <p className="text-4xl font-bold text-[#00c6ff]">120</p>
              </div>

              {/* Total Attempted */}
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
        {/* main dashboard end */}
      </div>
    </>
  )
}

export default dashboard