import React from 'react';
import ReactDOM from 'react-dom';

const withFindDOMNode = (WrappedComponent) => {
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);

      this.targetNode = null;
      this.findDOMNode = this.findDOMNode.bind(this);
    }

    findDOMNode() {
      this.targetNode = this.targetNode || ReactDOM.findDOMNode(this);
    }

    componentDidMount() {
      this.findDOMNode();
      this.forceUpdate();
    }

    componentDidUpdate() {
      this.findDOMNode();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          targetNode={this.targetNode}
          findDOMNode={this.findDOMNode}
        />
      );
    }
  }

  ReturnComponent.displayName = `withFindDOMNode(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ReturnComponent;
};

export default withFindDOMNode;
