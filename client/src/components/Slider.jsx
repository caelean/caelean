import React, { Component } from 'react';
import Title from './Title.jsx';
import Constants from '../assets/constants.js'

class Slider extends Component {

    render() {
        return (
            <div className="slider">
                <div className="column left welcome-photo" target="_blank">
                    {<img className="photo" src={Constants.IMAGES.HEADSHOT}/>}
                </div>
                <div className="column right welcome pop">
                    <nobr>
                        {"Caelean Barnes"}
                        <text className="white">
                            {"Welcome to my website!"}
                        </text>
                    </nobr>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Slider;
