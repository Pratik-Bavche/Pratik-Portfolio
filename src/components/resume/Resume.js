import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <Title des="Professional Journey" />
      </div>

      <div className="flex justify-center">
        <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#191b1e] p-2 rounded-2xl shadow-shadowOne border border-white/5">
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData 
                ? "bg-gradient-to-r from-designColor to-[#ff4d6d] text-white shadow-lg" 
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            } flex items-center justify-center py-4 rounded-xl cursor-pointer font-titleFont font-semibold transition-all duration-300 uppercase tracking-wider text-sm`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData 
                ? "bg-gradient-to-r from-designColor to-[#ff4d6d] text-white shadow-lg" 
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            } flex items-center justify-center py-4 rounded-xl cursor-pointer font-titleFont font-semibold transition-all duration-300 uppercase tracking-wider text-sm`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData 
                ? "bg-gradient-to-r from-designColor to-[#ff4d6d] text-white shadow-lg" 
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            } flex items-center justify-center py-4 rounded-xl cursor-pointer font-titleFont font-semibold transition-all duration-300 uppercase tracking-wider text-sm`}
          >
            Experience
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {skillData && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Skills />
            </motion.div>
          )}
          {educationData && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Education />
            </motion.div>
          )}
          {experienceData && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Experience />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Resume;
