import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUsers, FaCode, FaRocket, FaBrain, FaHeart } from 'react-icons/fa';
import { ABOUT_TEXT } from '../constants/index.js';

const About = () => {

  const skillsData = [
    { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Go", "Java", "SQL"], color: "blue" },
    { category: "Frameworks", skills: ["React", "React Native", "Node.js", "Flask", "Django", "Spring Boot"], color: "green" },
    { category: "DevOps & Tools", skills: ["Azure DevOps", "AWS", "Docker", "Git", "GitHub", "Figma"], color: "purple" },
    { category: "Databases", skills: ["PostgreSQL", "MySQL"], color: "pink" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A journey through technology, innovation, and continuous learning
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-700">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 border border-green-400">
                  <FaBrain className="text-white text-xl" />
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {ABOUT_TEXT}
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300 font-mono">Actively looking for opportunities!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Stats Section
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: "6", label: "Work Experiences" },
            { number: "20+", label: "Technologies" },
            { number: "2", label: "Projects" },
            { number: "5", label: "Awards" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center bg-gray-50 rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;