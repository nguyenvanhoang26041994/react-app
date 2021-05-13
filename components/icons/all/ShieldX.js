import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ShieldX = enhancerIcon('shield-x', 'ShieldX', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
));

export default ShieldX;