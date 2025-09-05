import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoDocker } from "react-icons/bi";
import { SiTypescript, SiJavascript, SiPython, SiFirebase, SiTailwindcss, SiKotlin, SiFlask, SiRuby } from "react-icons/si";
import { FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      technologies: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", bgColor: "bg-yellow-100" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bgColor: "bg-blue-100" },
        { name: "Python", icon: SiPython, color: "text-blue-500", bgColor: "bg-blue-100" },
        { name: "Go", icon: TbBrandGolang, color: "text-teal-500", bgColor: "bg-teal-100" },
        { name: "Java", icon: FaJava, color: "text-red-500", bgColor: "bg-red-100" },
        { name: "SQL", icon: BiLogoPostgresql, color: "text-blue-600", bgColor: "bg-blue-100" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      technologies: [
        { name: "React", icon: RiReactjsLine, color: "text-blue-500", bgColor: "bg-blue-100" },
        { name: "React Native", icon: RiReactjsLine, color: "text-blue-400", bgColor: "bg-blue-100" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600", bgColor: "bg-green-100" },
        { name: "Flask", icon: SiFlask, color: "text-gray-800", bgColor: "bg-gray-100" },
        { name: "Django", icon: SiPython, color: "text-green-500", bgColor: "bg-green-100" },
        { name: "Spring Boot", icon: FaJava, color: "text-green-600", bgColor: "bg-green-100" }
      ]
    },
    {
      title: "DevOps & Cloud",
      technologies: [
        { name: "Azure DevOps", icon: BiLogoDocker, color: "text-blue-600", bgColor: "bg-blue-100" },
        { name: "AWS", icon: SiFirebase, color: "text-orange-500", bgColor: "bg-orange-100" },
        { name: "Docker", icon: BiLogoDocker, color: "text-blue-600", bgColor: "bg-blue-100" },
        { name: "Git", icon: FaGithub, color: "text-gray-700", bgColor: "bg-gray-100" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800", bgColor: "bg-gray-100" },
        { name: "Figma", icon: SiTailwindcss, color: "text-purple-500", bgColor: "bg-purple-100" }
      ]
    },
    {
      title: "Databases & APIs",
      technologies: [
        { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-600", bgColor: "bg-blue-100" },
        { name: "MySQL", icon: BiLogoPostgresql, color: "text-orange-500", bgColor: "bg-orange-100" },
        { name: "GraphQL", icon: SiTypescript, color: "text-pink-500", bgColor: "bg-pink-100" },
        { name: "REST APIs", icon: SiJavascript, color: "text-green-500", bgColor: "bg-green-100" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700"
        >
          {/* Terminal Header */}
          <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm font-mono">sohalliya@portfolio:~$ tech-stack --list</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center mb-3">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-blue-400 font-semibold">{category.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  <span className="text-gray-400 ml-2">→</span>
                </div>
                
                <div className="ml-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="group"
                    >
                      <div className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-gray-700 transition-colors duration-200">
                        <tech.icon className={`text-lg ${tech.color}`} />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Terminal Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 pt-4 border-t border-gray-700"
            >
              <div className="flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-gray-400">cat status.txt</span>
              </div>
              <div className="ml-4 mt-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">●</span>
                  <span>Always learning & exploring new technologies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
