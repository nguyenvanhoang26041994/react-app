import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Switch2', 'switch-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M3 7h5l7 10h6" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
