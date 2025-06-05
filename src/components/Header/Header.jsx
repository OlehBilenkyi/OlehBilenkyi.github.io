import React, { useState } from "react";
import { motion } from "framer-motion";

export function Header({
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <li>
      <button
        onClick={() => scrollToSection(href.replace("#", ""))}
        className={`hover:text-blue-600 transition-colors ${
          activeSection === href.replace("#", "")
            ? "text-blue-600 font-medium"
            : ""
        }`}
      >
        {children}
      </button>
    </li>
  );

  const MobileNavLink = ({ href, onClick, children }) => (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="block py-2 hover:text-blue-600 transition-colors"
      >
        {children}
      </a>
    </li>
  );

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-semibold">Oleh Bilenkyi</div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </ul>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col space-y-1">
              <span
                className={`h-0.5 bg-gray-900 transition ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-900 transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-900 transition ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white py-4 px-6 shadow-inner"
        >
          <ul className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink href="#resume" onClick={() => setIsOpen(false)}>
              Resume
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
