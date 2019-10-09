import React from "react";
import "../Footer.scss";
export default function Footer() {
  return (
    <footer>
      <nav className="footer-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/caleb-redd-592423120/"
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
      </nav>
      <p className="copyright">
        Created By Caleb Redd. Using React. Hosted on Netlify.
      </p>
    </footer>
  );
}
