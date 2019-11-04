import React, { Component } from 'react';

class Navigation extends Component {

    state = {
        navigation: []
    }

    componentDidMount(){
        fetch('http://wordpress.local/wp-json/ichabod/navigation')
        .then(res => res.json())
        .then((data) => {
            this.setState({nav: data});
        })
        .catch(console.log);
    }

    render(){
        if (this.state.query === undefined || this.state.query.length === 0) {
          return null;
        }
        this.items = this.state.nav.map((item, key) =>
            <li>
            <a href={item.permalink}>
                {item.title}
            </a>
            </li>
        );
        return <ul>
            {this.items}
        </ul>
    }

}

export default Navigation;