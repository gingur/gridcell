import React, { Component, PropTypes } from 'react';
import omit from '../utils/omit';
import warn from '../utils/warn';

class Base extends Component {

  get options() {
    warn(`${this.constructor.name}::options used directly, should be provided by HOC`);
    return {};
  }

  get computed() {
    warn(`${this.constructor.name}::computed used directly, should be provided by subclass`);
    return this.props;
  }

  get omitted() {
    return omit(this.transform(this.computed), Object.keys(omit(this.constructor.propTypes || {}, Object.keys(Base.propTypes))));
  }

  transform(props = this.props) {
    if (typeof this.options.transform === 'function') {
      return this.options.transform(props);
    }
    return props;
  }

  render() {
    const { tag, ...props } = this.omitted;
    console.log('props', props);
    return React.createElement(tag, props);
  }

}

Base.propTypes = {
  tag: PropTypes.any
};

Base.defaultProps = {
  tag: 'div'
};

export default Base;