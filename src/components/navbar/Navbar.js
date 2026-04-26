import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdHome, MdApps, MdWork, MdDescription, MdContacts, MdStars } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`w-full sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "h-20 bg-bodyColor/80 backdrop-blur-xl shadow-2xl border-b-[1px] border-designColor/20" 
        : "h-24 bg-bodyColor border-b-[1px] border-b-gray-600"
    }`}>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-designColor z-[60]"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <div className="container mx-auto h-full flex justify-between items-center font-titleFont">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative">
            <motion.img 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              src={logo} 
              className="w-12 h-12 lgl:w-14 lgl:h-14 rounded-full border-2 border-designColor/50 p-1 group-hover:border-designColor transition-all duration-500 shadow-lg object-contain bg-[#191b1e]" 
              alt="logo" 
            />
            <div className="absolute inset-0 rounded-full bg-designColor/20 blur-md group-hover:blur-lg transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100" />
          </div>
          <span className="text-xl font-bold tracking-wider text-gray-200 hidden sm:inline-flex bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent group-hover:from-designColor group-hover:to-[#ff4d6d] transition-all duration-500">
            PRATIK BAVCHE
          </span>
        </motion.div>

        <div>
          <motion.ul 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden mdl:inline-flex items-center gap-6 lg:gap-10"
          >
            {navLinksdata.map(({ _id, title, link }) => (
              <motion.li
                variants={linkVariants}
                className="text-base font-medium text-gray-400 tracking-wide cursor-pointer relative group"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-designColor duration-300 transition-colors"
                >
                  {title}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.span
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl mdl:hidden bg-black/40 w-11 h-11 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer hover:bg-black/60 transition-colors border border-designColor/20"
          >
            <FiMenu />
          </motion.span>

          <AnimatePresence>
            {showMenu && (
              <motion.div 
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-[85%] h-screen fixed top-0 right-0 bg-gradient-to-b from-[#191b1e] to-[#111214] p-6 sm:p-10 z-[100] shadow-2xl border-l border-white/5 overflow-y-auto"
              >
                <div className="flex flex-col h-full relative">
                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <motion.span
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowMenu(false)}
                      className="text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 shadow-lg"
                    >
                      <RiCloseLine />
                    </motion.span>
                  </div>

                  {/* Header Branding */}
                  <div className="flex flex-col gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img className='w-16 h-16 rounded-full border-2 border-designColor p-1 shadow-2xl object-contain bg-[#191b1e]' src={logo} alt="logo" />
                        <div className="absolute inset-0 rounded-full bg-designColor/20 blur-md -z-10" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-wider text-white">
                          PRATIK
                        </span>
                        <span className="text-2xl font-bold tracking-wider text-designColor -mt-2">
                          BAVCHE
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium border-l-2 border-designColor/50 pl-4 py-1 italic">
                      Crafting digital excellence through the MERN Stack. Turning ideas into interactive realities.
                    </p>
                  </div>
                  
                  {/* Navigation Links */}
                  <div className="flex-grow">
                    <ul className="flex flex-col gap-2">
                      {navLinksdata.map((item, idx) => (
                        <motion.li
                          key={item._id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="relative"
                        >
                          <Link
                            onClick={() => setShowMenu(false)}
                            activeClass="active-mobile"
                            to={item.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-300 font-semibold tracking-wide hover:bg-white/5 hover:text-designColor transition-all duration-300 group"
                          >
                            <span className="text-2xl text-designColor bg-designColor/10 p-2.5 rounded-xl group-hover:bg-designColor group-hover:text-white transition-all duration-500 shadow-inner">
                              {item.title === "Home" && <MdHome />}
                              {item.title === "Features" && <MdApps />}
                              {item.title === "Projects" && <MdWork />}
                              {item.title === "Resume" && <MdDescription />}
                              {item.title === "Certificates" && <MdStars />}
                              {item.title === "Contact" && <MdContacts />}
                            </span>
                            {item.title}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Connect Footer */}
                  <div className="mt-auto pt-10 border-t border-white/5">
                    <div className="flex flex-col gap-6">
                      <h2 className="text-xs uppercase font-bold text-gray-500 tracking-[3px] flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-designColor" />
                        SOCIAL CONNECT
                      </h2>
                      <div className="flex gap-4">
                        {[
                          { icon: <FaLinkedinIn />, color: "#0077b5", link: "https://www.linkedin.com/in/pratik-bavche-b6b696325/" },
                          { icon: <FaGithub />, color: "#ffffff", link: "https://github.com/Pratik-Bavche" },
                          { icon: <FaTwitter />, color: "#1da1f2", link: "https://x.com/Pratik_Bavche" },
                          { icon: <FaInstagram />, color: "#e4405f", link: "https://www.instagram.com/bavche_pratik" }
                        ].map((social, i) => (
                          <motion.a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-[#141518] text-xl inline-flex items-center justify-center rounded-xl shadow-xl border border-white/5 hover:border-designColor transition-all duration-300"
                            style={{ color: social.color }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Overlay for mobile menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMenu(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90] mdl:hidden"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar