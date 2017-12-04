import React, { Component } from 'react';
import Title from './Title.jsx';
import Content from './Content.jsx';

class Segment extends Component {

    render() {
        return (
            <div className="segment">
                <div className="column left">
                    <a id={this.props.section}/>
                    <Title text={this.props.titleText} section="home"/>
                </div>
                <div className="column right">
                    <Content info={this.props.contentInfo}/>
                    <br/>
                </div>
            </div>
        )
    }
}
export default Segment;
