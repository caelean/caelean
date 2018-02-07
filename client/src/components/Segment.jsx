import React, { Component } from 'react';
import Title from './Title.jsx';
import Content from './Content.jsx';

class Segment extends Component {

    render() {
        return (
            <div className="segment">
                <div className="column left">
                    {this.props.image}
                </div>
                <div className="column right">
                    <Title text={this.props.titleText}/>
                    <Content info={this.props.contentInfo}/>
                    <br/>
                </div>
            </div>
        )
    }
}
export default Segment;
