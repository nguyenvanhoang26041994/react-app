import React, { useState, useEffect } from 'react';
import { Badge } from '../../../../components/core';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex">
      <Badge count={count}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

Demo.code = `
import React, { useState, useEffect } from 'react';
import { Badge } from '../../../../components/core';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex">
      <Badge count={count}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};
`;

export default Demo;
