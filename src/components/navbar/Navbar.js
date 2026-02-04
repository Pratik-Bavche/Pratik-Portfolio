import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdHome, MdApps, MdWork, MdDescription, MdContacts } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} className="w-16 h-16 object-cover" alt="logo" />

      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-full h-screen overflow-hidden fixed top-0 left-0 bg-gray-900 p-4 transform transition-transform duration-500 ease-in-out z-50">
            <div className="flex flex-col gap-8 py-2 relative h-full justify-center">
              <div>
                <img className='w-16 h-16 object-contain' src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I enjoy building full-featured applications using the MERN Stack, turning ideas into practical and interactive solutions. By combining MongoDB, Express, React, and Node.js, I focus on creating apps that are fast, secure, and easy to use. My goal is to deliver digital experiences that are both reliable and engaging, exceeding expectations with every project.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-designColor">
                          {item.title === "Home" && <MdHome />}
                          {item.title === "Features" && <MdApps />}
                          {item.title === "Projects" && <MdWork />}
                          {item.title === "Resume" && <MdDescription />}
                          {item.title === "Contact" && <MdContacts />}
                        </span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon text-[#0077b5] shadow-none">
                    <a href="https://www.linkedin.com/in/pratik-bavche-b6b696325/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </span>
                  <span className="bannerIcon text-[#6e5494] shadow-none">
                    <a href="https://github.com/Pratik-Bavche" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </span>
                  <span className="bannerIcon text-[#1da1f2] shadow-none">
                    <a href="https://x.com/Pratik_Bavche" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  </span>
                  <span className="bannerIcon text-[#e4405f] shadow-none">
                    <a href="https://www.instagram.com/bavche_pratik" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer"
              >
                <RiCloseLine />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar