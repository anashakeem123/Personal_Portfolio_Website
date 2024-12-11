'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from 'react-icons/io5';
import Technical from '../Technical/page';
import Footer from '../Footer';
import Navbar from '../Navbar';
function Skills() {
  const [inView, setInView] = useState(false);

  // Intersection Observer to track when the skill section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set to true when section comes into view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      observer.observe(skillsSection); // Start observing the skill section
    }

    // Cleanup observer when component unmounts
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <section
        id="skills-section"
        className="text-dark bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 body-font"
      >
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-8xl text-5xl font-bold text-white underline">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Skill Cards */}
            {[
              { name: "HTML", icon: <AiFillHtml5 />, level: "90%", width: "90%" },
              { name: "CSS", icon: <FaCss3Alt />, level: "90%", width: "90%" },
              { name: "JAVASCRIPT", icon: <IoLogoJavascript />, level: "80%", width: "80%" },
              { name: "TYPESCRIPT", icon: <SiTypescript />, level: "85%", width: "85%" },
              { name: "NEXT.JS", icon: <RiNextjsFill />, level: "87%", width: "87%" },
              { name: "TAILWIND CSS", icon: <RiTailwindCssFill />, level: "80%", width: "80%" },
              { name: "UI/UX DESIGNER", icon: <AiOutlineCheckCircle />, level: "80%", width: "80%" },
            ].map((skill, index) => (
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={skill.name}>
                <div
                  className={`flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn animate-delay-${index * 200}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white">
                      {skill.icon}
                    </div>
                    <h2 className="text-white text-lg font-semibold">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-700 rounded-xl overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-2  bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 rounded-xl transition-all duration-1000 ease-in-out ${
                          inView ? "fill-bar" : ""
                        }`}
                        style={{ width: inView ? skill.width : "0%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Proficiency: {skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Technical/>
     <Footer/>
    </div>
  );
}

export default Skills;
