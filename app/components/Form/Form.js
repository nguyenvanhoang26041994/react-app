import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Form.scss';

const Form = ({ className, horizontal, vertical, inline, ...otherProps }) => (
  <form
    className={cn(
      'rc-form',
      {
        'rc-form--horizontal': horizontal,
        'rc-form--vertical': vertical,
        'rc-form--inline': inline,
      },
      className,
    )}
    {...otherProps}
  />
);

Form.displayName = 'Form';
Form.propTypes = {
  className: PropTypes.string,
};
Form.defaultProps = {};

export default Form;
