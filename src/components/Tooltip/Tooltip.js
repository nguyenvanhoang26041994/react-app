import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';

require('./Tooltip.scss');

const Tooltip = ({ children, label, ...otherProps }) => {
  return (
    <Dropdown
      arrow
      trigger={['hover']}
      {...otherProps}
      overlay={label}
      className="rc-tooltip"
      gap={10}
    >
      {children}
    </Dropdown>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};
Tooltip.defaultProps = {
  placement: 'top',
  gap: 15,
};

export default Tooltip;
