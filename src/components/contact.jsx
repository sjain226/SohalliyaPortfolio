import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-20 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-16">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-extrabold text-pink-600"
      >
        Get in Touch 💌
      </motion.h1>

      {/* Contact Information */}
      <div className="max-w-screen-md mx-auto text-center tracking-tighter bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center my-6"
        >
          <FaMapMarkerAlt className="text-4xl text-purple-500 mb-2" />
          <p className="text-lg text-gray-600">{CONTACT.address}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center my-6"
        >
          <FaPhone className="text-4xl text-pink-500 mb-2" />
          <p className="text-lg text-gray-600">{CONTACT.phone}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center my-6"
        >
          <FaEnvelope className="text-4xl text-yellow-500 mb-2" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-lg text-gray-600 hover:text-yellow-600 transition-colors"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center my-6"
        >
          <FaLinkedin className="text-4xl text-blue-600 mb-2" />
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-blue-600 transition-colors"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
