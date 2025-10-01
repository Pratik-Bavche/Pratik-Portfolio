import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

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

    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20 lgl:mr-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO!</h4>
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
        </div>
        <Media />
      </div>
    );
}

export default LeftBanner