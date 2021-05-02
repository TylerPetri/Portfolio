import React from "react";
import mainImg from '../assets/images/facebook.PNG'
import dashboard from '../assets/images/Dashboard.PNG'
import homepageimg from '../assets/images/Homepage.PNG'
import btpic from '../assets/images/budget.PNG'
import burgers from '../assets/images/burgers.PNG'
import googlebooks from '../assets/images/GoogleBooks.PNG'
import TPG from '../assets/images/TeamProfileGenerator.PNG'
import resume from '../assets/resume/resume.pdf'
import {FaGithub, FaReact} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiBootstrap, SiMongodb, SiMysql, SiNodeDotJs, SiJquery, SiLinkedin} from 'react-icons/si'
import {GiMustache} from 'react-icons/gi'
import {IoMdOpen} from 'react-icons/io'

const gif = 'https://media.giphy.com/media/47rSw6aIG5dtR6I859/giphy.gif'
const mtgif = 'https://media.giphy.com/media/7RpQLKlVgwMa9ZTWJ0/giphy.gif'
const gmegif = 'https://media.giphy.com/media/hugobaXy6ktDaEX3Oq/giphy.gif'
const mailto = "mailto:tylerpetri@hotmail.com"
const linkedin = "https://www.linkedin.com/in/tyler-petri-051155206/"
const github = "https://github.com/TylerPetri"
const chatch4ngif = 'https://media.giphy.com/media/YNy9NsmSvakoXoTi3L/giphy.gif'
const snakegif = 'https://media.giphy.com/media/w9mfy63BHgH9uozYhL/giphy.gif'

