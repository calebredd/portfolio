import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="navItem">Home</div>
      </NavLink>
      <NavLink to="/Projects">
        <div className="navItem">Projects</div>
      </NavLink>
      <NavLink to="/Resume">
        <div className="navItem">Resumé</div>
      </NavLink>
      <NavLink to="/About">
        <div className="navItem">About</div>
      </NavLink>
      <NavLink to="/Contact">
        <div className="navItem">Contact</div>
      </NavLink>
    </div>
  );
}
