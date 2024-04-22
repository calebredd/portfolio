import React from "react";
export default function Home() {
  return (
    <section id="home">
        <h1>
            <span className="desktop">
                Hello, I am
            </span>
            <span className="tablet">
                Hey, I am
            </span>
            <span className="mobile">
                Hi, I'm
            </span>
            <span>Caleb Redd</span>
        </h1>
        <div className="power-statement">
            <p className="center">An experienced Full Stack Developer with a passion for creating innovative solutions seeking to help scale your product into the future</p>
        </div>
        <div>
            <a href="#projects">
                <button className="cta-btn">Projects</button>
            </a>
        </div>
    </section>
  );
}
