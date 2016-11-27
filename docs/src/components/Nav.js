import React, { Component, PropTypes } from 'react';
import * as routes from './Pages';

const { 'default': Home, ...pages } = routes;

class Nav extends Component {

  changePage() {
    this.props.onChange(...arguments);
  }

  render() {
    return (
      <div>
        <h1><a href={ `#${Home.name}` } onClick={ this.changePage.bind(this, Home.name) }>GridCell</a></h1>
        { Object.keys(pages).reduce((arr, key) => {
          arr.push(
            <a
              key={ key }
              href={ `#${key}` }
              onClick={ this.changePage.bind(this, key) }
            >
              { key }
            </a>
          );
          return arr;
        }, []) }
      </div>
    )
  }

}

export default Nav;