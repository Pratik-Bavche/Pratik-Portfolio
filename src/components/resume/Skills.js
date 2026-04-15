import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs, FaAws, FaGitAlt, FaDocker, FaLinux, FaFigma 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer, SiVite, SiExpress, SiMongodb, SiMysql, SiSqlite, SiSupabase, SiFirebase, SiOpencv, SiExpo, SiVercel, SiCplusplus, SiC 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full mt-10"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {skillData.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col items-center justify-center gap-3 bg-black bg-opacity-25 border border-gray-800 rounded-2xl p-4 md:p-6 group hover:bg-opacity-40 hover:border-designColor/50 transition-all duration-300 cursor-pointer shadow-shadowOne"
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 bg-[#191b1e] rounded-xl flex items-center justify-center text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

