import React from 'react';
import { Timeline, Icon } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TIMELINE">
      <Timeline>
        <Timeline.Timestone>Day 1, I'm create some components</Timeline.Timestone>
        <Timeline.Timestone>Day 2, I'm relise neumorphism us awsome</Timeline.Timestone>
        <Timeline.Timestone>Day 3, I'm create some neumorphism components</Timeline.Timestone>
        <Timeline.Timestone>Day 4, I' Reset rc-components</Timeline.Timestone>
        <Timeline.Timestone>Day 5, I' code so many components with neumorphism style</Timeline.Timestone>
      </Timeline>
    </PracticeBox>
  );
};
