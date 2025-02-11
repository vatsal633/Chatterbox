import React from 'react'
import { Link } from 'react-router-dom'

const signin = () => {
  return (
    <>
        <div className='wrapper flex min-h-[calc(100vh-64px)] justify-center items-center'>
         <form action="" className='bg-gradient-to-r from-[#662D8C] to-[#ED1E79]  w-[37%] rounded-[7px]'>
            <div className="form-heading text-6xl text-white text-center">Sign In</div>

            <div className='username-area flex justify-center  my-6'>
              <input type="text"  className='px-[12px] py-[11px]  rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='enter the username'/>
            </div>

            <div className='email-area flex justify-center  '>
              <input type="email"  className='px-[12px] py-[11px]  rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='enter the email'/>
            </div>
            
            <div className='password-area flex justify-center  '>
              <input type="password"  className='px-[12px] py-[11px] my-6 rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='enter the password'/>
            </div>
            <div className='re-password-area flex justify-center'>
              <input type="password" className='px-[12px] py-[11px] rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='re enter password'/>
            </div>

            <div className="submitarea flex justify-center my-5">
                <button type='submit' className='transition duration-[0s,0.5s] bg-white text-black py-[11px] px-[38px] rounded-[7px] cursor-pointer'>Sign IN</button>
            </div>

            <div className="extra ">
                <span className='text-black'>Already Have Any Account?</span>
              <Link to='/login' className='text-blue underline'>
              Login
              </Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default signin