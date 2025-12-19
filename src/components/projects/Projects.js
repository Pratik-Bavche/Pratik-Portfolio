import React from 'react'
import Title from '../layouts/Title'
import home from "../../assets/images/home.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import project4 from "../../assets/images/project4.png"
import project5 from "../../assets/images/project5.png"
import project6 from "../../assets/images/project6.png"
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
          title="AI Website Generator"
          githubLink="https://github.com/Pratik-Bavche/AI-Website-Generator"
          liveLink="ai-website-generator-web.vercel.app/"
          des="AI Website Generator is a full-stack web app that lets anyone create professional, responsive websites instantly with zero coding. Powered by Google Gemini 2.0 Flash, it generates production-ready HTML/CSS (Tailwind) from plain English descriptions, complete with modern UI, interactivity, and business logic. Users can preview changes live, view their website, download the full code, and customize every element visually. It also includes advanced AI image tools — generate images, upload your own, or apply smart edits, styles, and effects — making it an all-in-one solution for fast, customizable website creation." 
          src={project2}
        />
        <ProjectsCard
          title="Pingup Social Media Platform"
          githubLink="https://github.com/Pratik-Bavche/Pingup-social-media"
          liveLink="pingup-social-media.vercel.app/"
          des="
          PingUp is a full-stack social media platform built with React, Node.js, and MongoDB that connects people through real-time posts, stories, and messaging. It features a dynamic feed, 24-hour stories, instant chat, and secure Clerk authentication. With ImageKit for media uploads, Inngest for background jobs, and Server-Sent Events for real-time updates, PingUp offers a fast, modern, and engaging social experience focused on authentic connections."
          src={project6}
        />
        <ProjectsCard
          title="AI Powered ECommerce Platform"
          githubLink="https://github.com/Pratik-Bavche/AI-Powered-E-Commerce"
          liveLink="ai-powered-e-commerce-client.vercel.app/"
          des="AI-Powered E-Commerce Platform is a full-stack, intelligent shopping solution that offers personalized recommendations, smart admin tools, and AI-driven customer support. Built with React 19, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB Atlas, it features secure authentication (JWT, bcrypt, Google OAuth2), seamless payments via Razorpay, and image management with Cloudinary. With real-time cart updates, order tracking, and a modern responsive UI, it delivers a fast, secure, and personalized shopping experience — deployed easily on Vercel, Render, and MongoDB Atlas."
          src={project3}
        />
        <ProjectsCard
          title="AI Resume Builder"
          githubLink="https://github.com/Pratik-Bavche/AI-Based-Resume-Generator"
          liveLink="ai-based-resume-generator-delta.vercel.app/"
          des="
        AI Resume Builder is a full-stack web app that helps users create and enhance professional, ATS-friendly resumes in minutes using AI and automated image processing. Built with React, Node.js, Express, and MongoDB, it lets users upload old resumes, extract and edit content with AI, and generate polished results instantly. Featuring multiple templates, secure JWT auth, and ImageKit for face-cropping and background removal, it offers a fast, smart, and modern way to build recruiter-ready resumes effortlessly."
          src={project4}
        />
        <ProjectsCard
          title="QuickGPT"
          githubLink="https://github.com/Pratik-Bavche/Quick-GPT"
          liveLink="quick-gpt-client-eight.vercel.app/"
          des="
          QuickGPT is a full-stack AI SaaS platform that makes powerful AI tools simple, fast, and affordable. Built with React, Node.js, and MongoDB, it combines AI text and image generation, Stripe payments, and real-time credit tracking in one place. Powered by Gemini 2.0 Flash and ImageKit, it delivers instant, high-quality results with transparent pricing starting at just $10/month. QuickGPT is the all-in-one platform for creators, developers, and businesses to generate, manage, and share AI content effortlessly."
          src={project5}
        />
        <ProjectsCard
          title="Moodify Music App"
          githubLink="https://github.com/Pratik-Bavche/Moodify_Music_App"
          liveLink="moodify-music-web-app-client.vercel.app"
          des="
          Moodify is a full-stack, AI-powered music streaming app that detects your mood via webcam or manual input and recommends songs accordingly. Built with React.js, Tailwind CSS, Framer Motion, Node.js, Express.js, and MongoDB, it uses the YouTube API and yt-dlp for high-quality, legal streaming. Featuring user authentication, a personalized dashboard, live search, responsive design, and dark mode, Moodify offers a seamless, intelligent, and modern way to enjoy music tailored to your emotions — anytime, anywhere. With real-time mood detection and smooth animations, it turns your feelings into a personalized music experience."
          src={home} 
        />
      </div>
    </section>
  );
}

export default Projects
