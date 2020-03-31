import React from 'react';
import { Anchor } from '../../../../components/core';

const Link = ({ id, children }) => (
  <a className="px-5" id={id} style={{ height: '150px'}}>
    {children}
  </a>
);

const Demo = () => {
  return (
    <div className="flex w-full">
      <Anchor offsetBottom={10}>
        <Anchor.Link href="#_1" title="_1" />
        <Anchor.Link href="#_2" title="_2" />
        <Anchor.Link href="#_3" title="_3" />
        <Anchor.Link href="#_4" title="_4" />
        <Anchor.Link href="#_5" title="_5" />
        <Anchor.Link href="#_6" title="_6" />
        <Anchor.Link href="#_7" title="_7" />
      </Anchor>
      <div className="flex flex-col flex-1 items-end">
        <Link id="_1">#_1</Link>
        <Link id="_2">#_2</Link>
        <Link id="_3">#_3</Link>
        <Link id="_4">#_4</Link>
        <Link id="_5">#_5</Link>
        <Link id="_6">#_6</Link>
        <Link id="_7">#_7</Link>
      </div>
    </div>
  );
};

Demo.code = `

`;

export default Demo;
