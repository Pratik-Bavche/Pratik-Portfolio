// imports of media icons
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-3 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-center">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon hover:text-[#0077b5]">
            <a
              href="https://www.linkedin.com/in/pratik-bavche-b6b696325/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon hover:text-[#6e5494]">
            <a
              href="https://github.com/Pratik-Bavche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon hover:text-[#1da1f2]">
            <a
              href="https://x.com/Pratik_Bavche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/bavche_pratik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>

      <div className="w-full h-[1px] xl:w-[2px] xl:h-[80px] self-center bg-black xl:bg-gray-500"></div>

      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-center">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon text-[#e34f26] hover:text-gray-200">
            <SiHtml5 />
          </span>
          <span className="bannerIcon text-[#f7df1e] hover:text-gray-200">
            <SiJavascript />
          </span>
          <span className="bannerIcon text-[#61dafb] hover:text-gray-200">
            <FaReact />
          </span>
          <span className="bannerIcon text-[#47a248] hover:text-gray-200">
            <SiMongodb />
          </span>

          <span className="bannerIcon text-[#38b2ac] hover:text-gray-200">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
