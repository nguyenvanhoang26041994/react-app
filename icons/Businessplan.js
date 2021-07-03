import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Businessplan', 'businessplan', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <ellipse cx="16" cy="6" rx="5" ry="3" />
  <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M5 15v1m0 -8v1" />
</svg>
));
