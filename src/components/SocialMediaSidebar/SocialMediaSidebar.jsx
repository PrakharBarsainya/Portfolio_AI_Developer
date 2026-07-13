import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaSidebar = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center space-y-6 p-2">
      <a href="https://github.com/PrakharBarsainya" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
        <FaGithub size={30} className="text-gray-700 hover:text-yellow-500" />
      </a>
      <a href="https://www.linkedin.com/in/prakhar-barsainya-6538ab248/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
        <FaLinkedin size={30} className="text-gray-700 hover:text-blue-600" />
      </a>
      <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
        <FaTwitter size={30} className="text-gray-700 hover:text-blue-400" />
      </a>
      <a href="https://www.instagram.com/prakhar_barsainya1607/?next=%2F" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
        <FaInstagram size={30} className="text-gray-700 hover:text-pink-500" />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;

