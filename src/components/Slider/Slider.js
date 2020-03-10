import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Slider.scss');

const Slider = ({ className, ...otherProps }) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      className={cn('rc-slider', className)}
      {...otherProps}
    >
      <div className="rc-slider-rail" />
      <div className="rc-slider-track" />
      <div className="rc-slider-handle" />
      <input type="hidden" />
    </div>
  );
}

Slider.displayName = 'Slider';
Slider.propTypes = {
  className: PropTypes.string,
};
Slider.defaultProps = {};

export default Slider;
