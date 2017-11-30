import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <a href="#home">Home</a>
                    <a href="#work">Work</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>​
            </header>
        )
    }
}
export default Header;
