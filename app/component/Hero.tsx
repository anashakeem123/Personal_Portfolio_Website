"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Particles from "react-tsparticles";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-600 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              color: { value: "#ffffff" },
              links: { enable: true, color: "#ffffff", distance: 150 },
              move: { enable: true, speed: 1 },
              size: { value: 3 },
              opacity: { value: 0.5 },
            },
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="text-white body-font" id="hero">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-4xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              HELLO!{" "}
              <Typewriter
                options={{
                  strings: ["I’M Anas Hakeem"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span className="block mt-2">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "UI/UX Designer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mb-8 text-lg sm:text-xl leading-relaxed text-gray-200 max-w-xl">
              A passionate IT student 🎓 focused on Cloud Computing ☁️,
              Generative AI 🤖, Web 3.0 🌐, Metaverse 🪐, and Full-Stack
              Development 💻. Currently refining my skills at Governor House
              Karachi 🏛️, I am dedicated to creating innovative solutions that
              drive technological impact 🌟. Let's build the future together! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/component/Contact" aria-label="Contact Me">
                <button className="inline-flex items-center text-white bg-orange-500 border-0 py-3 px-8 focus:outline-none hover:bg-orange-600 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-2xl">
                  Contact Me
                  <span className="ml-2">📧</span>
                </button>
              </Link>
              <Link
                href="/assets/resume.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
              >
                <button className="inline-flex items-center text-white bg-gray-700 border-0 py-3 px-8 focus:outline-none hover:bg-orange-500 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-2xl">
                  Download CV
                  <span className="ml-2">📄</span>
                </button>
              </Link>
              <Link
                href="https://github.com/anashakeem123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <button className="inline-flex items-center text-white bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-2xl">
                  GitHub Profile
                  <span className="ml-2">🐙</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Image
              className="bord hover:shadow-2xl object-cover object-center rounded-full border-4 border-stone-400 shadow-2xl shadow-white transition-transform duration-700 ease-in-out transform hover:scale-105"
              alt="Anas Hakeem"
              src="/assets/Anas1.jpg"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
      </section>
      </div>
  );
}

export default Hero;
