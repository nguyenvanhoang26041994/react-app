import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import Portal from '../Portal';
import { canUseDOM } from '../utils';

import './style/Overlay.scss';

let nodeRender = null;
if (canUseDOM) {
  nodeRender = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

export const defaultDuration = 100;

export const placements = Object.freeze({
  top: 'rc-overlay--top',
  right: 'rc-overlay--right',
  bottom: 'rc-overlay--bottom',
  left: 'rc-overlay--left',
  'top-left': 'rc-overlay--top-left',
  'left-top': 'rc-overlay--left-top',
  'top-right': 'rc-overlay--top-right',
  'right-top': 'rc-overlay--right-top',
  'bottom-left': 'rc-overlay--bottom-left',
  'left-bottom': 'rc-overlay--left-bottom',
  'bottom-right': 'rc-overlay--bottom-right',
  'right-bottom': 'rc-overlay--right-bottom',
});

export const getPlacementStyle = (
  placement,
  { currentTop, currentLeft, currentHeight, currentWidth },
) => {
  switch (placement) {
    case 'bottom':
      return {
        top: currentTop + currentHeight,
        left: currentLeft + currentWidth / 2,
        transform: 'translateX(-50%)',
      };
    case 'top':
      return {
        top: currentTop,
        left: currentLeft + currentWidth / 2,
        transform: 'translate(-50%, -100%)',
      };
    case 'left':
      return {
        top: currentTop + currentHeight / 2,
        left: currentLeft,
        transform: 'translate(-100%, -50%)',
      };
    case 'right':
      return {
        top: currentTop + currentHeight / 2,
        left: currentLeft + currentWidth,
        transform: 'translateY(-50%)',
      };
    case 'top-left':
      return {
        top: currentTop,
        left: currentLeft,
        transform: 'translateY(-100%)',
      };
    case 'top-right':
      return {
        top: currentTop,
        left: currentLeft + currentWidth,
        transform: 'translate(-100%, -100%)',
      };
    case 'bottom-left':
      return {
        top: currentTop + currentHeight,
        left: currentLeft,
      };
    case 'bottom-right':
      return {
        top: currentTop + currentHeight,
        left: currentLeft + currentWidth,
        transform: 'translateX(-100%)',
      };
    case 'left-top':
      return {
        top: currentTop,
        left: currentLeft,
        transform: 'translateX(-100%)',
      };
    case 'left-bottom':
      return {
        top: currentTop + currentHeight,
        left: currentLeft,
        transform: 'translate(-100%, -100%)',
      };
    case 'right-top':
      return {
        top: currentTop,
        left: currentLeft + currentWidth,
      };
    case 'right-bottom':
      return {
        top: currentTop + currentHeight,
        left: currentLeft + currentWidth,
        transform: 'translateY(-100%)',
      };
    default:
      return {};
  }
};

export default class Overlay extends React.PureComponent {
  state = {
    style: {},
    visible: this.props.visible,
  };

  overlayRenderNode = null;

  isMouseEnter = false; // flag just for hover trigger

  childrenNode = null;

  overlayRef = React.createRef();

  componentDidMount() {
    this.set();
  }

  componentDidUpdate() {
    if (this.props.trigger === 'hover' && this.overlayRef.current) {
      this.overlayRef.current.addEventListener(
        'mouseleave',
        this.delayOnMouseLeaveOnOverlay,
      );
      this.overlayRef.current.addEventListener(
        'mouseenter',
        this.onMouseEnterOnOverlay,
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.isMouseEnter = false; // resset
      this.setState({ visible: nextProps.visible });
    }
  }

  componentWillUnmount() {
    const { trigger } = this.props;

    if (trigger === 'hover') {
      this.childrenNode.removeEventListener(
        'mouseenter',
        this.onMouseEnterOnChildrenNode,
      );
      this.childrenNode.removeEventListener(
        'mouseleave',
        this.delayOnMouseLeaveOnChildrenNode,
      );

      if (this.overlayRef.current) {
        this.overlayRef.current.removeEventListener(
          'mouseleave',
          this.delayOnMouseLeaveOnOverlay,
        );
        this.overlayRef.current.removeEventListener(
          'mouseenter',
          this.onMouseEnterOnOverlay,
        );
      }
    }

    if (trigger === 'click') {
      this.childrenNode.removeEventListener('click', this.handleVisible);
    }
  }

  handleVisible = () =>
    this.setState({ visible: true }, () =>
      this.props.onChangeVisible({ target: { value: true } }),
    );

  handleUnVisible = () => {
    this.isMouseEnter = false; // reset
    this.setState({ visible: false }, () =>
      this.props.onChangeVisible({ target: { value: false } }),
    );
  };

  onMouseEnterOnChildrenNode = () => this.handleVisible();

  onMouseLeaveOnChildrenNode = () => {
    if (this.props.trigger === 'hover' && this.isMouseEnter) {
      return false;
    }

    return this.handleUnVisible();
  };

  onMouseLeaveOnOverlay = () => this.handleUnVisible();

  onMouseEnterOnOverlay = () => {
    this.isMouseEnter = true;
  };

  delayOnMouseLeaveOnOverlay = () =>
    setTimeout(this.onMouseLeaveOnOverlay, this.props.duration);

  delayOnMouseLeaveOnChildrenNode = () =>
    setTimeout(this.onMouseLeaveOnChildrenNode, this.props.duration);

  set = () => {
    const { trigger } = this.props;

    this.childrenNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    const { offsetHeight, offsetWidth } = this.childrenNode;

    let top = 0;
    let left = 0;
    let node = this.childrenNode;

    do {
      top += node.offsetTop;
      left += node.offsetLeft;

      node = node.offsetParent;
    } while (node.offsetParent);

    if (trigger === 'hover') {
      this.childrenNode.addEventListener(
        'mouseenter',
        this.onMouseEnterOnChildrenNode,
      );
      this.childrenNode.addEventListener(
        'mouseleave',
        this.delayOnMouseLeaveOnChildrenNode,
      );

      if (this.overlayRef.current) {
        this.overlayRef.current.addEventListener(
          'mouseleave',
          this.delayOnMouseLeaveOnOverlay,
        );
        this.overlayRef.current.addEventListener(
          'mouseenter',
          this.onMouseEnterOnOverlay,
        );
      }
    }

    if (trigger === 'click') {
      this.childrenNode.addEventListener('click', this.handleVisible);
    }

    this.setState({
      style: getPlacementStyle(this.props.placement, {
        currentTop: top,
        currentLeft: left,
        currentHeight: offsetHeight,
        currentWidth: offsetWidth,
      }),
    });
  };

  render() {
    if (!this.state.visible) {
      return this.props.children;
    }

    const {
      children,
      overlay,
      className,
      placement,
      ...otherProps
    } = this.props;

    return (
      <React.Fragment>
        {children}
        <Portal node={nodeRender}>
          <div className="rc-overlay-container">
            <div
              {...otherProps}
              style={this.state.style}
              className={cn('rc-overlay', placements[placement], className)}
              ref={this.overlayRef}
            >
              {overlay}
            </div>
          </div>
        </Portal>
      </React.Fragment>
    );
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, // the guy you want to stick some thing
  overlay: PropTypes.node, // the something you want to stick to the guy
  placement: PropTypes.oneOf(Object.keys(placements)),
  trigger: PropTypes.oneOf(['hover', 'click']),
  visible: PropTypes.bool,
  onChangeVisible: PropTypes.func,
  duration: PropTypes.number,
};
Overlay.defaultProps = {
  duration: defaultDuration,
  visible: false,
  trigger: 'hover',
  onChangeVisible: f => f,
};
