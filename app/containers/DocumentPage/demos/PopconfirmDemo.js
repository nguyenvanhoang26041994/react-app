/* eslint-disable no-console, no-alert */
import React from 'react';
import { Popconfirm, Button, Grid } from '../../../components/core';
import { withPopconfirm } from '../../../components/HOC';

const ButtonEnhance = withPopconfirm(Button);

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
            popconfirmProps={{
              title: 'Flat Popconfirm!',
              onOK: () => console.log('onOK'),
              onCancel: () => console.log('onCancel'),
            }}
          >
            withPopconfirm Button
          </ButtonEnhance>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="top"
            title="The sticker i want follow you!"
            onOK={() => console.log('onOK')}
            onCancel={() => console.log('onCancel')}
          >
            <Button size="large" color="primary">
              top
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm placement="bottom" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              bottom
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm placement="left" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              left
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm placement="right" title="The sticker i want follow you!">
            <Button size="large" color="primary">
              right
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="top-left"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              top-left
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="top-right"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              top-right
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="bottom-left"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-left
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="bottom-right"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              bottom-right
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="left-top"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              left-top
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="left-bottom"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              left-bottom
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="right-top"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              right-top
            </Button>
          </Popconfirm>
        </Grid>
        <Grid className="p-8">
          <Popconfirm
            placement="right-bottom"
            title="The sticker i want follow you!"
          >
            <Button size="large" color="primary">
              right-bottom
            </Button>
          </Popconfirm>
        </Grid>
        <Grid style={{ height: '1000px' }} />
      </Grid>
    );
  }
}

export default Demo;
