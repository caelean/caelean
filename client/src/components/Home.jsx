import React, { Component } from 'react';
import Segment from './Segment.jsx';

class Home extends Component {
    render() {
        const points = {};
        points['carta']= [
            'Built Cap Table Access page, increasing requests by over 50%',
            'Built Investor Relations page, allowing companies to control information rights of their investors',
            'Developed LP document distribution tool for funds and LLCs',
            'Created Audit Confirmation Report and user tools to generate company-tailored excel reports'
        ];
        points['roku'] = [
            'Built fully functional search engine with autosuggest',
            'Migrated over 40 web pages to international web framework',
            'Created React components for search box, data router models and autosuggest dropdown',
            'Fixed bugs and updated assets on front page and others',
            'Automated syncing version control platforms',
            'Migrated soundbridge.roku.com, photobridge.roku.com from Rackspace to AWS'
        ];
        points['sectionLead'] = [
            'Personally responsible for a group of 12 students',
            'Met weekly to help explain key programming concepts',
            'Held lab hours to help students solve their issues',
            'Tested and graded code, projects, and exams'
        ];
        points['ucla'] = [
            'Collaborated with Professor Lixia Zhang on the Named Data Networking project building future internet architecture',
            'Published scientific research poster “Web Based NDN File System Access” showcasing the benefits of NDN compared to IP addresses',
            'Created database, server, and web page to demonstrate the technology'
        ];
        points['skills'] = [  //todo
            'Python',
            'Django',
            'JavaScript',
            'React',
            'Java',
            'HTML',
            'Node',
            'Jenkins',
            'AWS',
            'CSS',
            'Shell',
            'Git',
            'Asana',
            'Atlassian'
        ];
        points['ucsd'] = [
            'B.S. Computer Science',
            'Minor in Cognitive Science',
            '3.5 GPA',
            'Earl Warren College Honors Society',
            'Provost Honors',
            'Club Water Polo, Club Swim, Sigma Chi'
        ];

        for(let key in points) {
            points[key] = points[key].map((point) =>
                <li key={point}>
                    {point}
                </li>
            );
        }

        return (
            <div className="home">
                <div className="sideways">
                    <Segment titleText="Caelean Barnes"
                             contentInfo="Engineering and Design"
                             image={<img className="photo" src={require('../assets/bw_headshot.jpg')}/>}
                             section="home"
                    />
                </div>
                <div className="triangle"></div>
                <Segment titleText="Software Engineering Intern, Investor Services"
                         contentInfo={points['carta']}
                         image={<img className="photo" src={require('../assets/carta_logo.jpg')}/>}
                         section="work"
                />
                <Segment titleText="Software Engineering Intern, Web Development"
                         contentInfo={points['roku']}
                         image={<img className="photo" src={require('../assets/roku_logo.jpg')}/>}
                />
                <Segment titleText="Computer Science Section Lead, UCSD School of Engineering"
                         contentInfo={points['sectionLead']}
                         image={<img className="photo" src={require('../assets/cse_logo.jpg')}/>}
                />
                <Segment titleText="Research Intern, UCLA Engineering Internet Research Lab"
                         contentInfo={points['ucla']}
                         image={<img className="photo" src={require('../assets/ucla_logo.jpg')}/>}

                />
                <Segment titleText="UC San Diego, Jacobs School of Engineering, 2018"
                         contentInfo={points['ucsd']}
                         section="education"
                         image={<img className="photo" src={require('../assets/ucsd_logo.jpg')}/>}

                />
            </div>
        )
    }
}
export default Home;
