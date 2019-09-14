import React from "react";
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
        <a href="call:+19283028624">(928) 302-8624</a>
        <br />
        <a href="mailto:calebtheredd@gmail.com">calebtheredd@gmail.com</a>
      </address>
      <a target="_blank" href="CalebReddResume.pdf">
        Printable Resumé
      </a>
      <br />
      <a href="CalebReddResume.pdf" download>
        Download Resumé PDF
      </a>
    </div>
  </div>
);

export const icons = (
  <div className="icons">
    <nav-item>
      <a
        href="https://www.linkedin.com/in/caleb-redd-592423120/"
        className="icon alt fab fa-linkedin"
      >
        <span className="label">LinkedIn</span>
      </a>
    </nav-item>
    <nav-item>
      <a
        href="https://www.facebook.com/caleb.redd"
        className="icon fab fa-facebook"
      >
        <span className="label">Facebook</span>
      </a>
    </nav-item>
    <nav-item>
      <a
        href="https://www.instagram.com/calebredd"
        className="icon fab fa-instagram"
      >
        <span className="label">Instagram</span>
      </a>
    </nav-item>
    <nav-item>
      <a href="https://www.github.com/calebredd" className="icon fab fa-github">
        <span className="label">GitHub</span>
      </a>
    </nav-item>
  </div>
);
