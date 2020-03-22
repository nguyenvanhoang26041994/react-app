import React from 'react';

const WavyBackground = ({ fill, stroke, strokeWidth, ...otherProps}) => (
  <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
    <path d="M-314,267 C105,364 400,100 812,279" fill={fill} stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" />
  </svg>
);

WavyBackground.defaultProps = {
  fill: 'none',
  stroke: 'white',
  strokeWidth: 120,
};

export default WavyBackground;
