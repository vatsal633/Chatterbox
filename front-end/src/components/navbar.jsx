import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import Menu from "../assets/menu.svg"

const navbar = () => {

    const [IsVisibility, setIsVisibility] = useState(false)
    const [Username, setUsername] = useState('')
    const [Verified, setVerified] = useState(false)


    const togglemenu = () => {
        setIsVisibility(!IsVisibility)
    }

    useEffect(() => {
        try {
            const authentication = JSON.parse(localStorage.getItem("isLoggedin"));
            const logged_username = JSON.parse(localStorage.getItem("isLoggedin"));
            if (authentication && authentication.auth === true) {
                setVerified(authentication.auth);
                setUsername(logged_username.name)
            }
        } catch (e) {
            console.error("Error reading authentication:", e);
        }
    }, []);
    return (
        <>
            <div className='navbar flex justify-between items-center shadow-md p-2 '>
                {/* logo section */}

                <Link to='/'>
                    <div className="left">
                        <img src={Logo} className="w-20" alt="" srcset="" />

                    </div>
                </Link>

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

                    {Verified && (
                        <Link to={`/${Username}/dashboard`}>
                            <div className='nav-link py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff]'>Dashboard</div>
                        </Link>
                    )}

                </div>


                {/* button section */}
                <div className="right min-[776px]:flex gap-1 flex gap-2">
                    <div>
                        <Link to='/login'>
                            <li className='px-6 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-white transition list-none'>
                                Log In
                            </li>
                        </Link>
                    </div>
                    <div>
                        <Link to='/signin'>
                            <li className='px-6 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-white transition list-none'>Sign in</li>
                        </Link>
                    </div>
                </div>
                <div className='block  min-[776px]:hidden' onClick={togglemenu}>
                    <img src={Menu} alt="" srcset="" className='w-7' />
                </div>
            </div>

            {IsVisibility && (<div className="gap min-[776px]:hidden">
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

                {Verified && (
                    <Link to={`/${Username}/dashboard`}>
                        <div className='nav-link py-[12px] px-[16px] hover:bg-[#29292e]   rounded-[6px] cursor-pointer text-[#ffffff]'>Dashboard</div>
                    </Link>
                )}
            </div>)}

        </>
    )
}

export default navbar