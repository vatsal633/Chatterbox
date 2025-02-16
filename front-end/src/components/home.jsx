import React from 'react';
import { Link } from 'react-router-dom';
import practiceimg from '../assets/home-image.png';
import RightImg from '../assets/code.jpg';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url(./assets/bgimg3.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center p-6">
          <img src={practiceimg} alt="Coding Practice" className="w-40 mx-auto mb-4" loading="lazy" />
          <h1 className="text-4xl font-bold">CodeQuest - A New Learning Platform</h1>
          <p className="text-lg my-4">Sharpen Your Coding Skills with AI!</p>
          <p className="text-lg">Strengthen Your Topics & Learn New Concepts</p>
          <Link to="/signin">
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform">
              Get Started →
            </button>
          </Link>
        </div>
      </div>

      {/* Explore Skills Section */}
      <div className="flex flex-col md:flex-row items-center bg-white w-11/12 mx-auto p-12 my-11 rounded-2xl shadow-lg">
        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-blue-600">Explore and Expand Your Skills</h2>
          <p className="my-5 text-gray-600 text-lg font-medium">
            Every idea starts with a single line of code. Prep for jobs and sharpen your skills with a global community of developers.
            Access the content you need to develop new skills – and land your dream job.
          </p>
          <Link to="/signin">
            <button className="bg-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition">
              Start Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-6 flex justify-center">
          <img src={RightImg} alt="Code" className="rounded-lg shadow-md" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Home;
