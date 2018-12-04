import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default Component => {
  class EnhancedComponent extends React.Component {
    targetNode = null;

    // For perfomance case
    isHasClickOutside = () => 'onClickOutside' in this.props;

    componentDidMount() {
      if (!this.isHasClickOutside()) {
        return false;
      }
      this.targetNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      return document.addEventListener('click', this.handleClickOutside, false);
    }

    componentDidUpdate() {
      if (!this.isHasClickOutside()) {
        return false;
      }
      this.targetNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      return true;
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = e => {
      if (!this.isHasClickOutside()) {
        return false;
      }
      if (this.targetNode && this.targetNode.contains(e.target)) {
        // The click inside, continue to whatever you are doing
        return false;
      }
      return this.props.onClickOutside(e);
    };

    render() {
      const { onClickOutside, ...props } = this.props; // elsint-disable-line
      return <Component {...props} />;
    }
  }

  EnhancedComponent.displayName = `clickOutside(${Component.displayName ||
    Component.name ||
    'Compponent'})`;
  EnhancedComponent.propTypes = {
    onClickOutside: PropTypes.func,
  };

  EnhancedComponent.defaultProps = {};

  return EnhancedComponent;
};
