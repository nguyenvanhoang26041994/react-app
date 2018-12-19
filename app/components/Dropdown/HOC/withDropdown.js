import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from '../Dropdown';

export default Com => {
  const WrappedComponent = ({ dropdownProps, ...otherProps }) => (
    <Popconfirm {...dropdownProps}>
      <Com {...otherProps} />
    </Popconfirm>
  );

  WrappedComponent.displayName = `withDropdown(${Com.displayName ||
    Com.name ||
    'Component'})`;
  WrappedComponent.propTypes = {
    dropdownProps: PropTypes.object,
  };

  return WrappedComponent;
};
