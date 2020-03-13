import React from 'react';
import ReactDOM from 'react-dom';

const rootPortal = document.createElement('div');
rootPortal.id = 'root-portal';
document.body.appendChild(rootPortal);
const defaultNode = rootPortal;

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || defaultNode,
    );
  }
}

export default Portal;
