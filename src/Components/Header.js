import React from 'react';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <section className = "navbar">
                <div className = "header-logo" onClick = {() => scroll.scrollToTop()}>
                    <p>Jay Garnes</p>
                </div>
                <div className = "links">
                    <Link to="about" smooth={true} duration={1000}>About</Link>

                    <Link to="projects" smooth={true} duration={1000}>Projects</Link>
                    
                    <Link to="contact" smooth={true} duration={1000}>Get in touch</Link>
                </div>
            </section>
        )
    }
}

export default Header;