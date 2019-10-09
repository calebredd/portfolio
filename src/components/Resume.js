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
            Detail oriented software engineer with a high capacity to
            troubleshoot issues and ensure project completion.
          </p>
        </section>
        <section className="box skills-abilities">
          <h3>Skills & Abilities</h3>
          <ul>
            <li>Can type an average of 80 words per minute</li>
            <li>High customer service standards</li>
            <li>Quick learner</li>
            <li>Dedicated to process improvement</li>
            <li>Strong problem solving ability</li>
          </ul>
        </section>
        <section className="box languages">
          <h3>Familiar Languages/Frameworks/OS</h3>
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
        <section className="box accomplishments">
          <h3>Accomplishments</h3>
          <ul>
            <li>Eagle Scout</li>
            <li>Responsive Web Design Certificate from FreeCodeCamp.org</li>
          </ul>
        </section>
        <section className="box work-history">
          <h3>Work History</h3>
          <section className="job">
            <h4>
              SALES DEVELOPMENT REPRESENTATIVE: APRIL 2019-PRESENT <br />
              ACRONIS | TEMPE, AZ
            </h4>
            <ul>
              <li>Contacted Leads and verified information</li>
              <li>Determined qualification of leads</li>
              <li>
                Verified what software and hardware environments clients were
                working with to evaluate backup and recovery needs
              </li>
              <li>
                Helped train other Sales Representatives in use of software
                applications and software being sold
              </li>
              <li>Exceeded and met sales goal criteria</li>
              <li>
                Communicated with Sales Engineers regarding software and
                hardware requirements of customers
              </li>
              <li>
                Worked with Outlook, Salesforce, Microsoft Office and other
                software in Windows 10 to manage customer accounts
              </li>
            </ul>
          </section>
          <section className="job">
            <h4>
              DIGITAL MARKETING ASSOCIATE: JAN 2019-PRESENT
              <br />
              JOINT VENTURES LLC | TEMPE, AZ
            </h4>
            <ul>
              <li>Responded to online reviews from customers</li>
              <li>Managed online social media accounts</li>
              <li>
                Emailed team members marketing updates and production results
              </li>
            </ul>
          </section>
          <section className="job">
            <h4>
              SERVICE ADVISOR & SOCIAL MEDIA SPECIALIST: MAY 2017-DEC 2018
              <br />
              A&B MOTORS INC | COTTONWOOD, AZ
            </h4>
            <ul>
              <li>
                Received and worked with customers to resolveautomotive concerns
              </li>
              <li>Scheduled appointments over the phone and inperson</li>
              <li>Ordered and stocked parts for various repairs</li>
              <li>Performed light maintenance work and assistedtechnicians</li>
              <li>Processed payments and transactions</li>
            </ul>
          </section>
        </section>
        <section className="box education">
          <h3>Education</h3>
          <h4>LAMBDA SCHOOL​ | TEMPE, AZ | 2019-2020</h4>
          <p>Full Stack Web Developer</p>
          <h4>MESA COMMUNITY COLLEGE​ | MESA, AZ | 3.6 GPA 2015-2017</h4>
          <p>Associates in Applied Science</p>
          <h4>
            SHADOW MOUNTAIN HIGH SCHOOL ​| PHOENIX, AZ | 3.6 GPA 2009-2012
          </h4>
        </section>
      </div>
    </div>
  );
}
