import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import mPlacements from '../placements';
import renderPlacement from './render-placement.absolute';
import useOverlay from './useOverlay';

import withCheatTargetNode from './withCheatTargetNode';

const Overlay = ({
  className,
  overlayClass,
  children,
  arrow,
  overlay,
  targetNode,
  ...otherProps
}) => {
  const { visible, overlayStyle, overlayRef } = useOverlay(otherProps, targetNode, renderPlacement);

  return (
    <div className={cn('rc-absolute-overlay-container', className)}>
      {children}
      <div
        ref={overlayRef}
        className={cn(
          'rc-overlay rc-overlay-absolute',
          mPlacements[otherProps.placement],
          {
            '--hidden': !visible,
            '--arrow': arrow,
          },
          overlayClass
        )}
        style={overlayStyle}
      >
        {overlay}
      </div>
    </div>
  );
};

Overlay.displayName = 'Overlay.Absolute';
Overlay.propTypes = {
  placement: PropTypes.string,
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.any,
  children: PropTypes.any,
  arrow: PropTypes.bool,
  trigger: PropTypes.array,
  onVisibleChange: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
  absolute: PropTypes.bool,
};
Overlay.defaultProps = {
  placement: 'top',
  gap: 5,
  trigger: ['click'],
  onVisibleChange: f => f,
};

export default withCheatTargetNode(Overlay);
