import React, { Component } from 'react';

class Title extends Component {

    render() {
        return (
            <div className="title pop">
                {this.props.text}
            </div>
        )
    }
}
export default Title;
