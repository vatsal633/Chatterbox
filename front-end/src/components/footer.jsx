import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1E1E1E] to-[#3D3D3D] text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#00C6FF]">CodeQuest</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Empowering users with the best experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">Home</a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">About</a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">Services</a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C6FF]">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CodeQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;
