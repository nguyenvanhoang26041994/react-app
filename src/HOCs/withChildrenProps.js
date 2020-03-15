
import React, { useCallback, useMemo } from 'react';

const withChildrenProps = (Component) => {
  class ReturnComponent extends React.Component {  
    render() {
      return (
        <Component
          childrenProps={React.Children.only(this.props.children)}
        />
      )
    }
  }

  ReturnComponent.displayName = `withChildrenProps(${Component.displayName || Component.name || 'Component'})`;

  return ReturnComponent;
};

export default withChildrenProps;