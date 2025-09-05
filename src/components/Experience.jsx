import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional journey and technical achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400 hidden lg:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg hidden lg:block"></div>

                {/* Experience Card */}
                <div className="lg:ml-20 bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors font-mono">
                        {experience.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                        {experience.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-green-400" />
                          <span className="font-mono">{experience.year}</span>
                        </div>
                        {experience.location && (
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-green-400" />
                            <span className="font-mono">{experience.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="text-green-400" />
                      <span className="text-sm font-medium text-gray-300 font-mono">Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:bg-gray-600 transition-all duration-200 font-mono"
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
      </div>
    </section>
  );
};

export default Experience;
