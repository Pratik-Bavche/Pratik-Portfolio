import React from 'react'
import { motion } from 'framer-motion'
import { FaMedal, FaSearchPlus } from 'react-icons/fa'

const CertificateCard = ({ title, provider, date, des, src, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="w-full p-4 xl:p-6 rounded-3xl shadow-shadowOne flex flex-col bg-gradient-to-br from-bodyColor to-[#191b1e] group border border-white/5 hover:border-designColor/50 transition-all duration-500 h-[480px] cursor-pointer overflow-hidden relative"
    >
      {/* Background Decorative Element */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-designColor/5 blur-3xl group-hover:bg-designColor/10 transition-all duration-500 rounded-full" />

      {/* Image Section */}
      <div className="w-full h-52 overflow-hidden rounded-2xl bg-black/40 flex items-center justify-center relative shrink-0">
        {src ? (
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        ) : (
          <FaMedal className="text-5xl text-designColor group-hover:scale-110 transition-transform duration-500" />
        )}
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 text-[10px] bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-designColor font-semibold uppercase tracking-wider z-10">
          {date}
        </div>

        {/* View Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 bg-designColor text-white rounded-full flex items-center justify-center text-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <FaSearchPlus />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 mt-6 flex-grow relative z-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-200 group-hover:text-designColor transition-colors duration-300 uppercase line-clamp-2 min-h-[56px] leading-tight">
            {title}
          </h3>
          <div className="w-10 h-[2px] bg-designColor/50 group-hover:w-full transition-all duration-500" />
        </div>
        
        <p className="text-sm font-bodyFont text-gray-400 group-hover:text-gray-300 leading-relaxed line-clamp-5 duration-300">
          {des}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-designColor group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export default CertificateCard
