import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Sticker from '../Sticker';

import './style/Tooltip.scss';

export const placements = Object.freeze({
  top: 'rc-tooltip--top',
  bottom: 'rc-tooltip--bottom',
  left: 'rc-tooltip--left',
  right: 'rc-tooltip--right',
  'top-left': 'rc-tooltip--top-left',
  'left-top': 'rc-tooltip--left-top',
  'top-right': 'rc-tooltip--top-right',
  'right-top': 'rc-tooltip--right-top',
  'bottom-left': 'rc-tooltip--bottom-left',
  'left-bottom': 'rc-tooltip--left-bottom',
  'bottom-right': 'rc-tooltip--bottom-right',
  'right-bottom': 'rc-tooltip--right-bottom',
});

const Tooltip = ({ className, children, title, placement }) => (
  <Sticker
    placement={placement}
    overlay={
      <div className={cn('rc-tooltip', placements[placement], className)}>
        {title}
      </div>
    }
    trigger="hover"
  >
    {children}
  </Sticker>
);

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};
Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
