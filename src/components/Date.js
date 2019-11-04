import React, { Component } from 'react';

class Date extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: 'wah',
        }
    }

    render() {
        return(
            <span class="date">
                {this.props.date}
            </span>
        );
    }

}

export default Date;