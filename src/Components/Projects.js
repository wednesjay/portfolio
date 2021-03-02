import React from 'react';

import './Projects.css'

class Projects extends React.Component {
    render() {
        return (
            <section id = 'projects'>
                <h1>Projects</h1>
                <h2 className="subhead">Click Project Images to view their Github pages</h2>
                <div className = "projects">
                    <div className="project">
                        <h3>Hackathon: Code for Justice</h3>
                        <a href="https://github.com/FreshSilvia/CLT-H-H" target="_blank" rel="noreferrer"><img src="/images/CLT-HH.png" alt="Project Screenshot"></img></a>
                        <p>Static Mock-Website submission for the R2h (Road to Hire) Code for justice Hackathon (HTML and CSS)</p>
                        <a href="https://health-help.netlify.app/contact.html" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Reservation App</h3>
                        <a href="https://github.com/wednesjay/reservationApp" target="_blank" rel="noreferrer"><img src="/images/El-Amigo.png" alt="Project Screenshot"></img></a>
                        <p>Mock Reservation App (HTML and CSS)</p>
                        <a href="https://el-amigo-reservations.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Number Guessing Game: Voice Recognition</h3>
                        <a href="https://github.com/wednesjay/Guess-Game" target="_blank" rel="noreferrer"><img src="/images/guess-game.png" alt="Project Screenshot"></img></a>
                        <p>Number guessing game using voice recognition API (JavaScript, HTML and CSS)</p>
                        <a href="https://guess-wtih-voice.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Number Guessing Game: Manual Input</h3>
                        <a href="https://github.com/wednesjay/Guess-My-Number" target="_blank" rel="noreferrer"><img src="/images/guess-my-number.png" alt="Project Screenshot"></img></a>
                        <p>Number guessing game using manual input (JavaScript, HTML and CSS)</p>
                        <a href="https://guess-manual.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Gateway Website</h3>
                        <a href="https://codepen.io/WednesJay/project/editor/XbnzJd" target="_blank" rel="noreferrer"><img src="/images/Gateway.png" alt="Project Screenshot"></img></a>
                        <p>Mock Travel Blog - R2H (Road to Hire) Gateway Project (HTML and CSS)</p>
                        <a href="https://codepen.io/WednesJay/project/editor/XbnzJd" target="_blank" rel="noreferrer" className="live-link">CODEPEN</a>
                    </div>
                    <div className="project">
                        <h3>To-do App: React</h3>
                        <a href="https://github.com/wednesjay/to-do-app" target="_blank" rel="noreferrer"><img src="images/react-to-do-app.png" alt="Project Screenshot"></img></a>
                        <p>Simple To-Do React App (JavaScript, HTML and CSS)</p>
                        <a href="https://r2h-to-do.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Tic-Tac-Toe: React</h3>
                        <a href="https://github.com/wednesjay/tic-tac-toe" target="_blank" rel="noreferrer"><img src="/images/tic-tac-toe.png" alt="Project Screenshot"></img></a>
                        <p>Simple Tic-Tac-Toe React App (JavaScript, HTML and CSS)</p>
                        <a href="https://ttt-app.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    <div className="project">
                        <h3>Image Galery (Pexels API)</h3>
                        <a href="https://github.com/wednesjay/Image-Gallery-Pexels-API" target="_blank" rel="noreferrer"><img src="/images/pexels.png" alt="Project Screenshot"></img></a>
                        <p>Image gallery pulling from the Pexels API</p>
                        <a href="https://image-gallery-pexels.netlify.app/" target="_blank" rel="noreferrer" className="live-link">LIVE SITE</a>
                    </div>
                    {/* <div className="project">
                        <h4>Project Name</h4>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="https://via.placeholder.com/450.png" alt="Project Screenshot"></img></a>
                        <p>Short description Detailing Project</p>
                        <button>GITHUB</button>
                    </div>
                    <div className="project">
                        <h4>Project Name</h4>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="https://via.placeholder.com/450.png" alt="Project Screenshot"></img></a>
                        <p>Short description Detailing Project</p>
                        <button>GITHUB</button>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default Projects;