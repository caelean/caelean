import React, { Component } from 'react';
import Title from './title.jsx';
class Home extends Component {
    render() {
        return (
            <div>
                <Title text="Caelean Barnes"/>
                <br/>
                <Title text="Projects"/>
                <br/>
                <Title text="Links"/>
            </div>
        )
    }
}
export default Home;
