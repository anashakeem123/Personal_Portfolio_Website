import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer";
import Navbar from "../Navbar";
function Certificates() {
  return (
    <div>
      <Navbar/>
      <section className="text-dark bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white underline">
              My Certifications
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {[ 
              {
                title: "HTML5 CSS3 Javascript",
                description: "Certificate for mastering web development basics.",
                image: "/assets/HTML5 CSS3 Javascript Cretificate.png",
                link: "https://github.com/anashakeem123",
                category: "Certificate",
              },
              {
                title: "HTML5 Intermediate Level",
                description: "Intermediate-level certification in HTML5.",
                image: "/assets/Anas Hakeem.png",
                link: "https://github.com/anashakeem123",
                category: "Certificate",
              },
              {
                title: 'Node.js Fundamental',
                description: 'Certificate showcasing foundational knowledge of Node.js, including its core modules and server-side scripting.',
                image: '/assets/Anas Hakeem Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Web Development Fundamentals',
                description: 'Certificate demonstrating proficiency in basic web development concepts, including HTML, CSS, and JavaScript.',
                image: '/assets/Web Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'GitHub Copilot',
                description: 'Certificate for understanding and utilizing GitHub Copilot as an AI-powered coding assistant to boost productivity.',
                image: '/assets/Certificate Github.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Next.js 14 Fundamental',
                description: 'Certificate validating knowledge of Next.js 14, focusing on server-side rendering, static site generation, and API integration.',
                image: '/assets/Next.js.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'UI/UX Designer',
                description: 'Certificate confirming skills in designing user-friendly interfaces and enhancing user experiences through best design practices.',
                image: '/assets/UIUX.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Tailwind CSS',
                description: 'Certificate for mastering Tailwind CSS, including its utility-first approach for creating responsive and scalable designs.',
                image: '/assets/Certificate tailwindacss.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Typescript Fundamentals',
                description: 'Certificate for understanding TypeScript, including its static typing, interfaces, and advanced features for robust development.',
                image: '/assets/Typescript Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              // Other certificates...
            ].map((project, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 flex justify-center"
              >
                <div className="flex relative">
                  <Image
                    alt={project.title}
                    className="rounded-lg border-2 border-orange-400 shadow-lg"
                    src={project.image}
                    height={500}
                    width={400}
                    priority={index === 0} // First image loads first
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h2 className="tracking-widest text-lg font-medium text-white mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-md font-medium text-orange-400 mb-3">
                      {project.category}
                    </h1>
                    <p className="leading-relaxed text-center px-4 text-white text-sm">
                      {project.description}
                    </p>
                    <Link
                      target="_blank"
                      href={project.link}
                      className="text-blue-500 mt-3"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Certificates;
