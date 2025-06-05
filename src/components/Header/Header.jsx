import React, { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-semibold">Oleh Bilenkyi</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>

        {/* Mobile Burger Button */}
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white py-4 px-6 shadow-inner"
        >
          <ul className="flex flex-col space-y-4">
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

const NavLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-blue-600 transition-colors">
      {children}
    </a>
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
