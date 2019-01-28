import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FormField = ({ className, ...otherProps }) => (
  <div></div>
);

FormField.displayName = 'Form.Field';
FormField.propTypes = {
  className: PropTypes.string,
};
FormField.defaultProps = {};

export default FormField;
