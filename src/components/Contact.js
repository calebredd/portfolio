import React from "react";
import "../Contact.scss";
export default function Contact() {
  return (
    <div className="section">
      <section className="contact-info">
        <h2 className="center">Contact Me</h2>
      </section>
      <div className="container">
        <form netlify method="POST" className="box" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <input required type="text" name="name" placeholder="Name" />
          <input type="text" name="company" placeholder="Company" />
          <input type="email" name="email" placeholder="Email" />
          <input placeholder="Phone Number" type="tel" name="phone" />
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
