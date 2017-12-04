import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <a className="link" href="#home">Home</a>
                    <a className="link" href="#work">Work</a>
                    <a className="link" href="#projects">Projects</a>
                    <a className="link" href="#education">Education</a>
                    <a className="link" href="#contact">Contact</a>
                </div>​
            </header>
        )
    }
}
export default Header;
