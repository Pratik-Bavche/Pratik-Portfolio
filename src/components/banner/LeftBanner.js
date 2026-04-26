import React, { useState, useRef } from 'react'
import { useTypewriter } from "react-simple-typewriter";
import Media from './Media';
import { HiOutlineDownload } from "react-icons/hi";
import PratikBavcheResume from "../../assets/PratikBavcheResume.pdf";
import { motion, AnimatePresence } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Specialist",
      "React Native Developer",
      "UI/UX Enthusiast",
      "Problem Solver"
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const holdTimerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startHold = () => {
    setIsHolding(true);
    startTimeRef.current = Date.now();
    holdTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min((elapsed / 2500) * 100, 100); // Faster hold (2.5s)
      setHoldProgress(progress);
      
      if (progress >= 100) {
        clearInterval(holdTimerRef.current);
        triggerDownload();
      }
    }, 50);
  };

  const stopHold = () => {
    setIsHolding(false);
    clearInterval(holdTimerRef.current);
    setHoldProgress(0);
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = PratikBavcheResume;
    link.download = "Pratik_Bavche_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsHolding(false);
    setHoldProgress(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lgl:flex-1 flex flex-col gap-6 lgl:gap-8 items-center lgl:items-start text-center lgl:text-left"
    >
      <div className="flex flex-col gap-3">
        <motion.h4 
          variants={itemVariants}
          className="text-base sm:text-lg font-medium font-titleFont tracking-[4px] uppercase text-designColor"
        >
          Welcome to my world
        </motion.h4>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lgl:text-7xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-designColor to-[#ff4d6d] bg-clip-text text-transparent">
              Pratik Bavche
            </span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-1 lgl:bottom-2 left-0 h-1 lgl:h-2 bg-designColor/20 -z-10"
            />
          </span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-xl sm:text-2xl lgl:text-3xl font-semibold text-gray-300 min-h-[40px]"
        >
          a <span className="text-white border-b-2 border-designColor">{text}</span>
          <motion.span
            animate={{ 
              opacity: [1, 0.4, 1],
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 5px #ff014f",
                "0 0 15px #ff014f",
                "0 0 5px #ff014f"
              ]
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="inline-block w-[10px] h-[10px] bg-designColor rounded-full ml-2 align-middle mb-1"
          />
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base font-bodyFont leading-7 text-gray-400 max-w-[600px] tracking-wide"
        >
          I specialize in building robust, scalable applications using the MERN stack. 
          My passion lies in crafting high-performance digital solutions that bridge the gap 
          between complex backend logic and seamless user experiences.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="flex flex-col items-center lgl:items-start gap-10">
        <div className="relative inline-block w-fit group">
          <motion.button
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => {
              setShowPopup(false);
              stopHold();
            }}
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-5 bg-[#141518] rounded-xl shadow-shadowOne border border-white/5 overflow-hidden group transition-all duration-300"
          >
            {/* Progress Overlay */}
            <motion.div 
              style={{ width: `${holdProgress}%` }}
              className="absolute left-0 top-0 h-full bg-designColor/30 pointer-events-none"
            />
            
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-4 text-white font-titleFont tracking-wider uppercase font-semibold">
              <span className="text-lg">
                {isHolding ? `Extracting... ${Math.round(holdProgress)}%` : "Download Resume"}
              </span>
              <HiOutlineDownload className={`text-2xl transition-all duration-300 ${isHolding ? 'animate-bounce' : 'group-hover:translate-y-1'}`} />
            </div>
          </motion.button>

          <AnimatePresence>
            {showPopup && !isHolding && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-designColor text-white text-xs py-2 px-4 rounded-full shadow-lg pointer-events-none z-20"
              >
                Press and hold for 2 seconds
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-designColor rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Media />
      </motion.div>
    </motion.div>
  );
}

export default LeftBanner