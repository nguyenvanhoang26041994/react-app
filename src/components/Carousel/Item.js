import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Item.scss');

const Item = ({ className, children }) => {
  const ref = useRef();

  useEffect(() => {

  }, []);
  return (
    <div className={cn('rc-carousel-item', className)} ref={ref}>
      {children}
    </div>
  );
};

Item.displayName = 'Carousel.Item';
Item.propTypes = {
  className: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
