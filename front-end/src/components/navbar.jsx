import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <>
            <div className='navbar flex justify-between items-center shadow-md'>
                <div className="left">
                    <img src={Logo} className="w-20" alt="" srcset="" />

                </div>

                <div className="middle flex gap-8">

                    <Link to='/'>
                    <div className='py-[12px] px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:inset-shadow-[0_0px_6px_0px_#ffffff]'>home</div>
                    </Link>
                    <div className='py-[12px] px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:inset-shadow-[0_0px_6px_0px_#ffffff]'>courses</div>
                    <div className='py-[12px] px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:inset-shadow-[0_0px_6px_0px_#ffffff]'>blogs</div>

                    <Link to='/aboutus'>
                    <div className='py-[12px] px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:inset-shadow-[0_0px_6px_0px_#ffffff]'>about us</div>
                    </Link>
                </div>

                <div className="right flex gap-1 ">
                    <Link to='/login'>
                        <li className='list-none transition duration-[0s,0.5s] rounded-sm hover:bg-white hover:text-black bg-black text-white py-[11px] px-[38px]  cursor-pointer '>
                            Log In
                        </li>
                    </Link>

                    <Link to='/signin'>  
                    <li className='list-none transition duration-[0s,0.5s] hover:bg-white hover:text-black rounded-sm bg-black text-white py-[11px] px-[38px] cursor-pointer'>Sign in</li>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default navbar