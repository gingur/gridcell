import React, { Children, PropTypes } from 'react';
import Base from './Base';
import Grid from './Grid';
import parseUnit from '../utils/parseUnit';

class Cell extends Base {

  get computed() {
    const {
      size, xs, sm, md, lg, align, push, pull,
      // TODO: Connect props
      equal, gutter, spacing, direction,
      xsCells, smCells, mdCells, lgCells,

      children, style = {}, ...props
    } = this.props;
    const xsSize = xs || size;
    const smSize = sm || size || xsSize;
    const mdSize = md || size || smSize;
    const lgSize = lg || size || mdSize;
    const styles = {
      flexGrow: "1",
      flexShrink: "1",
      flexBasis: "0%",
      boxSizing: "border-box",
      paddingTop: 0
    };
    switch (align) {
      case "top":
        style.alignSelf = "flex-start";
        break;
      case "center":
        style.alignSelf = "center";
        break;
      case "bottom":
        style.alignSelf = "flex-end";
        break;
    }
    if (equal) {
      style.display = "flex";
    }
    if (gutter === false) {
      style.padding = 0;
    } else {
      const { number: padding, unit } = parseUnit(spacing);
      style.paddingBottom = `${padding}${unit}`;
      style.paddingLeft = style.paddingRight = `${padding / 2}${unit}`;
    }
    if (direction === "column") {
      style.flexBasis = "auto";
    }
    let percent = 0;
    if (xsSize) {
      percent = xsSize / (xsCells || 12);
    } else if (xsCells) {
      percent = 1 / xsCells;
    }
    if (percent > 0) {
      style.flexBasis = style.maxWidth = `${Math.min(percent, 1) * 100}%`;
    }
    if (push) {
      style.marginLeft = `${Math.min(push / (xsCells || 12), 1) * 100}%`;
    }
    if (pull) {
      style.marginRight = `${Math.min(pull / (xsCells || 12), 1) * 100}%`;
    }
    let content = children;
    if (children) {
      let isNested = false;
      content = Children.map(children, child => {
        const childProps = {};
        const { type, props = {} } = child || {};
        if (equal) {
          childProps.style = { ...props.style, flex: 1 };
        }
        if (type && type.prototype instanceof Grid) {
          isNested = true;
          childProps.nested = true;
        }
        return Object.keys(childProps).length
          ? React.cloneElement(child, childProps)
          : child;
      });
      if (isNested) {
        style.paddingBottom = 0;
      }
    }
    return {
      ...props,
      children: content,
      style: {
        ...styles,
        ...style
      }
    };
  }

}
export default Cell;