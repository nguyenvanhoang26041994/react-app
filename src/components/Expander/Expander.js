import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Expander = ({ className }) => {
  return (
    <div className={cn('rc-expander', className)}>
    </div>
  )
};

Expander.displayName = 'Expander';
Expander.propTypes = {};
Expander.defaultProps = {};

export default Expander;
