import React, { useRef, useState } from 'react'
import Title from '../layouts/Title'
import CertificateCard from './CertificateCard'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iisppr from "../../assets/certificates/IISPPR Intership.jpg";
import edc from "../../assets/certificates/Pratik Bavche EDC_page-0001.jpg";
import Hackathon from "../../assets/certificates/WhatsApp Image 2026-02-25 at 6.32.57 PM.jpeg";
import blockchain from "../../assets/certificates/PRATIK  NARAYAN  BAVCHE_Certificate_page-0001.jpg";
import ecwoc from "../../assets/certificates/ECWoC_page-0001.jpg";
import skcf from "../../assets/certificates/skcf.jpg";
import cummins from "../../assets/certificates/cummins.jpg";
import cyber from "../../assets/certificates/Internship Certificate.jpg";
import andrd from "../../assets/certificates/Goggle Android Intership Certificate_page-0001.jpg";
import it from "../../assets/certificates/ITESA.jpg";
import gpa from "../../assets/certificates/Industrial Training Certificate_page-0001.jpg";
import gfg from "../../assets/certificates/Gfg certificate_page-0001.jpg";
import python from "../../assets/certificates/Python Foundation Certificate_page-0001.jpg";
import c from "../../assets/certificates/c&CppIITBOMBAY_page-0001.jpg";
import linux from "../../assets/certificates/Linux-Test-Certificate_page-0001.jpg";
import java from "../../assets/certificates/Java Certificate_page-0001.jpg";
import iot from "../../assets/certificates/IOT.jpeg";
import iotw from "../../assets/certificates/IOT Workshop.jpeg";

function CertNextArrow({ className, style, onClick, setIsAutoPlay }) {
  return (
    <div
      className={`w-14 h-14 lgl:w-16 lgl:h-16 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-2xl lgl:text-3xl text-gray-400 flex justify-center items-center absolute !top-auto !bottom-[-40px] !transform-none !right-auto !left-1/2 !ml-4 lgl:!ml-0 lgl:!top-[-80px] lgl:!bottom-auto lgl:!left-auto lgl:!right-5 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518] ${className}`}
      style={{ ...style, display: onClick ? "flex" : "none" }}
      onClick={() => {
        onClick();
        setIsAutoPlay(false);
      }}
    >
      <HiArrowRight />
    </div>
  );
}

