import React from 'react'
import Title from '../layouts/Title'
import home from "../../assets/images/home.png"
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Moodify Music App"
          githubLink="https://github.com/Pratik-Bavche/Moodify_Music_App"
          liveLink=""
          des="Moodify is a full-stack AI-powered music player that detects the user's mood through webcam or manual input and recommends songs accordingly. Built with React.js, Tailwind CSS, Framer Motion, Node.js, Express.js, and MongoDB, it features user login/signup, a personalized dashboard, search and play functionality, responsive design, and dark mode."
          src={home} 
        />
        <ProjectsCard
          title="Project 2"
          githubLink=""
          liveLink=""
          des="Coming Soon - Another exciting project in development."
          src={home}
        />
        <ProjectsCard
          title="Project 3"
          githubLink=""
          liveLink=""
          des="Coming Soon - More projects coming your way."
          src={home}
        />
      </div>
    </section>
  );
}

export default Projects
