import React from "react";
import "../index.css";
import { contact, icons } from "./HeaderInfo";
export default function Contact() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Contact Me</h2>
        {icons}
      </section><div className="main-content">
        <form action="post">
          First Name: <input type="text" />
          <br />
          Last Name: <input type="text" />
          <br />
          Company: <input type="text" />
          <br />
          Street: <input type="text" />
          <br />
          City: <input type="text" />
          <br />
          State: <input type="text" />
          <br />
          Email: <input type="email" />
          <br />
          Phone Number: <input type="number" />
          <br />
          Additional Comments: <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  );
}
