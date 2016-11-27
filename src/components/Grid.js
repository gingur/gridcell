import React, { PropTypes } from 'react';
import Base from './Base';
import parseUnit from '../utils/parseUnit';

class Grid extends Base {

  get computed() {
    const {
      justify, align, direction, reverse,
      nested, gutter, bottom, wrap, spacing,
      style = {}, ...props
    } = this.props;
    const styles = {
      boxSizing: "border-box",
      display: "flex",
      marginTop: 0,
      marginBottom: 0
    };
    switch (justify) {
      case "left":
        style.justifyContent = "flex-start";
        break;
      case "center":
        style.justifyContent = "center";
        break;
      case "right":
        style.justifyContent = "flex-end";
        style.alignSelf = "flex-end";
        style.marginLeft = "auto";
        break;
      case "between":
        style.justifyContent = "space-between";
        break;
      case "around":
        style.justifyContent = "space-around";
        break;
    }
    switch (align) {
      case "top":
        style.alignItems = "flex-start";
        break;
      case "middle":
        style.alignItems = "center";
        break;
      case "bottom":
        style.alignItems = "flex-end";
        break;
    }
    style.flexWrap = wrap ? "wrap" : "nowrap";
    style.flexDirection = direction === "column" ? "column" : "row";
    if (reverse) {
      style.flexDirection += "-reverse";
    }
    if (!gutter) {
      style.marginLeft = style.marginRight = 0;
    } else if (!nested) {
      style.marginLeft = style.marginRight = 'auto';
    } else {
      const { number: margin, unit } = parseUnit(spacing);
      style.marginLeft = style.marginRight = `${margin / -2}${unit}`;
    }
    return {
      ...props,
      style: {
        ...styles,
        ...style
      }
    };
  }

}

Grid.propTypes = {
  tag: PropTypes.any,
  spacing: PropTypes.any,
  justify: PropTypes.oneOf(["left", "center", "right", "between", "around"]),
  align: PropTypes.oneOf(["top", "middle", "bottom"]),
  cells: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  direction: PropTypes.string,
  reverse: PropTypes.bool,
  nested: PropTypes.bool,
  gutter: PropTypes.bool,
  bottom: PropTypes.bool,
  equal: PropTypes.bool,
  wrap: PropTypes.bool
};

Grid.defaultProps = {
  tag: 'div',
  cells: 0,
  spacing: 'medium',
  justify: 'left',
  align: 'top',
  direction: 'row',
  gutter: true,
  bottom: true,
  wrap: true
};

export default Grid;