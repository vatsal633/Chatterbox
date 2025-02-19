import { useState, useRef } from "react"
import React from "react"
import { Link, useNavigate  } from "react-router-dom"
import Google from "../assets/google.png"
import Github from "../assets/github.png"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passRef = useRef()
  const userRef = useRef()

  const navigate = useNavigate();

  const onsubmitform = (e) => {
    e.preventDefault()

    let emailData = emailRef.current.value
    let passData = passRef.current.value
    let userData = userRef.current.value

    // Fetch stored user data from localstorage
    const storedUser = JSON.parse(localStorage.getItem(userData))

    if (storedUser && storedUser.email === emailData && storedUser.password === passData) {
      localStorage.setItem("isLoggedIn", "true")
      emailRef.current.value = ""
      passRef.current.value = ""
      navigate('/dashboard',{ state: { username: userData }})
    } else {
      alert("Invalid email or password")
    }
  }
   

  return (
    <div className="wrapper flex min-h-screen justify-center items-center bg-black">
      <form
        onSubmit={onsubmitform}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] w-[37%] p-8 rounded-[10px] shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Login
        </h2>

        {/* username */}

        <div className="flex justify-center mb-4">
          <input
            type="text"
            ref={userRef}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex justify-center">
          <input
            type="email"
            ref={emailRef}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            ref={passRef}
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="w-[78%] mt-4 m-auto">
          <Link to="/forgerpass">
          <span className="text-[#00C6FF] ">Forget password?</span>
          </Link>
        </div>

       {/* or */}
        <div className="flex items-center justify-center">
          <div className="border-t w-1/3"></div>
          <div className="px-2 text-gray-500">or</div>
          <div className="border-t w-1/3"></div>
        </div>
        {/* handles */}
        <div className="flex justify-around ">
          <div className="cursor-pointer gap-2 items-center flex rounded-sm bg-white text-black py-[7px] px-[23px]">
            <img src={Google} alt="" className="w-[26px]" />
            <span>google</span>
          </div>
          <div className="cursor-pointer gap-2 flex items-center rounded-md bg-white text-black py-[7px] px-[23px]">
          <img src={Github} alt="" className="w-[26px]" />

            <span>github</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#00C6FF] text-black font-bold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-[#FF9800] hover:text-white cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* Extra Options */}
        <div className="text-center mt-4">
          <span className="text-gray-400">Don't have an account? </span>
          <Link to="/signin" className="text-[#00C6FF] hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
