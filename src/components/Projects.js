import React, { Component } from "react";
import "../Projects.scss";

const projList = [
    {
        'title':'Scrapbook.com',
        'date':'February 2020 - Present',
        'url':'https://www.scrapbook.com/',
        'img':'sbcStore.png',
        'description':'Full Stack Development on an eCommerce platform for all things Paper Crafting',
        'skills':['PHP','SQL/MySQL', 'RESTful API', 'jQuery','HTML/CSS/JS']
    },
    {
        'title':'Game Of Life',
        'date':'June 2020',
        'url':'https://calebredd.github.io/Game-Of-Life/src', 
        'img':'gameOfLife.png',
        'description':'Computer Science simulation challenge based on John Conway\'s 1968 two-dimensional cellular automaton rules',
        'skills':['HTML/CSS/JS']
    },
    {
        'title':'Car Lot App',
        'date':'November 2019',
        'url':'',
        // 'url':'https://thecarlot.herokuapp.com/', // Heroku killed the domain
        'img':'carLotApp.png',
        'description':'Fullstack Web App where users can upload cars for sale',
        'skills':['Node','Express','React','SQL']
    },
    {
        'title':'Potluck Planner',
        'date':'October 2019',
        'url':'https://potluckplan.netlify.com', // However, Heroku killed the backend API
        'img':'PotluckPLanner.png',
        'description':'Collaborated project where users can plan and attend Potluck dinners to share food and company among other food enthusiasts',
        'skills':['React', 'Sass', 'RESTful API']
    },
    {
        'title':'11:11 Wax Studio & Spa',
        'date':'October 2019',
        'url':'https://1111waxstudioandspa.netlify.com',
        'img':'1111WaxStudio.png',
        'description':'Static website created for a local spa studio in Phoenix, AZ',
        'skills':['React', 'Sass', 'Squarespace']
    },
    {
        'title':'Baseball Game Tracker',
        'date':'September 2019',
        'url':'https://mlbtracker.netlify.com',
        'img':'MLBSuperFans.png',
        'description':'App for avid baseball fans to be their own umpire and keep track of the game themselves',
        'skills':['React','Sass']
    },
    {
        'title':'Dad Joke Generator',
        'date':'September 2019',
        'url':'https://dadjoke.netlify.app/',
        'img':'dadJokes.png',
        'description':'When you need a laugh and a dad is not available, come on by',
        'skills':['API', 'React','Sass']
    },
    {
        'title':'Hair Care App',
        'date':'August 2019',
        'url':'https://pwhaircare.netlify.com',
        'img':'HairCareApp.png',
        'description':'Collaborated project where users can create a profile and find a hairstylist for their next treatment',
        'skills':['React','Sass']
    },
    {
        'title':'College Calculator',
        'date':'June 2019',
        'url':'https://collegecalculator.netlify.com',
        'img':'CollegeCalc.png',
        'description':'Collaborated project where users can evaluate the Cost of Secondary Education',
        'skills':['HTML','CSS','Less','Javascript']
    },
    {
        'title':'HTML/CSS Timed Project',
        'date':'May 2019',
        'url':'https://lambdaui.netlify.com',
        'img':'TimedProject.png',
        'description':'HTML/CSS Project completed within 3 hour time limit',
        'skills':['HTML','CSS']
    },
    {
        'title':'Less Compiled Project',
        'date':'April 2019',
        'url':'https://calebredd.github.io/Preprocessing-II',
        'img':'PreCompiled.png',
        'description':'Project that incorporated Pre-compilers',
        'skills':['CSS','Less']
    },
    {
        'title':'Responsive Web Design',
        'date':'April 2019',
        'url':'https://calebredd.github.io/responsive-web-design-I',
        'img':'Responsive.png',
        'description':'Project with mobile friendly implementation',
        'skills':['HTML','CSS']
    },
    {
        'title':'YelpCamp App',
        'date':'January 2019',
        'url':'',
        // 'url':'https://caleb-yelpcamp-app.herokuapp.com/campgraounds', // Heroku killed the account
        'img':'YelpCamp.png',
        'description':'Enables users to add campsites they\'ve visited and share with other outdoor enthusiasts',
        'skills':['Node', 'Express', 'MondgoDB']
    },
    {
        'title':'RGB Color Game',
        'date':'November 2018',
        'url':'https://rgbcolorsgame.netlify.com',
        'img':'colorgame.png',
        'description':'Pick among colored squares to guess what the RGB Color value is',
        'skills':['HTML','CSS','Javascript']
    },
    {
        'title':'Etch-a-Sketch in Color',
        'date':'December 2017',
        'url':'https://etchasketchcolor.netlify.com',
        'img':'draw.png',
        'description':'Choose a color, move to draw, click to change colors, rinse & repeat',
        'skills':['HTML','CSS','Javascript']
    },
    {
        'title':'Rock, Paper, Scissors!',
        'date':'December 2017',
        'url':'https://rockbeatsscissors.netlify.com',
        'img':'RockPaperScissor.png',
        'description':'Risk it all against the Computer, first one to 3 wins!',
        'skills':['HTML','CSS','Javascript']
    },
];

export default class Projects extends Component { 
    render() {
        const showSkill = (skill) => {
            return (
                <span className="skill">
                    {skill}
                </span>
            )
        }

        const showProj = projList.map((proj)=>{
            return (
                <div className="project">
                    <header>
                        <h2>
                            {(proj.url.length > 0) ? (
                            <a target="_blank" rel="noopener noreferrer" href={proj.url}>{proj.title}</a>
                            ) : (proj.title) 
                            }
                        </h2>
                        <span className="date">{proj.date}</span>
                    </header>

                    <div className="img-container">
                        <img src={"/pictures/"+proj.img} alt={proj.title} />
                    </div>

                    <div className="project-footer">
                        <div className="project-footer-top">
                            <div className="site-link">
                                {(proj.url.length > 0) ? (
                                    <a target="_blank" rel="noopener noreferrer" href={proj.url} className="offsite-link">
                                        View Project Site <i className="fa fa-external-link"></i>
                                    </a>
                                ) : (
                                    '***Live Site Deprecated***'
                                )}
                            </div>
                            <p className="description">
                                {proj.description}
                            </p>
                        </div>
                        <div className="skills">
                            {proj.skills.map((skill)=>showSkill(skill))}
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <section id="projects">
                <h2 className="center">Projects</h2>
                <div className="container project-grid">
                    {showProj}
                </div>
            </section>
        );

    }
}