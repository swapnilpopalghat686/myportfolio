import React, { useState, useEffect } from "react";

export default function UpdateForm() {
  /** ---------------- HERO ---------------- */
  const [hero, setHero] = useState({
    title: "Hi, I'm Swapnil",
    highlight: "Swapnil",
    subtitle: "A passionate Front-End Developer who loves building modern UI.",
    btn1Text: "View Projects",
    btn1Link: "#projects",
    btn2Text: "Contact Me",
    btn2Link: "#contact",
    github: "https://github.com/swapnilpopalghat686",
    linkedin: "https://www.linkedin.com/in/swapnil-d-popalghat",
    email: "mailto:swapnilpopalghat44@gmail.com",
    image: "hero.jpeg",
  });

  /** ---------------- ABOUT ---------------- */
  const [about, setAbout] = useState({
    image: "about.jpeg",
    title: "About Me",
    description: "Hi! I’m Swapnil, a passionate Front-End Developer who loves building smooth and interactive web applications.",
    buttonText: "View My Skills →",
    buttonLink: "#skills",
  });

  /** ---------------- PROJECTS ---------------- */
  const [projects, setProjects] = useState([
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
      title: "Live Weather App",
      desc: "Live weather app with real-time temperature, forecasts, and location-based updates.",
      img: "Whether.png",
      github: "https://github.com/swapnilpopalghat686/Live-Whether-Webappliaction.git",
      live: "https://live-whether-webappliaction.vercel.app/",
    },
  ]);

  /** ---------------- SKILLS ---------------- */
  const [skills, setSkills] = useState(["HTML", "CSS / Tailwind", "JavaScript", "React JS", "Node / Express"]);

  /** Load from localStorage on mount */
  useEffect(() => {
    const savedHero = localStorage.getItem("heroData");
    const savedAbout = localStorage.getItem("aboutData");
    const savedProjects = localStorage.getItem("projects");
    const savedSkills = localStorage.getItem("skills");

    if (savedHero) setHero(JSON.parse(savedHero));
    if (savedAbout) setAbout(JSON.parse(savedAbout));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
  }, []);

  /** Save all updates to localStorage */
  const handleSave = () => {
    localStorage.setItem("heroData", JSON.stringify(hero));
    localStorage.setItem("aboutData", JSON.stringify(about));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("skills", JSON.stringify(skills));
    alert("All updates saved!");
  };

  /** Add new project */
  const addProject = () => {
    setProjects([...projects, { title: "", desc: "", img: "", github: "", live: "" }]);
  };

  /** Add new skill */
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Update Portfolio Data</h1>

      {/* HERO FORM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hero Section</h2>
        {Object.keys(hero).map((key) => (
          <div key={key}>
            <label className="block font-medium">{key}</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={hero[key]}
              onChange={(e) => setHero({ ...hero, [key]: e.target.value })}
            />
          </div>
        ))}
      </section>

      {/* ABOUT FORM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Section</h2>
        {Object.keys(about).map((key) => (
          <div key={key}>
            <label className="block font-medium">{key}</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={about[key]}
              onChange={(e) => setAbout({ ...about, [key]: e.target.value })}
            />
          </div>
        ))}
      </section>

      {/* PROJECTS FORM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects Section</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            <h3 className="font-semibold">Project {index + 1}</h3>
            {Object.keys(project).map((key) => (
              <div key={key}>
                <label className="block font-medium">{key}</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={project[key]}
                  onChange={(e) => {
                    const updatedProjects = [...projects];
                    updatedProjects[index][key] = e.target.value;
                    setProjects(updatedProjects);
                  }}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={addProject} className="px-4 py-2 bg-indigo-600 text-white rounded">Add Project</button>
      </section>

      {/* SKILLS FORM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills Section</h2>
        {skills.map((skill, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={skills[i]}
              onChange={(e) => {
                const updatedSkills = [...skills];
                updatedSkills[i] = e.target.value;
                setSkills(updatedSkills);
              }}
            />
          </div>
        ))}
        <button onClick={addSkill} className="px-4 py-2 bg-indigo-600 text-white rounded">Add Skill</button>
      </section>

      {/* SAVE BUTTON */}
      <button onClick={handleSave} className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg">Save All Changes</button>
    </div>
  );
}
