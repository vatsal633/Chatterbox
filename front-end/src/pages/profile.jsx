import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import DashboardNav from "../components/dashboard_nav";

const Profile = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="flex min-h-screen bg-[#0b0f17] text-white flex-col md:flex-row">
      {/* Sidebar */}
      <DashboardNav />

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
            <h2 className="text-3xl font-semibold">Vatsal Munjpara</h2>
            <span className="text-gray-400">🇮🇳</span>
          </div>
          <div className="text-gray-400 text-center my-2">
            vatsalmunjpara@gmail.com
          </div>
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
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a skill..."
              className="w-full p-2 bg-gray-800 rounded-lg outline-none"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              onClick={addSkill}
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
          {skills.length === 0 ? (
            <p className="text-gray-400 mt-4">Add your relevant skills</p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-red-400 hover:text-red-500"
                  >
                    ✖
                  </button>
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
