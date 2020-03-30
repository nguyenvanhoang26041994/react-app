import React from 'react';
import { Select } from '../../../../components/core';

const Demo = () => {
  return (
    <Select
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    >
      <Select.Option
        key="comments"
        icon="comments"
        title="Comments"
      />
      <Select.Group key="group-action" title="Action">
        <Select.Option key="copy" icon="copy" title="Copy" />
        <Select.Option key="cog" icon="cog" title="Config" />
        <Select.Option key="heart" icon="heart" title="Love" />
      </Select.Group>
      <Select.Group key="group-other" title="Other">
        <Select.Option key="rating" icon="star" title="Rating" />
        <Select.Option key="follow" icon="bell" title="Follow" />
      </Select.Group>
    </Select>
  );
};

Demo.code = `
import React from 'react';
import { Textbox } from '@/components/core';

export default () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
