import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Tab.scss');

const Tab = ({ className, ...otherProps }) => {
  return (
    <div className={cn('rc-tab', className)} {...otherProps} />
  );
};

Tab.displayName = 'Tabs.Tab';
Tab.propTypes = {
  className: PropTypes.string,
};
Tab.defaultProps = {};

export default Tab;
