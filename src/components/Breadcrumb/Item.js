import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Item.scss');

const Item = ({ className, active, children, ...otherProps }) => (
  <div
    className={cn(
      'rc-breadcrumb-item',
      { '--active': active },
      className,
    )}
    {...otherProps}
  >
    <div className="rc-breadcrumb-item-content">{children}</div>
  </div>
);

Item.displayName = 'Breadcrumb.Item';
Item.propTypes = {
  className: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
