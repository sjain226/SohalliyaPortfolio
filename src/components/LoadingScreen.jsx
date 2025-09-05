import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentJoke, setCurrentJoke] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const codingJokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    "Why don't programmers like nature? It has too many bugs! 🌿",
    "What do you call a programmer from Finland? Nerdic! 🇫🇮",
    "Why did the programmer quit his job? He didn't get arrays! 📊",
    "What's a programmer's favorite hangout place? The Foo Bar! 🍺",
    "Why do Java developers wear glasses? Because they can't C#! 👓",
    "What do you call a programmer who doesn't comment their code? A silent partner! 🤐",
    "Why did the developer go broke? Because he used up all his cache! 💰",
    "What's a programmer's favorite type of music? Algo-rhythms! 🎵"
  ];

  const loadingMessage = "Loading your next hire...";

  useEffect(() => {
    // Set a fixed 7-second timer
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 300); // Short delay before hiding
    }, 7000); // Exactly 7 seconds

    // Animate progress bar over 7 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 70); // 100% over 70 intervals (7 seconds * 10 intervals per second)
      });
    }, 100); // Update every 100ms

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  useEffect(() => {
    const jokeInterval = setInterval(() => {
      setCurrentJoke(prev => (prev + 1) % codingJokes.length);
    }, 2000);

    return () => clearInterval(jokeInterval);
  }, []);


  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50"
        >
          {/* Terminal Window */}
          <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 w-96 max-w-[90vw] p-6">
            {/* Terminal Header */}
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-300 text-sm font-mono">loading-sohalliya-portfolio</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm space-y-4">
              {/* Loading Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-green-400"
              >
                <span className="text-gray-300">$</span> {loadingMessage}
              </motion.div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-green-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Coding Joke */}
              <motion.div
                key={currentJoke}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 text-xs italic border-l-2 border-green-400 pl-3 py-2"
              >
                {codingJokes[currentJoke]}
              </motion.div>

              {/* Loading Animation */}
              <div className="flex items-center space-x-2 text-green-400">
                <span>Loading</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Fun Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-gray-400 text-xs"
          >
            <p>💡 Pro tip: This portfolio is built with lots of ☕</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
