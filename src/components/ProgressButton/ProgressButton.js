import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./ProgressButton.scss');

const ProgressButton = ({ className, icon, isLoading, ...otherProps }) => (
  <Button
    circle
    className={cn('rc-progess-button', className)}
    {...otherProps}
  >
    <Icon name={icon} />
  </Button>
);

ProgressButton.displayName = 'ProgressButton';
ProgressButton.propTypes = {
  className: PropTypes.string,
};
ProgressButton.defaultProps = {};

export default ProgressButton;
