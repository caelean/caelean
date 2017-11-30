import React, { Component } from 'react';

class Title extends Component {

    render() {
        return (
            <div className="title">
                <a id={this.props.section}/>
                {this.props.text}
            </div>
        )
    }
}
export default Title;
