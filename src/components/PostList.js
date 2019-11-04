import React, { Component, Fragment } from 'react';
import PostListItem from './PostListItem.js';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
        }
    }

    render() {
        this.posts = this.state.posts.map((post, key) =>
            <PostListItem post={post} />
        );
        return(
            <Fragment>
                {this.posts}
            </Fragment>
        );
    }

}

export default PostList;