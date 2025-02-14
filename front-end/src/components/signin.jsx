import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Google from "../assets/google.png"
import Github from "../assets/github.png"


const Signin = () => {

  // form elements states
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [repass, setrepass] = useState("")
  const [Password, setPassword] = useState("")


  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(`username:${username}`)
    console.log(`email:${email}`)
    console.log(`password:${Password}`)
    console.log(`re password:${repass}`)
  };



  return (
    <div className="wrapper flex min-h-screen justify-center items-center bg-black">
      <form
        onSubmit={onSubmitForm}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] w-[37%] p-8 rounded-[10px] shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Sign In
        </h2>

        {/* Username Input */}
        <div className="flex justify-center">
          <input
            type="text"
            onChange={(e) => { setusername(e.target.value) }}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex justify-center mt-4">
          <input
            type="email"
            onChange={(e) => { setemail(e.target.value) }}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Re-enter Password */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            onChange={(e) => { setrepass(e.target.value) }}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Re-enter password"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="border-t w-1/3"></div>
          <div className="px-2 text-gray-500">or</div>
          <div className="border-t w-1/3"></div>
        </div>

        <div className="flex justify-around ">
          <div className="cursor-pointer gap-2 items-center flex rounded-sm bg-white text-black py-[7px] px-[23px]">
            <img src={Google} alt="" className="w-[26px]" />
            <span className="font-semibold">google</span>
          </div>
          <div className="cursor-pointer gap-2 flex items-center rounded-md bg-white text-black py-[7px] px-[23px]">
            <img src={Github} alt="" className="w-[26px]" />

            <span className="font-semibold" >github</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#00C6FF] text-black font-bold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-[#FF9800] hover:text-white"
          >
            Sign In
          </button>
        </div>

        {/* Extra Options */}
        <div className="text-center mt-4">
          <span className="text-gray-400">Already have an account? </span>
          <Link to="/login" className="text-[#00C6FF] hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;