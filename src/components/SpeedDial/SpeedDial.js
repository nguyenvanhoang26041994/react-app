import React, { useState, useMemo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import SpeedDialContext from './SpeedDialContext';
import SpeedDialButton from './Button';
import Overlay from '../Overlay';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mDirections = Object.freeze({
  vertical: '--vertical',
  horizontal: '--horizontal',
});

const lDirections = Object.keys(mDirections);

const SpeedDial = ({ className, overlayClass, children, trigger, overlay, ...otherProps }) => {
  const [visible, setVisible] = useState(false);
  const onVisibleChange = useCallback(_visible => setVisible(_visible), []);

  const onClose = useCallback(() => setVisible(false), []);
  const speedDialContext = useMemo(() => ({
    onClose: onClose,
  }), [onClose]);

  const direction = useSemanticProp('direction', otherProps, lDirections);
  const passedProps = useMemo(() => omit(otherProps, [
    'direction',
    ...lDirections,
  ]), [otherProps]);

  return (
    <Overlay
      visible={visible}
      onVisibleChange={onVisibleChange}
      canOutsideClickClose
      trigger={trigger}
      className={className}
      overlay={
        <SpeedDialContext.Provider value={speedDialContext}>
          <div className='rc-speed-dial-buttons'>
            {overlay}
          </div>
        </SpeedDialContext.Provider>
      }
      overlayClass={cn('rc-speed-dial', mDirections[direction], overlayClass)}
      {...passedProps}
    >
      {children}
    </Overlay>
  );
};

SpeedDial.Button = SpeedDialButton;

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = {
  className: PropTypes.string,
  overlayClass: PropTypes.string,
  trigger: PropTypes.array,
  overlay: PropTypes.any,
  children: PropTypes.any,
  direction: PropTypes.string,
};
SpeedDial.defaultProps = {
  trigger: ['hover'],
  direction: 'vertical',
};

export default SpeedDial;
