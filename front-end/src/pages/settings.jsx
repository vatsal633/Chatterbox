import React, { use, useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Back from '../assets/back.svg'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const { username } = useParams()

  // Add useRef for input fields leter used in useEffect to show the data
  const username_ref = useRef()
  const email_ref = useRef()

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

  //add useeffect to show the data to input field
  useEffect(() => {
    username_ref.current.value = username
    // let stored_name = JSON.parse(localStorage.getItem(username))
    // email_ref.current.value = stored_name.email

    async function fetchdata() {
      try {
        let response = await axios.get(`http://localhost:3000/api/auth/user/${username}`);
        // console.log("userdata:",response.data)

        let email = response.data.email
        email_ref.current.value = email
      } catch (err) {
        console.log("error while fetching data : ", err)
      }
    }

    fetchdata();
  })

  const handleChange = () => {
    try {
      // let stored_name = JSON.parse(localStorage.getItem(username))
      // stored_name.email = email_ref.current.value
      // stored_name.username = username_ref.current.value
      // localStorage.setItem(username_ref.current.value,JSON.stringify(stored_name))
      let name = username
      let email = email_ref.current.value
      let response = axios.put('http://localhost:3000/api/auth/update-name',{name,email});


    } catch (e) {
      console.log(e)
    }
  }


  //fetch api to change the password
  const changepass = async () => {
    try {
      let old_password = document.getElementById('oldpassword').value
      let new_password = document.getElementById('newpassword').value


      if (!old_password || !new_password) {
        alert("All fields are required")
      }




      const response = axios.put(`http://localhost:3000/api/auth/update-password`, {
        email: email_ref.current.value,
        oldpassword: old_password,
        newpassword: new_password
      })

      alert("Password Updated")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex max-h-full[#0b0f17] text-white max-[768px]:flex-col">
      {/* Sidebar */}

      <div className="w-full bg-gray-900 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-white">Settings</h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`absolute md:relative z-50 w-64 bg-gray-800 p-6 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:block fixed h-full top-0 left-0 md:h-auto md:static`}
      >
        <h1 className="text-2xl text-center my-3 text-white">Settings</h1>

        {/* Dashboard Navigation */}
        <nav>
          <div className="flex" onClick={() => {
            navigate(`/${username}/dashboard`)
          }}>

            <img src={Back} alt="" width={20} />
            <span className="text-xl flex items-center gap-3 my-4 hover:text-white text-gray-300">Back To dashboard</span>
          </div>
        </nav>

        <div className="absolute text-gray-400 bottom-0">@CodeQuest</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">

        {/* Profile Settings */}
        <div id="profile" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Profile Settings</h3>
          <div className="flex items-center space-x-4 max-[933px]:flex-col">
            <div className="w-16 h-16 bg-gray-600 rounded-full  max-[933px]:mb-4"></div>
            <div className="space-y-2">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-600 rounded  text-white" ref={username_ref} />
              <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-600 rounded  text-white" ref={email_ref} />
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleChange}>Save Changes</button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div id="security" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Account Security</h3>
          <input type="password" id="oldpassword" placeholder="Enter Old Password" className="w-full p-2 border border-gray-600 rounded  text-white mb-3 " />
          <input type="password" id="newpassword" placeholder="Enter New Password" className="w-full p-2 border border-gray-600 rounded  text-white" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={changepass}>Update Password</button>
        </div>

        {/* Notifications */}
        <div id="notifications" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="w-6 h-6"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
