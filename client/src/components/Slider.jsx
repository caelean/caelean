import React, { Component } from 'react';
import Segment from './Segment.jsx';
import Constants from '../assets/constants.js'

class Slider extends Component {

    render() {
        return (
            <div className="slider">
               <Segment titleText="Caelean Barnes"
                 contentInfo="Engineering and Design"
                 image={<img className="photo" src={Constants.IMAGES.HEADSHOT}/>}
                 section="home"
               />
            </div>
        )
    }
}

export default Slider;
