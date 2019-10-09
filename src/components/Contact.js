import React from "react";
import "../Contact.scss";
import { contact, icons } from "./HeaderInfo";
export default function Contact() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Contact Me</h2>
        {icons}
      </section>
      <div className="main-content">
        <form netlify method="POST" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <input required type="text" name="name" placeholder="Name" />
          <input type="text" name="company" placeholder="Company" />
          <input type="email" name="email" placeholder="Email" />
          <input placeholder="Number" type="tel" name="phone" />
          <textarea
            name="comments"
            cols="30"
            rows="10"
            placeholder="Comments..."
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