function Homepage() {
    return (
    <>
    <div id="top"></div>
    <div className="boody">
        <nav className="nav">
            <a className="dev" href="#top">Tyler Dev</a>
            <div className="directory">
                <div className="nav-item">
                    <a className="nav-link" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#footer">Contact</a>
                </div>
            </div>
        </nav>

        <section className="intro">
            <h1 className="section-title title-intro">Hi, I'm <span>Tyler Petri</span></h1>
            <p className="subtitle subtitle-intro">Web Development</p>
            <img src={mainImg} alt="Profile" className="my-pic"/>
        </section>

        <div className="bioBox">
            <h3 className="bioTitle">About me</h3>
            <p>
                Retired poker player, semi-retired cook, full stack engineer at your service with the MERN (MongoDB, Express, React, Node), the Express Handlebars, MySQL, React hooks, ORM, CSS3, the works… Graduate of a 12-week intensive bootcamp, with C language experience in Sorting Algorithms, Pointers, Dynamic Memory Allocation and Data Structures thanks to HarvardX CS50’s Introduction to Computer Science. Currently studying algorithmic problems. Ready to relocate anywhere.            
            </p>
        </div>

        <div className="languages">
            <FaGithub className="icons"/><DiJavascript1 className="icons"/>
            <SiNodeDotJs className="icons"/><FaReact className="icons"/>
            <SiBootstrap className="icons"/><SiJquery className="icons"/>
            <SiMongodb className="icons"/><SiMysql className="icons"/>
            <GiMustache className="icons"/>
        </div>


        <section>
            <h1 className="projectsTitle">Projects</h1>
            <div className="projects">
                <div className="work">
                    <a href='https://googlebooksapi9000.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={googlebooks} alt="google-books-search"/>
                        <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
                        <p>Ever wanted to search for a book through google with a youtube inspired navbar? Tadda! Googlebooksapi9000: signin, save books for later, delete some, or click the "view more details" link and be redirected to an understandibly less stylish/less cpu consuming website to do what you desire.</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Google-books-search.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://googlebooksapi9000.herokuapp.com/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div><div className="work">
                <a href='tylerpetri.github.io/snake-game/' target="_blank" rel="noreferrer">
                        <img src={snakegif} alt="snake-game"/>
                        <h4>Reverse Linked-List Snake game React app</h4>
                        <p>Use the arrow keys to eat apples and grow! Going backwards or hitting the walls is GAMEOVER! Red apples keep the current direction, purple apples reverse the linked list!</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Snake-Game.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='tylerpetri.github.io/snake-game/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div><div className="work">
                    <a href='https://chatch4n.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={chatch4ngif} alt="chat-platform"/>
                        <h4>MERN socket.io Chat platform</h4>
                        <p>Privacy! Nostalgia? Using socket.io, we have realtime chat that don't save messages (don't reload or they're gone). Create any room you like, visit existing rooms... some are surprisingly supernova</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/chat-platform.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://chatch4n.herokuapp.com/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://glacial-taiga-08008.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={burgers} alt="burger-app"/>
                        <h4>Handlebars & mySQL</h4>
                        <p>Want a double double? Type it in the box and submit! Devour or not to devour is now the question.</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/burger.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://glacial-taiga-08008.herokuapp.com/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://mood-notes-tracker.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={mtgif} alt="mood-tracker"/>
                        <h4>Full stack restful API & mySQL </h4>
                        <p>Mood tracker! Login, create a note (prompted if not logged-in, too many characters, etc), check your latest notes (edit, delete) and view data on calendar or donut graph! </p>
                        <p>Note: heroku bug regarding mySQL date feature</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/Humble-Attackers/Group-Mood-Tracker.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://mood-notes-tracker.herokuapp.com/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://www.youtube.com/watch?v=VTN-o95zSMI&t=8s' target="_blank" rel="noreferrer">
                        <img src={gif} alt="employee-tracker"/>
                        <h4>Inquirer</h4>
                        <p>An application to track employee information within a database. There are options such as: adding roles, adding managers, seeing the utilized budget per department, etc.</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Employee-Tracker2.0.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://www.youtube.com/watch?v=VTN-o95zSMI&t=8s' target="_blank" rel="noreferrer" className="gitlink">Demo</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://teamcirclealpha.github.io/GetMeEmployed/' target="_blank" rel="noreferrer">
                        <img src={gmegif} alt="get-me-employed"/>
                        <h4>3rd party API</h4>
                        <p>Job search front end API app. Enter details, save whichever you're interested in and click the cards to be redirected to their site!</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TeamCircleAlpha/GetMeEmployed.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://teamcirclealpha.github.io/GetMeEmployed/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://www.youtube.com/watch?v=3GWKQ-hC3YA&feature=youtu.be' target="_blank" rel="noreferrer">
                        <img src={TPG} alt="team-profile-generator"/>
                        <h4>NodeJS, Inquirer, Jest</h4>
                        <p>Once prompted, answer a series of questions to add your team members to an incredibly stylish site. It's that easy!</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Team-profile-generator.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://www.youtube.com/watch?v=3GWKQ-hC3YA&feature=youtu.be' target="_blank" rel="noreferrer" className="gitlink">Demo</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://tylerpetri.github.io/Employee-Directory/' target="_blank" rel="noreferrer">
                        <img src={homepageimg} alt="employee-directory"/>
                        <h4>React app</h4>
                        <p>Your employee's information all in one place. Need to reach someone? Filter by name and/or city, boom. Get'er done.</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Employee-Directory.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://tylerpetri.github.io/Employee-Directory/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://budget-tracker2000.herokuapp.com' target="_blank" rel="noreferrer">
                        <img src={btpic} alt="budget-tracker"/>
                        <h4>Service worker, IndexedDB & Mongoose</h4>
                        <p>Can I afford another coffee? Probably! Time to check the budget tracker 2000! Enter a name, a value, and selected whether it's an expense or deposit!</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Budget-tracker2000.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://budget-tracker2000.herokuapp.com' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
                <div className="work">
                    <a href='https://workout-tracker-mongodb5000.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={dashboard} alt="workout-tracker"/>
                        <h4>MongoDB</h4>
                        <p>You want to track your workouts? Maybe fool your loved ones? You can track weights, the name of the exercise, the type, the duration, the reps, the sets, and the distance! All neatly displayed in the dashboard page the the form of various graphs!</p>
                        <div className="gitappLinks">
                            <a href='https://github.com/TylerPetri/Workout-Tracker-MongoDB.git' target="_blank" rel="noreferrer" className="gitlink">Github repo</a>
                            <a href='https://workout-tracker-mongodb5000.herokuapp.com/' target="_blank" rel="noreferrer" className="gitlink">App</a>
                        </div>
                    </a>
                </div>
               
            </div>
        </section>

        <footer className="footer" id="footer">
            <div className="contact">
                <a href={mailto} className="footer-link">tylerpetri93@gmail.com</a>
                <div className="phone">(514)566-5383</div>
            </div>
            
            <ul className="social-list">
                <li className="social-item">
                    <a href={linkedin} className="social-link" target="_blank" rel="noreferrer">
                        <SiLinkedin className="icons" id="purple"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href={github} className="social-link" target="_blank" rel="noreferrer">
                        <FaGithub className="icons"  id="purple"/>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
    </>

    )
}

export default Homepage;