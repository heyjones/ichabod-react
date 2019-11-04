import React, { Component, Fragment } from 'react';
import Title from './Title.js';
import Excerpt from './Excerpt.js';

class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
        }
    }

    render() {
        return(
            <Fragment>
                <a href={this.state.post.permalink}>
                    <Title title={this.state.post.title} />
                </a>
                <Excerpt title={this.state.post.excerpt} />
            </Fragment>
        );
    }

}

export default PostListItem;