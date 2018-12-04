import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

export default Com => {
  const WrappedComponent = ({ tooltipProps, ...otherProps }) => (
    <Tooltip {...tooltipProps}>
      <Com {...otherProps} />
    </Tooltip>
  );

  WrappedComponent.displayName = `withTooltip(${Com.displayName ||
    Com.name ||
    'Component'})`;
  WrappedComponent.propTypes = {
    tooltipProps: PropTypes.object,
  };

  return WrappedComponent;
};
