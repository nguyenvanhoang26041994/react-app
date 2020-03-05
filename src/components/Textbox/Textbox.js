import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Textbox.scss');

const mColors = Object.freeze({
  red: 'rc-textbox--red',
  green: 'rc-textbox--green',
  orange: 'rc-textbox--orange',
  blue: 'rc-textbox--blue',
});

const mSizes = Object.freeze({
  small: 'rc-textbox--small',
  large: 'rc-textbox--large',
});

const Textbox = ({ type, placeholder, label, className, color, size, ...otherProps }) => {
  return (
    <div
      className={cn(
        'rc-textbox',
        mColors[color],
        mSizes[size],
        className,
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
      <label className="rc-textbox__label">
        {label}
      </label>
    </div>
  );
}

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(mColors)),
  size: PropTypes.oneOf(Object.keys(mSizes)),
  type: PropTypes.string,
};
Textbox.defaultProps = {
  type: 'text',
};

export default Textbox;
