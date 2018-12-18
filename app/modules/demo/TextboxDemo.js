/* eslint-disable no-console, no-alert */
import React from 'react';
import {
  InputNative as Input,
  Button,
  Textarea,
  Grid,
  Tag,
} from '../../components/core';

class Demo extends React.Component {
  state = { value: '' };

  textRef = React.createRef();

  onChange = event => this.setState({ value: event.target.value });

  onButtonClick = () => {
    console.log(this.textRef);
  };

  render() {
    return (
      <div>
        <Grid row wrap className="p-2">
          <Tag>primary</Tag>
        </Grid>
        <Grid row wrap className="mb-2">
          <Input htmlType="color" className="mb-1" />
          <Input htmlType="password" className="ml-1 mb-1" />
          <Input htmlType="number" className="ml-1 mb-1" />
          <Input htmlType="date" className="ml-1 mb-1" />
          <Input htmlType="datetime" className="ml-1 mb-1" />
          <Input htmlType="datetime-local" className="ml-1 mb-1" />
          <Input htmlType="email" className="ml-1 mb-1" />
          <Input htmlType="search" className="ml-1 mb-1" />
          <Input htmlType="tel" className="ml-1 mb-1" />
          <Input htmlType="time" className="ml-1 mb-1" />
          <Input htmlType="url" className="ml-1 mb-1" />
          <Input htmlType="week" className="ml-1 mb-1" />
          <Input
            className="ml-1 mb-1"
            value={this.state.value}
            inputRef={this.textRef}
            onChange={this.onChange}
            placeholder="Placeholder"
          />
          <Button
            color="primary"
            className="ml-1 mb-1"
            onClick={this.onButtonClick}
          >
            Button
          </Button>
        </Grid>
        <div className="flex mb-2 items-end">
          <Textarea placeholder="Placeholder" />
        </div>
      </div>
    );
  }
}

export default Demo;
