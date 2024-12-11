import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer';
import Navbar from '../Navbar';
function About() {
  return (
    <>
      <Navbar/>
    <div className="bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 text-white body-font">
      <div className="container mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="object-cover object-center rounded-full border-4 border-stone-400 shadow-2xl shadow-white transition-transform duration-500 ease-in-out transform hover:scale-105"
            alt="hero"
            src={'/assets/Anas1.jpg'}
            height={500}
            width={500}
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide leading-tight animate__animated animate__fadeIn animate__delay-1s">
            About Me
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-6 font-serif">
            Meet Anas Hakeem | Frontend Developer Student at GIAIC
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 px-4 sm:px-12 mb-8 font-semibold">
            Hi, I’m Anas Hakeem, 19 years old, a passionate and driven Web Developer based in Karachi, Pakistan. I specialize in creating dynamic, responsive, and user-friendly websites using modern web technologies like HTML5, CSS3, JavaScript, TypeScript, and Next.js. I am also exploring UI/UX design to ensure the best experience for users.
            <br />
            <br />
            Currently, I’m a student at the Governor House Karachi, where I’m learning Full Stack Development and continuously improving my skills in Cloud Computing, Applied Generative AI, and Web 3.0 technologies. I believe in lifelong learning and am always eager to take on new challenges.
            <br />
            <br />
            Feel free to explore my work below, and don’t hesitate to contact me if you’re interested in collaborating!
          </p>

          {/* Buttons Section */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <Link href={'/component/Skills'}>
              <button className="inline-flex text-white bg-orange-500 border-0 py-3 px-8 focus:outline-none hover:bg-amber-600 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110">
                Skills
              </button>
            </Link>
            <Link href='/assets/resume.png' target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white font-bold bg-gray-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-500 rounded-full text-lg transition-all duration-300 transform hover:scale-110">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default About;
