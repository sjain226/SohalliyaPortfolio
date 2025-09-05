import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodingAvatar = ({ isVisible = true }) => {
  const [currentCode, setCurrentCode] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    "const solve = () => {",
    "  return 'Hello World!';",
    "};",
    "// Building the future",
    "function innovate() {",
    "  return new Ideas();",
    "}",
    "// Code with passion",
    "while (learning) {",
    "  keepGrowing();",
    "}"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
      {/* Avatar Container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="relative w-full h-full"
      >
        {/* Main Avatar Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-2xl border-4 border-green-300">
          {/* Coding Glasses */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white"
            />
          </div>

          {/* Eyes */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
                scaleX: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
                scaleX: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>

          {/* Smile */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-20 h-8">
            <svg className="w-full h-full" viewBox="0 0 40 16">
              <motion.path
                d="M 5 8 Q 20 16 35 8"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>

          {/* Code Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-12 sm:h-16 bg-gray-900 rounded-lg border border-green-400 p-1.5 sm:p-2"
          >
            <div className="flex items-center mb-1">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-green-400 text-xs sm:text-xs font-mono">
              <motion.span
                key={currentCode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {codeSnippets[currentCode]}
              </motion.span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Floating Code Elements */}
        {['</>', '{}', '()', '[]'].map((symbol, index) => (
          <motion.div
            key={symbol}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-green-400 font-mono text-lg font-bold"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Circuit Pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
              animate={{ strokeDashoffset: [0, -15] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodingAvatar;
