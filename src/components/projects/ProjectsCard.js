import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

// This component is used to create a card for each project in the portfolio
// It displays the project image, title, description, and links to GitHub and live site
const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {

  // Ensure link has a protocol so the browser will open it correctly
  const normalizeUrl = (url) => {
    if (!url) return "";
    // trim whitespace
    const trimmed = url.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
    return `https://${trimmed}`;
  };
  return (
    <div className="w-full p-4 xl:px-12 h-auto md:h-[550px] xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 border-2 border-transparent hover:border-designColor/30">
      <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-full object-contain group-hover:scale-105 duration-300 cursor-pointer"
          src={src}
          alt={title || "Project"}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink ? (
                <a
                  href={normalizeUrl(githubLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor lgl:text-gray-400 lgl:hover:text-designColor duration-300"
                >
                  <BsGithub />
                </a>
              ) : (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-500 opacity-60 cursor-not-allowed">
                  <BsGithub />
                </span>
              )}

              {liveLink ? (
                <a
                  href={normalizeUrl(liveLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor lgl:text-gray-400 lgl:hover:text-designColor duration-300"
                >
                  <FaGlobe />
                </a>
              ) : (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-500 opacity-60 cursor-not-allowed">
                  <FaGlobe />
                </span>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-gray-100 lgl:text-gray-400 lgl:hover:text-gray-100 duration-300 h-auto md:h-[100px] overflow-hidden">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard