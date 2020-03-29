import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./ButtonGroup.scss');

const ButtonGroup = ({ className, fluid, ...otherProps }) => {
  return (
    <div className={cn('rc-button-group', { '--fluid': fluid }, className)} {...otherProps} />
  );
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
};
ButtonGroup.defaultProps = {};

export default ButtonGroup;
