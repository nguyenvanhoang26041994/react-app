import React, { useContext, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import SpeedDialContext from './SpeedDialContext';

const EnhanceButton = ({ className, onClick, ...otherProps }) => {
  const { onClose } = useContext(SpeedDialContext);

  const _onClick = useCallback(() => {
    onClose();
    onClick();
  }, []);

  return (
    <Button
      circle
      className={cn('rc-speed-dial-button', className)}
      onClick={_onClick}
      {...otherProps}
    />
  );
};

EnhanceButton.displayName = 'SpeedDial.Button';
EnhanceButton.propTypes = {

};
EnhanceButton.defaultProps = {

};

export default EnhanceButton;
