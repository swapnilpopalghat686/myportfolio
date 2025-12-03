import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Hero from "./pages/MainPage";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import AdminPanel from "./admin/AdminPanel"
import AdminHome from "./admin/AdminHome";
import AdminAbout from "./admin/AdminAbout";
import AdminProjects from "./admin/AdminProjects";
import AdminSkills from "./admin/AdminSkills";
import AdminContact from "./admin/AdminContact";
// import MainPage from "./pages/Hero";
import Hero from "./pages/Hero";

// Wrapper component to handle Navbar visibility
const AppWrapper = () => {
  const location = useLocation();

  // Hide Navbar on admin routes
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/admin/Home*" element={<AdminHome />} />
        <Route path="/admin/about*" element={<AdminAbout />} />
        <Route path="/admin/projects*" element={<AdminProjects />} />
        <Route path="/admin/skills*" element={<AdminSkills />} />
        <Route path="/admin/contact*" element={<AdminContact />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar"; // your Navbar component
// import MainPage from ".pages/MainPage"; // the combined Hero/About/Projects/Skills/Contact/Footer
// // import AdminPanel from "./admin/AdminPanel"; // admin dashboard

// // Wrapper to conditionally render Navbar
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const hideNavbar = location.pathname.startsWith("/admin");
//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       {children}
//     </>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/*" element={<MainPage />} />

//           {/* Admin Routes */}
//           {/* <Route path="/admin/*" element={<AdminPanel />} /> */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }
