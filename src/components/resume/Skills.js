import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { title: "HTML5", percentage: "95%" },
    { title: "CSS3", percentage: "90%" },
    { title: "JavaScript", percentage: "85%" },
    { title: "React Js", percentage: "80%" },
    { title: "Android", percentage: "90%" },
    { title: "Java", percentage: "95%" },
    { title: "Python", percentage: "80%" },
    { title: "PHP", percentage: "90%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-6 mt-10"
    >
      {skills.map((skill, i) => (
        <div key={i} className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">{skill.title}</p>
          <div className="w-full h-2 bg-gray-700 rounded-md mt-2 relative">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              style={{ width: skill.percentage }}
            >
              <span className="absolute -top-7 right-0">{skill.percentage}</span>
            </motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
