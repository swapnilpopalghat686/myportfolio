import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Hero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Remove old localStorage data to avoid outdated URLs
    localStorage.removeItem("heroData");

    const defaultData = {
      title: "Hi, I'm Swapnil",
      highlight: "Popalghat",
      subtitle: "A passionate MERN Stack Developer who loves building modern UI.",
      btn1Text: "View Resume",
      btn1Link: "/Resume Swapnil Popalghat.pdf",
      btn2Text: "Contact Me",
      btn2Link: "https://wa.me/9067823609",
      github: "https://github.com/swapnilpopalghat686",
      linkedin: "https://www.linkedin.com/in/swapnil-d-popalghat", // must include https://
      email: "mailto:swapnilpopalghat44@gmail.com",
      image: "hero.jpeg",
    };

    localStorage.setItem("heroData", JSON.stringify(defaultData));
    setData(defaultData);
  }, []);

  if (!data) return null;

  return (
    <>
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-20 py-20 md:min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200"
      >
        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5 mt-6 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            {data.title}{" "}
            <span className="text-indigo-600 drop-shadow-md">{data.highlight}</span>
          </h1>

          <motion.p
            className="text-base md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {data.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href={data.btn1Link}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              {data.btn1Text}
            </a>
            <a
              href={data.btn2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition"
            >
              {data.btn2Text}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-5 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Github size={26} />
            </a>

            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Linkedin size={26} />
            </a>

            <a href={data.email} className="hover:text-indigo-600 transition">
              <Mail size={26} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.img
            src={data.image}
            alt="profile"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
