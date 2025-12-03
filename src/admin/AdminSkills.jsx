import React, { useEffect, useState } from "react";

const CATEGORY_KEY = "skillCategories";
const SKILL_KEY = "skills";

export default function AdminSkills() {
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);

  const [catForm, setCatForm] = useState({ title: "", desc: "", icon: "" });
  const [skillForm, setSkillForm] = useState({ name: "", level: "" });

  // Load saved data
  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem(CATEGORY_KEY)) || [
      { title: "Frontend", desc: "Creating UI with React & JS", icon: "Code" },
      { title: "Full Stack", desc: "Node, Express, MongoDB", icon: "Laptop" },
      { title: "Tools", desc: "VSCode, Git, GitHub", icon: "Wrench" },
    ];

    const savedSkills = JSON.parse(localStorage.getItem(SKILL_KEY)) || [
      { name: "HTML", level: 95 },
      { name: "CSS / Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
    ];

    setCategories(savedCategories);
    setSkills(savedSkills);
  }, []);

  // Save to localStorage
  const saveAll = () => {
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
    localStorage.setItem(SKILL_KEY, JSON.stringify(skills));

    // update frontend instantly
    window.dispatchEvent(new Event("storage"));

    alert("Skills Updated Successfully!");
  };

  // Add Category
  const addCategory = () => {
    if (!catForm.title.trim()) return;
    setCategories([...categories, catForm]);
    setCatForm({ title: "", desc: "", icon: "" });
  };

  // Add Skill Bar
  const addSkill = () => {
    if (!skillForm.name.trim()) return;
    setSkills([...skills, { ...skillForm, level: Number(skillForm.level) }]);
    setSkillForm({ name: "", level: "" });
  };

  // Delete category
  const removeCategory = (i) => {
    setCategories(categories.filter((_, idx) => idx !== i));
  };

  // Delete skill bar
  const removeSkill = (i) => {
    setSkills(skills.filter((_, idx) => idx !== i));
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛠 Skills Admin Panel</h1>

      {/* CATEGORY FORM */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Add Category</h2>

        <input
          className="border p-2 w-full mt-2"
          placeholder="Title (e.g., Frontend)"
          value={catForm.title}
          onChange={(e) => setCatForm({ ...catForm, title: e.target.value })}
        />

        <input
          className="border p-2 w-full mt-2"
          placeholder="Description"
          value={catForm.desc}
          onChange={(e) => setCatForm({ ...catForm, desc: e.target.value })}
        />

        <input
          className="border p-2 w-full mt-2"
          placeholder="Icon (Code / Laptop / Wrench)"
          value={catForm.icon}
          onChange={(e) => setCatForm({ ...catForm, icon: e.target.value })}
        />

        <button
          onClick={addCategory}
          className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Add Category
        </button>

        {/* List categories */}
        <div className="mt-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-100 p-2 rounded mb-1"
            >
              <span>
                {cat.title} — {cat.desc}
              </span>
              <button className="text-red-600" onClick={() => removeCategory(i)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SKILL FORM */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Add Skill Bar</h2>

        <input
          className="border p-2 w-full mt-2"
          placeholder="Skill Name (HTML)"
          value={skillForm.name}
          onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
        />

        <input
          className="border p-2 w-full mt-2"
          type="number"
          placeholder="Level (0-100)"
          value={skillForm.level}
          onChange={(e) =>
            setSkillForm({ ...skillForm, level: Number(e.target.value) })
          }
        />

        <button
          onClick={addSkill}
          className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Add Skill
        </button>

        {/* List skills */}
        <div className="mt-4">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-100 p-2 rounded mb-1"
            >
              <span>
                {s.name} — {s.level}%
              </span>
              <button className="text-red-600" onClick={() => removeSkill(i)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={saveAll}
        className="px-6 py-3 bg-green-600 text-white text-lg rounded shadow"
      >
        Save All Changes
      </button>
    </section>
  );
}
