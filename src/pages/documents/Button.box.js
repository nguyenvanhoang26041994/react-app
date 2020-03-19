import React from 'react';
import { Button, ButtonGroup } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="BUTTON">
      <div className="flex mb-5">
        <Button className="mr-2">Basic</Button>
        <Button className="mr-2" rounded>Rounded</Button>
        <Button disabled className="mr-2">Disabled</Button>
        <Button className="mr-2" circle icon="comments" />
          <Button className="mr-2" circle icon="comments" pressed />
        <Button className="mr-2" transparent circle icon="power-off" />
      </div>
      <div className="flex">
        <ButtonGroup className="mr-2">
          <Button>BU</Button>
          <Button>TT</Button>
          <Button>ON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="comments" />
          <Button icon="power-off" />
          <Button icon="home" />
        </ButtonGroup>
      </div>
    </PracticeBox>
  );
};
