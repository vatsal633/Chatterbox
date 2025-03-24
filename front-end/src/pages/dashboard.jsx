import axios from 'axios';
import { Axis3D } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
// import {Dashboard_nav} from '../components/dashboard_nav';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation()
  const { username } = useParams()
  // const user_name = location.state?.username || "Guest";
  const [Username, setUsername] = useState("")
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [solved,Setsloved] = useState(0)
  const [attempted_question,SetAttempted_question] = useState();
  const sidebarRef = useRef(null);
  const [width,Setwidth] = useState(0)// for sucess rate bar


  //state for displaying recent activity 
  const [recent_lang,setrecent_lang] = useState("No data")
  const [recent_topic,setrecent_topic] = useState("No data")

  const navigate = useNavigate()


  // checks in local storage
  // useEffect(() => {
  //   for (let key in localStorage) {
  //     if (localStorage.hasOwnProperty(key) && key === user_name) {
  //       const userData = JSON.parse(localStorage.getItem(key));
  //       if (userData.username) {
  //         setUsername(key);
  //         break;
  //       }
  //     }
  //   }
  // }, [user_name]);

  //store the username in state
  useEffect(() => {
    if (username) {
      setUsername(username)
    }
  }, [username])

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])


  // fetching user statistics form database
  useEffect(() => {
    async function fetch_data() {
      try {
        let response = await axios.get(`${BASE_URL}/states/${username}/get-states`)

        let response2 = await axios.get(`${BASE_URL}/recent/${username}/get-recentact`)

        if (response.status === 200) {
          let userdata = response.data
          // console.log("success",response.data)
          Setsloved(userdata.solved_question)
          SetAttempted_question(userdata.attempted_question)
          Setwidth(userdata.success_rate)//set the sucess bar acording to success rate
          
        }

        
        //displaying recent activities to dashboard
        if (response2.status === 200 && response2.data?.data?.language && response2.data?.data?.topic) {
          setrecent_lang(response2.data.data.language)
          setrecent_topic(response2.data.data.topic)
        } else {
          console.log("User's language data not available.");
        }


      } catch (err) {
        console.log(err)
      }
    }
    fetch_data();
  }, [])

  const goToSettings = () => {
    navigate(`/${username}/settings`);
  };


  // console.log(`username is ${username}`)


  const handleLogout = () => {
    localStorage.removeItem("isLoggedin");
    navigate("/");
  }

  const handleCountinuePractice = () => {
    navigate(`/${username}/practice`);
  }




  // Handle click outside sidebar to close
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">

      {/* Mobile Navbar */}
      <div className="w-full bg-gray-900 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>


      <aside
        ref={sidebarRef}
        className={`absolute md:relative z-50 w-64 bg-gray-800 p-6 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
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
          <Link to="/" className="flex items-center gap-3 my-4 hover:text-red-500 text-red-400" onClick={handleLogout}>
            <FaSignOutAlt />
            <p>Log Out</p>
          </Link>
        </nav>


        <div className="absolute text-gray-400 bottom-0">@CodeQuest</div>
      </aside>



      {/* Main Dashboard */}
      <main className="flex-1 p-6 md:p-8">

        <h1 className="text-3xl font-bold">Welcome,{Username} </h1>
        <p className="text-gray-400 mt-2">Track your progress and continue learning.

        </p>


        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Practice Card */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className='text-2xl text-center my-1.5'>Currently Learning</h2>
            <div className='border w-full opacity-25  mb-2'></div>
            <h2 className="text-xl font-semibold">{recent_lang}</h2>
            <p className="text-gray-400 mt-2">{recent_topic}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={handleCountinuePractice}>
              Continue Practice
            </button>
          </div>

          {/* Courses Card */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">📚 Courses</h2>
            <p className="text-gray-400 mt-2">5 courses enrolled</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">📝 Recent Activity</h2>
            <p className="text-gray-400 mt-2">Solved 3 challenges today</p>
          </div>
        </div>

        {/* User Statistics Section */}
        <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white">📊 User Statistics</h2>
          <p className="text-gray-400">Your progress at a glance</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {/* Solved Questions */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">✅ Solved</h3>
              <p className="text-4xl font-semibold text-[#00c6ff]">{solved}</p>
            </div>

            {/* Attempted Questions */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">🔄 Attempted</h3>
              <p className="text-4xl font-bold text-[#FF9800]">{attempted_question?(attempted_question):0 }</p>
            </div>

            {/* Success Rate */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">📈 Success Rate</h3>
              <div className="relative w-full bg-gray-700 h-4 rounded-full mt-2">
                <div className="absolute top-0 left-0 h-4 bg-[#00c6ff] rounded-full" style={{ width: `${width}%`}}></div>
              </div>
              <p className="text-sm text-gray-400 mt-1">{width}% correct</p>
            </div>

            {/* Streak */}
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] p-4 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-white">🔥 Streak</h3>
              <p className="text-4xl font-bold text-red-500">7</p>
              <p className="text-sm text-gray-400">Days active</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;