import Constants from '../assets/constants.js'
import React, { Component } from 'react';

import Segment from './Segment.jsx';
import Slider from './Slider.jsx';
import Title from './Title.jsx';
import Header from './Header.jsx';

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
                <Header/>
                <div className="static-header header-work">
                        <Title text="Experience" section="work"/>
                </div>
                <Segment titleText="Software Engineering Intern, Investor Services"
                         contentInfo={points_list.CARTA}
                         image={<img className="photo" src={Constants.IMAGES.CARTA}/>}
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
                <div className="static-header header-education">
                    <Title text="Education" section="education"/>
                </div>
                <Segment titleText="UC San Diego, Jacobs School of Engineering, 2018"
                         contentInfo={points_list.UCSD}
                         image={<img className="photo" src={Constants.IMAGES.UCSD}/>}

                />
                <div className="static-header header-projects">
                    <Title text="Projects" section="projects"/>
                </div>
                <Segment titleText="Twittermap"
                         contentInfo={points_list.TWITTERMAP}
                         image={<img className="photo" src={Constants.IMAGES.TWITTERMAP}/>}

                />
                <Segment titleText="Web Based NDN File System Access"
                         contentInfo={points_list.NDN}
                         image={<img className="photo" src={Constants.IMAGES.NDN}/>}

                />
                <Segment titleText="LiveList"
                         contentInfo={points_list.LIVELIST}
                         image={<img className="photo" src={Constants.IMAGES.LIVELIST}/>}

                />
                <Segment titleText="Insta Job"
                         contentInfo={points_list.INSTAJOB}
                         image={<img className="photo" src={Constants.IMAGES.INSTAJOB}/>}

                />
            </div>
        )
    }
}
export default Home;
