import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from './Button';
import './style/Button.Link.scss';

const LinkButton = ({
  className,
  linkClass,
  href,
  target,
  children,
  ...otherProps
}) => (
  <a href={href} target={target} className={cn('rc-button-link', linkClass)}>
    <Button {...otherProps} className={className}>
      {children}
    </Button>
  </a>
);

LinkButton.displayName = 'LinkButton';
LinkButton.propTypes = {
  className: PropTypes.string,
  linkClass: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_top', '_self', '_parent']),
  children: PropTypes.node,
};

export default LinkButton;
