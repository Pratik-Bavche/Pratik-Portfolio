import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-full py-4 lgl:py-8 border-b-[1px] border-b-black font-titleFont overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-designColor/20 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-[#4e44ce]/20 blur-[100px]"
        />
      </div>

      <div className="flex flex-col lgl:flex-row items-center justify-between gap-16 lgl:gap-20">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
}

export default Banner