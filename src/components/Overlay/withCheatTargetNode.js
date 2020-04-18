import React from 'react';
import ReactDOM from 'react-dom';

const withCheatTargetNode = (WrappedComponent) => {
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);

      this.targetNode = null;
      this.findDOMNode = this.findDOMNode.bind(this);
    }

    findDOMNode() {
      this.targetNode = this.targetNode || ReactDOM.findDOMNode(this).firstElementChild;
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

  ReturnComponent.displayName = `withCheatTargetNode(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ReturnComponent;
};

export default withCheatTargetNode;
