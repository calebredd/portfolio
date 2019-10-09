import React from "react";
import { contact, icons } from "./HeaderInfo";
export default function Projects() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Projects</h2>
        {icons}
      </section>
      <div className="main-content">
        <article>
          <header>
            <span className="date">September 2019</span>
            <h2>
              <a href="https://mlbtracker.netlify.com/">
                Baseball Game Tracker
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
        <article>
          <header>
            <span className="date">August 2019</span>
            <h2>
              <a href="https://haircareapp.netlify.com/Login">
                Hair Care App- Collaborated Project
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
        <article>
          <header>
            <span className="date">June 2019</span>
            <h2>
              <a href="https://stoic-banach-039b69.netlify.com/index.html">
                Landing Page- Collaborated Project
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
        <article>
          <header>
            <span className="date">May 2019</span>
            <h2>
              <a href="https://friendly-bhaskara-67b212.netlify.com/index.html">
                Sprint Build Challenge
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
        <article>
          <header>
            <span className="date">April 2019</span>
            <h2>
              <a href="https://calebredd.github.io/Preprocessing-II/">
                Less Compiled Project
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
        <article>
          <header>
            <span className="date">April 2019</span>
            <h2>
              <a href="https://calebredd.github.io/responsive-web-design-I/index.html">
                Responsive Web Design
              </a>
            </h2>
          </header>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
        </article>
      </div>
    </div>
  );
}
