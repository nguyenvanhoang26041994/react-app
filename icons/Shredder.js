import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Shredder', 'shredder', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="10" width="16" height="5" rx="1" />
  <path d="M17 10v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4m5 5v5m4 -5v2m-8 -2v3" />
</svg>
));
