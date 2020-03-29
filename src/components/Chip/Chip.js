import React, { useCallback, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Chip.scss');

const Chip = ({
    className,
    label,
    avatar,
    fontSize,
    color,
    backgroundColor,
    style,
    closable,
    onRemove,
    onClick,
    ...otherProps
  }) => {
  const closeRef = useRef();

  const _onClick = useCallback((e) => {
    if (closeRef.current && closeRef.current.contains(e.target)) {
      return;
    }
    return onClick(e);
  }, [closeRef, closable]);

  return (
    <div className={cn('rc-chip', { '--custom': backgroundColor }, className)} style={{ ...style, backgroundColor, color, fontSize }} onClick={_onClick} {...otherProps}>
      {avatar}
      <span className="rc-chip-label">{label}</span>
      {closable && <div ref={closeRef} className="rc-chip-close" onClick={onRemove}><Icon name="times" /></div>}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  closable: PropTypes.bool,
  avatar: PropTypes.any,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.object,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};
Chip.defaultProps = {
  onRemove: f => f,
  onClick: f => f,
};

export default Chip;
