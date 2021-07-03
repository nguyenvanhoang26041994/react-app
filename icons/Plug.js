import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Plug', 'plug', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />
  <line x1="9" y1="3" x2="9" y2="7" />
  <line x1="15" y1="3" x2="15" y2="7" />
  <path d="M12 16v2a2 2 0 0 0 2 2h3" />
</svg>
));
