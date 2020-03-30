import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Icon from '../Icon';

require('./Password.scss');

const Password = React.forwardRef(({ className, noEye, ...otherProps }, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = useCallback(() => {
    if (noEye) {
      return;
    }
    return setIsShowPassword(prev => !prev)
  }, [noEye]);

  return (
    <div className={cn('rc-password', className)}>
      <BaseInput
        {...otherProps}
        ref={ref}
        htmlType={isShowPassword ? 'text' : 'password'}
      />
      {!noEye && (
        <Icon
          name={isShowPassword ? 'eye-slash' : 'eye'}
          className="rc-password-eye"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
});

Password.displayName = 'Password';
Password.propTypes = {
  className: PropTypes.string,
};
Password.defaultProps = {};

export default Password;
