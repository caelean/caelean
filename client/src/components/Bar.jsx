import React, { Component } from 'react';
import Constants from '../assets/constants.js'

class Bar extends Component {

    render() {
        return (
            <div className="bar">
                <ul>
                    <li>
                        <span>
                            <img className="icon pop" src={Constants.ICONS.EMAIL}/>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img className="icon pop" src={Constants.ICONS.LINKEDIN}/>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img className="icon pop" src={Constants.ICONS.GITHUB}/>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img className="icon pop" src={Constants.ICONS.RESUME}/>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Bar;
