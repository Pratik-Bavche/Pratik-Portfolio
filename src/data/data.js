import { AiFillAppstore } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { FaMobile, FaGlobe, FaDatabase } from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "MERN Stack Development",
    des: "Building powerful full-stack web applications using MongoDB, Express, React, and Node.js for high performance.",
    icon: <SiProgress />,
  },
  {
    id: 2,
    title: "App Development (Web/Mobile)",
    des: "Creating seamless and user-friendly cross-platform mobile applications and responsive web experiences.",
    icon: <FaMobile />,
  },
  {
    id: 3,
    title: "Database Management",
    des: "Expertise in MySQL, PostgreSQL, and MongoDB to optimize data storage, retrieval, and overall system efficiency.",
    icon: <FaDatabase />,
  },
  {
    id: 4,
    title: "API Development & Integration",
    des: "Connecting frontend applications with robust backend systems and third-party services via REST and GraphQL.",
    icon: <AiFillAppstore />,
  },
  {
    id: 5,
    title: "Problem Solving & DSA",
    des: "Strong foundation in Data Structures and Algorithms to build efficient, optimized, and scalable code solutions.",
    icon: <FaGlobe />,
  },
  {
    id: 6,
    title: "UI/UX & Responsive Design",
    des: "Crafting intuitive and aesthetically pleasing interfaces that ensure a seamless experience across all devices.",
    icon: <SiAntdesign />,
  },
];
