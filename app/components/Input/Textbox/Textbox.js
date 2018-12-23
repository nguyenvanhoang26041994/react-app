import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const colors = Object.freeze({
  primary: 'rc-textbox--primary',
  success: 'rc-textbox--success',
  warning: 'rc-textbox--warning',
  error: 'rc-textbox--error',
});

export const sizes = Object.freeze({
  primary: 'rc-textbox--primary',
  success: 'rc-textbox--success',
  warning: 'rc-textbox--warning',
  error: 'rc-textbox--error',
});

export default class Textbox extends React.Component {
  state = {};

  render() {
    const { className, color, size, ...otherProps } = this.props;

    return (
      <div className={cn('rc-textbox', colors[color], sizes[size], className)}>
        <input {...otherProps} />
      </div>
    );
  }
}

Textbox.displayName = 'Input.Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
};
Textbox.defaultProps = {};
