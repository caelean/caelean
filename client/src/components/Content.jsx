import React, { Component } from 'react';

class Content extends Component {

    render() {
        return (
            <div className="content pop">
                {this.props.date}
                {this.props.info}
            </div>
        )
    }
}
export default Content;
