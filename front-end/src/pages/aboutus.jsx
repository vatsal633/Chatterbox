import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#1A1A1D] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
           About <span className="text-blue-500">CodeQuest</span>
        </h2>
        <p className="text-lg text-white leading-relaxed">
          Welcome to <strong>CodeQuest</strong>, your ultimate AI-powered coding practice platform! Whether you're a beginner or an experienced programmer, we provide <strong>intelligent, topic-based coding challenges</strong> tailored to your learning needs.
        </p>
      </div>

      {/* card section start */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">AI-Generated Challenges</h3>
          <p className="text-white">Get personalized coding problems based on the topics you've learned.</p>
        </div>

        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Hands-on Practice</h3>
          <p className="text-white">Apply your knowledge by solving real-world coding exercises.</p>
        </div>

        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Multiple Languages</h3>
          <p className="text-white">Practice in C, C++, Python, Java, and more!</p>
        </div>

        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Instant Feedback</h3>
          <p className="text-white">Improve faster with AI-powered hints and solutions.</p>
        </div>

        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Progress Tracking</h3>
          <p className="text-white">Monitor your growth with performance analytics.</p>
        </div>

        <div className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Interactive Learning</h3>
          <p className="text-white">Experience engaging challenges that make learning fun.</p>
        </div>
      </div>
      {/* card section end*/}

      {/* extra text section start */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-teal-400">🌟 Our Mission</h3>
        <p className="text-lg text-white max-w-3xl mx-auto mt-4">
          At <strong>CodeQuest</strong>, we believe that learning to code should be **interactive, challenging, and rewarding**. Our platform is designed to **help students, developers, and coding enthusiasts sharpen their problem-solving skills** and **become confident programmers**.
        </p>
        <p className="mt-6 text-xl font-bold text-blue-500">Join us on this exciting journey and take your coding skills to the next level! 🚀</p>
      </div>
      {/* extra text section end */}
    </section>
  );
};

export default AboutUs;
