import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
  "Preparing something awesome...",
  "Loading experience...",
  "Crafting digital excellence...",
  "Almost there..."
];

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Change text every 800ms
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    // Wait for window load or max 2.5 seconds
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // small buffer for smoothness
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout in case 'load' takes too long
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(textInterval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111214] overflow-hidden"
        >
          {/* Animated rings */}
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-4 border-r-4 border-transparent border-t-designColor opacity-80"
              style={{ borderRightColor: 'rgba(255, 1, 79, 0.2)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-b-4 border-l-4 border-transparent border-b-[#ff4d6d] opacity-60"
              style={{ borderLeftColor: 'rgba(255, 77, 109, 0.2)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-3 h-3 bg-designColor rounded-full animate-ping" />
            </div>
          </div>
          
          {/* Text Animation */}
          <div className="h-8 overflow-hidden relative flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 font-titleFont tracking-widest text-sm uppercase absolute"
              >
                {loadingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          {/* Progress Bar (fake) */}
          <div className="w-48 h-[2px] bg-white/10 mt-6 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-designColor to-[#ff4d6d]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
