import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >

      {/* Full Stack Development */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jan 2026 - Present
          </p>
          <h2 className="text-4xl font-bold">Full Stack Development</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development Intern"
            subTitle="SK Children Foundation (NGO / Social Services)"
            result="Pune, Maharashtra"
            des="Working as a Full Stack Web Development Intern, contributing to web application development, implementing frontend and backend features, and providing technical support to improve system performance and user experience."
          />
        </div>
      </div>

      {/* Cybersecurity Internship */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jan 2026 - Feb 2026
          </p>
          <h2 className="text-4xl font-bold">Cybersecurity Internship</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity Intern"
            subTitle="Cyber Cell, Pimpri Chinchwad"
            result="Pune, Maharashtra"
            des="Gained practical exposure to cybercrime analysis, digital forensics, and cybersecurity operations by working on real-world security scenarios and threat detection techniques."
          />
        </div>
      </div>

      {/* Technical Associate */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jul 2025 - Present
          </p>
          <h2 className="text-4xl font-bold">Technical Associate</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Associate"
            subTitle="EDC - Entrepreneurship Development Cell"
            result="Pune, Maharashtra"
            des="Worked as a Technical Associate by managing technical initiatives, supporting development projects, and contributing to the development and maintenance of the EDC website."
          />
        </div>
      </div>

      {/* Design Associate */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Nov 2023 - Apr 2024
          </p>
          <h2 className="text-4xl font-bold">Design Associate</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Design Associate"
            subTitle="Government Polytechnic, Awasari Khurd - IT Club"
            result="Pune, Maharashtra"
            des="Contributed to creative design projects, preparing technical materials and collaborating with team members to enhance technical and visual communication skills."
          />
        </div>
      </div>

      {/* Web Development Internship */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jul 2023 - Sep 2023
          </p>
          <h2 className="text-4xl font-bold">Web Development Internship</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Intern"
            subTitle="Alter TechSoft Pvt. Ltd."
            result="Pune, Maharashtra"
            des="Gained hands-on experience in building responsive web applications, writing clean code, and collaborating with the development team on real-world projects."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;