import React, { useState, useEffect } from "react";

const STORAGE_KEY = "aboutData";

const defaultData = {
  image: "about.jpeg",
  title: "About Me",
  description:
    "Hi! I’m Swapnil, a passionate Front-End Developer who loves building smooth and interactive web applications.",
  card1Title: "💡 Creative",
  card1Text: "I love designing modern UI with smooth animations.",
  card2Title: "⚡ Fast",
  card2Text: "I optimize sites to load fast and perform smoothly.",
  card3Title: "📱 Responsive",
  card3Text: "Websites look great on all screen sizes.",
  buttonText: "View My Skills →",
  buttonLink: "/skills",
};

export default function AdminAbout() {
  const [form, setForm] = useState(defaultData);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setForm(JSON.parse(saved));
    } else {
      // localStorage madhe save kartoy default
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
  }, []);

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    alert("About Section Updated!");
  };

  const clearAll = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    setForm(defaultData);
    alert("Reset to Default Data");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">🙋 About Section Editor</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="block mb-1 font-semibold capitalize">{key}</label>

            <input
              type="text"
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}

        <div className="flex gap-4 mt-4">
          <button
            onClick={save}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Save Changes
          </button>

          <button
            onClick={clearAll}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Reset Default
          </button>
        </div>
      </div>
    </section>
  );
}
