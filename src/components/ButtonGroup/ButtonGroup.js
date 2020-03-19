import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./ButtonGroup.scss');

const ButtonGroup = ({ className, ...otherProps }) => {
  return (
    <div className={cn('rc-button-group', className)} {...otherProps} />
  );
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: PropTypes.string,
};
ButtonGroup.defaultProps = {};

export default ButtonGroup;
