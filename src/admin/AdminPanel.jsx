import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHome from "./AdminHome";
import AdminAbout from "./AdminAbout";
import AdminProjects from "./AdminProjects";
import AdminSkills from "./AdminSkills";
import AdminContact from "./AdminContact";

/*
  Usage:
  In your App.jsx add: <Route path="/admin/*" element={<AdminPanel />} />
*/

export default function AdminPanel() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 p-8 w-full min-h-screen bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="skills" element={<AdminSkills />} />
            <Route path="contact" element={<AdminContact />} />
            {/* Redirect unknown admin routes to /admin */}
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
