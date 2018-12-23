/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.OptGroup.scss';

const OptGroup = ({ className, label, render, children, ...otherProps }) => (
  <li className={cn('rc-select__group rc-select-group', className)}>
    <div className="rc-select-group__label">{render(label)}</div>
    <ul className="rc-select-group__options">
      {React.Children.map(children, elm => {
        if (!React.isValidElement(elm)) {
          return null;
        }
        return React.cloneElement(elm, otherProps);
      })}
    </ul>
  </li>
);

OptGroup.displayName = 'Select.OptGroup';
OptGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.any,
  render: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
OptGroup.defaultProps = {
  render: label => label,
  onClick: f => f,
};

export default OptGroup;
