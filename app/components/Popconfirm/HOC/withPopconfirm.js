import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from '../Popconfirm';

export default Com => {
  const WrappedComponent = ({ popconfirmProps, ...otherProps }) => (
    <Popconfirm {...popconfirmProps}>
      <Com {...otherProps} />
    </Popconfirm>
  );

  WrappedComponent.displayName = `withTooltip(${Com.displayName ||
    Com.name ||
    'Component'})`;
  WrappedComponent.propTypes = {
    popconfirmProps: PropTypes.object,
  };

  return WrappedComponent;
};
