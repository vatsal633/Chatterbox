import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [Change, setChange] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Load skills from localStorage when component mounts
  useEffect(() => {
    const savedSkills = localStorage.getItem(username);
    try {
      const parsedSkills = savedSkills ? JSON.parse(savedSkills) : [];
      if (Array.isArray(parsedSkills)) {
        setSkills(parsedSkills); // Ensure it's always an array
      } else {
        setSkills([]); // If it's not an array, reset to empty array
      }
    } catch (error) {
      console.error("Error parsing skills from localStorage:", error);
      setSkills([]); // Fallback to empty array
    }
  }, [username]);
  
  

  const addSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const removeSkill = (skill) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const SaveSkill = () => {
    localStorage.setItem(`${username}_skills`, JSON.stringify(skills));
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToSettings = () => {
    navigate(`/${username}/settings`);
  };

  const handleLogout = ()=>{
    localStorage.removeItem("isLoggedin");
    navigate("/");
  }

  return (
    <div className="flex min-h-screen bg-[#0b0f17] text-white flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full bg-gray-900 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      <aside
        ref={sidebarRef}
        className={`absolute md:relative z-50 w-64 bg-gray-800 p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:block fixed h-full top-0 left-0 md:h-auto md:static`}
      >
        <h1 className="text-2xl text-center my-3 text-white">Dashboard</h1>
        {/* Dashboard Navigation */}
        <nav>
          <Link to={`/${username}/dashboard`} className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
            🏠 <p>Home</p>
          </Link>
          <Link to={`/${username}/profile`} className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
            <FaUserCircle />
            <p>Profile</p>
          </Link>
          <button onClick={goToSettings} className="flex items-center gap-3 my-4 hover:text-white text-gray-300">
            ⚙️ Settings
          </button>
          <Link to="/" className="flex items-center gap-3 my-4 hover:text-red-500 text-red-400">
            <FaSignOutAlt />
            <p>Log Out</p>
          </Link>
        </nav>

        <div className="absolute text-gray-400 bottom-0">@CodeQuest</div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 mt-6">
        {/* User Profile Card */}
        <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100"
              alt="profile"
              className="rounded-full w-24 h-24 border-4 border-gray-600"
            />
          </div>
          <div className="flex items-center justify-center mt-4 gap-2">
            <h2 className="text-3xl font-semibold">{username}</h2>
            <span className="text-gray-400">🇮🇳</span>
          </div>
          <div className="text-gray-400 text-center my-2">{username}@gmail.com</div>
        </div>

        {/* Personal Information */}
        <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-6">
          <h1 className="text-2xl mb-4">Personal Information</h1>
          <div className="flex items-center text-gray-400 my-2 gap-2">
            <MdOutlineAlternateEmail className="text-lg" />
            <span>vatsalmunjpara@mail.com</span>
          </div>
          <div className="flex items-center text-gray-400 my-2 gap-2">
            <MdOutlineLocalPhone className="text-lg" />
            <span>566545354</span>
          </div>
          <div className="flex items-center text-gray-400 my-2 gap-2">
            <FaLocationDot className="text-lg" />
            <span>India</span>
          </div>
        </div>

        {/* Skill Section */}
        <div className="bg-[#111317] border p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-6">
          <h1 className="mb-4 text-2xl">Skills</h1>

          {Change ? (
            <button
              onClick={() => {
                setChange(!Change);
                SaveSkill();
              }}
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mb-2"
            >
              Save Changes
            </button>
          ) : (
            <button onClick={() => setChange(!Change)} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mb-2">
              Add Skill
            </button>
          )}

          {Change && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill..."
                className="w-full p-2 bg-gray-800 rounded-lg outline-none"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button onClick={addSkill} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add
              </button>
            </div>
          )}

          {skills.length === 0 ? (
            <p className="text-gray-400 mt-4">Add your relevant skills</p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-2">
                  {skill}
                  {Change && <button onClick={() => removeSkill(skill)} className="text-red-400 hover:text-red-500">✖</button>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
