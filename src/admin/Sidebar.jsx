import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Folder, Wrench, Phone } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 fixed left-0 top-0">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

      <nav className="flex flex-col gap-3">
        <Link to="/admin" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800">
          <Home size={18} /> <span>Home</span>
        </Link>

        <Link to="/admin/about" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800">
          <User size={18} /> <span>About</span>
        </Link>

        <Link to="/admin/projects" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800">
          <Folder size={18} /> <span>Projects</span>
        </Link>

        <Link to="/admin/skills" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800">
          <Wrench size={18} /> <span>Skills</span>
        </Link>

        <Link to="/admin/contact" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800">
          <Phone size={18} /> <span>Contact</span>
        </Link>
      </nav>
    </aside>
  );
}
