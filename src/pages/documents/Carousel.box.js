import React from 'react';
import cn from 'classnames';
import { Carousel, Tooltip } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const Item = ({ children }) => {
  return (
    <div className="neumorphism mx-2 flex justify-center items-center" style={{ height: 300, width: 200, borderRadius: '1em' }}>
      {children}
    </div>
  );
};

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="CAROUSEL">
      <Carousel auto={3000} loop>
        <Item>{1}</Item>
        <Item>{2}</Item>
        <Item>{3}</Item>
        <Item>{4}</Item>
        <Item>{5}</Item>
        <Item>{6}</Item>
        <Item>{7}</Item>
        <Item>{8}</Item>
        <Item>{9}</Item>
        <Item>{10}</Item>
      </Carousel>
    </PracticeBox>
  );
};
