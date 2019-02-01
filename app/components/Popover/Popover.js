import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';

import './style/Popover.scss';

export const placements = Object.freeze({
  top: 'rc-popover--top',
  bottom: 'rc-popover--bottom',
  left: 'rc-popover--left',
  right: 'rc-popover--right',
  'top-left': 'rc-popover--top-left',
  'left-top': 'rc-popover--left-top',
  'top-right': 'rc-popover--top-right',
  'right-top': 'rc-popover--right-top',
  'bottom-left': 'rc-popover--bottom-left',
  'left-bottom': 'rc-popover--left-bottom',
  'bottom-right': 'rc-popover--bottom-right',
  'right-bottom': 'rc-popover--right-bottom',
});

const Popover = ({ className, content, children, placement, trigger }) => (
  <Overlay
    placement={placement}
    overlay={
      <div className={cn('rc-popover', placements[placement], className)}>
        {content}
      </div>
    }
    trigger={trigger}
  >
    {children}
  </Overlay>
);

Popover.displayName = 'Popover';
Popover.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node,
  trigger: PropTypes.oneOf(['hover', 'click']),
};
Popover.defaultProps = {
  placement: 'top',
  trigger: 'hover',
};

export default Popover;
