import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Projects() {
  return (
    <div>
      <Navbar/>
    <div id="projects">
      <section className="text-dark bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 body-font">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white underline mx-auto">
              Feature Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg mt-6 text-orange-500 font-bold">
              A passionate student of Information Technology, I am currently focusing on Cloud Computing, Generative AI, and Web 3.0 technologies, gaining valuable experience and applying my skills in real-world projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'COUNTDOWN TIMER PROJECT',
                description:
                  'A countdown timer that allows users to set a date and time for an event. The timer counts down to the specified time and notifies the user when the event is about to occur.',
                image: '/assets/Countdown Timer.png',
                link: 'https://countdown-timer-eta-six.vercel.app/',
                category: 'Countdown Timer',
              },
              {
                title: 'PAKISTAN PROVINCES WEBSITE PROJECT',
                description:
                  'A website showcasing the different provinces of Pakistan. Each province has its own page with information, facts, and images related to it, making it an informative platform for users to learn more about Pakistan.',
                image: '/assets/Pakistan website.jpg',
                link: 'https://pakistan-web-site.vercel.app/',
                category: 'Pakistan Provinces Website',
              },
              {
                title: 'SIMPLE PORTFOLIO WEBSITE Project',
                description: 
                'A clean and minimalistic personal portfolio website to showcase my skills, projects, and experience as a developer. It serves as an online presence for potential clients or employers to review my work.',
                image: '/assets/portfolio1.png',
                link: 'https://portfolio-website-h1uk.vercel.app/',
                category: 'Simple Portfolio Website',
              },
              {
                title: 'CLI CURRENCY CONVERTER Project',
                description: 
                'A command-line interface (CLI) tool that allows users to convert currency from one type to another using real-time exchange rates. It’s a simple yet effective tool for quick currency conversion.',
                image: '/assets/currency_converter.webp',
                link: 'https://github.com/anashakeem123/CLI-04-Currency-Converted-Rates.git',
                category: 'CLI Currency Converter',
              },
              {
                title: 'ANIMATION IMAGE WEBSITE PROJECT',
                description:
                 'A website that displays animated images. It allows users to interact with animations, making it an engaging and dynamic platform. The animations are designed to add life and interactivity to the site.',
                image: '/assets/Animation image.png',
                link: 'https://animation-image-website.vercel.app/',
                category: 'Animation Image Website',
              },
              {
                title: 'PERSONAL PORTFOLIO WEBSITE Project 💡 🔥',
                description: 
                'A text-based adventure game built in the command-line interface (CLI). Players navigate through different scenarios and challenges, making decisions that affect the outcome of the game.',
                image: '/assets/Portfolio.png',
                link: 'https://personal-portfolio-website.vercel.app/',
                category: 'PERSONAL PORTFOLIO WEBSITE',
              },
              {
                title: 'Static Resume 🎨💼 💡 🔥',
                description: 
                'Welcome to the HAKATHON-MILESTONE1-MILESTONE2 project! This is a static resume application created as part of a Hackathon Project that showcases modern',
                image: '/assets/I 1.png',
                link: 'https://hakathon-milestone-1-milestone-2.vercel.app/',
                category: 'HAKATHON-MILESTONE1-MILESTONE2',
              },
              {
                title: 'Dynamic Resume 🎨💼 💡 🔥',
                description: 
                'A dynamic and responsive resume built with HTML, CSS, and JavaScript. This project showcases modern design principles with interactive features to enhance user experience.',
                image: '/assets/I 3.png',
                link: 'https://hakathon-milestone-03.vercel.app/',
                category: 'HAKATHON-MILESTONE-03',
              },
              {
                title: 'Editable Resume 🎨💼 💡 🔥',
                description: 
                'This is an Editable Resume Generator web application that allows users to create, view, and edit their professional resumes. The app lets users input their personal information, educational background, work experience, and skills, and generate a custom resume. The generated resume is fully editable, so users can make changes to any section of their resume even after it has been generated. 🔄',
                image: '/assets/I 4.png',
                link: 'https://hakathon-milestone-4-seven.vercel.app/',
                category: 'HAKATHON-MILESTONE-04',
              },
              {
                title: ' Shareable Resume 🎨💼 💡',
                description:
                 'Create, edit, and share your resume with ease using this interactive web-based tool. This project enables users to generate a fully customizable resume, download it as a',
                image: '/assets/I 5.png',
                link: 'https://hakathon-milestone-5-seven.vercel.app/',
                category: 'HAKATHON-MILESTONE-05',
              },
              {
                title: ' Facebook Clone 👥🌍',
                description: 
                'Welcome to the Facebook Clone project! 🚀 This project replicates the look and feel of Facebook with features like login, sign-up, and a simple news feed. It’s built using React, Next.js, and Tailwind CSS.',
                image: '/assets/Next F.png',
                link: 'https://fb-clone-anas.netlify.app/',
                category: 'Class Work',
              },
              {
                title: '🌍 Currency Converter 💰',
                description: 
                'Currency Converter 💵✨ is a user-friendly web app built with React ⚛️ and Next.js 🚀 to easily convert between currencies 🌍💱. Whether you re traveling 🧳✈️ or managing finances 💰📊, this tool provides real-time exchange rates 📉 with a sleek and responsive interface 📱💻. Enjoy smooth animations 🎞️, intuitive dropdowns ⬇️, and a modern design �',
                image: '/assets/Next C.png',
                link: 'https://currency-converter-project-tawny.vercel.app/?vercelToolbarCode=to0uG_mxFF4rMBk',
                category: 'Next.js Porject Level',
              },
              {
                title: 'Next.JS-Milestone-1 ✨👋',
                description: 
                'Welcome to Next.JS Milestone 01! 🎉 In this milestone 01, First Project Next.JS Milestone 01 Using Language Next.JS , Tailwinda CSS',
                image: '/assets/Next M.png',
                link: 'https://next-js-milestone-01.netlify.app/',
                category: 'Next.js Milestone-1',
              },
              {
                title: 'Shopping-lists✨👋',
                description: 
                'This project was created to focus on working with the DOM, events, state, local storage and other fundamentals of JavaScript.',
                image: '/assets/shopping1.png',
                link: 'https://stately-bienenstitch-82199a.netlify.app/',
                category: 'Self Learning Project',
              },
              {
                title: 'Web-Devepment_Lectures 🤝✨👋',
                description:
                 'This repository contains basic concepts of web-development in the form of a few lectures. It was made as part of a series of web development sessions I gave during my 2nd year.',
                image: '/assets/HTML.webp',
                link: 'https://github.com/anashakeem123/Web-Devepment_Lectures.git',
                category: 'Self Learning  Practice',
              }
              // Add additional projects here...
            ].map((project, index) => (
              <div key={index} className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  alt={project.title}
                  className="object-cover object-center cursor-pointer"
                  src={project.image}
                  height={400}
                  width={600}
                />
                <div className="px-6 py-4 hover:bg-gray-800 transition-all duration-300">
                  <h2 className="text-xl font-medium text-white mb-2">{project.title}</h2>
                  <h3 className="text-md font-semibold text-orange-500 mb-2">{project.category}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <Link target="_blank" href={project.link}>
                    <p className="text-blue-500 hover:underline">View Project</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
}

export default Projects;




























