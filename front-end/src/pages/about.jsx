// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] text-gray-200 font-sans px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">About Our Chat App</h1>
          <p className="text-gray-400 mt-2 text-lg">
            A real-time chat experience powered by AI roleplay bots.
          </p>
        </div>

        {/* Feature Sections */}
        <section className="bg-[#181818] border border-gray-700 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">🚀 Why This Project?</h2>
          <p className="text-gray-300 leading-relaxed">
            This app was built to combine the power of real-time chat with the creativity of AI roleplay.
            Whether you're chatting with an AI teacher, mentor, or just having fun — the experience feels natural and dynamic.
          </p>
        </section>

        <section className="bg-[#181818] border border-gray-700 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">🛠 Tech Stack</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>React + Tailwind CSS</li>
            <li>Socket.io + Node.js for real-time communication</li>
            <li>Firebase Auth & Firestore</li>
            <li>OpenAI API for AI roleplay bots</li>
          </ul>
        </section>

        <section className="bg-[#181818] border border-gray-700 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">✨ Features</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Real-time human and AI chat</li>
            <li>Roleplay bots: Teacher, Mentor, etc.</li>
            <li>Markdown + voice support + emoji reactions</li>
            <li>Only Dark Theme (No light mode distractions 😎)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
