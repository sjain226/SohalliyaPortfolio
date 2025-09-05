import profilepic from "../assets/image.jpg";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import CodingAvatar from "./CodingAvatar";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Full-Stack Developer", "Tech Innovator"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gray-900 relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Text - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <p className="text-lg font-medium text-gray-300 tracking-wide uppercase font-mono">
                  Software Developmer
                </p>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-mono">
                Sohalliya Jain
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-300 min-h-[2.5rem] flex items-center font-mono">
                  <span className="text-green-400">I am a&nbsp;</span>
                  <span className="text-white font-semibold min-w-[200px] lg:min-w-[250px] text-left">
                    {text}
                    <span className="text-green-400 animate-pulse ml-1">|</span>
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Developer passionate about building systems that last and tech that matters
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://drive.google.com/file/d/1LCMe0ZgYC6yGA3YYuJ3B6-UU7CAXrz4Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 font-mono"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 font-mono"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start pt-4 space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/sohalliya-jain/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-600"
              >
                <FaLinkedin className="text-xl text-gray-300" />
              </a>
              
              <a
                href="https://github.com/sohalliya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-600"
              >
                <FaGithub className="text-xl text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Coding Avatar - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <CodingAvatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
