import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    alert("Sign In Successful");
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
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex justify-center mt-4">
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

        {/* Re-enter Password */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            className="px-4 py-3 w-[80%] bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Re-enter password"
            required
          />
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