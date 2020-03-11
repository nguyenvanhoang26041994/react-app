import React from 'react';
import ReactDOM from 'react-dom';

const defaultNode = document.body;

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || defaultNode,
    );
  }
}

export default Portal;
