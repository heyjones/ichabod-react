import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
        }
    }

    content(){
        return {
            __html: this.state.content
        };
    }

    render() {
        return(
           <div className="content" dangerouslySetInnerHTML={this.content()} />
        );
    }

}

export default Content;