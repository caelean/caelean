import React, { Component } from 'react';
import Segment from './Segment.jsx';
import Constants from '../assets/constants.js'

class Slider extends Component {

    render() {
        return (
            <div className="slider">
               <Segment titleText="Caelean Barnes"
                 contentInfo="Welcome to my website! Feel free to shoot me an email if you want to chat!"
                 image={<img className="photo" src={Constants.IMAGES.HEADSHOT}/>}
                 section="home"
               />
            </div>
        )
    }
}

export default Slider;
