import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoDocker } from "react-icons/bi";
import { SiTypescript, SiJavascript, SiPython, SiFirebase, SiTailwindcss, SiKotlin, SiFlask, SiRuby } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold text-pink-600"
      >
        Technologies ✨
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mx-4"
      >
        {/* Java */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
          className="rounded-full border-8 border-pink-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <FaJava className="text-5xl text-red-400" />
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-blue-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <RiReactjsLine className="text-5xl text-blue-400" />
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
          className="rounded-full border-8 border-purple-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <TbBrandNextjs className="text-5xl text-black" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-green-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <FaNodeJs className="text-5xl text-green-600" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2)}
          className="rounded-full border-8 border-blue-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <BiLogoPostgresql className="text-5xl text-blue-500" />
        </motion.div>

        {/* Typescript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-blue-400 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiTypescript className="text-5xl text-blue-600" />
        </motion.div>

        {/* Javascript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(5)}
          className="rounded-full border-8 border-yellow-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiJavascript className="text-5xl text-yellow-500" />
        </motion.div>

        {/* Python */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
          className="rounded-full border-8 border-blue-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiPython className="text-5xl text-blue-400" />
        </motion.div>

        {/* Golang */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-teal-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <TbBrandGolang className="text-5xl text-teal-500" />
        </motion.div>

        {/* Firebase */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-orange-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiFirebase className="text-5xl text-orange-400" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
          className="rounded-full border-8 border-sky-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiTailwindcss className="text-5xl text-sky-400" />
        </motion.div>

        {/* Flask */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-full border-8 border-black p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiFlask className="text-5xl text-black" />
        </motion.div>

        {/* Kotlin */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3.5)}
          className="rounded-full border-8 border-purple-400 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiKotlin className="text-5xl text-purple-600" />
        </motion.div>

        {/* Ruby */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3.5)}
          className="rounded-full border-8 border-red-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <SiRuby className="text-5xl text-red-500" />
        </motion.div>

        {/* Docker */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
          className="rounded-full border-8 border-blue-300 p-6 bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <BiLogoDocker className="text-5xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
