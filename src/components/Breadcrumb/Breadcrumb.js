import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

require('./Breadcrumb.scss');

const Breadcrumb = ({ className, children, ...otherProps }) => (
  <div
    className={cn(
      'rc-breadcrumb',
      className,
    )}
    {...otherProps}
  >
    {children}
  </div>
);

Breadcrumb.Item = Item;

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = {
  className: PropTypes.string,
};
Breadcrumb.defaultProps = {};

export default Breadcrumb;
