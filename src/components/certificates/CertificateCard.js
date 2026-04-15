import React from 'react'
import { motion } from 'framer-motion'
import { FaMedal } from 'react-icons/fa'

const CertificateCard = ({ title, provider, date, des, src, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="w-full p-4 xl:p-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 border-2 border-transparent hover:border-designColor/30 h-[450px] cursor-pointer"
    >
      <div className="w-full h-48 overflow-hidden rounded-lg bg-black bg-opacity-40 flex items-center justify-center relative shrink-0">
        {src ? (
          <img
            src={src}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-110 duration-300"
          />
        ) : (
          <FaMedal className="text-5xl text-designColor mb-3 group-hover:scale-110 duration-300" />
        )}
        <div className="absolute top-4 right-4 text-[10px] bg-black bg-opacity-60 px-2 py-1 rounded text-designColor font-medium uppercase tracking-wide">
          {date}
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 gap-1">
        <h3 className="text-lg font-bold text-gray-200 group-hover:text-designColor duration-300 text-center uppercase line-clamp-2">
          {title}
        </h3>
        <p className="text-xs font-medium text-gray-400 group-hover:text-white duration-300">
          {provider}
        </p>
      </div>

      <div className="w-full mt-4 flex flex-col gap-4 flex-grow overflow-hidden">
        <p className="text-xs md:text-sm tracking-wide text-gray-400 group-hover:text-gray-200 duration-300 line-clamp-6">
          {des}
        </p>
      </div>
    </motion.div>
  )
}


export default CertificateCard
