import React from 'react'
import Logo from "../assets/logo.png"

const navbar = () => {
    return (
        <>
        <div className='navbar flex justify-between items-center bg-[#4B4376]'>
            <div className="left">
                <img src={Logo}  className="w-20" alt="" srcset="" />
                
            </div>

            <div className="middle flex gap-8">    
               <div className='text-[#ffffff]'>courses</div>
               <div className='text-[#ffffff]'>blogs</div>
               <div className='text-[#ffffff]'>about us</div>
            </div>

            <div className="right flex gap-1 ">
                <button className='transition duration-[0s,0.5s] rounded-sm hover:bg-white hover:text-black bg-black text-white py-[11px] px-[38px]  cursor-pointer '>Log In</button>
                <button className='transition duration-[0s,0.5s] hover:bg-white hover:text-black rounded-sm bg-black text-white py-[11px] px-[38px] cursor-pointer'>Sign in</button>
            </div>
        </div>
        </>
    )
}

export default navbar