import React from "react";
import { Link } from "react-router-dom";

const topics = ["Introduction", "Variables", "Loops", "Functions", "Pointers"];

const sidebar = () => {
  return (
    <div className="w-64 bg-[#1e1e1e] p-5">
      <h2 className="text-xl font-bold mb-4">C Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="mb-2">
            <Link
              to={`/c-language/${topic.toLowerCase()}`}
              className="block p-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded"
            >
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sidebar;
