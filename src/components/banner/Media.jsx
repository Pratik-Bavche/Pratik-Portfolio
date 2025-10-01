// imports of media icons
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
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
          <span className="bannerIcon">
            <a
              href="https://facebook.com/pratik_bavche_patil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://x.com/Pratik_Bavche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/pratik-bavche-b6b696325/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/Pratik-Bavche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-center">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>

          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
