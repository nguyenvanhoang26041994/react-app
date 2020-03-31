import React, { useCallback } from 'react';
import { Form, Select } from '../../../../components/core';

const Demo = () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        required
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        required
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
      <Form.Select
        required
        label="Sex"
        placeholder="Your gender"
        name="password"
        onChange={onChange}
      >
        <Select.Option
          key="male"
          title="Male"
          icon="comments"
        />
        <Select.Option
          key="female"
          title="Female"
          icon="power-off"
        />
        <Select.Option
          key="other"
          title="Other"
          icon="copy"
        />
      </Form.Select>
      <Form.InputNumber
        required
        label="Age"
        placeholder="Your age"
        name="age"
        onChange={onChange}
      />
      <Form.Textarea
        required
        label="Comment"
        placeholder="Comment here"
        name="comments"
        onChange={onChange}
      />
    </Form>
  );
};

Demo.code = `
import React, { useCallback } from 'react';
import { Form, Select } from '@/components/core';

export default () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        required
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        required
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
      <Form.Select
        required
        label="Sex"
        placeholder="Your gender"
        name="password"
        onChange={onChange}
      >
        <Select.Option
          key="male"
          title="Male"
          icon="comments"
        />
        <Select.Option
          key="female"
          title="Female"
          icon="power-off"
        />
        <Select.Option
          key="other"
          title="Other"
          icon="copy"
        />
      </Form.Select>
      <Form.InputNumber
        required
        label="Age"
        placeholder="Your age"
        name="age"
        onChange={onChange}
      />
      <Form.Textarea
        required
        label="Comment"
        placeholder="Comment here"
        name="comments"
        onChange={onChange}
      />
    </Form>
  );
};
`;

export default Demo;
