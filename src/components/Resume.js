import React from "react";
import "../Resume.scss";
import { contact, icons } from "./HeaderInfo";
export default function Resume() {
  return (
    <div className="container">
      <section className="contact-info">
        {contact}
        <h2 className="center">Resumé</h2>
        {icons}
      </section>
      <div className="main-content">
        <section className="box professional-summary">
          <h3>Professional Summary</h3>
          <p>
            Detail oriented Software Engineer with a high capacity to
            troubleshoot issues and ensure project completion.
          </p>
        </section>
        <section className="box skills-abilities">
          <h3>Character Strengths</h3>
          <ul>
            <li>High quality assurance standards</li>
            <li>Quick learner</li>
            <li>Dedicated to process improvement</li>
            <li>Strong problem solving ability</li>
          </ul>
        </section>
        <section className="box languages">
          <h3>Familiar Languages, Frameworks, OS</h3>
          <ul className="frontend">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Less/Sass</li>
          </ul>
          <ul className="backend">
            <li>Node</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Windows</li>
            <li>Linux</li>
            <li>Mac</li>
          </ul>
        </section>
        <section className="box work-history">
          <h3>Work History</h3>
          <section className="job">
            <h4>
              INSIDE SOFTWARE SALES: 2019-PRESENT <br />
              Acronis International Gmbh | TEMPE, AZ
            </h4>
            <ul>
              <li>
                Worked with MSPs and End Users to evaluate backup and recovery
                needs for both Local and Cloud environments
              </li>
              <li>
                Trained other Sales Representatives on software products being
                sold
              </li>
              <li>
                Worked with Outlook, Salesforce, Microsoft Office within Windows
                10 to manage customer accounts and create custom reports from
                database
              </li>
            </ul>
          </section>
          <section className="job">
            <h4>
              DIGITAL MARKETING ASSOCIATE: 2019-PRESENT
              <br />
              Joint Ventures LLC | TEMPE, AZ
            </h4>
            <ul>
              <li>
                Managed online social media accounts and responded to customer
                reviews and concerns for over 45 locations
              </li>
              <li>
                Emailed team members marketing updates and daily KPI reports
                from database
              </li>
            </ul>
          </section>
          <section className="job">
            <h4>
              SERVICE ADVISOR & IT MANAGER: 2017-2018
              <br />
              A&B Motors Inc | COTTONWOOD, AZ
            </h4>
            <ul>
              <li>
                Managed online content for company website and social media
                outlets
              </li>
              <li>
                Managed various devices within the company including PCs,
                tablets, printers and phones
              </li>
              <li>
                Main point of contact for customers in an automotive service
                environment throughout sales cycle
              </li>
              <li>
                Scheduled appointments and managed information within customer
                database
              </li>

              <li>Ordered and stocked parts for various repairs</li>
              <li>Performed light maintenance work and assisted technicians</li>
              <li>Processed payments and transactions</li>
            </ul>
          </section>
        </section>
        <section className="box education">
          <h3>Education</h3>
          <h4>LAMBDA SCHOOL​ 2019-2020</h4>
          <p>Full Stack Web Development</p>
          <p>Topics Covered:</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS/Sass/LESS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Python</li>
            <li>Node</li>
            <li>git</li>
            <li>npm/Yarn</li>
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>SQL</li>
            <li>Jest</li>
            <li>Command Line</li>{" "}
          </ul>
          <p>
            <a href="https://learn.lambdaschool.com/course/cs-fsw">
              Curriculum overview
            </a>
          </p>
          <h4>FreeCodeCamp.org 2018</h4>
          <p>Responsive Web Design Certification</p>
          <h4>MESA COMMUNITY COLLEGE​ 2015-2017</h4>
          <p>Associates in Applied Science</p>
          <ul>
            <li>3.7 GPA</li>
            <li>Graduated with Honors</li>
            <li>Honors Scholarship Holder</li>
          </ul>
          <h4>
            SHADOW MOUNTAIN HIGH SCHOOL ​| PHOENIX, AZ | 3.6 GPA 2009-2012
          </h4>
        </section>
        <section className="box accomplishments">
          <h3>Community Involvement & Skills</h3>
          <ul>
            <li>Freelance Web Developer for family/friends/SMBs</li>
            <li>Event DJ running music software on a Linux Distro</li>
            <li>Typing average of 80 words/minute</li>
            <li>Eagle Scout</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
