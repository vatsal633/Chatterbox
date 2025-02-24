import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const userRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    let username = userRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let password = passRef.current.value.trim();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
      setError("Username already taken! Try a different one.");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem(username, JSON.stringify({ username, email, password }));
    
    setSuccess("Account created successfully! Redirecting...");
    setError("");

    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="wrapper flex min-h-screen justify-center items-center bg-black p-4">
      <form
        onSubmit={handleSignup}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] w-full max-w-md p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <input
          type="text"
          ref={userRef}
          className="w-full px-4 py-3 mb-4 bg-[#242424] text-white rounded-lg"
          placeholder="Choose a username"
          required
        />
        <input
          type="email"
          ref={emailRef}
          className="w-full px-4 py-3 mb-4 bg-[#242424] text-white rounded-lg"
          placeholder="Enter email"
          required
        />
        <input
          type="password"
          ref={passRef}
          className="w-full px-4 py-3 mb-4 bg-[#242424] text-white rounded-lg"
          placeholder="Create password"
          required
        />

        <button type="submit" className="w-full bg-[#00C6FF] text-black font-bold py-3 rounded-lg hover:bg-[#FF9800] hover:text-white">
          Sign Up
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-400">Already have an account? </span>
          <Link to="/login" className="text-[#00C6FF] hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
