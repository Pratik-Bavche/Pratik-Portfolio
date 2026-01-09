import React, { useState } from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";
import PratikBavcheResume from "../../assets/PratikBavcheResume.pdf"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center mb-4">
        <Title des="My Resume" />
        {/* Download resume button. The PDF is imported above from src/assets; use the imported variable as the href */}
        <a
          href={PratikBavcheResume}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-md hover:scale-105 transform transition-transform duration-200"
        >
          <HiOutlineDownload className="w-4 h-4 " />
          Download Resume
        </a>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>

      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume;
