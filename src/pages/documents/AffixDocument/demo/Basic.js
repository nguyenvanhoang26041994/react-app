import React from 'react';
import Affix from '../../../../components/Affix';

const Demo = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pl-2">
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <Affix offsetTop={200}>
          <button>Affix Me</button>
        </Affix>
      </div>
    </div>
  );
};


export default Demo;
