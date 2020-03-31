import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Textbox from './Textbox';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import Select from './Select';
import Password from './Password';

import useFlexibleRef from '../../hooks/useFlexibleRef';

const Form = React.forwardRef(({ className, children }, ref) => {
  const _ref = useFlexibleRef(ref);

  return (
    <form ref={_ref} className={cn('rc-form', className)}>
      {children}
    </form>
  );
});

Form.Textbox = Textbox;
Form.Textarea = Textarea;
Form.InputNumber = InputNumber;
Form.Select = Select;
Form.Password = Password;

Form.displayName = 'Form';
Form.propTypes = {};
Form.defaultProps = {};

export default Form;
