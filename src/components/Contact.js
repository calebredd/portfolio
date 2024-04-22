import React from "react";
import "../Contact.scss";
export default function Contact() {
  return (
    <section id="contact">
        <div className="container form">
            <h2 className="center">Contact Me</h2>
            <form netlify method="POST" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                <label>
                    <div>Name</div>
                    <input required type="text" name="name" placeholder="Name" />
                </label>
                <label>
                    <div>Company</div>
                    <input type="text" name="company" placeholder="Company" />
                </label>
                <label>
                    <div>Email</div>
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    <div>Phone</div>
                    <input placeholder="Phone Number" type="tel" name="phone" />
                </label>
                <label>
                    <div>Message</div>
                    <textarea name="comments" 
                    //   cols="30" rows="10"
                        placeholder="Description, Questions, Comments"
                    ></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
  );
}
