/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const OptGroup = ({ className, name, render, children, onClick }) => (
  <div className={cn('rc-select__group rc-select-group', className)}>
    <div className="rc-select-group__name" onClick={onClick}>
      {render(name)}
    </div>
    <div className="rc-select-group__options">{children}</div>
  </div>
);

OptGroup.displayName = 'Select.OptGroup';
OptGroup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.node,
  render: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
OptGroup.defaultProps = {
  render: name => name,
  onClick: f => f,
};

export default OptGroup;
