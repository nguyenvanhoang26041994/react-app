import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { root } from './portalNode';

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node,
    );
  }
}

Portal.displayName = 'Portal';
Portal.propTypes = {
  children: PropTypes.any,
  node: PropTypes.any,
};
Portal.defaultProps = {
  node: root,
};

export default Portal;
