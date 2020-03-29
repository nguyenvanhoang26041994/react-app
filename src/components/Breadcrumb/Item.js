import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Item.scss');

const Item = ({ className, active, title, href, ...otherProps }) => (
  <div
    className={cn(
      'rc-breadcrumb-item',
      { '--active': active },
      className,
    )}
    {...otherProps}
  >
    <a href={href} className="rc-breadcrumb-item-title">{title}</a>
  </div>
);

Item.displayName = 'Breadcrumb.Item';
Item.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  onClick: PropTypes.func,
};
Item.defaultProps = {};

export default Item;
