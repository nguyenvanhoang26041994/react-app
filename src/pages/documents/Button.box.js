import React from 'react';
import cn from 'classnames';
import { Button, Icon } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="BUTTON">
      <Button className="mr-2">Basic</Button>
      <Button className="mr-2" rounded>Rounded</Button>
      <Button disabled className="mr-2">Disabled</Button>
      <Button className="mr-2" circle>
        <Icon name="comments" />
      </Button>
      <Button className="mr-2" transparent circle>
        <Icon name="power-off" />
      </Button>
    </PracticeBox>
  );
};
