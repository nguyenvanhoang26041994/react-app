import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';

require('./Textbox.scss');

const Textbox = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <BaseInput
      {...otherProps}
      ref={ref}
      className={cn('rc-textbox', className)}
      htmlType="text"
    />
  );
});

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
};
Textbox.defaultProps = {
  htmlType: 'text',
};

export default Textbox;
