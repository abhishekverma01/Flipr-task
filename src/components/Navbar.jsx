import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
<nav className="bg-gray-800 px-16 py-4 flex justify-between items-center text-white">
<div className="text-2xl font-bold">&#123;Finsweet</div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden  lg:flex space-x-6 justify-center items-center">
        <li><Link to="/" className="hover:text-secondary">Home</Link></li>
        <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
        <li><Link to="/about-us" className="hover:text-secondary">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-secondary">Contact us</Link></li>
        <button className="bg-white text-gray-800 px-4 py-2 rounded">Subscribe</button>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`lg:hidden z-10 absolute top-16 left-0 w-full bg-gray-800 p-4 transition-all duration-300 ease-in-out transform ${isOpen ? 'max-h-screen block' : 'max-h-0 hidden'}`}
      >
        <li><Link to="/" className="block text-white py-2">Home</Link></li>
        <li><Link to="/blog" className="block text-white py-2">Blog</Link></li>
        <li><Link to="/about-us" className="block text-white py-2">About Us</Link></li>
        <li><Link to="/contact" className="block text-white py-2">Contact us</Link></li>
        <button className="block bg-white text-gray-800 px-4 py-2 rounded mt-2 w-full text-center">Subscribe</button>
      </ul>
    </nav>
  );
};

export default Navbar;
