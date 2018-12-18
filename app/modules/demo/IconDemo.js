import React from 'react';
import fp from 'lodash/fp';
import { Icon } from '../../components/core';

const icons = [
  'flag',
  'address-book',
  'angle-down',
  'angle-up',
  'angle-left',
  'angle-right',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'android',
  'angry',
  'apple',
  'arrow-down',
  'arrow-up',
  'arrow-left',
  'arrow-right',
  'backward',
  'ban',
  'barcode',
  'bars',
  'bell',
  'bell-slash',
];

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="flex">
          {fp.map(icon => <Icon key={icon} className="m-1" icon={icon} />)(
            icons,
          )}
        </div>
      </div>
    );
  }
}

export default Demo;
