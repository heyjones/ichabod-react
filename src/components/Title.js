import React, { Component } from 'react';

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
        }
    }

    render() {
        return(
            <h1>
                {this.props.title}
            </h1>
        );
    }

}

export default Title;