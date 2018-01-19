import React, { Component } from 'react';
import Segment from './Segment.jsx';

class Slider extends Component {

    render() {
        return (
            <div className="sideways">
               <Segment titleText="Caelean Barnes"
                 contentInfo="Engineering and Design"
                 image={<img className="photo" src={require('../assets/bw_headshot_circle.png')}/>}
                 section="home"
               />
            </div>
        )
    }
}

export default Slider;
