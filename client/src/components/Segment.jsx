import React, { Component } from 'react';
import Title from './Title.jsx';
import Content from './Content.jsx';

class Segment extends Component {

    render() {
        return (
            <div className="segment">
                <a className="column left" href={this.props.link} target="_blank">
                        {this.props.image}
                </a>
                <div className="column right">
                    <a href={this.props.link}  target="_blank">
                        <Title text={this.props.titleText}/>
                    </a>
                    <Content info={this.props.contentInfo}/>
                    <br/>
                </div>
            </div>
        )
    }
}
export default Segment;
