import React, { useState, useEffect } from "react";

const STORAGE_KEY = "projects"; // same for frontend & admin

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(
    {
    title: "Portfolio Website",
    desc: "A modern animated portfolio built using React, TailwindCSS, and Framer Motion. Fully responsive with smooth UI transitions.",
    img: "https://cdn.dribbble.com/users/1732368/screenshots/6201143/portfolio.png",
    github: "https://github.com/",
    live: "https://example.com/",
  },

  {
  "title": "E-Commerce UI",
  "desc": "A clean shopping UI built in React with product filtering, category sorting, and responsive card grid layout.",
  "img": "https://cdn.dribbble.com/users/199982/screenshots/2408189/ecommerce.png",
  "github": "https://github.com/",
  "live": "https://example.com/"
},

{
  "title": "Weather App",
  "desc": "A real-time weather application using OpenWeather API. Shows temperature, humidity, air pressure, and location-based forecast.",
  "img": "https://cdn.dribbble.com/users/759083/screenshots/2944510/weather.gif",
  "github": "https://github.com/",
  "live": "https://example.com/"
}



);

  // Load existing projects
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

    if (saved && Array.isArray(saved)) {
      setProjects(saved);
    } else {
      const defaultData = [
        {
          title: "Portfolio Website",
          desc: "A modern and animated portfolio built using React.",
          img: "https://cdn.dribbble.com/users/1732368/screenshots/6201143/portfolio.png",
          github: "#",
          live: "#",
        },
      ];
      setProjects(defaultData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
  }, []);

  // Save to storage
  const saveAll = (updatedList) => {
    setProjects(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  };

  // Add new project
  const addProject = () => {
    const updated = [...projects, form];
    saveAll(updated);
    setForm({ title: "", desc: "", img: "", github: "", live: "" }); // reset
  };

  // Delete project
  const deleteProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    saveAll(updated);
  };

  // Update existing project live
  const updateProject = (index, key, value) => {
    const updated = projects.map((p, i) =>
      i === index ? { ...p, [key]: value } : p
    );
    saveAll(updated);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">📁 Projects Manager</h2>

      {/* Add New */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="font-semibold mb-3">Add New Project</h3>

        <input
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Image URL"
          className="w-full p-2 border rounded mb-2"
          value={form.img}
          onChange={(e) => setForm({ ...form, img: e.target.value })}
        />
        <input
          placeholder="GitHub"
          className="w-full p-2 border rounded mb-2"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />
        <input
          placeholder="Live URL"
          className="w-full p-2 border rounded mb-2"
          value={form.live}
          onChange={(e) => setForm({ ...form, live: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded mb-2"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button
          onClick={addProject}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Project
        </button>
      </div>

      {/* List */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-3">Your Projects</h3>

        {projects.map((p, i) => (
          <div key={i} className="border p-3 rounded mb-4">
            <input
              className="w-full p-2 border rounded mb-2"
              value={p.title}
              onChange={(e) => updateProject(i, "title", e.target.value)}
            />
            <input
              className="w-full p-2 border rounded mb-2"
              value={p.img}
              onChange={(e) => updateProject(i, "img", e.target.value)}
            />
            <input
              className="w-full p-2 border rounded mb-2"
              value={p.github}
              onChange={(e) => updateProject(i, "github", e.target.value)}
            />
            <input
              className="w-full p-2 border rounded mb-2"
              value={p.live}
              onChange={(e) => updateProject(i, "live", e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded mb-2"
              value={p.desc}
              onChange={(e) => updateProject(i, "desc", e.target.value)}
            />

            <button
              onClick={() => deleteProject(i)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
