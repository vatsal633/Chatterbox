import React from 'react';
import { FaUserCircle, FaSignOutAlt,} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail,MdOutlineLocalPhone} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';


const Profile = () => {

    const [Skills, setSkills] = useState([])
    return (
        <div className='flex min-h-screen bg-[#0b0f17] text-white'>

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

                {/* website user data */}
                <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-sm m-auto">
                    <div>
                        <img src="" alt="profie" srcset="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className="my-2 text-3xl font-semibold">Vatsal Munjpara</h2>
                        <span className=''>flag</span>
                    </div>
                    <div className="text-gray-400 my-2">vatsalmunjpara@gmail.com</div>
                </div>

                {/* user personal data */}
                <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-sm m-auto">
                    <div>
                        <h1 className='text-3xl'>Personal Information</h1>
                    </div>
                    <div className='flex items-center my-2 gap-1'>
                        <MdOutlineAlternateEmail />
                        <span className='text-gray-400'>vatsalmunjpara@mail.com</span>
                    </div>

                    <div className='text-gray-400 flex items-center gap-1'>
                        <MdOutlineLocalPhone/>
                        <span>566545354</span> 
                    </div>

                    <div className='text-gray-400 flex my-2 items-center gap-1'>
                    <FaLocationDot />
                        <span>India</span> 
                    </div>
                </div>


                {/* skill section */}

                <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-sm m-auto">
                    <div>
                        <h1 className='mb-4 text-3xl'>Skills</h1>
                        {Skills.length == 0?(<span className=' text-gray-400'>Add your relevent skills</span>):(Skills)}                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
