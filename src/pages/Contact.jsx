import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-white via-gray-100 to-gray-200"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-indigo-600">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-14">
        {/* LEFT SIDE CONTACT DETAILS */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Card */}
          <motion.div
            className="backdrop-blur-xl bg-white/40 p-8 rounded-3xl shadow-lg border border-white/60"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Let's Connect
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-600" size={30} />
                <div>
                  <p className="text-lg font-medium">Email</p>
                  <p className="text-gray-600 text-sm">swapnilpopalghat44@email.com</p>
                  <p className="text-gray-600 text-sm">swapnilpopalghat001@email.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={30} />
                <div>
                  <p className="text-lg font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">+91 9067823609</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <MapPin className="text-pink-600" size={30} />
                <div>
                  <p className="text-lg font-medium">Location</p>
                  <p className="text-gray-600 text-sm">Bhosari, Pune-411039</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          className="backdrop-blur-xl bg-white/50 p-8 rounded-3xl shadow-lg border border-white/60 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <label className="text-gray-800 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="text-gray-800 font-medium">Your Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="text-gray-800 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 flex justify-center items-center gap-2 transition"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
