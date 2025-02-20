import React from 'react';
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className='flex min-h-screen bg-black text-white'>

            {/* Sidebar */}
            <div className='aside w-64 bg-gray-800 p-6 max-[1069px]:hidden relative'>
                <h1 className='text-2xl text-center my-3'>Dashboard</h1>

                <nav>
                    <Link to='/dashboard' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
                        <FaUserCircle />
                        <p>Home</p>
                    </Link>
                    <Link to='/profile' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
                        <FaUserCircle />
                        <p>Profile</p>
                    </Link>
                    <Link to='/settings' className='flex items-center gap-3 my-4 hover:text-white text-gray-300'>
                        <FaUserCircle />
                        <p>Settings</p>
                    </Link>
                    <Link to='/' className='flex items-center gap-3 my-4 hover:text-red-500 text-red-400'>
                        <FaSignOutAlt />
                        <p>Log Out</p>
                    </Link>
                </nav>

                <div className='absolute text-gray-400 bottom-6 left-6'>
                    @CodeQuest
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center w-full gap-6 mt-6 h-fit">

                {/* cards */}
                <div className=" bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg w-fit  m-auto">
                    <h2 className="text-xl font-semibold">C Language</h2>
                    <p className="text-gray-400 mt-2">Loops & Control statement </p>

                    <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 py-2 px-4 rounded-lg text-white font-semibold transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-md">
                        Continue Practice
                    </button>

                </div>

                <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] bg-gray-800 p-6 rounded-lg shadow-lg w-fit m-auto">
                    <h2 className="text-xl font-semibold">📚 Courses</h2>
                    <p className="text-gray-400 mt-2">5 courses enrolled</p>
                </div>

                <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] bg-gray-800 p-6 rounded-lg shadow-lg w-fit m-auto">
                    <h2 className="text-xl font-semibold">📝 Recent Activity</h2>
                    <p className="text-gray-400 mt-2">Solved 3 challenges today</p>
                </div>

            </div>

        </div>
    );
}

export default Profile;
