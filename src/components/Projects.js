import React from "react";
import { contact, icons } from "./HeaderInfo";
import "../Projects.scss";
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
            <span className="date">October 2019</span>
            <h2>
              <a href="https://potluckplan.netlify.com/">Potluck Planner App</a>
            </h2>
          </header>
          <img src="/pictures/PotluckPlanner.png" alt="Potluck Planner" />
          <p>
            Collaborated project where users can plan and attend Potluck dinners
            to share food and company among other food enthusiasts.
          </p>
        </article>
        <article>
          <header>
            <span className="date">October 2019</span>
            <h2>
              <a href="https://1111waxstudioandspa.netlify.com/">
                11:11 Wax Studio & Spa
              </a>
            </h2>
          </header>
          <img src="/pictures/1111WaxStudio.png" alt="11:11" />
          <p>Static website created for a local spa studio in Phoenix, AZ.</p>
        </article>
        <article>
          <header>
            <span className="date">September 2019</span>
            <h2>
              <a href="https://mlbtracker.netlify.com/">
                Baseball Game Tracker
              </a>
            </h2>
          </header>
          <img src="/pictures/MLBSuperFans.png" alt="MLB Super Fans" />
          <p>
            App for avid baseball fans to be their own umpire and keep track of
            the game themselves.
          </p>
        </article>
        <article>
          <header>
            <span className="date">August 2019</span>
            <h2>
              <a href="https://haircareapp.netlify.com/">Hair Care App</a>
            </h2>
          </header>
          <img src="/pictures/HairCareApp.png" alt="Hair Care" />
          <p>
            Collaborated project where users can create a profile and find a
            hairstylist for their next treatment.
          </p>
        </article>
        <article>
          <header>
            <span className="date">June 2019</span>
            <h2>
              <a href="https://collegecalculator.netlify.com">
                College Calculator
              </a>
            </h2>
          </header>
          <img src="/pictures/CollegeCalc.png" alt="College Calculator" />
          <p>
            Collaborated project where users can evaluate the Cost of Secondary
            Education.
          </p>
        </article>
        <article>
          <header>
            <span className="date">May 2019</span>
            <h2>
              <a href="https://lambdaui.netlify.com/">HTML/CSS Timed Project</a>
            </h2>
          </header>
          <img src="/pictures/TimedProject.png" alt="Time Project" />
          <p>HTML/CSS Project completed within 3 hour time limit.</p>
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
          <img src="/pictures/PreCompiled.png" alt="Pre-Compiled" />
          <p>Project that incorporated Pre-compilers.</p>
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
          <img src="/pictures/Responsive.png" alt="Responsive" />
          <p>Project with mobile friendly implementation.</p>
        </article>
        <article>
          <header>
            <span className="date">January 2019</span>
            <h2>
              <a href="https://caleb-yelpcamp-app.herokuapp.com/campgrounds">
                YelpCamp App
              </a>
            </h2>
          </header>
          <img src="/pictures/YelpCamp.png" alt="YelpCamp App" />
          <p>
            Enables users to add campsites they've visited and share with other
            outdoor enthusiasts.
          </p>
        </article>
        <article>
          <header>
            <span className="date">November 2018</span>
            <h2>
              <a href="https://rgbcolorsgame.netlify.com/">RGB Color Game</a>
            </h2>
          </header>
          <img src="/pictures/colorgame.png" alt="RGB Color Game" />
          <p>
            Pick among colored squares to guess what the RGB Color value is.
          </p>
        </article>
        <article>
          <header>
            <span className="date">December 2017</span>
            <h2>
              <a href="https://etchasketchcolor.netlify.com/">
                Etch-a-Sketch in Color
              </a>
            </h2>
          </header>
          <img src="/pictures/draw.png" alt="Etch-a-sketch" />
          <p>
            Choose a color, move to draw, click to change colors, rinse &
            repeat.
          </p>
        </article>
      </div>
    </div>
  );
}
