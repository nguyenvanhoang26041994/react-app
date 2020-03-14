import React, { useCallback, useState, useRef, useEffect, useMemo, createRef } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';

import getPosition from '../../utils/getPosition';

require('./Tooltip.scss');

const renderPlacement = {
  top: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  'top-right': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  'right-top': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY,
    },
  }),
  'right-bottom': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
    },
  }),
  'bottom-right': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  bottom: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  'bottom-left': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  'left-bottom': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
    },
  }),
  left: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
  'left-top': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY,
    },
  }),
  'top-left': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  right: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
};

const mPlacements = Object.freeze({
  'top': 'rc-tooltip--top',
  'top-right': 'rc-tooltip--top-right',
  'right-top': 'rc-tooltip--right-top',
  'right-bottom': 'rc-tooltip--right-bottom',
  'bottom-right': 'rc-tooltip--bottom-right',
  'bottom': 'rc-tooltip--bottom',
  'bottom-left': 'rc-tooltip--bottom-left',
  'left-bottom': 'rc-tooltip--left-bottom',
  'left': 'rc-tooltip--left',
  'left-top': 'rc-tooltip--left-top',
  'top-left': 'rc-tooltip--top-left',
  'right': 'rc-tooltip--right',
});

class Tooltip extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return renderPlacement[props.placement](state.targetPosition, state.overlayPosition, props.gap);
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.defaultVisible,
      targetPosition: {
        pageX: 0,
        pageY: 0,
        clientHeight: 0,
        clientWidth: 0,
      },
      overlayPosition: {
        pageX: 0,
        pageY: 0,
        clientHeight: 0,
        clientWidth: 0,
      },
    };
    this.ref = createRef();
    this.setVisible = this.setVisible.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.renderPositionTooltip = this.renderPositionTooltip.bind(this);
  }

  componentDidMount() {
    this.renderPositionTooltip();
  
    this._eventMouseEnterHandler = () => this.setVisible(true);
    this._eventMouseLeaveHandler = () => this.setVisible(false);
  
    this.targetNode.addEventListener('mouseenter', this._eventMouseEnterHandler);
    this.targetNode.addEventListener('mouseleave', this._eventMouseLeaveHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visible && this.state.visible !== prevState.visible) {
      this.renderPositionTooltip();
    }
  }

  componentWillUnmount() {
    this.targetNode.removeEventListener('mouseenter', this._eventMouseEnterHandler);
    this.targetNode.removeEventListener('mouseleave', this._eventMouseLeaveHandler);
  }

  setVisible(val) {
    this.setState({ visible: val });
  }

  setPosition(position) {
    this.setState({ targetPosition: position });
  }

  setPositionOverlay(position) {
    this.setState({ overlayPosition: position });
  }

  renderPositionTooltip() {
    this.targetNode = this.targetNode || ReactDOM.findDOMNode(this);
    this.targetNode && this.setPosition(getPosition(this.targetNode));
    this.ref.current && this.setPositionOverlay(getPosition(this.ref.current));
  }

  render() {
    const { className, children, label, placement, ...otherProps } = this.props;
    const { visible, targetPosition, overlayPosition, overlayStyle } = this.state;

    return (
      <React.Fragment>
        {children}
        {visible && (
          <Portal {...otherProps}>
            <div
              ref={this.ref}
              className={cn('rc-tooltip', mPlacements[placement], { 'rc-tooltip--close-animation': !visible })}
              style={overlayStyle}
            >
              {label}
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}
Tooltip.defaultProps = {
  placement: 'top',
  gap: 15,
  defaultVisible: false,
};

export default Tooltip;
