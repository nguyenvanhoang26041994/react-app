import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

require('./ActionButton.scss');

const ActionButton = ({ className, icon, ...otherProps }) => {
  return (
    <Button circle className={cn('rc-action-button', className)} {...otherProps}>
      <Icon name={icon} />
    </Button>
  );
};

ActionButton.displayName = 'ActionButton';
ActionButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};
ActionButton.defaultProps = {};

export default ActionButton;
