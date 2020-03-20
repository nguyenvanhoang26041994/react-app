import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';

require('./Dropdown.scss');

const Dropdown = ({ className, ...otherProps }) => {
  return (
    <Overlay
      className={cn('rc-dropdown', className )}
      {...otherProps}
    />
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
  className: PropTypes.string,
};
Dropdown.defaultProps = {};

export default Dropdown;
