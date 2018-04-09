import Constants from '../assets/constants.js'
import React, { Component } from 'react';

import Segment from './Segment.jsx';
import Slider from './Slider.jsx';
import Bar from './Bar.jsx';
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
                <Bar/>
                <div className="triangle"/>
                <div className="box"/>
                <Header/>
                <div className="static-header header-work">
                    <a id="work"/>
                    <div className="title">Experience</div>
                </div>
                <Segment titleText="Software Engineering Intern, Investor Services"
                         contentInfo={points_list.CARTA}
                         image={<img className="photo pop" src={Constants.IMAGES.CARTA}/>}
                         link={Constants.LINKS.CARTA}
                         date={Constants.DATES.CARTA}
                />
                <Segment titleText="Software Engineering Intern, Web Development"
                         contentInfo={points_list.ROKU}
                         image={<img className="photo pop" src={Constants.IMAGES.ROKU}/>}
                         link={Constants.LINKS.ROKU}
                         date={Constants.DATES.ROKU}
                />
                <Segment titleText="Section Lead, Jacobs School of Engineering"
                         contentInfo={points_list.SECTIONLEAD}
                         image={<img className="photo pop" src={Constants.IMAGES.CSE}/>}
                         link={Constants.LINKS.CSE}
                         date={Constants.DATES.SECTIONLEAD}
                />
                <Segment titleText="Research Intern, Internet Research Lab"
                         contentInfo={points_list.UCLA}
                         image={<img className="photo pop" src={Constants.IMAGES.UCLA}/>}
                         link={Constants.LINKS.UCLA}
                         date={Constants.DATES.UCLA}
                />
                <div className="static-header header-education">
                    <a id="education"/>
                    <div className="title">Education</div>
                </div>
                <Segment titleText="UC San Diego, Jacobs School of Engineering"
                         contentInfo={points_list.UCSD}
                         date={Constants.DATES.UCSD}
                         image={<img className="photo pop" src={Constants.IMAGES.UCSD}/>}

                />
                <Segment titleText="Vrije Universiteit Semester in Amsterdam"
                         contentInfo={points_list.AMS}
                         date={Constants.DATES.VU}
                         image={<img className="photo pop" src={Constants.IMAGES.AMS}/>}
                />
                <div className="static-header header-projects">
                    <a id="projects"/>
                    <div className="title">Projects</div>
                </div>
                <Segment titleText="Machine Learning Model Comparison"
                         contentInfo={points_list.ML}
                         date={Constants.DATES.ML}
                         image={<img className="photo pop" src={Constants.IMAGES.ML}/>}
                         link={Constants.LINKS.ML}

                />
                <Segment titleText="Twittermap"
                         contentInfo={points_list.TWITTERMAP}
                         date={Constants.DATES.TWITTERMAP}
                         image={<img className="photo pop" src={Constants.IMAGES.TWITTERMAP}/>}
                         link={Constants.LINKS.TWITTERMAP}

                />
                <Segment titleText="Web Based NDN File System Access"
                         contentInfo={points_list.NDN}
                         date={Constants.DATES.HSSRP}
                         image={<img className="photo pop" src={Constants.IMAGES.NDN}/>}
                         link={Constants.LINKS.UCLA}

                />
                <Segment titleText="LiveList"
                         contentInfo={points_list.LIVELIST}
                         date={Constants.DATES.LIVELIST}
                         image={<img className="photo pop" src={Constants.IMAGES.LIVELIST}/>}
                         link={Constants.LINKS.LIVELIST}
                />
                <Segment titleText="Insta Job"
                         contentInfo={points_list.INSTAJOB}
                         image={<img className="photo pop" src={Constants.IMAGES.INSTAJOB}/>}
                         link={Constants.LINKS.INSTAJOB}
                         date={Constants.DATES.INSTAJOB}
                />
            </div>
        )
    }
}
export default Home;
