import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';
import { omit } from '../../utils/helpers';

require('./Tooltip.scss');

const Tooltip = ({ className, children, title, ...otherProps }) => {
  const passedProps = useMemo(() => omit(otherProps, [
    'overlay',
    'className',
  ]), [otherProps]);

  return (
    <Overlay
      canOutsideClickClose
      arrow
      trigger={['hover']}
      overlay={title}
      className={cn('rc-tooltip', className)}
      gap={10}
      {...passedProps}
    >
      {children}
    </Overlay>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
Tooltip.defaultProps = {
  placement: 'top',
  gap: 15,
};

export default Tooltip;
