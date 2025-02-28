import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa'; // Icons for education, awards, and activities
import { ABOUT_TEXT } from '../constants/index.js'; // About text from constants

const About = () => {
  return (
    <div className="w-full h-full mx-0 px-0 flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
      {/* Section Title */}
      <h1 className="my-10 text-center text-5xl font-bold text-pink-600">
        About <span className="text-purple-600">Me</span> 💖
      </h1>

      {/* Main Layout: Left and Right Columns with margin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-10">
        {/* Left Column: Education and Awards */}
        <div className="space-y-8">
          {/* Education Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 border-4 border-pink-300 mx-10"
          >
            <FaGraduationCap className="text-6xl text-purple-400 mb-4" />
            <h3 className="text-3xl font-semibold text-pink-500 mb-2">Education 🎓</h3>
            <div className="space-y-4 text-left w-full">
              <div>
                <h4 className="font-semibold text-purple-600">B.Sc in Computer Science @ UW-Madison</h4>
                <div className="flex justify-between text-gray-500 italic">
                  <span>2023 - Present</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600">B.Sc in Computer Science @ ASU</h4>
                <div className="flex justify-between text-gray-500 italic">
                  <span>2021 - 2023</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 border-4 border-purple-300 mx-10"
          >
            <FaTrophy className="text-6xl text-yellow-500 mb-4" />
            <h3 className="text-3xl font-semibold text-purple-500 mb-2">Awards 🏆</h3>
            <div className="space-y-3 text-left w-full">
              {/* List of Awards */}
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Notable Capital NextGen Fellow Apprenticeship</h4>
                <span className="text-gray-500">2024</span>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Anita B.org Grace Hopper Celebration (GHC)</h4>
                <span className="text-gray-500">2023</span>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Spring 2023 Dean’s List</h4>
                <span className="text-gray-500">2023</span>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Fall 2022 Dean’s List</h4>
                <span className="text-gray-500">2022</span>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Spring 2022 Dean’s List</h4>
                <span className="text-gray-500">2022</span>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-pink-600">Fall 2021 Dean’s List</h4>
                <span className="text-gray-500">2021</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: About Me and Clubs & Activities */}
        <div className="space-y-8">
          {/* About Me Text */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 0.5 }} 
            className="bg-white shadow-lg rounded-2xl p-6 border-4 border-pink-300 mx-10"
          >
            <div className="flex justify-center">
              <p className="max-w-4xl text-lg text-pink-700 text-justify">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>

          {/* Clubs & Activities Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 border-4 border-purple-300 mx-10"
          >
            <FaUsers className="text-6xl text-green-400 mb-4" />
            <h3 className="text-3xl font-semibold text-purple-500 mb-2">Clubs & Activities ✨</h3>
            <p className="text-gray-600 text-justify">
              🌟 Website Director of The Vault UW-Madison. 🌟 Volunteered as a mentor for intermediate programmers, fostering a supportive learning environment. 🌟 Organized coding workshops to introduce peers to the basics of web development.🌟<br />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;