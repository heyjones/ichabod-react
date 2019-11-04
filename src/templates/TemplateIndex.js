import React, { Component, Fragment } from 'react';
import Title from '../components/Title.js';
import Excerpt from '../components/Excerpt.js';
import PostList from '../components/PostList.js';

class TemplateIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            excerpt: props.excerpt,
            posts: props.posts,
        }
    }

    render() {
        return(
            <Fragment>
                <Title title={this.state.title} />
                <Excerpt excerpt={this.state.excerpt} />
                <PostList posts={this.state.posts} />
            </Fragment>
        );
    }

}

export default TemplateIndex;