import React from 'react'
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../../assets/images/contact/contactImg.jpg";

const ContactLeft = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-[#1e2024] to-[#141518] p-6 lgl:p-8 rounded-3xl shadow-shadowOne flex flex-col gap-8 justify-center border border-white/5 relative overflow-hidden group"
    >
      {/* Decorative Glow */}
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-designColor/5 blur-3xl group-hover:bg-designColor/10 transition-all duration-500 rounded-full" />

      <div className="relative overflow-hidden rounded-2xl group">
        <img
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
          src={contactImg}
          alt="contactImg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-white tracking-wide">Pratik Bavche</h3>
          <p className="text-lg font-semibold text-designColor">
            MERN Stack Developer
          </p>
        </div>
        
        <p className="text-base text-gray-400 leading-relaxed font-medium">
          Let's collaborate on your next big idea! I specialize in building high-performance, 
          scalable applications that deliver exceptional user experiences.
        </p>

        <div className="flex flex-col gap-4">
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 text-gray-400 group/item"
          >
            <div className="w-10 h-10 bg-[#141518] rounded-full flex items-center justify-center text-designColor border border-white/5 group-hover/item:border-designColor transition-colors">
              <FaPhoneAlt />
            </div>
            <p className="text-base">
              Phone: <span className="text-lightText font-semibold">+91 8010200739</span>
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 text-gray-400 group/item"
          >
            <div className="w-10 h-10 bg-[#141518] rounded-full flex items-center justify-center text-designColor border border-white/5 group-hover/item:border-designColor transition-colors">
              <FaEnvelope />
            </div>
            <p className="text-base">
              Email: <span className="text-lightText font-semibold">pratikbavche2005@gmail.com</span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm uppercase font-semibold text-gray-400 tracking-[2px]">Connect With Me</h2>
        <div className="flex gap-4">
          {[
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-bavche-b6b696325/", color: "#0077b5" },
            { icon: <FaGithub />, link: "https://github.com/Pratik-Bavche", color: "#6e5494" },
            { icon: <FaTwitter />, link: "https://x.com/Pratik_Bavche", color: "#1da1f2" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/bavche_pratik", color: "#e4405f" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                color: social.color,
                borderColor: social.color + "80", // Adding 50% opacity to border color
                boxShadow: `0 0 20px ${social.color}40`
              }}
              className="w-12 h-12 bg-[#141518] rounded-xl flex items-center justify-center text-xl text-gray-400 border border-white/5 transition-all duration-300 shadow-shadowOne"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ContactLeft;
