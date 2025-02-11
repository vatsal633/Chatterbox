import React from 'react'
import { Link } from 'react-router-dom'
const login = () => {

  const onsubmitform = ()=>{
    alert("form submited")
  }

  return (
    <>
      <div className='wrapper flex min-h-[calc(100vh-64px)] justify-center items-center'>
         <form action="" className='bg-gradient-to-r from-[#662D8C] to-[#ED1E79] w-[37%] rounded-[7px]'>
            <div className="form-heading text-6xl text-white text-center">Login</div>
            <div className='email-area flex justify-center  '>
              <input type="email"  className='px-[12px] py-[11px] my-6 rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='enter the email'/>
            </div>
            <div className='password-area flex justify-center'>
              <input type="password" className='px-[12px] py-[11px] rounded-[7px] w-[72%] text-black bg-white' name="" id="" placeholder='enter password'/>
            </div>

            <div className="submitarea flex justify-center my-5">
                <button type='submit' onClick={onsubmitform} className='transition duration-[0s,0.5s] bg-white text-black py-[11px] px-[38px] rounded-[7px] cursor-pointer'>Login</button>
            </div>

            <div className="extra ">
                <span className='text-black'>Already Have Any Account?</span>
              <Link to='/signin' className='text-blue underline'>
              Sign in
              </Link>
            </div>
         </form>
      </div>

    </>
  )
}

export default login