// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans relative">
     

      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Talk with Humans or Roleplay <span className="text-cyan-400">AI Bots</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-10 text-lg">
          Experience immersive, real-time conversations with AI mentors, teachers, and more. Now with voice, markdown, and emoji reactions!
        </p>
        <Link
          to="/chat"
          className="bg-cyan-500 hover:bg-cyan-600 text-lg px-6 py-3 rounded-lg transition shadow-lg"
        >
          Start Chatting
        </Link>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-gray-600 text-sm">
        Made with ❤️ using React, Socket.io, Firebase, and OpenAI
      </footer>
    </div>
  );
};

export default HomePage;
