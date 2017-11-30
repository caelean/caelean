import React, { Component } from 'react';

class Content extends Component {

    render() {
        return (
            <div className="content">
                <ul>
                    {this.props.points}
                </ul>
            </div>
        )
    }
}
export default Content;
