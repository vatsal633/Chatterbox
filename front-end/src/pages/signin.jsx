import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Google from "../assets/google.png";
import Github from "../assets/github.png";

const Signin = () => {
  const [error, setError] = useState("");

  // Form elements refs
  const usernameref = useRef();
  const emailref = useRef();
  const passref = useRef();
  const repassref = useRef();

  // Form submit function
  const onSubmitForm = (e) => {
    e.preventDefault();
    const enteredUsername = usernameref.current.value;
    const enteredEmail = emailref.current.value;
    const enteredPassword = passref.current.value;
    const enteredRepass = repassref.current.value;

    localStorage.setItem(
      enteredUsername,
      JSON.stringify({
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      })
    );

    if (enteredPassword !== enteredRepass) {
      setError("Password does not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-black p-4">
      <form
        onSubmit={onSubmitForm}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] w-full max-w-[450px] p-6 sm:p-8 rounded-[10px] shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
          Sign In
        </h2>

        {/* Username Input */}
        <div className="flex justify-center">
          <input
            type="text"
            ref={usernameref}
            className="px-4 py-3 w-full bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex justify-center mt-4">
          <input
            type="email"
            ref={emailref}
            className="px-4 py-3 w-full bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            ref={passref}
            className="px-4 py-3 w-full bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Re-enter Password */}
        <div className="flex justify-center mt-4">
          <input
            type="password"
            ref={repassref}
            className="px-4 py-3 w-full bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C6FF] placeholder-gray-400"
            placeholder="Re-enter password"
            required
          />
        </div>

        {error && <div className="text-red-400 text-sm mt-2">{error}</div>}

        {/* OR Divider */}
        <div className="flex items-center justify-center my-5">
          <div className="border-t w-2/4 opacity-25"></div>
          <div className="px-2 text-gray-500">or</div>
          <div className="border-t w-2/4 opacity-25"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col sm:flex-row justify-around gap-3">
          <div className="cursor-pointer flex items-center gap-2 bg-white text-black py-2 px-4 rounded-md font-semibold">
            <img src={Google} alt="Google" className="w-[24px]" />
            <span>Google</span>
          </div>
          <div className="cursor-pointer flex items-center gap-2 bg-white text-black py-2 px-4 rounded-md font-semibold">
            <img src={Github} alt="Github" className="w-[24px]" />
            <span>Github</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#00C6FF] text-black font-bold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-[#FF9800] hover:text-white w-full"
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
