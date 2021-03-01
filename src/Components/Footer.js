import React from 'react';


import './Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <section className = "footer-section">
                <a href="https://www.linkedin.com/in/jashan-garnes/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
                <a href="https://github.com/wednesjay" target="_blank" rel="noreferrer" className="footer-link">Github</a>
            </section>
        )
    }
}

export default Footer;