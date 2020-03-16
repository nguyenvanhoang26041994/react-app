import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

require('./Portal.scss');

const rootPortal = document.createElement('div');
rootPortal.id = 'root-portal';
document.body.appendChild(rootPortal);

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
  node: rootPortal,
};

export default Portal;
