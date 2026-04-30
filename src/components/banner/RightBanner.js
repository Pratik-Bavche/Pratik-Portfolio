import React, { useState } from 'react'
import { bannerImg } from "../../assets/index";
import { motion, AnimatePresence } from "framer-motion";

const RightBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="lgl:flex-1 flex justify-center items-center relative group">
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[250px] h-[250px] lgl:w-[500px] lgl:h-[500px] border border-designColor/20 rounded-3xl -rotate-12 opacity-30"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[230px] h-[230px] lgl:w-[480px] lgl:h-[480px] border border-white/10 rounded-3xl rotate-12 opacity-20"
      />

      {/* Main Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-designColor/20 blur-[30px] lgl:blur-[50px] rounded-full -z-10 group-hover:bg-designColor/30 transition-all duration-500" />
          
          <AnimatePresence>
            {!imageLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20"
              >
                {/* Modern smooth spinner */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-designColor border-r-designColor/50"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-4 border-transparent border-b-designColor border-l-designColor/50"
                  />
                  {/* Center glowing dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-3 h-3 sm:w-4 sm:h-4 bg-designColor rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
                
                {/* Text */}
                <div className="flex flex-col items-center">
                  <motion.p 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-designColor text-xs sm:text-sm font-titleFont tracking-widest uppercase font-medium text-center px-4"
                  >
                    Preparing something amazing...
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            className={`w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] lgl:w-[500px] lgl:h-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-opacity duration-700 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={bannerImg}
            alt="bannerImg"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Decorative Frame Elements */}
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-designColor rounded-bl-3xl opacity-50" />
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-designColor rounded-tr-3xl opacity-50" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default RightBanner