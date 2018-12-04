import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Button.Group.scss';

const GroupButton = ({ className, children, ...otherProps }) => (
  <div className={cn('rc-button-group', className)}>
    {React.Children.map(children, elm => {
      if (React.isValidElement(elm)) {
        return React.cloneElement(elm, {
          ...otherProps,
          ...elm.props,
        });
      }

      return elm;
    })}
  </div>
);

GroupButton.displayName = 'GroupButton';
GroupButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
GroupButton.defaultProps = {};

export default GroupButton;
