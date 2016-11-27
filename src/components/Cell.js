import React, { Component, PropTypes } from 'react';
import warn from '../utils/warn';

export default class Cell extends Component {

  get options() {
    warn("Cell options used directly, should be provided by HOC");
  }

  render() {
    console.log('cell', this.options);
    const { children, ...props } = this.props;
    return (
      <div { ...props }>
        <h1>Cell</h1>
        { children }
      </div>
    )
  }

}