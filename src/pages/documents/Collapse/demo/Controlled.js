import React, { useState, useCallback } from 'react';
import { Collapse, Divider } from '../../../../components/core';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

const Demo = () => {
  const [activePanels, setActivePanels] = useState([]);
  const onPanelClick = useCallback(key => setActivePanels([key]));

  return (
    <div className="flex flex-col w-full">
      {/* First option, you and using onClick of Item props */}
      <Collapse activePanels={activePanels}>
        <Collapse.Item
          title="Collapse One"
          key="panel-1"
          onClick={() => onPanelClick('panel-1')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Two"
          key="panel-2"
          onClick={() => onPanelClick('panel-2')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Three"
          key="panel-3"
          onClick={() => onPanelClick('panel-3')}
        >
          <Description />
        </Collapse.Item>
      </Collapse>

      <Divider dashed title="OTHER WAY BUT MORE SHORT" />

       {/* Second option: onPanelClick will auto passed thougth to item from collapse */}
      <Collapse
        activePanels={activePanels}
        onPanelClick={onPanelClick}
        className="mt-10"
      >
        <Collapse.Item title="Collapse One" key="panel-1">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Two" key="panel-2">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Three" key="panel-3">
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Collapse, Divider } from '@/components/core';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

export default () => {
  const [activePanels, setActivePanels] = useState([]);
  const onPanelClick = useCallback(key => setActivePanels([key]));

  return (
    <div className="flex flex-col w-full">
      {/* First option, you and using onClick of Item props */}
      <Collapse activePanels={activePanels}>
        <Collapse.Item
          title="Collapse One"
          key="panel-1"
          onClick={() => onPanelClick('panel-1')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Two"
          key="panel-2"
          onClick={() => onPanelClick('panel-2')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Three"
          key="panel-3"
          onClick={() => onPanelClick('panel-3')}
        >
          <Description />
        </Collapse.Item>
      </Collapse>

      <Divider dashed title="OTHER WAY BUT MORE SHORT" />

       {/* Second option: onPanelClick will auto passed thougth to item from collapse */}
      <Collapse
        activePanels={activePanels}
        onPanelClick={onPanelClick}
        className="mt-10"
      >
        <Collapse.Item title="Collapse One" key="panel-1">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Two" key="panel-2">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Three" key="panel-3">
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};
`;

export default Demo;
