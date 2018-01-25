import Constants from '../assets/constants.js'
import React, { Component } from 'react';

import Segment from './Segment.jsx';
import Slider from './Slider.jsx';
import Title from './Title.jsx';

class Home extends Component {
    render() {

        const points_list = Constants.POINTS;
        for(let key in points_list) {
            points_list[key] = points_list[key].map((point) =>
                <li key={point}>
                    {point}
                </li>
            );
        }
        return (
            <div className="home">
                <Slider/>
                <div className="triangle"/>
                <div className="box"/>
                <div className="header">
                    <Title text="Experience" section="home"/>
                </div>
                <Segment titleText="Software Engineering Intern, Investor Services"
                         contentInfo={points_list.CARTA}
                         image={<img className="photo" src={Constants.IMAGES.CARTA}/>}
                         section="work"
                />
                <Segment titleText="Software Engineering Intern, Web Development"
                         contentInfo={points_list.ROKU}
                         image={<img className="photo" src={Constants.IMAGES.ROKU}/>}
                />
                <Segment titleText="Computer Science Section Lead, UCSD School of Engineering"
                         contentInfo={points_list.SECTIONLEAD}
                         image={<img className="photo" src={Constants.IMAGES.CSE}/>}
                />
                <Segment titleText="Research Intern, UCLA Engineering Internet Research Lab"
                         contentInfo={points_list.UCLA}
                         image={<img className="photo" src={Constants.IMAGES.UCLA}/>}

                />
                <Segment titleText="UC San Diego, Jacobs School of Engineering, 2018"
                         contentInfo={points_list.UCSD}
                         section="education"
                         image={<img className="photo" src={Constants.IMAGES.UCSD}/>}

                />
            </div>
        )
    }
}
export default Home;
