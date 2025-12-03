import React, { useState, useEffect } from "react";

export default function AdminHome() {
  const [form, setForm] = useState({
    title: "",
    highlight: "",
    subtitle: "",
    btn1Text: "",
    btn1Link: "",
    btn2Text: "",
    btn2Link: "",
    github: "",
    linkedin: "",
    email: "",
    image: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("heroData"));
    if (saved) setForm(saved);
  }, []);

  const updateData = () => {
    localStorage.setItem("heroData", JSON.stringify(form));
    alert("Hero Section Updated Successfully!");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">🏠 Edit Hero Section</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            placeholder={key}
            className="w-full p-2 border rounded"
          />
        ))}

        <button
          onClick={updateData}
          className="px-4 py-2 bg-indigo-600 text-white rounded shadow"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}
