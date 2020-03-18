import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Carousel.scss');

const Carousel = ({ className }) => {
  return (
    <div className={cn('rc-carousel', className)}>
      <img
        src="https://i.pinimg.com/originals/38/6f/47/386f47c88a7aaa497ec6edc1c02cc9b6.jpg"
        style={{
          width: '50%',
          heigth: '50%',
        }}
      />
    </div>
  );
};

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: PropTypes.string,
};
Carousel.defaultProps = {};

export default Carousel;
