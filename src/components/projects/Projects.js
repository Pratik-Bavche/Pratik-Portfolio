import React, { useRef } from 'react';
import Title from '../layouts/Title';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import home from "../../assets/images/home.png";
import project2 from "../../assets/images/project2.png";
import Schedra from "../../assets/images/Schedra.png";
import Xpeero from "../../assets/images/filesharing.png";
import AlgoView from "../../assets/images/algoview.png";
import elearning from "../../assets/images/elearning.png";
import evento from "../../assets/images/evento.jpg";
import ProjectsCard from './ProjectsCard';
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-14 h-14 lgl:w-16 lgl:h-16 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-2xl lgl:text-3xl text-gray-400 flex justify-center items-center absolute !top-auto !bottom-[-40px] !transform-none !right-auto !left-1/2 !ml-4 lgl:!ml-0 lgl:!top-[-80px] lgl:!bottom-auto lgl:!left-auto lgl:!right-5 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518] ${className}`}
      style={{ ...style, display: props.onClick ? "flex" : "none" }}
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-14 h-14 lgl:w-16 lgl:h-16 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-2xl lgl:text-3xl text-gray-400 flex justify-center items-center absolute !top-auto !bottom-[-40px] !transform-none !left-auto !right-1/2 !mr-4 lgl:!mr-0 lgl:!top-[-80px] lgl:!bottom-auto lgl:!left-auto lgl:!right-24 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518] ${className}`}
      style={{ ...style, display: props.onClick ? "flex" : "none" }}
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}



const Projects = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  const projectsData = [
    {
      title: "Schedra - AI Project Management",
      des: "AI-powered scheduling platform using Google Gemini to predict risks and bottlenecks. Features real-time simulations, dashboards, and risk heatmaps for smarter management.",
      src: Schedra,
      github: "https://github.com/Pratik-Bavche/Schedra-Predict_Plan_Deliver",
      live: "https://schedra-predict-plan-deliver-client.vercel.app/dashboard"
    },
    {
      title: "Evento - A Campus Event Application",
      des: "Evento is a smart campus event management platform designed to streamline event discovery, registration, and coordination with real-time updates and attendance tracking.",
      src: evento,
      github: "https://github.com/Pratik-Bavche/Campus_Event_App",
      live: "https://github.com/Pratik-Bavche/Campus_Event_App"
    },
    {
      title: "xpeero - File Sharing Platform",
      des: "Full-stack file sharing platform offering secure auth, room-based sharing, and easy management. Built with React, Node.js, and MongoDB for seamless uploading.",
      src: Xpeero,
      github: "https://github.com/Pratik-Bavche/File-Sharing-Platform",
      live: "https://xpeero.vercel.app/home"
    },
    {
      title: "AlgoView - Algorithm Visualizer",
      des: "Interactive platform for visualizing algorithms via step-by-step animations and graphs. Helps students grasp complex concepts through custom inputs.",
      src: AlgoView,
      github: "https://github.com/Pratik-Bavche/AlgoView-A-Platform-to-Visualize-Algorithms",
      live: "https://algo-view-algorithms-visulizer.vercel.app/"
    },
    {
      title: "AI E-Learning Application",
      des: "AI-driven app that generates personalized courses from user prompts. Features quizzes, flashcards, and progress tracking for a learner-centered experience.",
      src: elearning,
      github: "https://e-learning-app--09b3lsf49l.expo.app",
      live: "https://e-learning-application--9xht4bp79q.expo.appx"
    },
    {
      title: "AI Website Generator",
      des: "Full-stack app powering instant no-code website creation with Gemini 2.0 Flash. Generates responsive HTML sites from text, featuring live previews.",
      src: project2,
      github: "https://github.com/Pratik-Bavche/AI-Website-Generator",
      live: "ai-website-generator-web.vercel.app/"
    },
    {
      title: "Moodify Music App",
      des: "AI-powered music app that detects your mood via webcam to recommend songs. Features high-quality streaming and a personalized dashboard.",
      src: home,
      github: "https://github.com/Pratik-Bavche/Moodify_Music_App",
      live: "moodify-music-web-app-client.vercel.app"
    }
  ];

  const handleScroll = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full" 
        onWheel={handleScroll}
      >
        <Slider ref={sliderRef} {...settings}>
          {projectsData.map((project, index) => (
            <div key={index} className="px-3 py-10 h-full">
              <ProjectsCard
                title={project.title}
                des={project.des}
                src={project.src}
                githubLink={project.github}
                liveLink={project.live}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default Projects;
