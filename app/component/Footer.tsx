import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white body-font">
      <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo and Brief Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="transform hover:scale-110 hover:rotate-3 transition duration-500">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={130}
              height={50}
              className="rounded-full mb-6 border-4 border-orange-500 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4 transition-all duration-500 hover:text-white">Anas Hakeem</h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
            Crafting exceptional web experiences with a passion for design and innovation. Let’s build something amazing together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Information</h3>
          <p className="text-sm text-gray-300 mb-2">
            Email: <a href="mailto:anashakeem05@gmail.com" className="text-orange-400 hover:text-white transition duration-300">anashakeem05@gmail.com</a>
          </p>
          <p className="text-sm text-gray-300">Location: Karachi, Pakistan</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105">Contact Me</Link>
            </li>
          </ul>

          {/* Search Box */}
          <div className="mt-6 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-l bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition-all duration-300 hover:border-orange-500"
              />
              <button
                className="absolute right-0 px-4 py-2 rounded-r bg-orange-500 text-white hover:bg-orange-600 transition duration-300"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <Link href="https://www.facebook.com/profile.php?id=100080006837787&rdid=zeSvRTWpmAdM2p4R&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fcp9TYSgNGsoAU8my%2F" className="text-gray-300 hover:text-orange-500 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
        </Link>
        <Link href="https://www.instagram.com/abdulhakeem5335/?igsh=YzljYTk1ODg3Zg%3D%3D#" className="text-gray-300 hover:text-orange-500 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/anas-hakeem-235348274/" className="text-gray-300 hover:text-orange-500 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
        </Link>
        <Link href="https://github.com/anashakeem123" className="text-gray-300 hover:text-orange-500 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </Link>
        <Link href="https://wa.me/923280611677" className="text-gray-300 hover:text-orange-500 transition duration-300" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        </Link>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © 2024 <span className='text-orange-500'>Anas Hakeem</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
