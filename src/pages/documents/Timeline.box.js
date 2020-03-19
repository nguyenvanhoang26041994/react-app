import React, { useState } from 'react';
import { Timeline, Avatar, Switch } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const Comment = ({ children, name, displayTime, ...otherProps }) => (
  <div {...otherProps} className="mb-5 flex">
    <Avatar name={name} />
    <div className="neumorphism ml-2 p-3 flex-1" style={{ borderRadius: '1em' }}>
      <div className="flex flex-col  mb-2">
        <div className="text-blue-500">{name}</div>
        <div className="text-gray-600" style={{ fontSize: '0.75em' }}>{displayTime}</div>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export default ({ className }) => {
  const [isRigth, setIsRight] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  return (
    <PracticeBox wrapperClassName={className} header="TIMELINE">
      <Timeline reverse={isReverse} right={isRigth}>
        <Timeline.Timestone>
          <Comment name="Hoang Nguyen" displayTime="March 12">Day 1, I'm create some components</Comment>
        </Timeline.Timestone>
        <Timeline.Timestone>
          <Comment name="Jenifer" displayTime="March 13">Day 2, I'm relise neumorphism are awsome</Comment>
        </Timeline.Timestone>
        <Timeline.Timestone>
          <Comment name="Hoang Nguyen" displayTime="March 14">Day 3, I'm create some neumorphism components</Comment>
        </Timeline.Timestone >
        <Timeline.Timestone icon="comments">
          <Comment name="Jenifer" displayTime="March 15">Day 4, I' Reset rc-components</Comment>
        </Timeline.Timestone>
        <Timeline.Timestone icon="power-off">
          <Comment name="Hoang Nguyen" displayTime="March 16">Day 5, I' code so many components with neumorphism style</Comment>
        </Timeline.Timestone>
      </Timeline>
      <div className="flex items-center mt-5">
        <div className="flex items-center mr-3">
          <Switch defaultChecked={isRigth} onChange={e => setIsRight(e.target.checked)} />
          <label className="ml-2">RIGHT</label>
        </div>
        <div className="flex items-center">
          <Switch defaultChecked={isReverse} onChange={e => setIsReverse(e.target.checked)} />
          <label className="ml-2">REVERSE</label>
        </div>
      </div>
    </PracticeBox>
  );
};
