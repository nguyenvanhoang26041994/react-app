/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash/fp';
import ReactDOM from 'react-dom';

import { canUseDOM } from '../utils';
import Portal from '../Portal';
import Alert from './Alert';

import './style/Alert.anywhere.scss';

export const placements = Object.freeze({
  center: 'rc-alert-anywhere--center',
  top: 'rc-alert-anywhere--top',
  bottom: 'rc-alert-anywhere--bottom',
  left: 'rc-alert-anywhere--left',
  right: 'rc-alert-anywhere--right',
  'top-left': 'rc-alert-anywhere--top-left',
  'left-top': 'rc-alert-anywhere--left-top',
  'top-right': 'rc-alert-anywhere--top-right',
  'right-top': 'rc-alert-anywhere--right-top',
  'bottom-left': 'rc-alert-anywhere--bottom-left',
  'left-bottom': 'rc-alert-anywhere--left-bottom',
  'bottom-right': 'rc-alert-anywhere--bottom-right',
  'right-bottom': 'rc-alert-anywhere--right-bottom',
});

export const isStack = Object.freeze({
  center: 'centerStackNode',
  top: 'topStackNode',
  bottom: 'bottomStackNode',
  left: 'leftStackNode',
  right: 'rightStackNode',
  'top-left': 'topLeftStackNode',
  'left-top': 'topLeftStackNode',
  'top-right': 'topRightStackNode',
  'right-top': 'topRightStackNode',
  'bottom-left': 'bottomLeftStackNode',
  'left-bottom': 'bottomLeftStackNode',
  'bottom-right': 'bottomRightStackNode',
  'right-bottom': 'bottomRightStackNode',
});

export class AlertAnywhere extends React.Component {
  state = {
    visible: true,
  };

  shouldComponentUpdate() {
    return true;
  }

  closeAlert = () =>
    this.setState({ visible: false }, () => this.props.onClose());

  unmountPortalCallback = () => {
    /**
     * Alert.error
     * Alert.success
     * Alert.warning
     * Alert.infor
     * renderJSNode only for kind of Alert above
     */
    if (canUseDOM && this.props.renderJSNode) {
      try {
        document.body.removeChild(this.props.renderJSNode);
      } catch (e) {
        console.warn(e); //eslint-disable-line
      }
    }
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    const { className, placement, style, renderJSNode, ...otherProps } = omit([
      'onClose',
      'topLeftStackNode',
      'topStackNode',
      'topRightStackNode',
      'rightStackNode',
      'bottomRightStackNode',
      'bottomStackNode',
      'bottomLeftStackNode',
      'leftStackNode',
      'centerStackNode',
    ])(this.props);

    const stackNode = this.props[isStack[placement]];

    return (
      <Portal node={stackNode} unmountCallback={this.unmountPortalCallback}>
        <Alert
          className={className}
          style={{ width: '300px', ...style }}
          {...otherProps}
          onClose={this.closeAlert}
        />
      </Portal>
    );
  }
}

AlertAnywhere.propTypes = {
  onClose: PropTypes.func,
  placement: PropTypes.oneOf(Object.keys(placements)),
};
AlertAnywhere.defaultProps = {
  placement: 'bottom-left',
  onClose: f => f,
};

let topLeftStackNode = null;
let topStackNode = null;
let topRightStackNode = null;
let rightStackNode = null;
let bottomRightStackNode = null;
let bottomStackNode = null;
let bottomLeftStackNode = null;
let leftStackNode = null;
let centerStackNode = null;

if (canUseDOM) {
  topLeftStackNode = document.createElement('div');
  topLeftStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--top-left';

  topStackNode = document.createElement('div');
  topStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--top';

  topRightStackNode = document.createElement('div');
  topRightStackNode.className =
    'rc-alert-anywhere rc-alert-anywhere--top-right';

  rightStackNode = document.createElement('div');
  rightStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--right';

  bottomRightStackNode = document.createElement('div');
  bottomRightStackNode.className =
    'rc-alert-anywhere rc-alert-anywhere--bottom-right';

  bottomStackNode = document.createElement('div');
  bottomStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--bottom';

  bottomLeftStackNode = document.createElement('div');
  bottomLeftStackNode.className =
    'rc-alert-anywhere rc-alert-anywhere--bottom-left';

  leftStackNode = document.createElement('div');
  leftStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--left';

  centerStackNode = document.createElement('div');
  centerStackNode.className = 'rc-alert-anywhere rc-alert-anywhere--center';

  document.body.appendChild(topLeftStackNode);
  document.body.appendChild(topStackNode);
  document.body.appendChild(topRightStackNode);
  document.body.appendChild(rightStackNode);
  document.body.appendChild(bottomRightStackNode);
  document.body.appendChild(bottomStackNode);
  document.body.appendChild(bottomLeftStackNode);
  document.body.appendChild(leftStackNode);
  document.body.appendChild(centerStackNode);
}

export default type => props => {
  if (!canUseDOM) {
    return null;
  }

  const defaultNode = document.createElement('div');
  defaultNode.className = 'flag__rc-alert-anywhere';
  document.body.appendChild(defaultNode);

  const otherProps = omit('type')(props);

  ReactDOM.render(
    <AlertAnywhere
      {...otherProps}
      type={type}
      renderJSNode={defaultNode}
      topLeftStackNode={topLeftStackNode}
      topStackNode={topStackNode}
      topRightStackNode={topRightStackNode}
      rightStackNode={rightStackNode}
      bottomRightStackNode={bottomRightStackNode}
      bottomStackNode={bottomStackNode}
      bottomLeftStackNode={bottomLeftStackNode}
      leftStackNode={leftStackNode}
      centerStackNode={centerStackNode}
    />,
    defaultNode,
  );
};
