/**
 * https://github.com/tajo/react-portal/blob/master/src/Portal.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { canUseDOM } from '../utils';

class Portal extends React.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;

    this.props.unmountCallback();
  }

  render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');

      // flag for query
      this.defaultNode.className = 'flag__portal';
      document.body.appendChild(this.defaultNode);
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || this.defaultNode,
    );
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any,
  unmountCallback: PropTypes.func,
};
Portal.defaultProps = {
  unmountCallback: f => f,
};

export default Portal;
