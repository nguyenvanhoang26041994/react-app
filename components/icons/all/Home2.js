import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Home2 = enhancerIcon('home-2', 'Home2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <rect x="10" y="12" width="4" height="4" />
</svg>
));

export default Home2;