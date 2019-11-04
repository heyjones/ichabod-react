import React, { Component, Fragment } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: null,
        }
    }

    render() {
        return(
            <Fragment>
                {this.props.content}
            </Fragment>
        );
    }

}

export default Content;