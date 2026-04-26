import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  const normalizeUrl = (url) => {
    if (!url) return "";
    const trimmed = url.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
    return `https://${trimmed}`;
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full p-4 xl:px-6 h-auto min-h-[500px] xl:py-6 rounded-3xl shadow-shadowOne flex flex-col bg-gradient-to-br from-bodyColor to-[#191b1e] group border border-white/5 hover:border-designColor/50 transition-all duration-500 overflow-hidden relative cursor-pointer"
    >
      {/* Background Decorative Element */}
      <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-designColor/5 blur-[100px] rounded-full group-hover:bg-designColor/10 transition-all duration-500" />

      {/* Image Section */}
      <div className="w-full h-60 overflow-hidden rounded-2xl mb-6 relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          src={src}
          alt={title || "Project"}
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {githubLink && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={normalizeUrl(githubLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-designColor hover:border-designColor transition-all duration-300"
            >
              <BsGithub />
            </motion.a>
          )}
          {liveLink && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={normalizeUrl(liveLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-designColor hover:border-designColor transition-all duration-300"
            >
              <FaGlobe />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-200 group-hover:text-designColor transition-colors duration-300 line-clamp-2 min-h-[56px]">
            {title}
          </h3>
          <div className="w-12 h-[2px] bg-designColor/50 group-hover:w-full transition-all duration-500" />
        </div>
        
        <p className="text-sm font-bodyFont text-gray-400 group-hover:text-gray-300 leading-relaxed line-clamp-4 min-h-[80px]">
          {des}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-wider">React</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-wider">Node</span>
          </div>
          
          <a 
            href={normalizeUrl(liveLink || githubLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-designColor text-sm font-semibold group/link"
          >
            <span>Details</span>
            <FaArrowRight className="group-hover/link:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCard