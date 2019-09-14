import React from "react";
import "../index.css";
import { contact, icons } from "./HeaderInfo";
export default function Home() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Software Engineer</h2>
        {icons}
      </section>
    </div>
  );
}
