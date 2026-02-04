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
      {/* Technical Associate */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Jan 2026 - Feb 2026 </p>
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity Intern"
            subTitle="Cyber cell pimpri chinchwad"
            result="Pune, Maharashtra"
            des="Practical exposure to cybercrime analysis, digital forensics, and cybersecurity operations, allowing me to apply theoretical knowledge in real-world IT and law enforcement scenarios."
          />
        </div>
      </div>
      {/* Technical Associate */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Jul 2025 - Present</p>
          <h2 className="text-4xl font-bold">Technical Associate</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Associate"
            subTitle="EDC - Entrepreneur Development Cell"
            result="Pune, Maharashtra"
            des="Worked as a Technical Associate at the Entrepreneur Development Cell, gaining hands-on experience in managing tech initiatives, supporting projects, and enhancing technical skills."
          />
        </div>
      </div>

      {/* Design Coordinator */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Nov 2023 - Apr 2024</p>
          <h2 className="text-4xl font-bold">Design Associate</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Design Associate"
            subTitle="Government Polytechnic, Awasari Khurd (Pune) - Information Technology Club"
            result="Pune, Maharashtra"
            des="Contributed as a Design Associate in the IT Club, working on creative projects, designing materials, and collaborating with peers to enhance technical and design skills."
          />
        </div>
      </div>

      {/* Internship */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Jul 2023 - Sep 2023</p>
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development"
            subTitle="Alter TechSoft Pvt. Ltd"
            result="Pune, Maharashtra"
            des="Completed a web development internship at Alter TechSoft Pvt. Ltd, gaining practical experience in building web applications, coding, and collaborating on real-world projects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
