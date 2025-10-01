import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import contactImg  from "../../assets/images/contact/contactImg.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />

      {/* This section contains the contact details */}
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Pratik Bavche</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
         I enjoy building full-featured applications using the MERN Stack, turning ideas into practical and interactive solutions. By combining MongoDB, Express, React, and Node.js, I focus on creating apps that are fast, secure, and easy to use. My goal is to deliver digital experiences that are both reliable and engaging, exceeding expectations with every project.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">8010200739</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">pratikbavche2005@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
            <a
              href="https://www.linkedin.com/in/pratik-bavche-b6b696325/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
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
          <span className="bannerIcon">
            <a
              href="https://instagram.com/pratik_bavche_patil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
