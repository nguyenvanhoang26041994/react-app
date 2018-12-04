/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Tab = ({ className, children }) => (
  <div className={cn('rc-tabs__content', className)}>{children}</div>
);

Tab.displayName = 'Tab';
Tab.propTypes = {
  icon: PropTypes.node,
  tab: PropTypes.string.isRequired,
  title: PropTypes.string,
  refresh: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};
Tab.defaultProps = {
  refresh: false,
};

export default Tab;
