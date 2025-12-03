import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Wrench } from "lucide-react";

export default function Skills() {
  const skillBars = [
    { name: "HTML", level: 85 },
    { name: "CSS / Tailwind", level: 75 },
    { name: "Modern JavaScript", level: 80 },
    { name: "React JS/Redux", level: 80 },
    { name: "Node / Express", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 80 }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200"
    >
      {/* SECTION HEADING */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-indigo-600">Skills</span>
      </motion.h2>

      {/* SKILL CATEGORY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        {/* Front-end */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
        >
          <Code className="text-indigo-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-600 text-sm">
            Creating interactive UI using React, Tailwind & modern JS.
          </p>
        </motion.div>

        {/* Full Stack */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
        >
          <Laptop className="text-pink-500 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
          <p className="text-gray-600 text-sm">
            Building dynamic apps using Node, Express & MongoDB.
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
        >
          <Wrench className="text-green-500 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <p className="text-gray-600 text-sm">
            Git, VSCode, Postman, GitHub, render, vercel, netlify.
          </p>
        </motion.div>
      </div>

      {/* ANIMATED SKILL BARS */}
      <div className="mt-16 max-w-3xl mx-auto">
        {skillBars.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="font-medium text-gray-700">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
