import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-12 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-16">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-extrabold text-pink-600"
      >
        Experience 💼
      </motion.h1>

      <div className="max-w-screen-xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Experience Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="mb-2 text-sm font-semibold text-purple-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Experience Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Role */}
              <h6 className="mb-2 block text-2xl font-semibold text-pink-600">
              {experience.company}
              </h6>

              {/* Company Name */}
              <span className="mb-2 text-lg font-medium text-purple-600">
              {experience.role}{" "}
              </span>

              {/* Description */}
              <p className="mb-4 text-gray-600">{experience.description.join(" ")}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
