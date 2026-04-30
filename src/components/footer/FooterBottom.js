import React from 'react'
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 border-t border-black/20 bg-bodyColor">
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-12 lgl:gap-8 mb-16">
        {/* Branding Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">
            Pratik <span className="text-designColor">Bavche</span>
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Crafting digital experiences with precision and passion. Specializing 
            in modern web solutions and the MERN Stack.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-bavche-b6b696325/" },
              { icon: <FaGithub />, link: "https://github.com/Pratik-Bavche" },
              { icon: <FaTwitter />, link: "https://x.com/Pratik_Bavche" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/bavche_pratik" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#ff014f" }}
                className="w-10 h-10 bg-black/30 rounded-lg flex items-center justify-center text-lg text-gray-400 border border-white/5 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {['About', 'Projects', 'Resume', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-designColor transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-designColor scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Specialties</h3>
          <ul className="flex flex-col gap-3">
            {[
              'Web Development',
              'MERN Stack',
              'UI/UX Design',
              'App Development'
            ].map((item) => (
              <li key={item} className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Get in Touch</h3>
          <p className="text-base text-gray-400">
            Have a project in mind? Let's discuss it over a quick chat on WhatsApp.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918010200739"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-6 py-3 bg-[#25D366] text-white rounded-xl flex items-center gap-3 hover:bg-[#128C7E] transition-all duration-300 font-bold shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </div>

      <div className="pt-8 pb-8 border-t border-white/5 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-12">
          © {currentYear}. Developed by <span className="text-designColor font-bold">Pratik Bavche</span>
        </p>

        {/* Animated Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <p className="text-lg md:text-2xl font-titleFont text-gray-300 font-medium tracking-widest flex items-center gap-3">
            Thanks for visiting my profile!
            <motion.span
              animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="text-designColor inline-block"
            >
              👋
            </motion.span>
          </p>

          {/* Underline shimmer */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-designColor to-transparent origin-center"
          />

          {/* Ambient Glow */}
          <motion.div 
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 bg-designColor blur-3xl rounded-full -z-10"
          />
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterBottom;