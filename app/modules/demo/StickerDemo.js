/* eslint-disable no-console, no-alert */
import React from 'react';
import { Sticker, Button, Grid } from '../../components/core';

class Demo extends React.Component {
  state = { value: '' };

  textRef = React.createRef();

  onChange = event => this.setState({ value: event.target.value });

  onButtonClick = () => {
    console.log(this.textRef);
  };

  render() {
    return (
      <Grid col items="center">
        <Grid className="p-8">
          <Sticker placement="top" sticker="The sticker i want follow you!">
            <Button size="large" color="primary">
              top
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker placement="bottom" sticker="The sticker i want follow you!">
            <Button size="large" color="primary">
              bottom
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker placement="left" sticker="The sticker i want follow you!">
            <Button size="large" color="primary">
              left
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker placement="right" sticker="The sticker i want follow you!">
            <Button size="large" color="primary">
              right
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="top-left"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              top-left
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="top-right"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              top-right
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="bottom-left"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-left
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="bottom-right"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-right
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="left-top"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              left-top
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="left-bottom"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              left-bottom
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="right-top"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              right-top
            </Button>
          </Sticker>
        </Grid>
        <Grid className="p-8">
          <Sticker
            placement="right-bottom"
            sticker="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              right-bottom
            </Button>
          </Sticker>
        </Grid>
        <Grid style={{ height: '1000px' }} />
      </Grid>
    );
  }
}

export default Demo;
