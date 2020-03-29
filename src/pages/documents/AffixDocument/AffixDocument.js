import React from 'react';

import Basic from './demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <div style={{ height: '1000px' }}>
          <Basic />
        </div>
      </div>
    </div>
  );
};
