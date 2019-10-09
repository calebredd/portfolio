import React from "react";
import { contact, icons } from "./HeaderInfo";
export default function Home() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Software Engineer</h2>
        {icons}
      </section>
      <img
        className="familyPhoto"
        src="pictures/ReddFamilyinRed.jpg"
        alt="We love the color Red!"
      />
    </div>
  );
}
