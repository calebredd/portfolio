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
        <form netlify name="contact">
          Name: <input required type="text" name="name" placeholder"Name" />
          <br />
          Company: <input type="text" name="company" placeholder="Company" />
          <br />
          Email: <input type="email" name="email" placeholder="Email"/>
          <br />
          Phone Number: <input type="number" name="number" />
          <br />
          Additional Comments: <br />
          <textarea name="comments" cols="30" rows="10" placeholder="Comments..."></textarea>
          <br/>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}