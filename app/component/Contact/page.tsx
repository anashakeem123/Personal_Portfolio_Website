import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <div id="Contact">
        <section className="relative bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 text-white body-font">
          {/* Background Overlay with Smooth Transition */}
          <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-r from-blue-900 to-indigo-600 transition duration-1000 ease-in-out"></div>

          {/* Content Container */}
          <div className="container mx-auto px-4 py-16 relative z-10 flex flex-wrap lg:flex-nowrap items-center">
            {/* Contact Info Box */}
            <div className="w-full lg:w-2/3 bg-gray-900 bg-opacity-90 rounded-lg overflow-hidden p-8 md:p-10 shadow-2xl flex flex-col transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <h1 className="text-3xl md:text-4xl font-serif text-orange-400 mb-6">Let’s Connect</h1>
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                Have questions or just want to say hi? Feel free to reach out using the form or the contact details below.
              </p>

              {/* Email Section */}
              <div className="mb-6">
                <h2 className="font-sans font-bold text-white text-lg md:text-xl mb-2">Email</h2>
                <div className="flex items-center">
                  <Image
                    alt="Email Icon"
                    src="/assets/Untitled design (1).gif"
                    width={30}
                    height={30}
                    className="mr-3 animate-pulse"
                  />
                  <Link
                    href="mailto:anashakeem05@gmail.com"
                    className="text-sm md:text-lg text-gray-300 hover:text-orange-400 transition duration-300 transform hover:scale-105"
                  >
                    anashakeem05@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone Section */}
              <div className="mb-6">
                <h2 className="font-sans font-bold text-white text-lg md:text-xl mb-2">Phone</h2>
                <div className="flex items-center">
                  <Image
                    alt="Phone Icon"
                    src="/assets/whatsapp (2).gif"
                    width={30}
                    height={30}
                    className="mr-3 animate-pulse"
                  />
                  <p className="text-sm md:text-lg text-gray-300">+92 344 2427898</p>
                </div>
              </div>

              {/* Thank You Note */}
              <p className="text-base md:text-lg text-gray-300 mt-4">
                <span className="font-bold">Thanks for visiting my website 🥰</span>
              </p>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/3 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-2xl mt-10 sm:mt-0 lg:ml-10 hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl md:text-3xl font-medium title-font mb-4">Contact Me</h2>
              <p className="leading-relaxed mb-6 text-sm md:text-base text-gray-300">
                I’m excited to hear from you! 😊
              </p>

              {/* Name Input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-700 bg-opacity-70 rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-white text-sm md:text-base px-4 py-2 transition-all duration-300 transform hover:scale-105"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-700 bg-opacity-70 rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-white text-sm md:text-base px-4 py-2 transition-all duration-300 transform hover:scale-105"
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-700 bg-opacity-70 rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-white text-sm md:text-base px-4 py-2 h-32 resize-none transition-all duration-300 transform hover:scale-105"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-sm md:text-lg transition-transform duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
