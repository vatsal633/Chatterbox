import React from "react";

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Mastering OOP in C++",
      category: "Programming",
      image: "https://source.unsplash.com/400x250/?code,technology",
      excerpt: "Learn how Object-Oriented Programming (OOP) works in C++ with real-world examples.",
    },
    {
      id: 2,
      title: "5 Python Challenges to Test Your Skills",
      category: "Coding Challenges",
      image: "https://source.unsplash.com/400x250/?python,coding",
      excerpt: "Practice your Python skills with these AI-generated coding challenges.",
    },
    {
      id: 3,
      title: "React vs. Next.js: Which One to Choose?",
      category: "Web Development",
      image: "https://source.unsplash.com/400x250/?web,development",
      excerpt: "Explore the key differences between React and Next.js for building web applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">📚 Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-400">{blog.category}</p>
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-300 mt-2">{blog.excerpt}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
