import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEggs = ({ isLoading }) => {
  const [konamiCode, setKonamiCode] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggType, setEasterEggType] = useState('');
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [hasShownTutorial, setHasShownTutorial] = useState(false);

  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const developerJokes = [
    "There are only 10 types of people: those who understand binary and those who don't! 😄",
    "Why do developers prefer iOS? Because Android is too fragmented! 📱",
    "What's the object-oriented way to become wealthy? Inheritance! 💰",
    "Why did the developer go to therapy? Because he had too many issues! 🛠️",
    "What do you call a programmer from the North Pole? A C-laus! 🎅",
    "Why don't programmers like to party? Because they prefer to function! 🎉",
    "What's a programmer's favorite coffee? Java! ☕",
    "Why did the developer break up with his girlfriend? Because she didn't understand his stack! 💔",
    "What do you call a programmer who doesn't like recursion? A loop-hole! 🔄",
    "Why do programmers hate nature? It has too many bugs and not enough features! 🐛"
  ];

  const funFacts = [
    "Did you know? I once debugged a production issue at 3 AM while eating pizza! 🍕",
    "Secret: I dance 👶",
    "Easter egg: I named my bestfriend's cat 'Cat', that's literally his name now🐱",
    "Hidden talent: I can type 120 WPM but only when I'm debugging! ⌨️",
    "Fun fact: I once spent 2 hours trying to center a div! (We've all been there) 📐",
    "Secret: My favorite debugging technique is the 'chug coffee' method! 🦆",
  ];

  // Show tutorial when loading is complete
  useEffect(() => {
    if (!isLoading && !hasShownTutorial) {
      const timer = setTimeout(() => {
        setShowTutorial(true);
        setHasShownTutorial(true);
      }, 500); // Small delay after loading completes
      return () => clearTimeout(timer);
    }
  }, [isLoading, hasShownTutorial]);

  // Add hidden console messages only after tutorial is completed
  useEffect(() => {
    // Only show console messages after tutorial is done and loading is complete
    if (!isLoading && !showTutorial && !window.portfolioConsoleMessagesShown) {
      const timer = setTimeout(() => {
        console.log('%c🎉 Welcome to Sohalliya\'s Portfolio!', 'color: #10b981; font-size: 20px; font-weight: bold;');
        console.log('%c💡 Pro tip: Try the Konami code (↑↑↓↓←→←→BA) for a surprise!', 'color: #6b7280; font-size: 14px;');
        console.log('%c🕵️ Hidden joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛', 'color: #f59e0b; font-size: 12px;');
        console.log('%c🚀 Built with lots of ☕', 'color: #8b5cf6; font-size: 12px;');
        console.log('%c🎮 Easter Egg: Click the colorful buttons 5 times each!', 'color: #ef4444; font-size: 12px;');
        console.log('%c💻 Developer Secret: I once spent 2 hours trying to center a div!', 'color: #06b6d4; font-size: 12px;');
        
        // Mark as shown to prevent duplicates
        window.portfolioConsoleMessagesShown = true;
      }, 1000); // Small delay after tutorial ends
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, showTutorial]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonamiCode(prev => {
        const newCode = [...prev, e.code];
        
        // If sequence is too long, start over
        if (newCode.length > konamiSequence.length) {
          newCode.shift();
        }
        
        // Check if current sequence matches
        const isMatch = newCode.every((key, index) => key === konamiSequence[index]);
        
        // If we have a complete match, trigger easter egg and reset
        if (newCode.length === konamiSequence.length && isMatch) {
          console.log('%c🎮 KONAMI CODE ACTIVATED! You\'re a true gamer!', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
          setEasterEggType('konami');
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 8000); // Increased to 8 seconds
          return []; // Reset the sequence
        }
        
        // If current key doesn't match expected key, reset sequence
        if (newCode.length > 0 && newCode[newCode.length - 1] !== konamiSequence[newCode.length - 1]) {
          return [e.code]; // Start fresh with current key
        }
        
        return newCode;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSecretClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      
      // Hidden console message for button clicks
      if (newCount === 1) {
        console.log('%c🔍 You found the secret button! Keep clicking...', 'color: #10b981; font-size: 12px;');
      } else if (newCount === 3) {
        console.log('%c🎯 Almost there! 2 more clicks...', 'color: #f59e0b; font-size: 12px;');
      }
      
      if (newCount === 5) {
        console.log('%c🎉 CONGRATULATIONS! You found the easter egg!', 'color: #ef4444; font-size: 14px; font-weight: bold;');
        setEasterEggType('click');
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 8000); // Increased to 8 seconds
        return 0;
      }
      
      return newCount;
    });
  };

  const getRandomJoke = () => {
    return developerJokes[Math.floor(Math.random() * developerJokes.length)];
  };

  const getRandomFact = () => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  };

  const tutorialSteps = [
    {
      title: "Welcome to My Portfolio! 🎉",
      content: "I have some fun easter eggs for you to interact with!",
      button: "Let's explore!"
    },
    {
      title: "#1: Click the Buttons! 🎯",
      content: "See those eggs in the corners? Click them 5 times each for surprises!",
      button: "Got it!"
    },
    {
      title: "#2: The Konami Code! 🎮",
      content: "This is a famous cheat code from old video games. Press these keys in order: ↑↑↓↓←→←→BA",
      button: "I'll try it!"
    },
    {
      title: "#3: Check the Console! 💻",
      content: "Open your browser's developer tools (F12) and check the console for hidden messages!",
      button: "Cool!"
    },
    {
      title: "Have Fun Exploring! 🚀",
      content: "Now go discover all the hidden surprises! Good luck!",
      button: "Let's go!"
    }
  ];

  const nextTutorialStep = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(prev => prev + 1);
    } else {
      setShowTutorial(false);
    }
  };

  return (
    <>
      {/* Tutorial Modal */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 border border-green-400 shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-4xl mb-4"
                >
                  {tutorialStep === 0 ? '🎉' : tutorialStep === 1 ? '🎯' : tutorialStep === 2 ? '🎮' : tutorialStep === 3 ? '💻' : '🚀'}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-mono">
                  {tutorialSteps[tutorialStep].title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {tutorialSteps[tutorialStep].content}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    {tutorialStep + 1} of {tutorialSteps.length}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextTutorialStep}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-mono transition-colors"
                  >
                    {tutorialSteps[tutorialStep].button}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visible Easter Egg Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: showTutorial ? 0 : 2 }}
        onClick={handleSecretClick}
        className="fixed top-4 right-4 w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center cursor-pointer z-40 shadow-lg border-2 border-green-400"
        title="Click me 5 times for a surprise! 🎉"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-white text-2xl">🎯</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-400 rounded-full opacity-20"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: showTutorial ? 0 : 2.5 }}
        onClick={handleSecretClick}
        className="fixed bottom-4 left-4 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer z-40 shadow-lg border-2 border-blue-400"
        title="Easter egg zone! 🥚"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-white text-2xl">🥚</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 bg-blue-400 rounded-full opacity-20"
        />
      </motion.div>

      {/* Konami Code Helper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: showTutorial ? 0 : 3 }}
        className="fixed bottom-4 right-4 bg-gray-800 border border-gray-600 rounded-lg p-4 text-sm text-gray-300 font-mono z-40 max-w-xs"
      >
        <div className="text-green-400 mb-2 font-bold">🎮 Konami Code:</div>
        <div className="text-gray-400 mb-2">Press these keys in order:</div>
        <div className="flex flex-wrap gap-1 mb-2">
          {['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'].map((key, index) => (
            <motion.span
              key={index}
              className={`px-2 py-1 rounded text-xs font-bold ${
                konamiCode.length > index 
                  ? 'bg-green-500 text-white' 
                  : konamiCode.length === index 
                    ? 'bg-yellow-500 text-black animate-pulse' 
                    : 'bg-gray-700 text-gray-300'
              }`}
              animate={konamiCode.length > index ? { 
                scale: [1, 1.1, 1],
                boxShadow: ['0 0 0 0 rgba(16, 185, 129, 0)', '0 0 0 4px rgba(16, 185, 129, 0.3)', '0 0 0 0 rgba(16, 185, 129, 0)']
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {key}
            </motion.span>
          ))}
        </div>
        {clickCount > 0 && (
          <div className="text-yellow-400 text-xs">
            Button clicks: {clickCount}/5
          </div>
        )}
      </motion.div>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowEasterEgg(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 border-2 border-green-400 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-4xl mb-4"
                >
                  {easterEggType === 'konami' ? '🎮' : '🎉'}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-mono">
                  {easterEggType === 'konami' ? 'Konami Code Activated!' : 'Easter Egg Found!'}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {easterEggType === 'konami' ? getRandomJoke() : getRandomFact()}
                </p>
                
                <div className="text-xs text-gray-400 mb-4">
                  This will close automatically in 8 seconds
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowEasterEgg(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-mono transition-colors"
                >
                  Awesome! 🚀
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default EasterEggs;
