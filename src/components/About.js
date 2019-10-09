import React from "react";
import { contact, icons } from "./HeaderInfo";
import "../About.scss";
export default function About() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">About Me</h2>
        {icons}
      </section>
      <div className="main-content">
        <div className="box">
          <h2>DJ</h2>
          <div className="about-box-content">
            <img src="pictures/DJRadd.jpg" alt="" />
            <p>
              I love music. I love people. I love when the things I love come
              together for one epic party!
            </p>
          </div>
        </div>
        <div className="box">
          <h2>Husband & Father</h2>
          <div className="about-box-content">
            <img src="pictures/ReddFamilyinRed.jpg" alt="" />
            <p>I love my wife. I love my daughter. I love my dog.</p>
          </div>
        </div>
        <div className="box">
          <h2>Adventurer</h2>
          <div className="about-box-content">
            <img src="pictures/Hiking.jpg" alt="" />
            <img src="pictures/campinginPayson.jpg" alt="" />
            <p>I love nature.</p>
          </div>
        </div>
        <div className="box">
          <h2>Rock Climber</h2>
          <div className="about-box-content">
            <img src="pictures/GrandCanyon.jpg" alt="" />
            <p>I love pushing myself to my limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
