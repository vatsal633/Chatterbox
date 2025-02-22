import React from "react";
import Sidebar from "../components/Sidebar";

const Practice = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      {/* Sidebar for topics */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-cyan-400">C Language Practice</h1>
        <p className="mt-4 text-gray-400 text-lg">
          Select a topic from the sidebar to start practicing C programming.
        </p>
      </div>
    </div>
  );
};

export default Practice;
