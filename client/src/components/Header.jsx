import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="work" href="#work">Experience</a>
                &nbsp;
                <a className="education" href="#education">Education</a>
                &nbsp;
                <a className="projects" href="#projects">Projects</a>
                &nbsp;
                <a className="contact" href="#contact">Contact</a>
            </div>
        )
    }
}

export default Header;
