import React from 'react';

import './Contact.css'
class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <h2>Get in touch!</h2>
                <ul className="socials">
                    <li><a href="https://www.linkedin.com/in/jashan-garnes/" target="_blank" className = "link-animation" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:garnesjashan@gmail.com" target="_blank" className = "link-animation" rel="noreferrer">Email</a></li>
                </ul>
            </section>
        )
    }
}

export default Contact;