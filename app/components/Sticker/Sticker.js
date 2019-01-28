import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import Portal from '../Portal';
import { canUseDOM } from '../utils';
import './style/Sticker.scss';

let stickerRenderNode = null;

if (canUseDOM) {
  stickerRenderNode = document.createElement('div');
  stickerRenderNode.className = 'rc-root-sticker';
  document.body.appendChild(stickerRenderNode);
}

export const placements = Object.freeze({
  top: 'rc-sticker--top',
  right: 'rc-sticker--right',
  bottom: 'rc-sticker--bottom',
  left: 'rc-sticker--left',
  'top-left': 'rc-sticker--top-left',
  'left-top': 'rc-sticker--left-top',
  'top-right': 'rc-sticker--top-right',
  'right-top': 'rc-sticker--right-top',
  'bottom-left': 'rc-sticker--bottom-left',
  'left-bottom': 'rc-sticker--left-bottom',
  'bottom-right': 'rc-sticker--bottom-right',
  'right-bottom': 'rc-sticker--right-bottom',
});

export const hasTrigger = (trigger, triggers = []) => {
  let isHasInTriggers = false;
  for (let i = 0; i < triggers.length; i += 1) {
    if (trigger === triggers[i]) {
      isHasInTriggers = true;
      break;
    }
  }

  return isHasInTriggers;
};

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

export default class Sticker extends React.PureComponent {
  state = {
    style: {},
    visible: this.props.visible,
  };

  isMouseEnter = false; // flag just for hover trigger

  childrenNode = null;

  stickerRef = React.createRef();

  componentDidMount() {
    this.set();
  }

  componentDidUpdate() {
    if (this.props.trigger === 'hover' && this.stickerRef.current) {
      this.stickerRef.current.addEventListener(
        'mouseleave',
        this.delayOnMouseLeaveOnSticker,
      );
      this.stickerRef.current.addEventListener(
        'mouseenter',
        this.onMouseEnterOnSticker,
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

      if (this.stickerRef.current) {
        this.stickerRef.current.removeEventListener(
          'mouseleave',
          this.delayOnMouseLeaveOnSticker,
        );
        this.stickerRef.current.removeEventListener(
          'mouseenter',
          this.onMouseEnterOnSticker,
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

  onMouseLeaveOnSticker = () => this.handleUnVisible();

  onMouseEnterOnSticker = () => {
    this.isMouseEnter = true;
  };

  delayOnMouseLeaveOnSticker = () => setTimeout(this.onMouseLeaveOnSticker);

  delayOnMouseLeaveOnChildrenNode = () =>
    setTimeout(this.onMouseLeaveOnChildrenNode);

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

      if (this.stickerRef.current) {
        this.stickerRef.current.addEventListener(
          'mouseleave',
          this.delayOnMouseLeaveOnSticker,
        );
        this.stickerRef.current.addEventListener(
          'mouseenter',
          this.onMouseEnterOnSticker,
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
    if (!canUseDOM) {
      return null;
    }

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
        <Portal node={stickerRenderNode}>
          <div
            {...otherProps}
            style={this.state.style}
            className={cn('rc-sticker', placements[placement], className)}
            ref={this.stickerRef}
          >
            {overlay}
          </div>
        </Portal>
      </React.Fragment>
    );
  }
}

Sticker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, // the guy you want to stick some thing
  overlay: PropTypes.node, // the something you want to stick to the guy
  placement: PropTypes.oneOf(Object.keys(placements)),
  trigger: PropTypes.string,
  visible: PropTypes.bool,
  onChangeVisible: PropTypes.func,
};
Sticker.defaultProps = {
  visible: false,
  onChangeVisible: f => f,
};
