import React, { createRef } from 'react';
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
  'top': '--top',
  'top-right': '--top-right',
  'right-top': '--right-top',
  'right-bottom': '--right-bottom',
  'bottom-right': '--bottom-right',
  'bottom': '--bottom',
  'bottom-left': '--bottom-left',
  'left-bottom': '--left-bottom',
  'left': '--left',
  'left-top': '--left-top',
  'top-left': '--top-left',
  'right': '--right',
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
      isOverlayHover: false,
    };
    this.overlayRef = createRef();
    this.setVisible = this.setVisible.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setOverlayHover = this.setOverlayHover.bind(this);
    this.renderPositionTooltip = this.renderPositionTooltip.bind(this);
  }

  componentDidMount() {
    this.renderPositionTooltip();
  
    this._eventMouseEnterHandler = () => this.setVisible(true);
    this._eventMouseLeaveHandler = () => {
      const timer = setTimeout(() => this.setState(function(prevState) {
        if (prevState.isOverlayHover) {
          clearTimeout(timer);
          return {};
        }

        return {
          visible: false,
        };
      }), 300);
    };

    this._eventMouseEnterOverlayHandler = () => this.setOverlayHover(true);
    this._eventMouseLeaveOverlayHandler = () => {
      this.setOverlayHover(false);
      this.setVisible(false);
    };
  
    // children node alway exist
    this.targetNode.addEventListener('mouseenter', this._eventMouseEnterHandler);
    this.targetNode.addEventListener('mouseleave', this._eventMouseLeaveHandler);

    // overlay node exist when visible equal true
    this.overlayRef && this.overlayRef.current && this.overlayRef.current.addEventListener('mouseenter', this._eventMouseEnterOverlayHandler);
    this.overlayRef && this.overlayRef.current &&  this.overlayRef.current.addEventListener('mouseleave', this._eventMouseLeaveOverlayHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visible && this.state.visible !== prevState.visible) {
      // overlay node exist when visible equal true
      this.overlayRef && this.overlayRef.current && this.overlayRef.current.addEventListener('mouseenter', this._eventMouseEnterOverlayHandler);
      this.overlayRef && this.overlayRef.current &&  this.overlayRef.current.addEventListener('mouseleave', this._eventMouseLeaveOverlayHandler);
      this.renderPositionTooltip();
    }
  }

  componentWillUnmount() {
    this.targetNode.removeEventListener('mouseenter', this._eventMouseEnterHandler);
    this.targetNode.removeEventListener('mouseleave', this._eventMouseLeaveHandler);

    this.overlayRef && this.overlayRef.current &&  this.overlayRef.current.removeEventListener('mouseenter', this._eventMouseEnterOverlayHandler);
    this.overlayRef && this.overlayRef.current &&  this.overlayRef.current.removeEventListener('mouseleave', this._eventMouseLeaveOverlayHandler);
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

  setOverlayHover(val) {
    this.setState({ isOverlayHover: val });
  }

  renderPositionTooltip() {
    this.targetNode = this.targetNode || ReactDOM.findDOMNode(this);
    this.targetNode && this.setPosition(getPosition(this.targetNode));
    this.overlayRef && this.overlayRef.current && this.setPositionOverlay(getPosition(this.overlayRef.current));
  }

  render() {
    const { className, children, label, placement, ...otherProps } = this.props;
    const { visible, overlayStyle } = this.state;

    return (
      <React.Fragment>
        {children}
        {visible && (
          <Portal {...otherProps}>
            <div
              ref={this.overlayRef}
              className={cn('rc-tooltip', mPlacements[placement], { '--hidden': !visible })}
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

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  placement: PropTypes.oneOf(Object.keys(mPlacements)),
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.any,
};
Tooltip.defaultProps = {
  placement: 'top',
  gap: 15,
};

export default Tooltip;
