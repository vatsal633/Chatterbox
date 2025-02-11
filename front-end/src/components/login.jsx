import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onsubmitform = (e) => {
    e.preventDefault(); // Prevents page reload
    alert("Form Submitted");
  };

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

        {/* Email Input */}
        <div className="flex justify-center">
          <input
            type="email"
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#00C6FF] text-black font-bold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-[#FF9800] hover:text-white"
          >
            Login
          </button>
        </div>

        {/* Extra Options */}
        <div className="text-center mt-4">
          <span className="text-gray-400">Don't have an account? </span>
          <Link to="/signup" className="text-[#00C6FF] hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
