// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const topics = ["Introduction", "Variables", "Loops", "Functions", "Pointers"];

const Sidebar = () => {
  return (
    <div className="w-72 bg-[#181818] p-6 min-h-screen border-r border-gray-700">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <BookOpenIcon className="w-6 h-6 text-cyan-400" /> C Topics
      </h2>
      <ul className="space-y-3">
        {topics.map((topic, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/c-language/${topic.toLowerCase()}`}
              className="block p-3 bg-[#242424] rounded-lg hover:bg-cyan-600 transition duration-300"
            >
              {topic}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;