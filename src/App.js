import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Certificates from "./components/certificates/Certificates";

import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText overflow-x-hidden">
      <ScrollUp />
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
        <FooterBottom />
      </main>
    </div>
  );
}


export default App;
