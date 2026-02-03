import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { HiOutlineDownload } from "react-icons/hi";
import PratikBavcheResume from "../../assets/PratikBavcheResume.pdf";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// LeftBanner component with typewriter effect and media integration
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "Android Developer",
      "Professional Coder",
      "React Developer",
      "Backend Developer",
      "Full Stack Developer"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const controls = useAnimation();

  useEffect(() => {
    // Initial entrance animation
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.05 },
    }));

    // Periodic attention-grabbing animation
    const interval = setInterval(() => {
      controls.start((i) => ({
        color: ["#c4cfde", "#c2003d", "#c4cfde"],
        scale: [1, 1.2, 1],
        y: [0, -5, 0],
        textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 10px rgba(194, 0, 61, 0.8)", "0px 0px 0px rgba(0,0,0,0)"],
        transition: { delay: i * 0.05, duration: 0.5 },
      }));
    }, 5000); // Runs every 5 seconds

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 lgl:mr-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal font-titleFont tracking-widest uppercase">
          {"WELCOME TO MY PORTFOLIO!".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial={{ opacity: 0, y: -20, rotateX: 90 }}
              animate={controls}
              className="inline-block cursor-default transition-all"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hey, I'm{" "}
          <span className="text-designColor capitalize">Pratik Bavche</span>
        </h1>
        <h2 className="text-4xl font-bold text-pink">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="#"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I focus on making designs that feel natural and easy to use. My goal is to keep things simple, clear, and engaging so users enjoy every interaction. By paying attention to both design and functionality, I make sure each project not only looks good but also works smoothly in real life.
        </p>
        <div className="mt-6 lgl:mt-4">
          <a href={PratikBavcheResume} target="_blank" rel="noopener noreferrer">
            <button className="w-full lgl:w-[200px] h-12 bg-[#141518] shadow-shadowOne text-base font-normal text-white lgl:text-gray-400 tracking-wider uppercase hover:text-designColor duration-300 hover:scale-105 active:scale-95 border border-designColor lgl:border-transparent hover:border-designColor rounded-lg group flex justify-center items-center gap-3 transition-all">
              Download CV <span className="text-xl group-hover:translate-y-1 group-active:translate-y-2 transition-transform duration-300"><HiOutlineDownload /></span>
            </button>
          </a>
        </div>
      </div>
      <Media />
    </div>
  );
}

export default LeftBanner