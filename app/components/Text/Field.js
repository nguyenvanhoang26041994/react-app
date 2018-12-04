import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Field.scss';

const Field = ({ required, className, ...otherProps }) => (
  <span
    className={cn('rc-field', { 'rc-field--required': required }, className)}
    {...otherProps}
  />
);

Field.displayName = 'Text.Field';
Field.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
};
Field.defaultProps = {};

export default Field;
