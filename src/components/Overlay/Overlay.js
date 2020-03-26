import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import getPosition from '../../utils/getPosition';

require('./Overlay.scss');

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

class Overlay extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return {
      ...renderPlacement[props.placement](state.targetPosition, state.overlayPosition, props.gap),
      applyHover: props.trigger.indexOf('hover') >= 0,
      applyClick: props.trigger.indexOf('click') >= 0,
    };
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
    this.toggleVisible = this.toggleVisible.bind(this);

    this.setPosition = this.setPosition.bind(this);
    this.setOverlayHover = this.setOverlayHover.bind(this);

    this.renderPositionOverlay = this.renderPositionOverlay.bind(this);
    this.addTriggerListener = this.addTriggerListener.bind(this);
    this.removeTriggerListener = this.removeTriggerListener.bind(this);
    this.eventOverlayClickOutside = this.eventOverlayClickOutside.bind(this);
  }

  componentDidMount() {
    const _self = this;
    this.renderPositionOverlay();

    this._eventClickHandler = () => this.toggleVisible();
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
      }), 100);
    };

    this._eventMouseEnterOverlayHandler = () => this.setOverlayHover(true);
    this._eventMouseLeaveOverlayHandler = () => {
      this.setOverlayHover(false);
      this.setVisible(false);
    };

    this._events = {
      overlayClickOutside: {
        add: () => {
          document.addEventListener('mousedown', _self.eventOverlayClickOutside);
          document.addEventListener('touchstart', _self.eventOverlayClickOutside);
        },
        remove: () => {
          document.removeEventListener('mousedown', _self.eventOverlayClickOutside);
          document.removeEventListener('touchstart', _self.eventOverlayClickOutside);
        },
      },
      targetClick: {
        add: () => {
          _self.targetNode.addEventListener('click', _self.toggleVisible);
        },
        remove: () => {
          _self.targetNode.removeEventListener('click', _self.toggleVisible);
        },
      },
      targetHover: {
        add: () => {
          _self.targetNode.addEventListener('mouseenter', _self._eventMouseEnterHandler);
          _self.targetNode.addEventListener('mouseleave', _self._eventMouseLeaveHandler);
        },
        remove: () => {
          _self.targetNode.removeEventListener('mouseenter', _self._eventMouseEnterHandler);
          _self.targetNode.removeEventListener('mouseleave', _self._eventMouseLeaveHandler);
        },
      },
      overlayHover: {
        add: () => {
          // overlay node exist when visible equal true
          _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.addEventListener('mouseenter', _self._eventMouseEnterOverlayHandler);
          _self.overlayRef && _self.overlayRef.current &&  _self.overlayRef.current.addEventListener('mouseleave', _self._eventMouseLeaveOverlayHandler);
        },
        remove: () => {
          // overlay node exist when visible equal true
          _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.removeEventListener('mouseenter', _self._eventMouseEnterOverlayHandler);
          _self.overlayRef && _self.overlayRef.current &&  _self.overlayRef.current.removeEventListener('mouseleave', _self._eventMouseLeaveOverlayHandler);
        },
      },
    };

    this.addTriggerListener();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visible !== prevState.visible) {
      this.props.onVisibleChange(this.state.visible);
    }

    if (this.state.visible && this.state.visible !== prevState.visible) {
      this.renderPositionOverlay();
      this.removeTriggerListener();
      this.addTriggerListener();
    }
  }

  componentWillUnmount() {
    this.removeTriggerListener();
  }

  eventOverlayClickOutside(event) {
    if (this.overlayRef && this.overlayRef.current) {
      if (this.targetNode.contains(event.target) || this.overlayRef.current.contains(event.target)) {
        return;
      }
      this.setVisible(false);
    }
  }

  setVisible(val) {
    this.setState({ visible: val });
  }

  toggleVisible() {
    this.setState(prev => ({ ...prev, visible: !prev.visible }));
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

  renderPositionOverlay() {
    this.targetNode = this.targetNode || ReactDOM.findDOMNode(this);
    this.targetNode && this.setPosition(getPosition(this.targetNode));
    this.overlayRef && this.overlayRef.current && this.setPositionOverlay(getPosition(this.overlayRef.current));
  }

  addTriggerListener() {
    if (this.state.applyHover) {
      this._events.targetHover.add();
      this._events.overlayHover.add();
    }

    if (this.state.applyClick) {
      this._events.targetClick.add();
    }

    if (this.props.canOutsideClickClose) {
      this._events.overlayClickOutside.add();
    }
  }

  removeTriggerListener() {
    if (this.state.applyHover) {
      this._events.targetHover.remove();
      this._events.overlayHover.remove();
    }

    if (this.state.applyClick) {
      this._events.targetClick.remove();
    }

    if (this.props.canOutsideClickClose) {
      this._events.overlayClickOutside.remove();
    }
  }

  render() {
    const { className, children, placement, arrow, overlay, ...otherProps } = this.props;
    const { visible, overlayStyle } = this.state;

    return (
      <React.Fragment>
        {children}
        {visible && (
          <Portal {...otherProps}>
            <div
              ref={this.overlayRef}
              className={cn('rc-overlay', mPlacements[placement], { '--hidden': !visible, '--arrow': arrow }, className)}
              style={overlayStyle}
            >
              {overlay}
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  placement: PropTypes.oneOf(Object.keys(mPlacements)),
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.any,
  children: PropTypes.any,
  arrow: PropTypes.bool,
  trigger: PropTypes.array,
  onVisibleChange: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
};
Overlay.defaultProps = {
  placement: 'top',
  gap: 5,
  trigger: ['click'],
  onVisibleChange: f => f,
};

export default Overlay;
