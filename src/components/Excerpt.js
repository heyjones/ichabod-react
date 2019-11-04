import React, { Component } from 'react';

class Excerpt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            excerpt: null,
        }
    }

    render() {
        return(
            <p className="excerpt">
                {this.props.excerpt}
            </p>
        );
    }

}

export default Excerpt;