function CertPrevArrow({ className, style, onClick, setIsAutoPlay }) {
  return (
    <div
      className={`w-14 h-14 lgl:w-16 lgl:h-16 bg-[#0c1825] hover:bg-black duration-300 rounded-md text-2xl lgl:text-3xl text-gray-400 flex justify-center items-center absolute !top-auto !bottom-[-40px] !transform-none !left-auto !right-1/2 !mr-4 lgl:!mr-0 lgl:!top-[-80px] lgl:!bottom-auto lgl:!left-auto lgl:!right-24 shadow-shadowOne cursor-pointer z-10 hover:text-designColor active:bg-[#141518] ${className}`}
      style={{ ...style, display: onClick ? "flex" : "none" }}
      onClick={() => {
        onClick();
        setIsAutoPlay(false);
      }}
    >
      <HiArrowLeft />
    </div>
  );
}

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: isAutoPlay && !selectedCert,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CertNextArrow setIsAutoPlay={setIsAutoPlay} />,
        prevArrow: <CertPrevArrow setIsAutoPlay={setIsAutoPlay} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 667,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ],
      };

  const certificatesData = [
    {
      title: "Full Stack Development Internship",
      date: "April 2026",
      des: "Completed a Full Stack (MERN Stack) Internship at IISPPR Organization with hands-on experience in UI development, APIs, and system integration.",
      src: iisppr
    },
    {
      title: "Certificate of Participation - ECWoC",
      date: "March 2026",
      des: "Actively participated in Elite Coders Winter of Code (ECWoC), contributing to open source projects among 5000+ participants.",
      src: ecwoc
    },
    {
      title: "Blockchain Virtual Intership",
      date: "March 2026",
      des: "Successfully completed a virtual internship at EduSkills Academy, gaining practical knowledge and industry exposure.",
      src: blockchain
    },
    {
      title: "Cybersecurity Internship",
      date: "Feb 2026",
      des: "Completed a Cybersecurity Internship at Cyber Cell PCMC, gaining hands-on experience in security practices, threat analysis, and basic cybersecurity tools.",
      src: cyber
    },
    {
      title: "Cummins Nurturing Brilliance Scholarship",
      date: "Jan 2026",
      des: "Recipient of the Cummins Nurturing Brilliance Scholarship",
      src: cummins
    },
    {
      title: "Web Development Internship",
      date: "Jan 2026",
      des: "Web Development Internship at SKCF with hands-on experience in responsive design and web development.",
      src: skcf
    },
    {
      title: "Itesa Certificate",
      date: "Dec 2025",
      des: "Participated in an expert session on AI Ethics organized by ITESA, gaining insights into ethical considerations in AI.",
      src: it
    },
    {
      title: "Web Development Intership",
      date: "Aug 2025",
      des: "Completed a Web Development Internship at EDC with hands-on experience in React.js, Tailwind CSS, and GitHub.",
      src: edc
    },
    {
      title: "GFG Certificate",
      date: "July 2025",
      des: "Successfully attended the offline workshop “Exploring Generative AI: How ChatGPT Can Transform Your Study and Creativity” in Pune, organized by GeeksforGeeks.",
      src: gfg
    },
    {
      title: "C & CPP Certificate",
      date: "June 2025",
      des: "Successfully passed C and C++ programming tests conducted by the Spoken Tutorial Project, IIT Bombay, completing the training through self-learning.",
      src: c
    },
    {
      title: "FutureTech Innovation Hackathon",
      date: "April 2025",
      des: "Winner of the FutureTech Innovation Hackathon for developing an innovative solution.",
      src: Hackathon
    },
    {
      title: "Linux Certificate",
      date: "March 2025",
      des: "Successfully passed a Linux test conducted remotely by the Spoken Tutorial Project, IIT Bombay, under an honor-based invigilation system, completing the training through self-learning.",
      src: linux
    },
    {
      title: "Android Virtual Intership",
      date: "Dec 2024",
      des: "Successfully completed an Android Virtual Internship at EduSkills, gaining hands-on experience in mobile app development and UI design.",
      src: andrd
    },
    {
      title: "JAVA Certificate",
      date: "June 2024",
      des: "Successfully completed a 6-month professional course in Java at VJTech Academy, demonstrating outstanding performance.",
      src: java
    },
    {
      title: "Python Foundation Certificate",
      date: "March 2024",
      des: "Successfully completed the Python Foundation course on Infosys Springboard, gaining foundational knowledge in Python programming.",
      src: python
    },
    {
      title: "AR-VR With OpenAI Certificate",
      date: "Oct 2023",
      des: "Successfully completed an AR/VR and OpenAI workshop, gaining insights into immersive technologies and AI applications.",
      src: iotw
    },
    {
      title: "Software Development Internship",
      date: "July 2023",
      des: "Completed a Software Development Internship at Alter TechSoft Pvt. Ltd. working under the guidance of a Project Manager.",
      src: gpa
    },
    {
      title: "IOT Workshop Certificate",
      date: "Nov 2022",
      des: "Successfully completed an IoT workshop, gaining insights into Internet of Things concepts and applications.",
      src: iot
    },
  ];



  // Throttled scroll handler
  let isScrolling = false;
  const handleScroll = (e) => {
    if (selectedCert) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (isScrolling) return;
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 500);

      if (e.deltaX > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <section
      id="certificates"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Certificates & Achievements" />
      </div>
      <div className="w-full" onWheel={handleScroll}>
        <Slider ref={sliderRef} {...settings}>
            {certificatesData.map((cert, index) => (
                <div key={index} className="px-4 py-10">
                    <CertificateCard
                        title={cert.title}
                        provider={cert.provider}
                        date={cert.date}
                        des={cert.des}
                        src={cert.src}
                        onClick={() => setSelectedCert(cert.src)}
                    />
                </div>
            ))}
        </Slider>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full h-auto bg-[#191b1e] p-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert}
                alt="Certificate full view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <span
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-designColor text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 duration-300"
              >
                <RiCloseLine />
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}



export default Certificates


