import React, { Component } from 'react';
import Constants from '../assets/constants.js'

class Bar extends Component {

    render() {
        return (
            <div className="bar">
                <ul className="icon-ul">
                    <li className="icon-list">
                        <span>
                            <a href={Constants.LINKS.EMAIL} target="_blank">
                                <img className="icon pop" src={Constants.ICONS.EMAIL}/>
                            </a>
                        </span>
                    </li>
                    <li className="icon-list">
                        <span>
                            <a href={Constants.LINKS.LINKEDIN} target="_blank">
                                <img className="icon pop" src={Constants.ICONS.LINKEDIN}/>
                            </a>
                        </span>
                    </li>
                    <li className="icon-list">
                        <span>
                             <a href={Constants.LINKS.GITHUB} target="_blank">
                                    <img className="icon pop" src={Constants.ICONS.GITHUB}/>
                                </a>
                        </span>
                    </li>
                    <li className="icon-list">
                        <span>
                            <a href={Constants.LINKS.RESUME} target="_blank">
                                <img className="icon pop" src={Constants.ICONS.RESUME}/>
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Bar;
