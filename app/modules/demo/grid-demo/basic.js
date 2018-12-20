import React from 'react';
import { Grid } from '../../../components/core';
import CodeGuide from '../../CodeGuide';

export default () => (
  <div>
    <p className="mb-5">
      Gird base on flex-box and using tailwind.css utillities. So Grid do not
      have own css styling. You should to known how to make layout by flex-box
      first. Grid just provide the esasy way to pass utillities class
    </p>
    <CodeGuide code={`<Grid />`}>
      <Grid
        style={{
          backgroundColor: 'dodgerblue',
          color: 'white',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <span>.border-box.flex</span>
      </Grid>
    </CodeGuide>
    <CodeGuide code={`<Grid row />`}>
      <Grid
        row
        style={{
          backgroundColor: 'dodgerblue',
          color: 'white',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <span>.border-box.flex.flex-row</span>
      </Grid>
    </CodeGuide>
    <CodeGuide code={`<Grid col />`}>
      <Grid
        col
        style={{
          backgroundColor: 'dodgerblue',
          color: 'white',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <span>.border-box.flex.flex-col</span>
      </Grid>
    </CodeGuide>
  </div>
);
