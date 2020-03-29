import React, { useState, useCallback }  from 'react';
import { Progress, Button, ButtonGroup, Switch } from '../../../../components/core';

const Demo = () => {
  const [percent, setPercent] = useState(0.1);
  const [isBottom, setIsBottom] = useState(false);

  const onMinus = useCallback(() => setPercent(prev => {
    if (prev <= 0.05) {
      return 0;
    }

    return prev - 0.05;
  }), []);

  const onPlus = useCallback(() => setPercent(prev => {
    if (prev >= 0.95) {
      return 1;
    }

    return prev + 0.05;
  }), []);

  return (
    <div className="flex flex-col w-full">
      <Progress.Line bottom={isBottom} percent={percent} />
      <div className="flex items-center mt-20">
        <ButtonGroup>
          <Button icon="minus" onClick={onMinus} />
          <Button onClick={() =>setPercent(0.1)}>10%</Button>
          <Button onClick={() =>setPercent(0.5)}>50%</Button>
          <Button onClick={() =>setPercent(0.9)}>90%</Button>
          <Button icon="plus" onClick={onPlus} />
        </ButtonGroup>
        <div className="flex items-center ml-3">
          <Switch checked={isBottom} onChange={e => setIsBottom(e.target.checked)} />
          <span className="ml-3">Bottom</span>
        </div>
      </div>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback }  from 'react';
import { Progress, Button, ButtonGroup, Switch } from '@/components/core';

export default () => {
  const [percent, setPercent] = useState(0.1);
  const [isBottom, setIsBottom] = useState(false);

  const onMinus = useCallback(() => setPercent(prev => {
    if (prev <= 0.05) {
      return 0;
    }

    return prev - 0.05;
  }), []);

  const onPlus = useCallback(() => setPercent(prev => {
    if (prev >= 0.95) {
      return 1;
    }

    return prev + 0.05;
  }), []);

  return (
    <div className="flex flex-col w-full">
      <Progress.Line bottom={isBottom} percent={percent} />
      <div className="flex items-center mt-20">
        <ButtonGroup>
          <Button icon="minus" onClick={onMinus} />
          <Button onClick={() =>setPercent(0.1)}>10%</Button>
          <Button onClick={() =>setPercent(0.5)}>50%</Button>
          <Button onClick={() =>setPercent(0.9)}>90%</Button>
          <Button icon="plus" onClick={onPlus} />
        </ButtonGroup>
        <div className="flex items-center ml-3">
          <Switch checked={isBottom} onChange={e => setIsBottom(e.target.checked)} />
          <span className="ml-3">Bottom</span>
        </div>
      </div>
    </div>
  );
};
`;

export default Demo;
