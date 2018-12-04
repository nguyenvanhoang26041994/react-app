import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/PureModal.scss';

const sizes = Object.freeze({
  small: 'rc-modal--small',
  large: 'rc-modal--large',
  full: 'rc-modal--full',
});
const colors = Object.freeze({
  primary: 'rc-modal--primary',
  waring: 'rc-modal--waring',
  error: 'rc-modal--error',
  success: 'rc-modal--success',
});

const PureModal = ({
  className,
  style,
  size,
  color,
  title,
  footer,
  children,
}) => (
  <div
    className={cn('rc-modal', sizes[size], colors[color], className)}
    style={style}
  >
    {title && <div className="rc-modal__title">{title}</div>}
    <div className="rc-modal__content">{children}</div>
    {footer && <div className="rc-modal__footer">{footer}</div>}
  </div>
);

PureModal.displayName = 'PureModal';
PureModal.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  children: PropTypes.node,
};
PureModal.defaultProps = {};

export default PureModal;
