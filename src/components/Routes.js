import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../Routes.scss";
export default function Routers() {
  return (
    <div className="Routes">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}
