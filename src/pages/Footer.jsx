import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-10 mt-20 overflow-hidden">
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
      >
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-wider">Swapnil Portfolio</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
Building modern, scalable web applications using the MERN Stack — MongoDB for fast NoSQL databases, Express.js for powerful backend APIs, React for dynamic UI, and Node.js for high-performance server logic.
</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Skills", link: "/skills" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.link} className="hover:text-white transition duration-200">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/swapnilpopalghat686" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/swapnil-d-popalghat" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:swapnilpopalghat44@gmail.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="relative z-10 text-center text-gray-500 mt-14 border-t border-gray-800 pt-6 text-sm">
        © {new Date().getFullYear()} Swapnil Popalghat — All Rights Reserved.
      </div>

      

      {/* Back to Top Button */}
      <button>
      <a
        href="/"
        className="absolute right-6 bottom-6 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition text-white text-xl"
      >
        <FaArrowUp />
      </a></button>


    </footer>
  );
}