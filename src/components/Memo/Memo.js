import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Memo extends React.Component {
  componentDidMount() {
    if (this.props.for) {
      this.memo = true;
      this.childrenNode = ReactDOM.findDOMNode(this);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if (this.props.for) {
      this.memo = true;
      this.childrenNode = this.childrenNode ||  ReactDOM.findDOMNode(this);

      this.childrenNode.style.display = null;
    } else if (this.childrenNode) {
      this.childrenNode.style.display = 'none';
    }
  }

  render() {
    if (this.props.for || this.memo) {
      return this.props.children;
    }

    return null;
  }
}

Memo.displayName = 'Memo';
Memo.propTypes = {
  for: PropTypes.bool,
};
Memo.defaultProps = {};
