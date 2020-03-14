import React from 'react';

export default () => {

  return (
    <div className="flex mt-10">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex flex-wrap">
        <div className="mr-5 neumorphism" style={{ height: '7em', width: '7em', borderRadius: '100em' }}></div>
        <div className="mr-5 neumorphism" style={{ height: '7em', width: '12em', borderRadius: '100em' }}></div>
        <div className="neumorphism" style={{ height: '7em', width: '15em', borderRadius: '100em' }}></div>
      </div>
    </div>
  );
};
