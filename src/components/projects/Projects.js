import React, { useRef } from 'react';
import Title from '../layouts/Title';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import home from "../../assets/images/home.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";
import Schedra from "../../assets/images/Schedra.png";
import Xpeero from "../../assets/images/filesharing.png";
import AlgoView from "../../assets/images/algoview.png";
import elearning from "../../assets/images/elearning.png";
import ProjectsCard from './ProjectsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="w-10 h-10 lgl:w-14 lgl:h-12 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-xl lgl:text-2xl text-gray-400 flex justify-center items-center absolute -top-16 lgl:-top-20 right-2 lgl:right-5 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518]"
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
      className="w-10 h-10 lgl:w-14 lgl:h-12 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-xl lgl:text-2xl text-gray-400 flex justify-center items-center absolute -top-16 lgl:-top-20 right-14 lgl:right-24 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518]"
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  const projectsData = [
    {
      title: "Schedra - an AI-powered project scheduling and management platform",
      des: "AI-powered scheduling platform using Google Gemini to predict risks and bottlenecks. Features real-time simulations, dashboards, and risk heatmaps for smarter management.",
      src: Schedra,
      github: "https://github.com/Pratik-Bavche/Schedra-Predict_Plan_Deliver",
      live: "https://schedra-predict-plan-deliver-client.vercel.app/dashboard"
    },
    {
      title: "xpeero - an file sharing platform",
      des: "Full-stack file sharing platform offering secure auth, room-based sharing, and easy management. Built with React, Node.js, and MongoDB for seamless uploading and tracking.",
      src: Xpeero,
      github: "https://github.com/Pratik-Bavche/File-Sharing-Platform",
      live: "https://xpeero.vercel.app/home"
    },
    {
      title: "E-Learning Appliaction",
      des: "AI-driven app that generates personalized courses from user prompts. Features quizzes, flashcards, and progress tracking to create a flexible, learner-centered experience.",
      src: elearning,
      github: "https://e-learning-app--09b3lsf49l.expo.app",
      live: "https://e-learning-application--9xht4bp79q.expo.appx"
    },
    {
      title: "AlgoView - An Algorithm Visualization Platform",
      des: "Interactive platform for visualizing algorithms via step-by-step animations and graphs. Helps students grasp complex concepts through custom inputs and data simulations.",
      src: AlgoView,
      github: "https://github.com/Pratik-Bavche/AlgoView-A-Platform-to-Visualize-Algorithms",
      live: "https://algo-view-algorithms-visulizer.vercel.app/"
    },
    {
      title: "AI Website Generator",
      des: "Full-stack app powering instant no-code website creation with Gemini 2.0 Flash. Generates responsive HTML sites from text, featuring live previews and advanced AI tools.",
      src: project2,
      github: "https://github.com/Pratik-Bavche/AI-Website-Generator",
      live: "ai-website-generator-web.vercel.app/"
    },
    {
      title: "Pingup Social Media Platform",
      des: "Full-stack social platform with real-time posts, stories, and chat functions. Features secure auth, dynamic feeds, and instant messaging for truly authentic connections.",
      src: project6,
      github: "https://github.com/Pratik-Bavche/Pingup-social-media",
      live: "pingup-social-media.vercel.app/"
    },
    {
      title: "AI Powered ECommerce Platform",
      des: "Intelligent shopping solution with personalized recommendations and AI support. Features secure payments, real-time cart updates, and a modern responsive user interface.",
      src: project3,
      github: "https://github.com/Pratik-Bavche/AI-Powered-E-Commerce",
      live: "ai-powered-e-commerce-client.vercel.app/"
    },
    {
      title: "AI Resume Builder",
      des: "Create professional, ATS-friendly resumes in minutes using AI automation. Features content extraction, face-cropping, and multiple templates for instant, polished results.",
      src: project4,
      github: "https://github.com/Pratik-Bavche/AI-Based-Resume-Generator",
      live: "ai-based-resume-generator-delta.vercel.app/"
    },
    {
      title: "QuickGPT",
      des: "Full-stack AI SaaS for affordable text and image generation services. Combines Stripe payments, credit tracking, and Gemini Flash for instant, high-quality AI results.",
      src: project5,
      github: "https://github.com/Pratik-Bavche/Quick-GPT",
      live: "quick-gpt-client-eight.vercel.app/"
    },
    {
      title: "Moodify Music App",
      des: "AI-powered music app that detects your mood via webcam to recommend songs. Features high-quality streaming, live search functionalities, and a fully personalized dashboard.",
      src: home,
      github: "https://github.com/Pratik-Bavche/Moodify_Music_App",
      live: "moodify-music-web-app-client.vercel.app"
    }
  ];

  // Throttled scroll handler
  let isScrolling = false;
  const handleScroll = (e) => {
    // Check if horizontal scroll is dominant (like trackpad) OR if standard vertical scroll should control it
    // Given user text "scroll through mouse horizontally", they likely mean trackpad horizontal gestures
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (isScrolling) return;
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 500);

      // Prevent default browser history navigation on scroll
      // e.preventDefault(); // can't prevent default on passive listener, but React synthetic events might handle it differently. 
      // For now, just trigger slide.

      if (e.deltaX > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

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
      <div className="w-full" onWheel={handleScroll}>
        <Slider ref={sliderRef} {...settings}>
          {projectsData.map((project, index) => (
            <div key={index} className="px-5">
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
      </div>
    </section>
  );
}

export default Projects;
