import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="pb-12 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-extrabold text-pink-600"
      >
        Projects 💻
      </motion.h1>

      {/* Centered Projects Container */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100 mb-12 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Dates */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-purple-400">
                {project.dates}
              </p>
            </div>

            {/* Project Details */}
            <div>
              <h6 className="mb-4 text-2xl font-semibold text-purple-600">
                {project.title}
              </h6>
              <p className="mb-2 text-lg text-pink-500">{project.type}</p>
              <p className="mb-4 text-neutral-600">{project.description.join(" ")}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
