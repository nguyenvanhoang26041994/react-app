import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import Portal from '../Portal';
import { canUseDOM } from '../utils';

import './style/Dropdown.scss';

let dropdownRenderNode = null;

if (canUseDOM) {
  dropdownRenderNode = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

export const triggers = Object.freeze({
  hover: 'rc-dropdown--hover',
  click: 'rc-dropdown--click',
});
export const placements = Object.freeze({
  top: 'rc-dropdown--top',
  right: 'rc-dropdown--right',
  bottom: 'rc-dropdown--bottom',
  left: 'rc-dropdown--left',
  'top-left': 'rc-dropdown--top-left',
  'left-top': 'rc-dropdown--left-top',
  'top-right': 'rc-dropdown--top-right',
  'right-top': 'rc-dropdown--right-top',
  'bottom-left': 'rc-dropdown--bottom-left',
  'left-bottom': 'rc-dropdown--left-bottom',
  'bottom-right': 'rc-dropdown--bottom-right',
  'right-bottom': 'rc-dropdown--right-bottom',
});

export const getPlacementStyle = (placement, { offsetTop, offsetLeft }) => {
  switch (placement) {
    case 'bottom':
      return {
        top: offsetTop,
        left: offsetLeft,
      };
    default:
      return {};
  }
};

export default class Dropdown extends React.PureComponent {
  childrenDOM = null;

  state = {
    style: {},
  };

  componentDidMount() {
    this.setPosition();
  }

  setPosition = () => {
    const { offsetTop, offsetLeft } = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    this.setState({
      style: getPlacementStyle(this.props.placement, {
        offsetTop,
        offsetLeft,
      }),
    });
  };

  render() {
    if (!canUseDOM) {
      return null;
    }

    const { className, overlay, placement, trigger, children } = this.props;

    return (
      <React.Fragment>
        {children}
        <Portal node={dropdownRenderNode}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
            <div
              className={cn(
                'rc-dropdown',
                placements[placement],
                triggers[trigger],
                className,
              )}
              style={this.state.style}
            >
              {overlay}
            </div>
          </div>
        </Portal>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.node,
  placement: PropTypes.oneOf(Object.keys(placements)),
  trigger: PropTypes.array, // ['hover', 'click', 'contextMenu']
};
Dropdown.defaultProps = {
  placement: 'bottom',
};
