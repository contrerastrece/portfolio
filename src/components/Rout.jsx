import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ProjectPage from "../pages/project";
import ContactPage from "../pages/contact";
export const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </>
  );
};
