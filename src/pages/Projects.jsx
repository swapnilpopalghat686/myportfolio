import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    github: "",
    live: "",
  });

  // Load saved projects
  useEffect(() => {
    localStorage.removeItem("projects");

    const saved = JSON.parse(localStorage.getItem("projects"));
    if (saved) {
      setProjects(saved);
    } else {
      setProjects([
        {
          title: "Airline Management system",
          desc: "A modern and animated airline system built using React.",
          img: "airline.png",
          github: "https://github.com/swapnilpopalghat686/Airline-with-apis.git",
          live: "https://airline-with-apis-ahvi.vercel.app/",
        },
        {
          title: "Redbus Clone",
          desc: "A modern RedBus clone with real-time seat booking, smooth UI, and secure ticket management.",
          img: "redbus.png",
          github: "https://github.com/swapnilpopalghat686/redbus-main-clone.git",
          live: "https://redbus-main-clone-ouuk.vercel.app/",
        },
        {
          title: "Live Whether App ",
          desc: "Live weather app with real-time temperature, forecasts, and location-based updates.",
          img: "Whether.png",
          github: "https://github.com/swapnilpopalghat686/Live-Whether-Webappliaction.git",
          live: "https://live-whether-webappliaction.vercel.app/",
        },
        {
          title: "Counseler Website ",
          desc: "Professional counselling platform offering guidance, appointment booking, and mental wellness support.",
          img: "counseller.png",
          github: "https://github.com/swapnilpopalghat686/Counselling.git",
          live: "https://counselling-theta.vercel.app/",
        },
        {
          title: "Beuty Shop Website ",
          desc: "Modern beauty shop website offering premium skincare, makeup, and haircare products.",
          img: "makeover.png",
          github: "https://github.com/swapnilpopalghat686/beauty-shop.git",
          live: "https://universal-makeover-hayd.vercel.app/",
        },
        {
          title: "My Portfolio Website ",
          desc: "A modern personal portfolio showcasing skills, projects, and professional experience.",
          img: "myportfoilo.png",
          github: "https://github.com/swapnilpopalghat686/myportfolio.git",
          live: "https://myportfolio-iklj.vercel.ap",
        },

      ]);
    }
  }, []);

  // Save to localStorage
  const saveProjects = (updated) => {
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  // Add project
  const handleAddProject = () => {
    const updated = [...projects, formData];
    setProjects(updated);
    saveProjects(updated);
    setShowModal(false);
    setFormData({
      title: "",
      desc: "",
      img: "",
      github: "",
      live: "",
    });
  };

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-200">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My <span className="text-indigo-600">Projects</span>
      </motion.h2>

      {/* Add Project Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Add Project
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.08 }}
            />

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>

              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
                >
                  <Github size={20} />
                  Code
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-1/2 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Add New Project
            </h2>

            <input
              type="text"
              placeholder="Project Title"
              className="w-full p-2 border rounded mb-3"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <textarea
              placeholder="Project Description"
              className="w-full p-2 border rounded mb-3"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
            ></textarea>

            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 border rounded mb-3"
              value={formData.img}
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="GitHub Link"
              className="w-full p-2 border rounded mb-3"
              value={formData.github}
              onChange={(e) =>
                setFormData({ ...formData, github: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Live Demo Link"
              className="w-full p-2 border rounded mb-3"
              value={formData.live}
              onChange={(e) =>
                setFormData({ ...formData, live: e.target.value })
              }
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
