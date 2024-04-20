import React from "react";
import {Link} from "react-scroll";
export default function Navbar() {
  return (
    <header className="app-header">
        <Link to="home" smooth={true} duration={500}>
            <div className="navItem logoTitle">
                <img className="familyPhoto" src="pictures/Caleb_Mugshot.png" alt="Caleb Redd Portrait"/>
                <span>Caleb Redd</span>
            </div>
        </Link>
        <div className="navbar">
            <Link to="home" smooth={true} duration={500}>
                <div className="navItem">Home</div>
            </Link>
            <Link to="about" smooth={true} duration={500}>
                <div className="navItem">About</div>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
                <div className="navItem">Projects</div>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <div className="navItem">Contact</div>
            </Link>
        </div>
    </header>
  );
}
