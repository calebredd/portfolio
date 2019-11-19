import React from "react";
import "../HeaderInfo.scss";
export const contact = (
  <div className="contact">
    <div className="left-header">
      <img
        id="Redd-in-Red"
        src="pictures/ReddFamilyinRed.jpg"
        alt="We love the color Red!"
      />
    </div>
    <div className="right-header">
      <address>
        Tempe, AZ 85282
        <br />
        <a href="tel:+19283028624">(928) 302-8624</a>
        <br />
        <a href="mailto:calebtheredd@gmail.com">calebtheredd@gmail.com</a>
      </address>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="CalebReddResume.pdf">
          Printable Resumé
        </a>
      </p>
      <p>
        <a href="CalebReddResume.pdf" download>
          Download Resumé PDF
        </a>
      </p>
    </div>
  </div>
);

export const icons = (
  <div className="icons">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/caleb-redd/"
      className="icon alt fab fa-linkedin"
    >
      <nav-item />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/caleb.redd"
      className="icon fab fa-facebook"
    >
      <nav-item />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/calebredd"
      className="icon fab fa-instagram"
    >
      <nav-item />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.github.com/calebredd"
      className="icon fab fa-github"
    >
      <nav-item />
    </a>
  </div>
);
