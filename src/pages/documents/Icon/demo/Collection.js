import React from 'react';
import { Icon, Tooltip } from '../../../../components/core';
import list from '../../../../components/Icon/svg';

require('./Collection.scss');

const IconBox = ({ name }) => {
  return (
    <Tooltip title={name}>
      <div className="icon-box">
        <Icon name={name} />
      </div>
    </Tooltip>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-wrap">
      {Object.keys(list).map(key => (
        <IconBox name={key} key={key} />
      ))}
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" />
      <Icon className="mr-5" name="cog" />
      <Icon className="mr-5" name="desktop" />
    </div>
  );
};
`;

export default Demo;
