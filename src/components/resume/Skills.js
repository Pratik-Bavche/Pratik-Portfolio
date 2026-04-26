import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaLinux, FaFigma 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer, SiVite, SiExpress, SiMongodb, SiMysql, SiSqlite, SiSupabase, SiFirebase, SiOpencv, SiExpo, SiVercel, SiCplusplus, SiC 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillData = [
    { title: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { title: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { title: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { title: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
    { title: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { title: "Python", icon: <FaPython />, color: "text-yellow-600" },
    { title: "C", icon: <SiC />, color: "text-blue-500" },
    { title: "Java", icon: <FaJava />, color: "text-red-500" },
    { title: "React Native", icon: <TbBrandReactNative />, color: "text-cyan-500" },
    { title: "React", icon: <FaReact />, color: "text-cyan-400" },
    { title: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { title: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { title: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { title: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    { title: "Vite", icon: <SiVite />, color: "text-yellow-500" },
    { title: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { title: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
    { title: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { title: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    { title: "SQLite", icon: <SiSqlite />, color: "text-blue-400" },
    { title: "Supabase", icon: <SiSupabase />, color: "text-green-400" },
    { title: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
    { title: "AWS", icon: <FaAws />, color: "text-orange-400" },
    { title: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    { title: "Docker", icon: <FaDocker />, color: "text-blue-500" },
    { title: "Linux", icon: <FaLinux />, color: "text-white" },
    { title: "Figma", icon: <FaFigma />, color: "text-pink-400" },
    { title: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
    { title: "Expo", icon: <SiExpo />, color: "text-white" },
    { title: "Vercel", icon: <SiVercel />, color: "text-white" },
  ];

  // Distribute skills into orbits
  const orbits = [
    { radius: 120, speed: 40, skills: skillData.slice(0, 6) },
    { radius: 220, speed: -60, skills: skillData.slice(6, 16) },
    { radius: 320, speed: 80, skills: skillData.slice(16, 30) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full mt-10 min-h-[600px] flex items-center justify-center overflow-hidden relative py-20"
    >
      {/* Desktop Radial Layout */}
      <div className="hidden lgl:flex relative items-center justify-center w-full h-[700px]">
        {/* Background Concentric Rings (Decorative) */}
        {[170, 270, 370, 420].map((radius, idx) => (
          <motion.div
            key={`ring-${idx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.15, 0.1],
              scale: 1,
              rotate: idx % 2 === 0 ? 360 : -360
            }}
            transition={{ 
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 50 + idx * 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 1 }
            }}
            className="absolute border border-dashed border-gray-700 rounded-full pointer-events-none"
            style={{ 
              width: radius * 2, 
              height: radius * 2,
            }}
          />
        ))}
        
        {/* Glowing Background Orbs */}
        <div className="absolute w-[500px] h-[500px] bg-designColor/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Central Hub */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: ["0 0 20px rgba(255,1,79,0.2)", "0 0 40px rgba(255,1,79,0.4)", "0 0 20px rgba(255,1,79,0.2)"]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-40 h-40 rounded-full bg-[#191b1e] border-2 border-designColor flex flex-col items-center justify-center z-50 shadow-shadowOne"
        >
          <span className="text-designColor font-bold text-xl uppercase tracking-widest">Skills</span>
          <span className="text-gray-400 text-[10px] mt-1">Tech Stack</span>
        </motion.div>

        {/* Skill Orbits */}
        {orbits.map((orbit, orbitIdx) => (
          <div key={orbitIdx} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Visual Orbit Path */}
            <div 
              className="absolute border border-white/10 rounded-full pointer-events-none"
              style={{ 
                width: orbit.radius * 2, 
                height: orbit.radius * 2,
              }}
            />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: Math.abs(orbit.speed), repeat: Infinity, ease: "linear" }}
              className="absolute pointer-events-none"
              style={{ 
                width: orbit.radius * 2, 
                height: orbit.radius * 2,
              }}
            >
              {orbit.skills.map((skill, skillIdx) => {
                const angle = (skillIdx / orbit.skills.length) * (2 * Math.PI);
                const x = Math.cos(angle) * orbit.radius;
                const y = Math.sin(angle) * orbit.radius;

                return (
                  <div
                    key={skillIdx}
                    className="absolute pointer-events-auto group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: Math.abs(orbit.speed), repeat: Infinity, ease: "linear" }}
                      className={`w-14 h-14 bg-[#191b1e] rounded-xl border border-gray-800 flex items-center justify-center text-2xl ${skill.color} shadow-shadowOne group-hover:border-designColor group-hover:scale-125 transition-all duration-300 cursor-help relative`}
                    >
                      {skill.icon}
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredSkill?.title === skill.title && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: -45 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute bg-designColor text-white text-xs py-1 px-3 rounded-md whitespace-nowrap pointer-events-none z-[100]"
                          >
                            {skill.title}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-designColor rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Grid Fallback */}
      <div className="lgl:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {skillData.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col items-center justify-center gap-3 bg-black bg-opacity-25 border border-gray-800 rounded-2xl p-4 group hover:border-designColor/50 transition-all duration-300 shadow-shadowOne"
          >
            <div className={`w-14 h-14 bg-[#191b1e] rounded-xl flex items-center justify-center text-3xl ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

