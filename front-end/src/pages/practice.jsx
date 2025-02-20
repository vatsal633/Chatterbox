import React from "react";
import Sidebar from "../components/sidebar";

const practice = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      {/* Sidebar for topics */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">C Language Practice</h1>
        <p className="mt-2 text-gray-400">
          Select a topic from the sidebar to start practicing C programming.
        </p>
      </div>
    </div>
  );
};

export default practice;
