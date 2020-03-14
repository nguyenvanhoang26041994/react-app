import React from 'react';

import RegisterDesign from './RegisterDesign';

const SystemDesign = () => {
  return (
    <div id="system-design" className="flex">
      <div className="w-1/3"></div>
      <div className="w-1/3">
        <RegisterDesign />
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default SystemDesign;
