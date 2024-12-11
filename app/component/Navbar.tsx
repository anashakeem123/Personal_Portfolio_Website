'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/component/Hero2", label: "Home" },
    { href: "/component/About", label: "About" },
    { href: "/component/Projects", label: "Projects" },
    { href: "/component/Skills", label: "Skills" },
    { href: "/component/Certificates", label: "Certificates" },
    { href: "/component/Contact", label: "Contact" },
  ];

  return (
    <div className="navbar bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-700 shadow-lg sticky top-0 z-50">
      <header>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex title-font font-medium items-center text-white">
              <Image
                src="/assets/logo.png"
                height={50}
                width={50}
                alt="Logo"
                className="rounded-full hover:scale-110 transition duration-300"
              />
              <span className="text-2xl ml-3 font-extrabold text-orange-400 hover:text-orange-500">
                Anas Hakeem
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-orange-500 hover:text-orange-600 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links for Desktop */}
          <nav className="navbar-menu hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-link text-lg text-white font-semibold hover:text-orange-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Dropdown */}
          <div
            className={`mobile-menu md:hidden bg-blue-800 rounded-lg p-4 space-y-4 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-semibold text-white hover:text-orange-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden md:flex justify-center items-center">
            <Link
              href="/assets/resume.png"
              className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-bold shadow-lg hover:bg-orange-600 transition duration-300 hover:shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
