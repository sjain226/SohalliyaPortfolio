import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Make the navbar fixed at the top
    <div className="w-full py-6 px-8 fixed top-0 left-0 z-50 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 shadow-md">
      <nav className="w-full max-w-screen-lg flex justify-between items-center mx-auto">
        {/* Left Section (Name or Logo) */}
        <div className="text-3xl font-bold text-purple-700">
          SJ 🎀
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-purple-700"
          >
            {/* Hamburger icon */}
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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

        {/* Right Section (Navigation Links for large screens) */}
        <div className="hidden lg:flex space-x-8 text-xl text-purple-700">
          <a
            href="#about"
            className="hover:underline hover:text-pink-600 transition duration-200"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:underline hover:text-pink-600 transition duration-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:underline hover:text-pink-600 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-pink-600 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-0 w-full bg-white shadow-md flex flex-col space-y-4 p-6 z-50">
            <a
              href="#about"
              className="hover:text-pink-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-pink-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-pink-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-pink-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
