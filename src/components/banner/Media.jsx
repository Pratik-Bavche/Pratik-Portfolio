// imports of media icons
import React from "react";
import {
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

const Media = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const SocialIcon = ({ href, icon, color }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={iconVariants}
      whileHover="hover"
      className="w-12 h-12 bg-black/40 border border-white/5 flex items-center justify-center rounded-xl shadow-lg hover:border-designColor/50 hover:text-designColor transition-colors duration-300 group"
      style={{ color }}
    >
      <span className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(255,1,79,0.5)]">
        {icon}
      </span>
    </motion.a>
  );

  const SkillIcon = ({ icon, color, title }) => (
    <motion.div
      variants={iconVariants}
      whileHover="hover"
      title={title}
      className="w-12 h-12 bg-black/40 border border-white/5 flex items-center justify-center rounded-xl shadow-lg hover:border-designColor/50 hover:text-designColor transition-colors duration-300 group cursor-pointer"
      style={{ color }}
    >
      <span className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(255,1,79,0.5)]">
        {icon}
      </span>
    </motion.div>
  );

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-sm uppercase font-titleFont mb-4 text-gray-400 tracking-[3px] flex items-center gap-2">
          <span className="hidden lgl:block w-8 h-[1px] bg-designColor/50" />
          Find me in
        </h2>
        <div className="flex flex-wrap justify-center lgl:justify-start gap-4">
          <SocialIcon href="https://www.linkedin.com/in/pratik-bavche-b6b696325/" icon={<FaLinkedinIn />} color="#0077b5" />
          <SocialIcon href="https://github.com/Pratik-Bavche" icon={<FaGithub />} color="#ffffff" /> 
          <SocialIcon href="https://www.instagram.com/bavche_pratik" icon={<FaInstagram />} color="#e4405f" />
        </div>
      </div>

      <div className="hidden xl:block w-[1px] h-16 bg-white/10 self-end mb-2"></div>

      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-sm uppercase font-titleFont mb-4 text-gray-400 tracking-[3px] flex items-center gap-2">
          <span className="hidden lgl:block w-8 h-[1px] bg-designColor/50" />
          Best Skill On
        </h2>
        <div className="flex flex-wrap justify-center lgl:justify-start gap-4">
          <SkillIcon icon={<SiHtml5 />} color="#e34f26" title="HTML5" />
          <SkillIcon icon={<SiJavascript />} color="#f7df1e" title="JavaScript" />
          <SkillIcon icon={<FaReact />} color="#61dafb" title="React.js" />
          <SkillIcon icon={<SiMongodb />} color="#47a248" title="MongoDB" />
          <SkillIcon icon={<SiTailwindcss />} color="#38b2ac" title="Tailwind CSS" />
        </div>
      </div>
    </div>
  );
};

export default Media;
