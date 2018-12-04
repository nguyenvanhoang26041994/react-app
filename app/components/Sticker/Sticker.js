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
  { offsetTop, offsetLeft, offsetHeight, offsetWidth },
) => {
  switch (placement) {
    case 'bottom':
      return {
        top: offsetTop + offsetHeight,
        left: offsetLeft + offsetWidth / 2,
        transform: 'translateX(-50%)',
      };
    case 'top':
      return {
        top: offsetTop,
        left: offsetLeft + offsetWidth / 2,
        transform: 'translate(-50%, -100%)',
      };
    case 'left':
      return {
        top: offsetTop + offsetHeight / 2,
        left: offsetLeft,
        transform: 'translate(-100%, -50%)',
      };
    case 'right':
      return {
        top: offsetTop + offsetHeight / 2,
        left: offsetLeft + offsetWidth,
        transform: 'translateY(-50%)',
      };
    case 'top-left':
      return {
        top: offsetTop,
        left: offsetLeft,
        transform: 'translateY(-100%)',
      };
    case 'top-right':
      return {
        top: offsetTop,
        left: offsetLeft + offsetWidth,
        transform: 'translate(-100%, -100%)',
      };
    case 'bottom-left':
      return {
        top: offsetTop + offsetHeight,
        left: offsetLeft,
      };
    case 'bottom-right':
      return {
        top: offsetTop + offsetHeight,
        left: offsetLeft + offsetWidth,
        transform: 'translateX(-100%)',
      };
    case 'left-top':
      return {
        top: offsetTop,
        left: offsetLeft,
        transform: 'translateX(-100%)',
      };
    case 'left-bottom':
      return {
        top: offsetTop + offsetHeight,
        left: offsetLeft,
        transform: 'translate(-100%, -100%)',
      };
    case 'right-top':
      return {
        top: offsetTop,
        left: offsetLeft + offsetWidth,
      };
    case 'right-bottom':
      return {
        top: offsetTop + offsetHeight,
        left: offsetLeft + offsetWidth,
        transform: 'translateY(-100%)',
      };
    default:
      return {};
  }
};

export default class Sticker extends React.Component {
  state = {
    style: {},
    visible: this.props.visible,
  };

  childrenNode = null;

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    this.set();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  componentWillUnmount() {
    const { trigger } = this.props;

    if (trigger === 'hover') {
      this.childrenNode.removeEventListener('mouseenter', this.handleVisible);
      this.childrenNode.removeEventListener('mouseleave', this.handleUnVisible);
    }

    if (trigger === 'click') {
      this.childrenNode.removeEventListener('click', this.handleVisible);
    }
  }

  handleVisible = () =>
    this.setState({ visible: true }, () =>
      this.props.onChangeVisible({ target: { value: true } }),
    );

  handleUnVisible = () =>
    this.setState({ visible: false }, () =>
      this.props.onChangeVisible({ target: { value: false } }),
    );

  set = () => {
    const { trigger } = this.props;

    this.childrenNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    const {
      offsetTop,
      offsetLeft,
      offsetHeight,
      offsetWidth,
    } = this.childrenNode;

    if (trigger === 'hover') {
      this.childrenNode.addEventListener('mouseenter', this.handleVisible);
      this.childrenNode.addEventListener('mouseleave', this.handleUnVisible);
    }

    if (trigger === 'click') {
      this.childrenNode.addEventListener('click', this.handleVisible);
    }

    this.setState({
      style: getPlacementStyle(this.props.placement, {
        offsetTop,
        offsetLeft,
        offsetHeight,
        offsetWidth,
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

    const { children, overlay, className, placement } = this.props;
    return (
      <React.Fragment>
        {children}
        <Portal node={stickerRenderNode}>
          <div
            style={this.state.style}
            className={cn('rc-sticker', placements[placement], className)}
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
  onChangeVisible: f => f,
};
