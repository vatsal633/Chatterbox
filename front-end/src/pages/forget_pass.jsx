import React from 'react';
import Button from '../components/button';
import {Link} from "react-router-dom"
import { useState,useEffect,useRef } from 'react';


const ForgetPass = () => {

    const [Email, setEmail] = useState("")
    const mail_ref = useRef()
    const username_ref = useRef()

    const handleSendCode=()=>{
        let Entered_mail = mail_ref.current.value.trim()
        let Entered_username = username_ref.current.value.trim()

        const storded_data = JSON.parse(localStorage.getItem(Entered_username))

        if(!storded_data){
            console.log("username not found")
        }

        if(Entered_mail === storded_data.email ){
            console.log("Email matches. Sending code...");
        }

        else{
            console.log("Entered email does not match stored email.");

        }
    }



    return (
        <div className='bg-black min-h-screen flex justify-center items-center px-4'>
            <div className='bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-8 rounded-2xl shadow-2xl max-w-md w-full text-center'>


                <h1 className='text-3xl font-semibold text-white mb-4'>Forgot Password?</h1>
                <p className='text-gray-400 mb-6 text-sm'>
                    Enter your email below, and we'll send you a reset link.
                </p>

                {/* Input Field */}
                <div className='relative'>
                    <input
                        type="text"
                        ref={username_ref}
                        placeholder='Enter your username'
                        className='w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none focus:border-teal-400 px-4 py-2 text-lg transition-all duration-300 my-4'
                    />
                </div>

                <div className='relative'>
                    <input
                        type="email"
                        ref={mail_ref}
                       
                        placeholder='Enter your email'
                        className='w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none focus:border-teal-400 px-4 py-2 text-lg transition-all duration-300'
                    />
                </div>


                <div className='flex justify-center mt-6' >
                <button className='bg-[#00c6ff] py-[8px] px-[12px] rounded-[7px] mt-[7px] hover:bg-[#FF9800] cursor-pointer' onClick={handleSendCode}>
                Send Code
              </button>
                </div>


                <p className='text-gray-400 mt-4 text-sm'>
                    Remember your password?
                    <Link to='/login'>
                    <span className='text-teal-400 cursor-pointer hover:underline'> Login</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPass;
