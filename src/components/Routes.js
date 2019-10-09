import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../Routes.scss";
export default function Routes() {
  return (
    <div className="Routes">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}
