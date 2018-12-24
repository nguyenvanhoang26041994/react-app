import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

export default Com => {
  const WrappedComponent = ({ dropdownProps, ...otherProps }) => (
    <Dropdown {...dropdownProps}>
      <Com {...otherProps} />
    </Dropdown>
  );

  WrappedComponent.displayName = `withDropdown(${Com.displayName ||
    Com.name ||
    'Component'})`;
  WrappedComponent.propTypes = {
    dropdownProps: PropTypes.object,
  };

  return WrappedComponent;
};
