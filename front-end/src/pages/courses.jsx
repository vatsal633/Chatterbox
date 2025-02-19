import React, { useState } from "react";

const courses = [
  { language: "C", topics: ["Pointers", "Recursion", "OOP", "Data Structures"] },
  { language: "C++", topics: ["OOP", "STL", "Recursion", "DP"] },
  { language: "Python", topics: ["OOP", "Data Science", "AI & ML"] },
  { language: "Java", topics: ["OOP", "Collections", "Multithreading"] },
];

const CoursePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">📚 Select a Course</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <button
            key={index}
            className={`p-6 rounded-lg text-xl font-semibold shadow-lg transition hover:bg-blue-500 hover:text-white ${
              selectedLanguage === course.language ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setSelectedLanguage(course.language)}
          >
            {course.language}
          </button>
        ))}
      </div>

      {selectedLanguage && (
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            🏆 Topics for {selectedLanguage}
          </h3>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {courses
              .find((course) => course.language === selectedLanguage)
              ?.topics.map((topic, index) => (
                <button
                  key={index}
                  className="px-5 py-3 bg-gray-200 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition"
                >
                  {topic}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
