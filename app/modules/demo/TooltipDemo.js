/* eslint-disable no-console, no-alert */
import React from 'react';
import { Tooltip, Button, Grid } from '../../components/core';
import { withTooltip } from '../../components/HOC';

const ButtonEnhance = withTooltip(Button);

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
          <ButtonEnhance
            color="success"
            tooltipProps={{ title: 'Flat tooltip!' }}
          >
            withTooltip Button
          </ButtonEnhance>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="top" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              top
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="bottom" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              bottom
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="left" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              left
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="right" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              right
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="top-left" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              top-left
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="top-right" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              top-right
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip
            placement="bottom-left"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-left
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip
            placement="bottom-right"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-right
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="left-top" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              left-top
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip
            placement="left-bottom"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              left-bottom
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip placement="right-top" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              right-top
            </Button>
          </Tooltip>
        </Grid>
        <Grid className="p-8">
          <Tooltip
            placement="right-bottom"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              right-bottom
            </Button>
          </Tooltip>
        </Grid>
        <Grid style={{ height: '1000px' }} />
      </Grid>
    );
  }
}

export default Demo;
