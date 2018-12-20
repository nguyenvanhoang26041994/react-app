import React from 'react';
import styled from 'styled-components';
import { Icon, Grid, Text } from '../../../components/core';

const icons = [
  'atom',
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
  'angry',
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

const IconBox = styled(Grid)`
  padding: 1rem;

  .rc-icon {
    cursor: pointer;
  }

  &:hover {
    color: dodgerblue;
  }
`;

export default () => (
  <Grid row wrap style={{ fontSize: '32px', backgroundColor: '#ffffff' }}>
    {icons.map(icon => (
      <IconBox col items="center" key={icon}>
        <Icon icon={icon} />
        <Text style={{ fontSize: '12px' }} className="mt-2">
          {icon}
        </Text>
      </IconBox>
    ))}
  </Grid>
);
