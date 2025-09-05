import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaCode, FaStar } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Innovative solutions and technical implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center border border-green-400">
                      <FaCode className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                        {project.title}
                      </h3>
                      {project.type && (
                        <p className="text-sm text-gray-300 font-mono">{project.type}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="flex-1 mb-6">
                  <div className="space-y-3">
                    {project.description.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-gray-300 leading-relaxed text-sm">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <FaStar className="text-green-400 text-sm" />
                    <span className="text-sm font-medium text-gray-300 font-mono">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600 hover:bg-gray-600 transition-all duration-200 font-mono"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
