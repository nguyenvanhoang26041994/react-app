import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const mSizes = Object.freeze({
  small: 'rc-button--small',
  large: 'rc-button--large',
});

const Button = ({ className, size, icon, children, ...otherProps }) => (
  <button
    className={cn('rc-button', mSizes[size], { 'rc-button--icon': icon }, className)}
    {...otherProps}
  >
    {React.Children.map(children, item => {
      /* wrapper children by span tags for fix bugs css */
      if (typeof item === 'string' || typeof item === 'number') {
        return <span key={item.key}>{item}</span>;
      }

      return item;
    })}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(mSizes)),
};
Button.defaultProps = {};

export default Button;
