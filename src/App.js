import React from "react";
import Navbar from "./components/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { contact, icons } from "./componenets/HeaderInfo";

import "./App.scss";

function App() {
  return (
    <div className="app">
        <Navbar />
        <div className="main-content">
            <div name="home" className="filler"></div>
            <Home/>
            <div name="about" className="filler"></div>
            <About/>
            <div name="projects" className="filler"></div>
            <Projects/>
            <div name="contact" className="filler"></div>
            <Contact/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
