import React, { Component, PropTypes } from 'react';
import warn from '../utils/warn';

export default class Grid extends Component {

  get options() {
    warn("Grid options used directly, should be provided by HOC");
  }

  render() {
    console.log('grid', this.options);
    const { children, ...props } = this.props;
    return (
      <div { ...props }>
        <h1>Grid</h1>
        { children }
      </div>
    )
  }

}