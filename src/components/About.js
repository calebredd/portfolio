import React from "react";
import "../About.scss";
export default function About() {
    const listSkills = () => {
        let skills = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node',
            'SQL',
            'MySQL',
            'Python',
            'PHP',
            'Github',
            'GIT',
            'SASS',
            'Express'
        ]
        return(
            skills.map(function(skill){
                return(
                    <span className="skill">
                        {skill}
                    </span>
                )
            })
        )
    }
    return (
        <section id="about">
            <h2 className="center">About Me</h2>
            <div className="container bio">
                <p className="bio-paragraph">
                    &nbsp; &nbsp; &nbsp; I spent a lot of time at community college trying to figure out how to turn my passions of helping others and solving puzzles into a career. 
                    I studied nursing so I could help people. I took automotive classes so I could solve puzzles. 
                    That whole time I was making websites on the side for fun and I finally realized I could turn my hobby into a career so I dove head first into learning software development.
                    <br/>
                    &nbsp; &nbsp; &nbsp; I attended Lambda School, now called Bloom Institute of Technology, and completed their 18-month Full Stack Development program. 
                    I landed my first dev job mid-program just before COVID and I have been there ever since. 
                    I am currently finishing up my Bachelor's Degree in Software Development with Grand Canyon University and am looking for my next chapter in my Dev career.
                </p>
                <div className="left">
                    <a href="#contact">
                        <button className="cta-btn cta-slim">Contact</button>
                    </a>
                </div>
                <div className="bio-skills-container">
                    <h3 className="bio-skills-title left">My Skills</h3>
                    <div className="bio-skills skills">
                        {listSkills()}
                    </div>
                </div>
            </div>
        </section>
    );
}
