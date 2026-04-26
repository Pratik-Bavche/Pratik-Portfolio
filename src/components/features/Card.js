import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full px-8 lgl:px-10 h-full py-10 rounded-2xl shadow-shadowOne flex flex-col gap-8 bg-gradient-to-br from-bodyColor to-[#191b1e] group border border-transparent hover:border-designColor/50 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background Decorative Gradient */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-designColor/10 blur-3xl group-hover:bg-designColor/20 transition-all duration-500 rounded-full" />
      
      <div className="flex flex-col gap-6 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center text-4xl text-designColor shadow-lg group-hover:bg-designColor group-hover:text-white transition-all duration-500">
          {icon ? icon : (
            <div className="flex flex-col gap-1 w-6">
              <span className="w-full h-[2px] bg-designColor group-hover:bg-white" />
              <span className="w-full h-[2px] bg-designColor group-hover:bg-white" />
              <span className="w-full h-[2px] bg-designColor group-hover:bg-white" />
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-titleFont font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
            {title}
          </h2>
          <p className="text-base font-bodyFont text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
            {des}
          </p>
          
          <div className="flex items-center gap-2 text-designColor font-semibold cursor-pointer group/link mt-2">
            <span className="text-sm uppercase tracking-wider">Learn More</span>
            <HiArrowRight className="text-xl group-hover/link:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      {/* Hover Line Effect */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default Card