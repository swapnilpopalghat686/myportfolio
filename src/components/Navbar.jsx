import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-3">

        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600 cursor-pointer">
          Swapnil<span className="text-gray-800"> Popalghat</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-indigo-600 border-b-2 border-indigo-600"
                className="cursor-pointer hover:text-indigo-500 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800 hover:text-indigo-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-indigo-600"
                onClick={() => setIsOpen(false)}
                className="block text-lg py-2 px-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
