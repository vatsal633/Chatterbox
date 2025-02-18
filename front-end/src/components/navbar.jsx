import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Menu from "../assets/menu.svg"

const navbar = () => {

    const [IsVisibility, setIsVisibility] = useState(false)

   
    const togglemenu =()=>{
       setIsVisibility(!IsVisibility)
    }
    return (
        <>
            <div className='navbar flex justify-between items-center shadow-md p-2'>
                {/* logo section */}
                <div className="left">
                    <img src={Logo} className="w-20" alt="" srcset="" />

                </div>

                {/* nav links section */}
                <div className="middle hidden gap min-[776px]:flex">

                    <Link to='/'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>home</div>
                    </Link>

                    <Link to='/courses'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>courses</div>
                    </Link>

                    <Link to="/blog">
                    <div className='py-[12px] hover:bg-[#29292e]  px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] '>
                       blogs
                        </div>
                    </Link>

                    <Link to='/aboutus'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>about us</div>
                    </Link>

                    <Link to='/dashboard'>
                    <div className='py-[12px] hover:bg-[#29292e]   px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:'>dashboard</div>
                    </Link>
                </div>


                {/* button section */}
                <div className="right min-[776px]:flex gap-1 hidden ">
                    <Link to='/login'>
                        <li className='list-none rounded-sm bg-[#29292e] text-white py-[11px] px-[38px]  cursor-pointer shadow-lg transition-transform hover:scale-105 hover:text-teal-400'>
                            Log In
                        </li>
                    </Link>

                    <Link to='/signin'>  
                    <li className='list-none rounded-sm bg-[#29292e] text-white py-[11px] px-[38px] cursor-pointer shadow-lg transition-transform hover:scale-105 hover:text-teal-400'>Sign in</li>
                    </Link>
                </div>
                <div className='block  min-[776px]:hidden'  onClick={togglemenu}>
                    <img src={Menu} alt="" srcset="" className='w-7'/>
                </div>
            </div>

            {IsVisibility &&(<div className="gap min-[776px]:hidden">
                    <Link to='/'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>home</div>
                    </Link>

                    <Link to='/courses'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>courses</div>
                    </Link>

                    <Link to="/blog">
                    <div className='py-[12px] hover:bg-[#29292e]  px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] '>
                       blogs
                        </div>
                    </Link>

                    <Link to='/aboutus'>
                    <div className='py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff] hover:'>about us</div>
                    </Link>

                    <Link to='/dashboard'>
                    <div className='py-[12px] hover:bg-[#29292e]   px-[16px] rounded-[6px] cursor-pointer text-[#ffffff] hover:'>dashboard</div>
                    </Link>
            </div>)}
            
        </>
    )
}

export default navbar