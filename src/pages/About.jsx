import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("aboutData");

    if (saved) {
      setData(JSON.parse(saved));
    } else {
      const defaultData = {
        image: "about.jpeg",
        title: "About Me",
        description:
          "Hi! I’m Swapnil, a passionate MERN Stack Developer who loves building smooth and interactive web applications.",
        card1Title: "💡 Creative",
        card1Text: "I love designing modern UI with smooth animations.",
        card2Title: "⚡ Fast",
        card2Text: "I optimize sites to load fast and perform smoothly.",
        card3Title: "📱 Responsive",
        card3Text: "Websites look great on all screen sizes.",
        buttonText: "View My Skills →",
        buttonLink: "/skills"
      };

      localStorage.setItem("aboutData", JSON.stringify(defaultData));
      setData(defaultData);
    }
  }, []);

  if (!data) return null;

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex justify-center"
      >
        <motion.img
          src={data.image}
          alt="about"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 object-contain drop-shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 space-y-5 text-center md:text-left"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {data.title.split(" ")[0]}{" "}
          <span className="text-indigo-600">{data.title.split(" ")[1]}</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          {data.description}
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {/* Card 1 */}
          <motion.div
            className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-b-4 border-indigo-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {data.card1Title}
            </h3>
            <p className="text-gray-600 text-sm">{data.card1Text}</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-b-4 border-pink-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {data.card2Title}
            </h3>
            <p className="text-gray-600 text-sm">{data.card2Text}</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-b-4 border-green-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {data.card3Title}
            </h3>
            <p className="text-gray-600 text-sm">{data.card3Text}</p>
          </motion.div>
        </div>

        {/* BUTTON */}
        <motion.a
          href={data.buttonLink}
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          {data.buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
