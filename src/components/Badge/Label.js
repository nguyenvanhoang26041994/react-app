import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Label = ({
  className,
  color,
  label,
  ...otherProps
}) => {
  return (
    <sub
      style={{ backgroundColor: color }}
      className={cn('fbadge-ui fbadge-label', className)}
      {...otherProps}
    >
      <b>{label}</b>
    </sub>
  );
};

Label.displayName = 'Badge.Label';
Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.any.isRequired,
};

Label.defaultProps = {};

export default Label;
