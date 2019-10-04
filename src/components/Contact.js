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
      </section>
      <div className="main-content">
        <form netlify method="POST" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          Name: <input required type="text" name="name" placeholder="Name" />
          <br />
          Company: <input type="text" name="company" placeholder="Company" />
          <br />
          Email: <input type="email" name="email" placeholder="Email" />
          <br />
          Phone Number: <input placeholder="Number" type="tel" name="phone" />
          <br />
          Additional Comments: <br />
          <textarea
            name="comments"
            cols="30"
            rows="10"
            placeholder="Comments..."
          ></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
