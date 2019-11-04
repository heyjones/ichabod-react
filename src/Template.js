import React, { Component } from 'react';
import TemplateIndex from './templates/TemplateIndex.js';
import Title from './components/Title';
import Date from './components/Date';
import Excerpt from './components/Excerpt';
import Content from './components/Content';

const fs = require('fs')

class Template extends Component {

  constructor(props) {
      super(props);
      this.state = {
        query: [],
      }
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
      const path = './templates/404.js';
      try{
        if(fs.existsSync(path)){
          return <div>
            [404 exists]
          </div>
        }
      }catch(err){
        return <div>
          [404 doesn't exist]
        </div>
      }
      fs.access(path, fs.F_OK, (err) => {
        if(err){
          console.error(err);
          return;
        }
        return <div>
          [404]
        </div>
      })
    }else if(this.state.query.is_search){
      return <TemplateIndex title="Search" excerpt="This is the thing." posts={this.state.query.posts} />
    }else if(this.state.query.is_front_page){
      return <div>
        [front_page]
      </div>
    }else if(this.state.query.is_home){
      this.posts = this.state.query.posts.map((post, key) =>
        <li key={post.id}>
          <a href={post.permalink}>
            <Title title={post.title} />
          </a>
          <Date date={post.date} />
          <Excerpt excerpt={post.excerpt} />
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
        <Title title={this.state.query.post.title} />
        <Date date={this.state.query.post.date} />
        <Excerpt excerpt={this.state.query.post.excerpt} />
        <Content content={this.state.query.post.content} />
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
