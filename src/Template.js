import React, { Component } from 'react';

class Template extends Component {

  state = {
    query: []
  }

  componentDidMount() {
    fetch('http://wordpress.local/' + window.location.pathname + window.location.search)
    .then(res => res.json())
    .then((data) => {
      this.setState({ query: data })
    })
    .catch(console.log);
  }

  render() {
    if (this.state.query === undefined || this.state.query.length === 0) {
      return null;
    }
    if(this.state.query.is_embed){
      return <div>
        [embed]
      </div>
    }else if(this.state.query.is_404){
      return <div>
        [404]
      </div>
    }else if(this.state.query.is_search){
      return <div>
        [search]
      </div>
    }else if(this.state.query.is_front_page){
      return <div>
        [front_page]
      </div>
    }else if(this.state.query.is_home){
      this.posts = this.state.query.posts.map((post, key) =>
        <li key={post.ID}>
          <a href={post.permalink}>
            {post.post_title}
          </a>
        </li>
      );
      return <div>
        <h1>
          [site title]
        </h1>
        <ul>
          {this.posts}
        </ul>
      </div>
    }else if(this.state.query.is_privacy_policy){
      return <div>
        [privacy_policy]
      </div>
    }else if(this.state.query.is_post_type_archive){
      return <div>
        [post_type_archive]
      </div>
    }else if(this.state.query.is_tax){
      return <div>
        [tax]
      </div>
    }else if(this.state.query.is_attachment){
      return <div>
        [attachment]
      </div>
    }else if(this.state.query.is_single){
      return <div>
        <h1>
          {this.state.query.post.post_title}
        </h1>
        <p>
          {this.state.query.post.post_content}
        </p>
      </div>
    }else if(this.state.query.is_page){
      return <div>
        [page]
      </div>
    }else if(this.state.query.is_singular){
      return <div>
        [singular]
      </div>
    }else if(this.state.query.is_category){
      return <div>
        [category]
      </div>
    }else if(this.state.query.is_tag){
      return <div>
        [tag]
      </div>
    }else if(this.state.query.is_author){
      return <div>
        [author]
      </div>
    }else if(this.state.query.is_date){
      return <div>
        [date]
      </div>
    }else if(this.state.query.is_archive){
      return <div>
        [archive]
      </div>
    }else{
      return <div>
        [index]
      </div>
    }
  }

}

export default Template;
