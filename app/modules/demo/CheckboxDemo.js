import React from 'react';
import { Checkbox, Radio, Switch } from '../../components/core';

class Demo extends React.Component {
  state = { checked: false };

  onChange = event => this.setState({ checked: event.target.checked });

  render() {
    return (
      <div>
        <div className="flex mb-8 items-end">
          <Checkbox className="mb-1" />
          <Radio className="mb-1 ml-1" />
          <Switch className="mb-1 ml-1" />
        </div>
        <div className="flex mb-8 items-end">
          <Checkbox defaultChecked className="mb-1" />
          <Radio defaultChecked className="mb-1 ml-1" />
          <Switch defaultChecked className="mb-1 ml-1" />
        </div>
        <div className="flex mb-8 items-end">
          <Checkbox
            className="mb-1"
            checked={this.state.checked}
            onChange={this.onChange}
          />
          <Radio
            className="mb-1 ml-1"
            checked={this.state.checked}
            onChange={this.onChange}
          />
          <Switch
            className="mb-1 ml-1"
            checked={this.state.checked}
            onChange={this.onChange}
          />
        </div>
        <div className="flex mb-8 items-end">
          <Switch size="small" className="mb-1" />
          <Switch className="mb-1 ml-2" />
          <Switch size="large" className="mb-1 ml-2" />
        </div>
      </div>
    );
  }
}

export default Demo;
