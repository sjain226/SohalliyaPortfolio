import profilepic from "../assets/image.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter"; // Import the useTypewriter hook


const Hero = () => {
  // Using the typewriter hook to manage the words to cycle through
  const [text] = useTypewriter({
    words: ["Software Engineer", "Tech Enthusiast", "Creative Coder"],
    loop: true, // Loop infinitely
    typeSpeed: 100, // Typing speed
    deleteSpeed: 50, // Speed at which text gets deleted
    delaySpeed: 1500, // Delay between typing and deletion
  });

  return (
    <div className="w-full h-full mx-0 px-0 flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-full w-68 h-68 lg:w-80 lg:h-100 object-cover overflow-hidden shadow-2xl border-8 border-pink-300"
      >
        <img
          src={profilepic}
          alt="Sohalliya Jain"
          className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover"
        />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-800"
      >
        <p className="text-2xl font-light text-gray-600 mb-3">Hey there, I'm</p>
        <h1 className="text-6xl font-extrabold text-pink-600 mt-2">
          Sohalliya Jain 🎀
        </h1>
        <h2 className="text-4xl text-purple-700 font-semibold mt-5 italic">
          {/* Typing animation */}
          <span>{text}</span>
          <span className="text-pink-500 animate-pulse">|</span> {/* Cursor effect */}
        </h2>

        {/* Call to Action Buttons */}
        <div className="mt-10 space-x-4">
          <a
            href="https://drive.google.com/file/d/1eNwZCvBwuPjTjAmrMH2aHIfAXv5S9mrJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors"
          >
           Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors"
          >
            Contact Info
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/sohalliya-jain/"
            target="_blank"
            rel="noopener noreferrer"
            // className="hover:text-pink-500 transition-colors"
          >
            <FaLinkedin className="text-4xl text-blue-600 mb-2" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
