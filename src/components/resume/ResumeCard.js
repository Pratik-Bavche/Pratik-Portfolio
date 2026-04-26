import React from 'react'
import { motion } from "framer-motion";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full h-auto group flex"
    >
      <div className="w-10 h-[6px] bg-black bg-opacity-30 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gradient-to-br from-[#1e2024] to-[#191b1e] hover:from-[#191b1e] hover:to-[#1e2024] transition-all duration-500 rounded-2xl p-6 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne border border-transparent hover:border-designColor/30 relative overflow-hidden">
        {/* Hover Decorative Glow */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-designColor/5 blur-3xl group-hover:bg-designColor/10 transition-all duration-500 rounded-full" />
        
        <div className="flex flex-col lgl:flex-row justify-between lgl:items-center gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-gray-300 duration-300 font-medium tracking-wide">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-40 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-bold border border-white/5 whitespace-nowrap">
              {result}
            </p>
          </div>
        </div>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}
        </p>

        {/* Bottom Line Accent */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default ResumeCard