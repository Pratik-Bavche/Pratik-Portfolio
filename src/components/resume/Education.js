import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// Education component displaying updated education details in correct order
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
   
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          {/* 1st: B.Tech */}
          <ResumeCard
            title="D. Y. Patil College of Engineering, Akurdi (Pune)"
            subTitle="B.Tech in Information Technology (2024 - 2027)"
            result="9.0 / 10"
            des="Currently, I am pursuing my Bachelor of Technology (B.Tech) in Information Technology from Dr. D.Y. Patil College of Engineering, Pune. This journey is helping me gain deeper insights into advanced technologies such as data structures & algorithms, software engineering, computer networks, advanced databases, and more."
          />

          {/* 2nd: Diploma */}
          <ResumeCard
            title="Government Polytechnic Awasari, Khurd (Pune)"
            subTitle="Diploma in Information Technology (2021 - 2024)"
            result="92.50% / 100%"
            des="I successfully completed my Diploma in Information Technology from Government Polytechnic, Awasari (Pune), where I built a strong foundation in core IT concepts including programming, database management, networking, and web development. This three-year journey helped me gain practical knowledge and prepared me for a career in technology."
          />

          {/* 3rd: School */}
          <ResumeCard
            title="Kailas Patil Madhyamik Vidhyalaya, Vaijapur"
            subTitle="Standard 5 to 10"
            result="93% / 100%"
            des="I completed my secondary education at Kailas Patil Madhyamik Vidhyalaya, Vaijapur, from 5th to 10th standard. During this period, I developed a strong foundation in academics and essential skills, laying the groundwork for my future studies."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education;
