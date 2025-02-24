import React from 'react';
import { Link } from 'react-router-dom';
import practiceimg from '../assets/home-image.png';
import RightImg from '../assets/code.jpg';

const Home = () => {
  // dumy testimonials
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "CodeQuest made my coding journey so much easier. The AI-generated questions are spot on!",
    },
    {
      name: "Jane Smith",
      role: "Full-Stack Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I love the real-time coding feature! It's like having a coding mentor at all times.",
    },
    {
      name: "David Brown",
      role: "AI Researcher",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      text: "The AI-generated challenges are super adaptive! It really pushes me to improve.",
    },
  ];

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

      {/* Explore Skills Section start*/}
      <div className="flex flex-col md:flex-row items-center bg-white w-11/12 mx-auto p-12 my-11 rounded-2xl shadow-lg max-[628px]:p-[12px] max-[550px]:p-[0px]">
        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-blue-600 ">Explore and Expand Your Skills</h2>
          <p className="my-5 text-gray-600 text-lg font-medium">
            Every idea starts with a single line of code. Prep for jobs and sharpen your skills with a global community of developers.
            Access the content you need to develop new skills – and land your dream job.
          </p>
          <Link to="/signin">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200">
              Get Started →
            </button>

          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-6 flex justify-center">
          <img src={RightImg} alt="Code" className="rounded-lg shadow-md" loading="lazy" />
        </div>
      </div>

      {/* explore skill section end */}


      {/* testimonials section start */}
      <section className="bg-[#1a1a1d] py-16 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">What Users Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#29292e] p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-teal-400"
                />
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <h4 className="mt-4 text-xl font-semibold text-teal-300">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* testimonial section end */}


      {/* Topics List Section start*/}
      <div className="w-11/12 mx-auto my-12 p-10 bg-gradient-to-r from-[#1a1a1d] to-[#222226] text-white rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#44d1d1]">
          Master Programming Languages & Frameworks
        </h2>

        <p className="text-lg text-gray-300 text-center mb-6">
          Strengthen your coding skills in various programming languages & Frameworks and become a pro!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["C", "C++", "Java", "Python", "Javascript", "PHP", "Node.js", "React"].map((topic, index) => (
            <div
              key={index}
              className="p-6 cursor-pointer bg-[#2b2b2f] rounded-xl shadow-md text-center font-bold text-xl text-gray-200 transition-transform hover:scale-105 hover:text-teal-400 "
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
      {/* Topics List Section end*/}


      {/*demo dashboard start */}
      <div className='w-11/12 m-auto gap-3 flex items-center justify-between bg-gradient-to-r from-[#1a1a1d] to-[#222226] my-12 p-10 rounded-2xl shadow-2xl flex-col min-[1129px]:flex-row'>
        {/* text section */}
        <div className='text-section'>
          <h1 className='text-4xl font-bold  mb-8 text-[#44d1d1]'>Track Your Progress With Dashboard</h1>
          <p className='my-5 text-white'>The Track Your Progress dashboard in CodeQuest provides an interactive and visual way to monitor your coding journey. It helps users stay motivated and improve by offering insights into their problem-solving performance.</p>
          <button className="px-6 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-white transition">
            Explore Topics
          </button>

        </div>


        {/*image section*/}
        <div className="image-section">
          <img src={RightImg} alt="" />
        </div>
      </div>
      {/*demo dashboard end */}

    </>
  );
};

export default Home;
