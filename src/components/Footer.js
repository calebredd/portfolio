import React from "react";

export default function Footer() {
  return (
    <footer>
      <nav className="footer-icons">
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
          <a
            href="https://www.github.com/calebredd"
            className="icon fab fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </nav-item>
      </nav>
      <p className="copyright">
        <i className="icon fa fa-copyright" aria-hidden="true"></i>ReddWebDev
      </p>
    </footer>
  );
}
