import React from 'react';
// import {Link} from 'react-scroll';
// import {animateScroll as scroll} from 'react-scroll';

import './About.css'

class About extends React.Component {
    render() {
        return (
            <section id='about'>
                <div className = "about-section">
                    <h1>Who I am</h1>
                    <h3>Work, Community and Life</h3>
                    <p>I am an aspiring jr. software engineer with a passion for delivering appealing and targeted solutions, bettering myself and my work, and giving back along the way. With a short experience in the working world I strive to bring a new and fresh perspective to the design and development space.</p>
                    <p>I am currently starting my development career in the <a href="https://roadtohire.org/" target="_blank" rel="noreferrer">Road to Hire</a> program!</p>
                    <a href="https://drive.google.com/file/d/143X6ERosIfGL9sNmpuiBtGdqaztj-XY2/view?usp=sharing" className="resume-button" target="_blank" rel="noreferrer">Resume</a>
                </div>
            </section>
        )
    }
}

export default About;