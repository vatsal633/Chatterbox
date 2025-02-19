import React, { useEffect, useState } from 'react'
import { FaUserCircle, FaTasks, FaChartLine, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"
const profile = () => {
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


                <main className='personal-information bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg h-fit'>
                    {/* first card */}
                    <div className="primaty-info">

                        <div className="profile_img">
                            <img src="" alt="profile img    " srcset="" />
                        </div>

                        <div className="username my-4">
                            <span className='text-4xl'>vatsalmunjpara</span>
                        </div>


                        <div className="email text-gray-400">
                            example@gmail.com
                        </div>

                    </div>


                    <div className="primaty-info">

                        <div className="profile_img">
                            <img src="" alt="profile img    " srcset="" />
                        </div>

                        <div className="username my-4">
                            <span className='text-4xl'>vatsalmunjpara</span>
                        </div>


                        <div className="email text-gray-400">
                            example@gmail.com
                        </div>

                    </div>

                </main>

            </div>
        </>
    )
}

export default profile